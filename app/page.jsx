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
import FadeIn from '@/components/FadeIn';


export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* ── Página 1 de la plantilla ── */}
        <Hero />
        
        <FadeIn>
          <FotoFechaLugar />
        </FadeIn>
        
        <FadeIn>
          <Bienvenida />
        </FadeIn>
        
        <FadeIn>
          <Cronograma />
        </FadeIn>
        
        {/* Remate de la página 1: banda de franjas (componente #5) */}
        <Franjas />

        {/* ── Página 2 de la plantilla (secciones 5–11) ──
            Columna decorativa de franjas al borde derecho, solo desktop (componente #10) */}
        <div className="relative">
          <ColumnaFranjas />
          
          <FadeIn>
            <ComoLlegar />
          </FadeIn>
          
          <FadeIn>
            <Traslados />
          </FadeIn>
          
          <FadeIn>
            <Alojamiento />
          </FadeIn>
          
          <FadeIn>
            <GuiaSevilla />
          </FadeIn>
          
          <FadeIn>
            <Regalo />
          </FadeIn>
          
          <FadeIn>
            <RSVPForm />
          </FadeIn>
          
          <FadeIn>
            <FAQ />
          </FadeIn>
        </div>

        {/* Cierre final (componente #11) */}
        <Footer />
      </main>
    </>
  );
}
