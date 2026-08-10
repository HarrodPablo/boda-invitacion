'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';

// Componente #2 — Foto enmarcada (passe-partout) + texto lateral (fecha / lugar).
export default function FotoFechaLugar() {
  const { content } = useLanguage();
  const { imagenes, imagenAlt, fecha, conector, lugar } = content.fechaLugar;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!imagenes || imagenes.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagenes.length);
    }, 4000); // Cambia cada 4 segundos
    return () => clearInterval(interval);
  }, [imagenes]);

  return (
    <section id="fecha" className="bg-fondo px-6 py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
        {/* Foto con marco fino + passe-partout, alineada arriba (mobile) / izquierda (desktop) */}
        <div className="w-full max-w-sm md:w-5/12">
          <div className="passepartout">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              {imagenes?.map((imgSrc, index) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={`${imgSrc}-${index}`}
                  src={imgSrc}
                  alt={imagenAlt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Texto centrado */}
        <div className="w-full text-center md:w-7/12">
          <div className="mb-4 flex flex-wrap items-baseline justify-center gap-3">
            <p className="font-script text-5xl italic text-textoCalido sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl md:whitespace-nowrap">{fecha}</p>
            {conector && <span className="text-sm text-texto">{conector}</span>}
          </div>
          <h2 className="font-display text-xl uppercase tracking-widest text-texto sm:text-2xl">
            {lugar}
          </h2>
        </div>
      </div>
    </section>
  );
}
