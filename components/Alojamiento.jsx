'use client';

import { useLanguage } from '@/context/LanguageContext';

// Componente #8 — Grid de cards sobre bloque de color (hoteles).
export default function Alojamiento() {
  const { content } = useLanguage();
  const { heading, subtitulo, hoteles } = content.alojamiento;

  return (
    <section id="alojamiento" className="relative bg-bloque px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-widest text-textoCalido sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 font-script text-lg italic text-textoCalido">{subtitulo}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {hoteles.map((hotel, i) => (
            <div key={i} className="flex flex-col bg-fondo p-6 shadow-sm">
              <p className="font-script text-2xl italic text-textoCalido">{hotel.nombre}</p>
              <p className="mt-2 text-sm text-texto">{hotel.direccion}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-textoCalido">
                {hotel.distancia}
              </p>
              <p className="mt-3 text-sm text-texto">
                <a href={`tel:${hotel.telefono.replace(/\s/g, '')}`} className="hover:underline">
                  {hotel.telefono}
                </a>
              </p>
              {/* <a
                href={hotel.reserva}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block self-start border border-textoCalido px-4 py-2 text-xs uppercase tracking-widest text-textoCalido transition-colors hover:bg-textoCalido hover:text-fondo"
              >
                Reservar
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
