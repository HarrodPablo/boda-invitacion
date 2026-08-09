export const runtime = 'nodejs'; // Nodemailer no funciona en Edge runtime

import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { google } from 'googleapis';

const schema = z.object({
  nombre: z.string().min(1),
  telefono: z.string().min(1),
  email: z.string().email(),
  asiste: z.boolean(),
  autobus: z.boolean(),
  acompanantes: z.coerce.number().int().min(0).max(20).default(0),
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

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    // Replace \n string with actual newline for Vercel env vars
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

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

  const { nombre, telefono, email, asiste, autobus, acompanantes, restricciones, cancion, mensaje } = body;

  // 1) Persistir (upsert por email: no duplica si el mismo email confirma de nuevo)
  let rsvp;
  try {
    rsvp = await prisma.rSVP.upsert({
      where: { email },
      update: { nombre, telefono, asiste, autobus, acompanantes, restricciones, cancion, mensaje },
      create: { nombre, telefono, email, asiste, autobus, acompanantes, restricciones, cancion, mensaje },
    });
  } catch (err) {
    console.error('Error guardando RSVP:', err);
    return Response.json({ error: 'No se pudo guardar la confirmación' }, { status: 500 });
  }

  // 2) Google Sheets & Email al invitado. Si falla, NO rompemos la respuesta (la confirmación ya está guardada).
  try {
    if (process.env.GOOGLE_SPREADSHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
      const fecha = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: 'A:J', // Agrega a la primera hoja disponible
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
              restricciones || '-',
              cancion || '-',
              mensaje || '-'
            ]
          ]
        }
      });
    }

    await transporter.sendMail({
      from: `"Julieta & Julio" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: '¡Recibimos tu confirmación!',
      html: `<p>Hola ${nombre}, gracias por confirmar tu asistencia. ¡Nos vemos pronto!</p>`,
    });
  } catch (err) {
    // Se loggea aparte pero no afecta el 200: no perdemos la confirmación por un error de terceros.
    console.error('Error en servicios de terceros (Google Sheets o Email):', err);
  }

  return Response.json({ ok: true, rsvp });
}
