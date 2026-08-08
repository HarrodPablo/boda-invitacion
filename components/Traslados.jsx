'use client';

import { useLanguage } from '@/context/LanguageContext';

// Componente #8 — Grid de cards sobre bloque de color (horarios de bus).
export default function Traslados() {
  const { content } = useLanguage();
  const { heading, subtitulo, cards } = content.traslados;

  return (
    <section id="traslados" className="relative bg-bloque px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-widest text-textoCalido sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 font-script text-lg italic text-textoCalido">{subtitulo}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card, i) => (
            <div key={i} className="bg-fondo p-6 text-center shadow-sm">
              <p className="font-script text-2xl italic text-textoCalido">{card.titulo}</p>
              <p className="mt-2 text-3xl font-bold tracking-widest text-texto">{card.hora}</p>
              <p className="mt-3 text-sm text-texto">
                <span className="font-semibold">Desde:</span> {card.origen}
              </p>
              <p className="text-sm text-texto">
                <span className="font-semibold">Hasta:</span> {card.destino}
              </p>
              {card.nota && <p className="mt-3 text-xs text-textoCalido">{card.nota}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
