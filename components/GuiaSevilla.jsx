'use client';

import { useLanguage } from '@/context/LanguageContext';

// Componente #8 — Grid de cards sobre bloque de color, cada card con foto chica.
export default function GuiaSevilla() {
  const { content } = useLanguage();
  const { heading, subtitulo, lugares } = content.guia;

  return (
    <section id="guia" className="relative bg-bloque px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-widest text-textoCalido sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 font-script text-lg italic text-textoCalido">{subtitulo}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {lugares.map((lugar, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-4 bg-fondo p-4 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lugar.imagen}
                alt={lugar.imagenAlt}
                className="h-56 w-full sm:h-40 sm:w-32 flex-shrink-0 object-cover shadow-sm"
              />
              <div className="flex flex-col justify-center text-center sm:text-left">
                <p className="font-script text-xl italic text-textoCalido">{lugar.nombre}</p>
                <p className="mt-1 text-sm leading-snug text-texto">{lugar.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
