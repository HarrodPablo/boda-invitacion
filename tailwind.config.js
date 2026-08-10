/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de la sección 2.1 (reemplaza el verde oliva original)
        bloque: '#D9D0C1', // bloques sólidos / overlays sobre foto / franjas decorativas
        fondo: '#FAFAFA', // fondo general
        texto: '#333333', // texto sobre fondo claro
        textoCalido: '#4A4036', // texto cálido / sobre bloques oscuros / cursivas
      },
      fontFamily: {
        // Se enlazan a las variables CSS que expone next/font en layout.jsx
        display: ['var(--font-playfair)', 'serif'],
        script: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-jost)', 'sans-serif'],
        bodoni: ['var(--font-bodoni)', 'serif'],
        allura: ['var(--font-allura)', 'cursive'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
    },
  },
  plugins: [],
};
