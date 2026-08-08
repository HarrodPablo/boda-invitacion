'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

// Componente #9 — Caja con borde fino sobre bloque de color.
// Los datos bancarios NO se renderizan hasta el click (no van en el HTML inicial).
export default function Regalo() {
  const { content } = useLanguage();
  const { heading, parrafo, datos, botonLabel } = content.regalo;
  const [visible, setVisible] = useState(false);

  return (
    <section id="regalo" className="relative bg-bloque px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="border border-textoCalido px-6 py-10 text-center sm:px-12">
          <h2 className="font-script text-3xl italic text-textoCalido sm:text-4xl">{heading}</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-textoCalido">
            {parrafo}
          </p>

          {!visible ? (
            <button
              type="button"
              onClick={() => setVisible(true)}
              className="mt-8 inline-block border border-textoCalido px-6 py-3 text-xs uppercase tracking-widest text-textoCalido transition-colors hover:bg-textoCalido hover:text-fondo"
            >
              {botonLabel}
            </button>
          ) : (
            // Este bloque solo existe en el DOM tras el click (useState).
            <dl className="mx-auto mt-8 max-w-md space-y-3 text-left text-sm text-textoCalido">
              <div className="flex flex-col gap-1 border-b border-textoCalido/30 pb-2 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="font-semibold uppercase tracking-widest">Beneficiarios</dt>
                <dd className="sm:text-right">{datos.titular}</dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-textoCalido/30 pb-2 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="font-semibold uppercase tracking-widest">IBAN</dt>
                <dd className="break-all sm:text-right">{datos.iban}</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="font-semibold uppercase tracking-widest">BIC/SWIFT</dt>
                <dd className="break-all sm:text-right">{datos.bic}</dd>
              </div>
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}
