'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { content } from '@/data/content';

// Mismo esquema base que valida el server (app/api/rsvp/route.js).
const schema = z.object({
  nombre: z.string().min(1, 'Ingresá tu nombre'),
  email: z.string().email('Email inválido'),
  asiste: z.enum(['si', 'no'], { required_error: 'Indicá si asistís' }),
  acompanantes: z.coerce.number().int().min(0).max(20),
  restricciones: z.string().max(500).optional(),
  mensaje: z.string().max(1000).optional(),
  _gotcha: z.string().optional(), // honeypot
});

export default function RSVPForm() {
  const { heading, intro, fechaLimite } = content.rsvp;
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { asiste: 'si', acompanantes: 0, _gotcha: '' },
  });

  const onSubmit = async (values) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          asiste: values.asiste === 'si',
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const inputBase =
    'w-full border border-textoCalido/40 bg-fondo px-3 py-2 text-sm text-texto focus:border-textoCalido focus:outline-none';
  const labelBase = 'block text-xs font-semibold uppercase tracking-widest text-textoCalido mb-1';

  return (
    <section id="rsvp" className="relative bg-bloque px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <h2 className="font-script text-3xl italic text-textoCalido sm:text-4xl">{heading}</h2>
        <p className="mt-4 text-sm leading-relaxed text-textoCalido">{intro}</p>
        <p className="mt-2 text-xs uppercase tracking-widest text-textoCalido">
          Fecha límite: {fechaLimite}
        </p>

        {status === 'success' ? (
          <div className="mt-8 border border-textoCalido bg-fondo p-8 text-center">
            <p className="font-script text-2xl italic text-textoCalido">¡Gracias!</p>
            <p className="mt-2 text-sm text-texto">
              Recibimos tu confirmación. Te enviamos un email con los detalles.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-4 text-xs uppercase tracking-widest text-textoCalido underline"
            >
              Enviar otra respuesta
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
            {/* Honeypot: oculto para humanos, tentador para bots */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="_gotcha">No completar</label>
              <input id="_gotcha" type="text" tabIndex={-1} autoComplete="off" {...register('_gotcha')} />
            </div>

            <div>
              <label htmlFor="nombre" className={labelBase}>
                Nombre completo
              </label>
              <input id="nombre" type="text" className={inputBase} {...register('nombre')} />
              {errors.nombre && <p className="mt-1 text-xs text-red-700">{errors.nombre.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className={labelBase}>
                Email
              </label>
              <input id="email" type="email" className={inputBase} {...register('email')} />
              {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email.message}</p>}
            </div>

            <div>
              <span className={labelBase}>¿Asistís?</span>
              <div className="flex gap-6">
                <label htmlFor="asiste-si" className="flex items-center gap-2 text-sm text-texto">
                  <input id="asiste-si" type="radio" value="si" {...register('asiste')} />
                  Sí, ahí estaré
                </label>
                <label htmlFor="asiste-no" className="flex items-center gap-2 text-sm text-texto">
                  <input id="asiste-no" type="radio" value="no" {...register('asiste')} />
                  No podré ir
                </label>
              </div>
              {errors.asiste && <p className="mt-1 text-xs text-red-700">{errors.asiste.message}</p>}
            </div>

            <div>
              <label htmlFor="acompanantes" className={labelBase}>
                Cantidad de acompañantes
              </label>
              <input
                id="acompanantes"
                type="number"
                min={0}
                className={inputBase}
                {...register('acompanantes')}
              />
              {errors.acompanantes && (
                <p className="mt-1 text-xs text-red-700">{errors.acompanantes.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="restricciones" className={labelBase}>
                Restricciones alimentarias (opcional)
              </label>
              <input
                id="restricciones"
                type="text"
                className={inputBase}
                {...register('restricciones')}
              />
            </div>

            <div>
              <label htmlFor="mensaje" className={labelBase}>
                Mensaje (opcional)
              </label>
              <textarea id="mensaje" rows={3} className={inputBase} {...register('mensaje')} />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-700">
                Hubo un problema al enviar. Probá de nuevo en unos minutos.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-textoCalido py-3 text-xs uppercase tracking-widest text-fondo transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {status === 'loading' ? 'Enviando…' : 'Confirmar asistencia'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
