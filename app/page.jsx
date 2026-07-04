import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import FotoFechaLugar from '@/components/FotoFechaLugar';
import Bienvenida from '@/components/Bienvenida';
import Cronograma from '@/components/Cronograma';
import Franjas from '@/components/Franjas';
import ComoLlegar from '@/components/ComoLlegar';
import Traslados from '@/components/Traslados';
import Alojamiento from '@/components/Alojamiento';
import GuiaSevilla from '@/components/GuiaSevilla';
import Regalo from '@/components/Regalo';
import RSVPForm from '@/components/RSVPForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ColumnaFranjas from '@/components/ColumnaFranjas';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* ── Página 1 de la plantilla ── */}
        <Hero />
        <FotoFechaLugar />
        <Bienvenida />
        <Cronograma />
        {/* Remate de la página 1: banda de franjas (componente #5) */}
        <Franjas />

        {/* ── Página 2 de la plantilla (secciones 5–11) ──
            Columna decorativa de franjas al borde derecho, solo desktop (componente #10) */}
        <div className="relative">
          <ColumnaFranjas />
          <ComoLlegar />
          <Traslados />
          <Alojamiento />
          <GuiaSevilla />
          <Regalo />
          <RSVPForm />
          <FAQ />
        </div>

        {/* Cierre final (componente #11) */}
        <Footer />
      </main>
    </>
  );
}
