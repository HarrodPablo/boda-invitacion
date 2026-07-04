'use client';

import { useState } from 'react';
import { content } from '@/data/content';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-fondo/90 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a
          href="#inicio"
          className="font-script text-xl italic text-textoCalido"
          onClick={() => setOpen(false)}
        >
          J &amp; J
        </a>

        {/* Desktop */}
        <ul className="hidden gap-5 md:flex">
          {content.nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-xs uppercase tracking-widest text-texto transition-colors hover:text-textoCalido"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón mobile */}
        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="md:hidden p-2 text-textoCalido"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-current mb-1.5" />
          <span className="block h-0.5 w-6 bg-current mb-1.5" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {/* Menú mobile desplegable */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-bloque bg-fondo px-4 pb-4 pt-2 md:hidden">
          {content.nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block py-2 text-sm uppercase tracking-widest text-texto"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
