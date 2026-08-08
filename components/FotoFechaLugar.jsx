'use client';

import { useLanguage } from '@/context/LanguageContext';

// Componente #2 — Foto enmarcada (passe-partout) + texto lateral (fecha / lugar).
export default function FotoFechaLugar() {
  const { content } = useLanguage();
  const { imagen, imagenAlt, fecha, conector, lugar } = content.fechaLugar;

  return (
    <section id="fecha" className="bg-fondo px-6 py-16 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
        {/* Foto con marco fino + passe-partout, alineada arriba (mobile) / izquierda (desktop) */}
        <div className="w-full max-w-xs md:w-1/2">
          <div className="passepartout">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imagen}
              alt={imagenAlt}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>

        {/* Texto centrado */}
        <div className="w-full text-center md:w-1/2">
          <p className="font-script text-3xl italic text-textoCalido sm:text-4xl">{fecha}</p>
          <p className="my-3 text-sm text-texto">{conector}</p>
          <h2 className="font-display text-2xl font-bold uppercase tracking-widest text-texto sm:text-3xl">
            {lugar}
          </h2>
        </div>
      </div>
    </section>
  );
}
