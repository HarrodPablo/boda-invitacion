'use client';

import { useLanguage } from '@/context/LanguageContext';

// Iconos lineales minimalistas (stroke, sin relleno) — componente #4.
const iconos = {
  anillos: (
    <>
      <circle cx="9" cy="14" r="6" />
      <circle cx="15" cy="14" r="6" />
      <path d="M9 8l1.5-4h3L15 8" />
    </>
  ),
  mapa: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  copa: (
    <>
      <path d="M6 3h12l-1 6a5 5 0 01-10 0L6 3z" />
      <path d="M12 14v6M8 20h8" />
    </>
  ),
  torta: (
    <>
      <path d="M4 20h16v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v7z" />
      <path d="M4 15h16M12 8V4M12 4l-1.5 1.5M12 4l1.5 1.5" />
    </>
  ),
  plato: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  fiesta: (
    <>
      <path d="M3 21l6-14 8 8-14 6z" />
      <path d="M15 3v2M19 5l-1.5 1.5M21 9h-2" />
    </>
  ),
  reloj: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};

export default function Cronograma() {
  const { content } = useLanguage();
  const { heading, subtitulo, hitos } = content.cronograma;

  return (
    <section id="cronograma" className="bg-fondo px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl font-bold uppercase tracking-widest text-texto sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-3 font-script text-lg italic text-textoCalido sm:text-xl">{subtitulo}</p>

        <ul className="mt-12 grid grid-cols-3 gap-y-10 gap-x-4 sm:grid-cols-6">
          {hitos.map((hito) => (
            <li key={hito.label} className="flex flex-col items-center">
              <span className="text-xs tracking-widest text-textoCalido">{hito.hora}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4A4036"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="my-3 h-10 w-10"
                aria-hidden="true"
              >
                {iconos[hito.icono]}
              </svg>
              <span className="text-xs tracking-wide text-texto">{hito.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
