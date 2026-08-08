'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { content, lang, changeLanguage } = useLanguage();

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

        <div className="flex items-center gap-4 md:gap-6">
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

          {/* Toggle Idioma */}
          <div className="flex items-center text-xs font-semibold tracking-widest text-texto">
            <button
              onClick={() => changeLanguage('es')}
              className={`px-1 transition-colors ${lang === 'es' ? 'text-textoCalido' : 'hover:text-textoCalido'}`}
            >
              ES
            </button>
            <span className="opacity-30">|</span>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-1 transition-colors ${lang === 'en' ? 'text-textoCalido' : 'hover:text-textoCalido'}`}
            >
              EN
            </button>
          </div>

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
