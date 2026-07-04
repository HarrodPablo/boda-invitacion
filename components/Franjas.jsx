// Componente #5 — Banda de franjas verticales alternadas (bloque / fondo).
// Se usa como remate al final de la "página 1" y como cierre final (footer).
export default function Franjas({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`franjas h-16 w-full sm:h-20 ${className}`}
    />
  );
}
