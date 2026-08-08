'use client';

import { useLanguage } from '@/context/LanguageContext';

// Sección 5 — Componente #6 (bloque intro) + #7 (grid 2 col) + mapa embebido.
export default function ComoLlegar() {
  const { content } = useLanguage();
  const { heading, intro, ceremonia, finca, mapaQuery } = content.comoLlegar;
  const q = encodeURIComponent(mapaQuery);
  const mapaSrc = `https://www.google.com/maps?q=${q}&output=embed`;
  const mapaLink = `https://www.google.com/maps/search/?api=1&query=${q}`;

  return (
    <section id="como-llegar" className="relative bg-fondo px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Bloque intro tipo RSVP (componente #6) */}
        <div className="bg-bloque px-6 py-10 sm:px-10">
          <h2 className="font-script text-3xl italic text-textoCalido sm:text-4xl">{heading}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-textoCalido">{intro}</p>
        </div>

        {/* Grid 2 columnas: ceremonia vs. finca (componente #7) */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {[ceremonia, finca].map((item) => (
            <div key={item.titulo}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-texto">
                {item.titulo}
              </h3>
              <p className="mt-2 font-script text-xl italic text-textoCalido">{item.lugar}</p>
              <p className="mt-1 text-sm text-texto">{item.direccion}</p>
            </div>
          ))}
        </div>

        {/* Mapa embebido (sin API key) */}
        <div className="mt-10 overflow-hidden border border-bloque">
          <iframe
            title="Mapa del lugar"
            src={mapaSrc}
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href={mapaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-textoCalido px-6 py-3 text-xs uppercase tracking-widest text-textoCalido transition-colors hover:bg-textoCalido hover:text-fondo"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
