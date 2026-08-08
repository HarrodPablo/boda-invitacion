// ============================================================================
//  ÚNICA FUENTE DE VERDAD DEL CONTENIDO
//  Editá SOLO este archivo para cambiar nombres, fechas, hoteles, buses, etc.
//  Ningún componente hardcodea texto de contenido.
// ============================================================================

export const content = {
  // Metadatos / SEO
  meta: {
    titulo: 'Julieta & Julio · Nos casamos',
    descripcion: 'Invitación de boda de Julieta y Julio — 20 de Febrero de 2027, Sevilla.',
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
    conector: '&',
    nombre2: 'Julio',
    subtitulo: '¡Nos casamos!',
    imagen:
      'https://i.ibb.co/4wsGNsRt/Whats-App-Image-2026-07-04-at-20-19-38-2.jpg0',
    imagenAlt: 'Julieta y Julio abrazados junto al agua',
  },

  // 2. Foto + Fecha + Lugar — componente #2
  fechaLugar: {
    imagen:
      'https://i.ibb.co/SX8jJGvc/Whats-App-Image-2026-07-04-at-20-19-38.jpg',
    imagenAlt: 'Pareja tomada de la mano durante el atardecer',
    fecha: '20 de Febrero de 2027',
    conector: 'en',
    lugar: 'SEVILLA - ESPAÑA',
  },

  // 3. Bienvenida — componente #3 (full-bleed con overlay)
  bienvenida: {
    imagen:
      'https://i.ibb.co/4ZqXx9wb/Whats-App-Image-2026-07-04-at-20-19-38-1.jpg',
    imagenAlt: 'Salón decorado para una celebración de boda',
    heading: 'Nuestro gran día',
    parrafo:
      'Hoy elegimos Sevilla no solo como la ciudad que será nuestro hogar, sino también como el escenario donde celebraremos el comienzo de una nueva etapa.\n\n' +
      'Con inmensa alegría, queremos invitarte a compartir con nosotros el día en que diremos "sí, quiero", rodeados de quienes han sido parte de nuestra historia y de este hermoso camino que nos ha traído hasta aquí.',
    cierre: 'Con amor,',
    firma: 'Julieta & Julio',
  },

  // 4. Cronología del día — componente #4 (fila de iconos)
  cronograma: {
    heading: 'EL DÍA',
    subtitulo: 'Nuestro gran día comienza a las 12:00, no llegues más tarde',
    hitos: [
      { icono: 'anillos', hora: '12:00', label: 'Ceremonia religiosa' },
      { icono: 'mapa', hora: '14:00', label: 'Llegada a la hacienda' },
      { icono: 'copa', hora: '14:15 - 16:00', label: 'Coctel' },
      { icono: 'plato', hora: '16:15 - 17:45', label: 'Almuerzo' },
      { icono: 'fiesta', hora: '18:00', label: 'Barra libre' },
      { icono: 'reloj', hora: '23:00', label: 'Fin de la fiesta' },
    ],
  },

  // 5. Ceremonia y finca — Cómo llegar — componente #6 + #7 + mapa
  comoLlegar: {
    heading: 'Cómo llegar',
    intro:
      'La ceremonia religiosa y la celebración se realizarán en diferentes lugares. A continuación encontrarán las direcciones de cada uno, junto con un mapa para facilitar su llegada.',
    ceremonia: {
      titulo: 'CEREMONIA',
      lugar: 'Parroquia San Antonio María Claret',
      direccion: 'Av. Padre García Tejero, 8, 41012',
    },
    finca: {
      titulo: 'HACIENDA',
      lugar: 'Hacienda San Luis de Mejina',
      direccion: 'Camino de Mejina s/n, 41807, Espartinas',
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
        titulo: 'Salida',
        hora: '13:30',
        origen: 'Parroquia San Antonio Maria Claret',
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
        hora: '21:30',
        origen: 'Hacienda San Luis de Mejina',
        destino: 'Plaza Nueva, Sevilla centro',
        nota: 'Primer bus de vuelta.',
      },
      {
        titulo: 'Regreso',
        hora: '23:00',
        origen: 'Hacienda San Luis de Mejina',
        destino: 'Plaza Nueva, Sevilla centro',
        nota: 'Último bus de la noche.',
      },
    ],
  },

  // 7. Alojamiento — componente #8 (cards), 5 hoteles
  alojamiento: {
    heading: 'Dónde hospedarte en Sevilla',
    subtitulo: 'Estas son algunas de nuestras recomendaciones de alojamiento en Sevilla. Si tienes cualquier pregunta o necesitas ayuda para elegir la mejor opción, no dudes en escribirnos. Estaremos encantados de ayudarte.',
    hoteles: [
      {
        nombre: 'Hotel Lobby Sevilla',
        direccion: 'C. Reyes Católicos 23, 41001',
        distancia: 'A 14 min de la hacienda',
        telefono: '+34 854 53 88 68',
        reserva: 'https://www.lobbyroomhotel.com',
      },
      {
        nombre: 'Hotel Petit Palace Puerta de Triana',
        direccion: 'C. Reyes Católicos, 5, Casco Antiguo, 41001',
        distancia: 'A 15 min de la hacienda',
        telefono: '+34 954 21 62 59',
        reserva: 'https://www.petitpalace.com',
      },
      {
        nombre: 'Hotel Cervantes',
        direccion: 'C. Cervantes 12, 41003',
        distancia: 'A 19 min de la hacienda',
        telefono: '+34 954 90 02 80',
        reserva: 'https://www.hotel-cervantes.com',
      },
      {
        nombre: 'Eurostars Al-Ándalus Palace',
        direccion: 'Av de la Palmera s/n, 41012',
        distancia: 'A 21 min de la hacienda',
        telefono: '+34 954 23 06 00',
        reserva: 'https://www.eurostarshotels.com/eurostars-al-andalus-palace.html',
      },
      {
        nombre: 'Hotel Ribera de Triana',
        direccion: 'Plaza de la Chapina 1, 41010',
        distancia: 'A 13 min de la hacienda',
        telefono: '+34 900 80 88 22(ext 2)',
        reserva: 'https://hotelriberadetriana.com',
      },
      {
        nombre: 'Hotel Petit Palace Vargas',
        direccion: 'Plaza La Legión 7, 41001',
        distancia: 'A 12 min de la hacienda',
        telefono: '+34 954 26 80 80',
        reserva: 'https://www.petitpalace.com',
      },
    ],
  },

  // 8. Guía de Sevilla — componente #8 (cards con foto)
  guia: {
    heading: 'GUÍA DE SEVILLA',
    subtitulo: 'Sitios que si o si tienes que visitar si estas en la ciudad',
    lugares: [
      {
        nombre: 'Real Alcázar',
        descripcion: 'Es el palacio real en uso más antiguo de Europa, ubicado a pocos minutos a pie en el centro histórico. Combina estilos islámico, mudéjar, gótico, renacentista y barroco a través de mil años de historia.',
        imagen:
          'https://i.pinimg.com/736x/85/e1/82/85e182f33428df40d5c92cd8c97994fc.jpg',
        imagenAlt: 'Arcos del Real Alcázar de Sevilla',
      },
      {
        nombre: 'Plaza de España',
        descripcion: 'Destaca por su gran edificio semicircular con fachadas de arcos y columnas.',
        imagen:
          'https://i.pinimg.com/736x/f7/04/46/f7044621d6c53e07b4a65119775b0f5f.jpg',
        imagenAlt: 'Plaza de España de Sevilla',
      },
      {
        nombre: 'Barrio Santa Cruz',
        descripcion: 'Fue la antigua judería de Sevilla. Hoy es uno de los barrios más populares y concurridos de la ciudad.',
        imagen:
          'https://i.pinimg.com/1200x/ec/18/ae/ec18ae3f6f14f3f3205022b2f7ea78c9.jpg',
        imagenAlt: 'Barrio Santa Cruz',
      },
      {
        nombre: 'Las Setas',
        descripcion: 'Conocida por ser la estructura de madera más grande del mundo.',
        imagen:
          'https://i.pinimg.com/736x/c7/b3/0d/c7b30d8b6c553eb287f1c0312d42410a.jpg',
        imagenAlt: 'Setas',
      },
      {
        nombre: 'Triana',
        descripcion: 'Este barrio es famoso por su fuerte identidad propia, su arraigada tradición flamenca, su historia marinera y su ubicación a la otra orilla del río Guadalquivir conectada por el popular Puente de Isabel II.',
        imagen:
          'https://i.pinimg.com/736x/7d/3f/6b/7d3f6bf23a7eceabf39ae5637ac2658c.jpg',
        imagenAlt: 'Triana',
      },
    ],
  },

  // 9. Regalo — componente #9 (caja con borde). Datos ocultos hasta el click.
  regalo: {
    heading: 'Regalo',
    parrafo:
      'Para nuestra futura casa tenemos tostadora, cafetera y hasta demasiados mates. Si queréis hacernos un regalo, nuestra hucha para la luna de miel os lo agradecerá:',
    // Estos datos NO se renderizan en el HTML inicial; solo aparecen tras "Ver datos".
    datos: {
      titular: 'Julieta Llarrull & Julio Cirera Benito',
      iban: 'ES5615830001119150667751',
      bic: 'REVOESM2',
    },
    botonLabel: 'Ver datos',
  },

  // 10. Confirmación (RSVP) — componente #6 + formulario
  rsvp: {
    heading: 'RSVP',
    intro:
      'Por favor, confírmanos tu asistencia lo antes posible. A continuación encontrarás un formulario con la información que necesitamos.Unas semanas antes de la boda recibirás un nuevo recordatorio para que puedas confirmar tu asistencia de forma definitiva.',
    fechaLimite: 'x de xxxxx de 202x',
    // Textos del formulario
    form: {
      nombre: 'Nombre completo',
      nombrePlaceholder: 'Ingresa tu nombre',
      telefono: 'Teléfono',
      telefonoPlaceholder: 'Ingresa tu teléfono',
      email: 'Email',
      emailPlaceholder: 'Email inválido',
      asistencia: '¿Asistís?',
      siAsisto: 'Sí asisto',
      noAsisto: 'No podré',
      acompanantes: 'Cantidad de acompañantes',
      autobus: 'Autobús: ¿Vas a necesitar el servicio del autobús?',
      si: 'Sí',
      no: 'No',
      restricciones: 'Restricciones alimentarias (Por favor, indícanos si tienes alguna alergia, intolerancia o necesidad alimentaria especial)',
      cancion: 'Canción imprescindible (¿Cuál es esa canción que crees que tiene que sonar sí o sí en nuestra boda?)',
      mensaje: 'Mensaje (opcional)',
      enviar: 'Confirmar asistencia',
      enviando: 'Enviando…',
      error: 'Hubo un problema al enviar. Probá de nuevo en unos minutos.',
      exitoTitulo: '¡Gracias!',
      exitoMensaje: 'Recibimos tu confirmación. Te enviamos un email con los detalles.',
      enviarOtra: 'Enviar otra respuesta'
    }
  },

  // 11. FAQ / Contacto — componente #11 + acordeón (#7)
  faq: {
    heading: 'Preguntas frecuentes',
    preguntas: [
      {
        q: 'CÓDIGO DE VESTIMENTA',
        a: 'Formal',
      },
      {
        q: 'APARCAMIENTO',
        a: 'En la hacienda disponemos de espacio para que puedas dejar tu coche sin problema. Si te resulta más cómodo, puedes venir en tu propio vehículo; si no, también tendrás la opción de venir en autobús.',
      },
      {
        q: 'ALERGIAS',
        a: 'Indicá tus restricciones en el formulario de confirmación y las tendremos en cuenta.',
      },
    ],
    contacto: {
      texto: 'Ante cualquier duda, podéis escribirnos al:',
      email: 'Julieta.Julio.boda@gmail.com',
      telefono: '+34 635 07 11 85',
    },
    firma: 'Nos hace muchísima ilusión compartir este día tan especial con vosotros.',
    firma2: 'Julieta & Julio',
  },
};

export default content;
