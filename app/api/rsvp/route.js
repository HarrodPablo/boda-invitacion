export const runtime = 'nodejs'; // Nodemailer no funciona en Edge runtime

import { prisma } from '@/lib/prisma';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const schema = z.object({
  nombre: z.string().min(1),
  telefono: z.string().min(1),
  email: z.string().email(),
  asiste: z.boolean(),
  autobus: z.boolean(),
  acompanantes: z.coerce.number().int().min(0).max(20).default(0),
  nombresAcompanantes: z.string().optional(),
  restricciones: z.string().max(500).optional(),
  cancion: z.string().max(200).optional(),
  mensaje: z.string().max(1000).optional(),
  _gotcha: z.string().optional(),
});

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Se elimina la inicialización global de auth y sheets para hacerla segura dentro del endpoint

export async function POST(request) {
  let body;
  try {
    body = schema.parse(await request.json());
  } catch (err) {
    return Response.json({ error: 'Datos inválidos' }, { status: 400 });
  }

  // Honeypot: si viene lleno es un bot. Respondemos 200 sin hacer nada para no delatarlo.
  if (body._gotcha) {
    return Response.json({ ok: true });
  }

  const { nombre, telefono, email, asiste, autobus, acompanantes, nombresAcompanantes, restricciones, cancion, mensaje } = body;

  // 1) Persistir (upsert por email: no duplica si el mismo email confirma de nuevo)
  let rsvp;
  try {
    rsvp = await prisma.rSVP.upsert({
      where: { email },
      update: { nombre, telefono, asiste, autobus, acompanantes, nombresAcompanantes, restricciones, cancion, mensaje },
      create: { nombre, telefono, email, asiste, autobus, acompanantes, nombresAcompanantes, restricciones, cancion, mensaje },
    });
  } catch (err) {
    console.error('Error guardando RSVP:', err);
    return Response.json({ error: 'No se pudo guardar la confirmación', debug: err.message }, { status: 500 });
  }

  // 2) Google Sheets & Email al invitado. Si falla, NO rompemos la respuesta (la confirmación ya está guardada).
  try {
    if (process.env.GOOGLE_SPREADSHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
      // Limpiamos la clave privada de posibles comillas accidentales y escapamos los saltos de línea
      const privateKey = process.env.GOOGLE_PRIVATE_KEY
        .replace(/\\n/g, '\n')
        .replace(/^["']|["']$/g, '');

      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
      const sheets = google.sheets({ version: 'v4', auth });

      const fecha = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: 'A:K', // Corregido para soportar los 11 datos
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [
              fecha,
              nombre,
              telefono,
              email,
              asiste ? 'Sí' : 'No',
              autobus ? 'Sí' : 'No',
              acompanantes,
              nombresAcompanantes || '-',
              restricciones || '-',
              cancion || '-',
              mensaje || '-'
            ]
          ]
        }
      });
    }
  } catch (err) {
    console.error('Error en Google Sheets:', err);
  }

  // 3) Email al invitado
  try {
    await transporter.sendMail({
      from: `"Julieta & Julio" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: '¡Recibimos tu confirmación!',
      html: `<p>Hola ${nombre}, gracias por confirmar tu asistencia. ¡Nos hace mucha ilusión que seas parte de este día ❤✨!</p>`,
    });
  } catch (err) {
    console.error('Error enviando Email:', err);
  }

  return Response.json({ ok: true, rsvp });
}
