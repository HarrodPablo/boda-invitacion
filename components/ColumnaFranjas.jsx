// Componente #10 — Columna vertical de franjas pegada al borde derecho.
// Corre como fondo decorativo detrás de la "página 2" (secciones 5 a 11).
// Solo desktop (lg+); en mobile se omite para no robar ancho de contenido.
export default function ColumnaFranjas() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-0 hidden h-full w-8 lg:block"
      style={{
        backgroundImage:
          'repeating-linear-gradient(to bottom, #D9D0C1 0, #D9D0C1 28px, #FAFAFA 28px, #FAFAFA 56px)',
      }}
    />
  );
}
