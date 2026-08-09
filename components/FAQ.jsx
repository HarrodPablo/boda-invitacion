'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

// Componente #11 (footer de firma) + acordeón de preguntas usando #7 por item.
export default function FAQ() {
  const { content } = useLanguage();
  const { heading, preguntas, contacto, firma, firma2 } = content.faq;
  const [abierta, setAbierta] = useState(null);

  return (
    <section id="faq" className="relative bg-fondo px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-display text-2xl font-bold uppercase tracking-widest text-texto sm:text-3xl">
          {heading}
        </h2>

        {/* Acordeón (cada item con sub-heading en mayúscula + respuesta, estilo #7) */}
        <div className="mt-8 divide-y divide-bloque border-y border-bloque">
          {preguntas.map((item, i) => {
            const open = abierta === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setAbierta(open ? null : i)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="text-sm font-bold uppercase tracking-widest text-texto">
                    {item.q}
                  </span>
                  <span className="ml-4 text-xl text-textoCalido">{open ? '–' : '+'}</span>
                </button>
                {open && <p className="pb-4 text-sm leading-relaxed text-texto">{item.a}</p>}
              </div>
            );
          })}
        </div>

        {/* Contacto + firma */}
        <div className="mt-12 text-center">
          <p className="text-sm text-texto">{contacto.texto}</p>
          <p className="mt-1 text-sm text-textoCalido">
            <a href={`mailto:${contacto.email}`} className="hover:underline">
              {contacto.email}
            </a>{' '}
            ·{' '}
            <a href={`tel:${contacto.telefono.replace(/\s/g, '')}`} className="hover:underline">
              {contacto.telefono}
            </a>
          </p>
          <p className="mt-12 text-sm text-texto">{firma}</p>
          {firma2 && <p className="mt-4 font-script text-3xl italic text-textoCalido sm:text-4xl">{firma2}</p>}
        </div>
      </div>
    </section>
  );
}
