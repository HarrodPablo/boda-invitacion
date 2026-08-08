'use client';

import { useLanguage } from '@/context/LanguageContext';

// Componente #3 — Bloque full-bleed con foto + overlay opaco + texto centrado.
export default function Bienvenida() {
  const { content } = useLanguage();
  const { imagen, imagenAlt, heading, parrafo, cierre, firma } = content.bienvenida;

  return (
    <section id="bienvenida" className="relative w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imagen}
        alt={imagenAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay más opaco que el hero (bloque de contenido) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(74,64,54,0.85)' }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6 py-20 text-center text-fondo sm:py-24">
        <h2 className="font-script text-3xl italic sm:text-4xl">{heading}</h2>
        <p className="mt-8 whitespace-pre-line text-justify text-sm font-light leading-relaxed sm:text-base">
          {parrafo}
        </p>
        <p className="mt-8 text-sm font-light">{cierre}</p>
        <p className="mt-2 font-script text-2xl italic sm:text-3xl">{firma}</p>
      </div>
    </section>
  );
}
