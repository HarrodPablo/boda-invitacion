'use client';

import { useState } from 'react';
import { content } from '@/data/content';

// Componente #9 — Caja con borde fino sobre bloque de color.
// Los datos bancarios NO se renderizan hasta el click (no van en el HTML inicial).
export default function Regalo() {
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
            <dl className="mx-auto mt-8 max-w-sm space-y-3 text-left text-sm text-textoCalido">
              <div className="flex justify-between gap-4 border-b border-textoCalido/30 pb-2">
                <dt className="font-semibold uppercase tracking-widest">Titular</dt>
                <dd>{datos.titular}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-textoCalido/30 pb-2">
                <dt className="font-semibold uppercase tracking-widest">Alias</dt>
                <dd className="break-all">{datos.alias}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-textoCalido/30 pb-2">
                <dt className="font-semibold uppercase tracking-widest">CBU</dt>
                <dd className="break-all">{datos.cbu}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-semibold uppercase tracking-widest">Cuenta</dt>
                <dd className="break-all">{datos.cuenta}</dd>
              </div>
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}
