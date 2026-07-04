import { content } from '@/data/content';

// Componente #1 — Hero de foto llena con overlay degradado y nombres superpuestos.
export default function Hero() {
  const { nombre1, conector, nombre2, subtitulo, imagen, imagenAlt } = content.hero;

  return (
    <section id="inicio" className="relative h-[65vh] min-h-[520px] w-full overflow-hidden">
      {/* Foto full-bleed */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imagen}
        alt={imagenAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay degradado: opaco abajo -> transparente arriba (tono de la paleta) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(74,64,54,0.85) 0%, rgba(74,64,54,0.35) 45%, rgba(74,64,54,0.15) 100%)',
        }}
      />

      {/* Texto centrado superpuesto */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-fondo">
        <h1 className="font-display text-5xl font-bold uppercase leading-none tracking-widest sm:text-6xl md:text-7xl">
          {nombre1}
        </h1>
        <span className="-my-3 font-script text-4xl italic sm:text-5xl md:text-6xl">
          {conector}
        </span>
        <h1 className="font-display text-5xl font-bold uppercase leading-none tracking-widest sm:text-6xl md:text-7xl">
          {nombre2}
        </h1>
        <p className="mt-6 text-xs uppercase tracking-widest2 sm:text-sm">{subtitulo}</p>
      </div>
    </section>
  );
}
