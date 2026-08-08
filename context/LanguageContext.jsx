'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { content as contentEs } from '@/data/content';
import { content_en as contentEn } from '@/data/content_en';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  // Si queremos persistir el idioma en localStorage, podemos hacerlo aquí
  useEffect(() => {
    const saved = localStorage.getItem('app_lang');
    if (saved && (saved === 'es' || saved === 'en')) {
      setLang(saved);
    } else {
      // Intentar detectar idioma del navegador
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en') {
        setLang('en');
      }
    }
  }, []);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('app_lang', newLang);
  };

  const content = lang === 'en' ? contentEn : contentEs;

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
}
