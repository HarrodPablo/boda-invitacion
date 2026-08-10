'use client';

import { useLanguage } from '@/context/LanguageContext';

// Componente #1 — Hero de foto llena con overlay degradado y nombres superpuestos.
export default function Hero() {
  const { content } = useLanguage();
  const { nombre1, conector, nombre2, subtitulo, imagen, imagenAlt } = content.hero;

  return (
    <section id="inicio" className="relative h-[65vh] min-h-[520px] w-full md:h-[85vh] overflow-hidden">
      {/* Foto full-bleed */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imagen}
        alt={imagenAlt}
        className="absolute inset-0 h-full w-full object-cover object-center md:object-[center_30%]"
      />

      {/* Overlay degradado: opaco abajo -> transparente arriba (tono de la paleta) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(74,64,54,0.85) 0%, rgba(74,64,54,0.35) 45%, rgba(74,64,54,0.15) 100%)',
        }}
      />

      {/* Texto centrado superpuesto */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-fondo">
        <h1 className="font-bodoni text-5xl font-bold uppercase leading-none tracking-widest sm:text-6xl md:text-7xl">
          {nombre1}
        </h1>
        <span className="my-4 font-bodoni text-4xl italic sm:text-5xl md:text-6xl">
          {conector}
        </span>
        <h1 className="font-bodoni text-5xl font-bold uppercase leading-none tracking-widest sm:text-6xl md:text-7xl">
          {nombre2}
        </h1>
        <p className="mt-8 font-allura text-4xl tracking-wide sm:text-5xl">{subtitulo}</p>
      </div>
    </section>
  );
}
