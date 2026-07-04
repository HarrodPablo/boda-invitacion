// ============================================================================
//  ÚNICA FUENTE DE VERDAD DEL CONTENIDO
//  Editá SOLO este archivo para cambiar nombres, fechas, hoteles, buses, etc.
//  Ningún componente hardcodea texto de contenido.
// ============================================================================

export const content = {
  // Metadatos / SEO
  meta: {
    titulo: 'Julieta & Julio · Nos casamos',
    descripcion: 'Invitación de boda de Julieta y Julio — 1 de septiembre de 2026, Sevilla.',
  },

  // Navegación (anclas). El label es lo visible; el id debe coincidir con el <section id>.
  nav: [
    { id: 'inicio', label: 'Inicio' },
    { id: 'fecha', label: 'Fecha' },
    { id: 'bienvenida', label: 'Bienvenida' },
    { id: 'cronograma', label: 'El día' },
    { id: 'como-llegar', label: 'Cómo llegar' },
    { id: 'traslados', label: 'Traslados' },
    { id: 'alojamiento', label: 'Alojamiento' },
    { id: 'guia', label: 'Sevilla' },
    { id: 'regalo', label: 'Regalo' },
    { id: 'rsvp', label: 'Confirmar' },
    { id: 'faq', label: 'FAQ' },
  ],

  // 1. Hero / Nombres — componente #1
  hero: {
    nombre1: 'Julieta',
    conector: 'y',
    nombre2: 'Julio',
    subtitulo: 'NOS CASAMOS URAAAAAAAAAAAAAAA',
    imagen:
      'https://i.ibb.co/4wsGNsRt/Whats-App-Image-2026-07-04-at-20-19-38-2.jpg0',
    imagenAlt: 'Julieta y Julio abrazados junto al agua',
  },

  // 2. Foto + Fecha + Lugar — componente #2
  fechaLugar: {
    imagen:
      'https://i.ibb.co/SX8jJGvc/Whats-App-Image-2026-07-04-at-20-19-38.jpg',
    imagenAlt: 'Pareja tomada de la mano durante el atardecer',
    fecha: '50 de febrero de 2027',
    conector: 'en',
    lugar: 'HACIENDA SAN LUIS DE MEJINA, SEVILLA - ESPAÑA',
  },

  // 3. Bienvenida — componente #3 (full-bleed con overlay)
  bienvenida: {
    imagen:
      'https://i.ibb.co/4ZqXx9wb/Whats-App-Image-2026-07-04-at-20-19-38-1.jpg',
    imagenAlt: 'Salón decorado para una celebración de boda',
    heading: 'Nuestro gran día',
    parrafo:
      'Queremos celebrar este momento tan especial de nuestras vidas rodeados de la gente que más queremos. Tu presencia y tu apoyo significan el mundo para nosotros, y no podemos imaginar este día sin vos a nuestro lado. En las siguientes secciones vas a encontrar todos los detalles que necesitás para acompañarnos: horarios, cómo llegar, dónde alojarte y todo lo demás. Gracias por ser parte de nuestra historia.',
    cierre: 'Con amor,',
    firma: 'Julieta & Julio',
  },

  // 4. Cronología del día — componente #4 (fila de iconos)
  cronograma: {
    heading: 'EL DÍA',
    subtitulo: 'Nuestro gran día comienza a las 12:30, no llegues más tarde',
    hitos: [
      { icono: 'anillos', hora: '12:30', label: 'ceremonia' },
      { icono: 'copa', hora: '13:30', label: 'aperitivo' },
      { icono: 'torta', hora: '15:00', label: 'corte de torta' },
      { icono: 'plato', hora: '16:00', label: 'cena' },
      { icono: 'fiesta', hora: '20:00', label: 'fiesta' },
      { icono: 'reloj', hora: '02:00', label: 'regreso' },
    ],
  },

  // 5. Ceremonia y finca — Cómo llegar — componente #6 + #7 + mapa
  comoLlegar: {
    heading: 'Cómo llegar',
    intro:
      'La ceremonia y la celebración se realizan en el mismo predio. Te dejamos las direcciones exactas y un mapa para que no te pierdas. Recomendamos llegar con tiempo para disfrutar del lugar con calma.',
    ceremonia: {
      titulo: 'CEREMONIA',
      lugar: 'Iglesia de Santa Ana',
      direccion: 'C. Vidrio 23, Triana, 41010 Sevilla',
    },
    finca: {
      titulo: 'FINCA',
      lugar: 'Hacienda San Luis de Mejina',
      direccion: 'Av. Padre García Tejero, 8, 41012 Sevilla, España',
    },
    // Dirección usada para el iframe y el botón "Abrir en Google Maps"
    mapaQuery: 'Cam. de Mejina, s/n, 41807 Espartinas, Sevilla, España',
  },

  // 6. Traslados en autobús — componente #8 (cards)
  traslados: {
    heading: 'TRASLADOS EN AUTOBÚS',
    subtitulo: 'Servicio de bus gratuito para todos los invitados',
    cards: [
      {
        titulo: 'Ida',
        hora: '11:45',
        origen: 'Plaza Nueva, Sevilla centro',
        destino: 'Hacienda San Luis de Mejina',
        nota: 'Salida puntual. Presentate 10 minutos antes.',
      },
      {
        titulo: 'Ida (hoteles)',
        hora: '12:00',
        origen: 'Av. de la Constitución (frente a la Catedral)',
        destino: 'Hacienda San Luis de Mejina',
        nota: 'Parada intermedia en Hotel Alfonso XIII.',
      },
      {
        titulo: 'Regreso',
        hora: '01:30',
        origen: 'Hacienda San Luis de Mejina',
        destino: 'Plaza Nueva, Sevilla centro',
        nota: 'Primer bus de vuelta.',
      },
      {
        titulo: 'Regreso',
        hora: '02:30',
        origen: 'Hacienda San Luis de Mejina',
        destino: 'Plaza Nueva, Sevilla centro',
        nota: 'Último bus de la noche.',
      },
    ],
  },

  // 7. Alojamiento — componente #8 (cards), 5 hoteles
  alojamiento: {
    heading: 'DÓNDE ALOJARSE CERCA',
    subtitulo: 'Opciones recomendadas a distintas distancias del centro',
    hoteles: [
      {
        nombre: 'Hotel Alfonso XIII',
        direccion: 'C. San Fernando 2, 41004 Sevilla',
        distancia: 'A 15 min de la finca',
        telefono: '+34 954 917 000',
        reserva: 'https://www.marriott.com',
      },
      {
        nombre: 'Hotel Colón Gran Meliá',
        direccion: 'C. Canalejas 1, 41001 Sevilla',
        distancia: 'A 18 min de la finca',
        telefono: '+34 954 505 599',
        reserva: 'https://www.melia.com',
      },
      {
        nombre: 'Casa 1800 Sevilla',
        direccion: 'C. Rodrigo Caro 6, 41004 Sevilla',
        distancia: 'A 16 min de la finca',
        telefono: '+34 954 561 800',
        reserva: 'https://www.hotelcasa1800sevilla.com',
      },
      {
        nombre: 'Hotel Kivir',
        direccion: 'C. Betis 67, Triana, 41010 Sevilla',
        distancia: 'A 12 min de la finca',
        telefono: '+34 955 271 700',
        reserva: 'https://www.hotelkivir.com',
      },
      {
        nombre: 'Hostal Boutique La Banda',
        direccion: 'C. Dos de Mayo 16, 41001 Sevilla',
        distancia: 'A 20 min de la finca',
        telefono: '+34 955 228 118',
        reserva: 'https://www.labandahostel.com',
      },
    ],
  },

  // 8. Guía de Sevilla — componente #8 (cards con foto)
  guia: {
    heading: 'GUÍA DE SEVILLA',
    subtitulo: 'Qué comer y qué visitar mientras estás en la ciudad',
    lugares: [
      {
        nombre: 'Real Alcázar',
        descripcion: 'Palacio mudéjar y jardines. Reservá entrada online con antelación.',
        imagen:
          'https://images.unsplash.com/photo-1558370781-d6196949e317?auto=format&fit=crop&w=600&q=80',
        imagenAlt: 'Arcos del Real Alcázar de Sevilla',
      },
      {
        nombre: 'Plaza de España',
        descripcion: 'Uno de los rincones más fotografiados de la ciudad. Ideal al atardecer.',
        imagen:
          'https://images.unsplash.com/photo-1559386081-325882507af7?auto=format&fit=crop&w=600&q=80',
        imagenAlt: 'Plaza de España de Sevilla',
      },
      {
        nombre: 'Mercado de Triana',
        descripcion: 'Tapas y productos locales al otro lado del río. Probá el pescaíto frito.',
        imagen:
          'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=600&q=80',
        imagenAlt: 'Puesto de tapas en un mercado',
      },
      {
        nombre: 'Catedral y La Giralda',
        descripcion: 'Subí a la Giralda para las mejores vistas del casco histórico.',
        imagen:
          'https://images.unsplash.com/photo-1567966529895-31d1e02c7c15?auto=format&fit=crop&w=600&q=80',
        imagenAlt: 'La Giralda de Sevilla',
      },
    ],
  },

  // 9. Regalo — componente #9 (caja con borde). Datos ocultos hasta el click.
  regalo: {
    heading: 'Regalo',
    parrafo:
      'Lo más importante para nosotros es contar con vos ese día. Si además querés hacernos un regalo, podés colaborar con nuestra luna de miel a través de los siguientes datos.',
    // Estos datos NO se renderizan en el HTML inicial; solo aparecen tras "Ver datos".
    datos: {
      titular: 'Julieta & Julio',
      alias: 'Julieta.Julio.boda',
      cbu: '0000003100010000000000',
      cuenta: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    botonLabel: 'Ver datos',
  },

  // 10. Confirmación (RSVP) — componente #6 + formulario
  rsvp: {
    heading: 'RSVP',
    intro:
      'Por favor confirmanos tu asistencia antes del 1 de julio de 2026. Contanos si venís, con cuántos acompañantes y si tenés alguna restricción alimentaria. Te enviaremos un email de confirmación.',
    fechaLimite: '1 de julio de 2026',
  },

  // 11. FAQ / Contacto — componente #11 + acordeón (#7)
  faq: {
    heading: 'Preguntas frecuentes',
    preguntas: [
      {
        q: 'CÓDIGO DE VESTIMENTA',
        a: 'Etiqueta / formal. Te pedimos evitar el blanco, reservado para la novia.',
      },
      {
        q: 'NIÑOS',
        a: 'La celebración es solo para adultos. Agradecemos tu comprensión.',
      },
      {
        q: 'APARCAMIENTO',
        a: 'Hay estacionamiento gratuito en la finca, pero recomendamos usar el bus.',
      },
      {
        q: 'ALERGIAS',
        a: 'Indicá tus restricciones en el formulario de confirmación y las tendremos en cuenta.',
      },
    ],
    contacto: {
      texto: 'Ante cualquier duda, escribinos:',
      email: 'Julieta.Julio.boda@gmail.com',
      telefono: '+34 635 07 11 85',
    },
    firma: 'Con amor, Julieta & Julio',
  },
};

export default content;
