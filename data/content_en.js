export const content_en = {
  // Metadata / SEO
  meta: {
    titulo: 'Julieta & Julio · We are getting married',
    descripcion: 'Wedding invitation of Julieta and Julio — February 20th 2027, Seville.',
  },

  // Navigation
  nav: [
    { id: 'inicio', label: 'Home' },
    { id: 'fecha', label: 'Date' },
    { id: 'bienvenida', label: 'Welcome' },
    { id: 'cronograma', label: 'The Day' },
    { id: 'como-llegar', label: 'Location' },
    { id: 'traslados', label: 'Transport' },
    { id: 'alojamiento', label: 'Accommodation' },
    { id: 'guia', label: 'Seville' },
    { id: 'regalo', label: 'Gifts' },
    { id: 'rsvp', label: 'RSVP' },
    { id: 'faq', label: 'FAQ' },
  ],

  // 1. Hero
  hero: {
    nombre1: 'Julieta',
    conector: '&',
    nombre2: 'Julio',
    subtitulo: 'We are getting married!',
    imagen: 'https://i.ibb.co/4wsGNsRt/Whats-App-Image-2026-07-04-at-20-19-38-2.jpg0',
    imagenAlt: 'Julieta and Julio hugging by the water',
  },

  // 2. Photo + Date + Place
  fechaLugar: {
    imagen: 'https://i.ibb.co/SX8jJGvc/Whats-App-Image-2026-07-04-at-20-19-38.jpg',
    imagenAlt: 'Couple holding hands during sunset',
    fecha: 'February 20th, 2027',
    conector: 'in',
    lugar: 'SEVILLE - SPAIN',
  },

  // 3. Welcome
  bienvenida: {
    imagen: 'https://i.ibb.co/4ZqXx9wb/Whats-App-Image-2026-07-04-at-20-19-38-1.jpg',
    imagenAlt: 'Venue decorated for a wedding celebration',
    heading: 'Our big day',
    parrafo:
      'Today we choose Seville not only as the city that will be our home, but also as the setting where we will celebrate the beginning of a new chapter.\n\n' +
      'With immense joy, we want to invite you to share with us the day we say "I do", surrounded by those who have been part of our history and this beautiful journey that has brought us here.',
    cierre: 'With love,',
    firma: 'Julieta & Julio',
  },

  // 4. Schedule
  cronograma: {
    heading: 'THE DAY',
    subtitulo: 'Our big day starts at 12:00, please be on time',
    hitos: [
      { icono: 'anillos', hora: '12:00', label: 'Religious ceremony' },
      { icono: 'mapa', hora: '14:00', label: 'Arrival at the hacienda' },
      { icono: 'copa', hora: '14:15 - 16:00', label: 'Cocktail' },
      { icono: 'plato', hora: '16:15 - 17:45', label: 'Lunch' },
      { icono: 'fiesta', hora: '18:00', label: 'Open bar' },
      { icono: 'reloj', hora: '23:00', label: 'End of party' },
    ],
  },

  // 5. Location
  comoLlegar: {
    heading: 'How to get there',
    intro:
      'The religious ceremony and the celebration will take place in different locations. Below you will find the addresses for each, along with a map to facilitate your arrival.',
    ceremonia: {
      titulo: 'CEREMONY',
      lugar: 'Parroquia San Antonio María Claret',
      direccion: 'Av. Padre García Tejero, 8, 41012',
    },
    finca: {
      titulo: 'HACIENDA',
      lugar: 'Hacienda San Luis de Mejina',
      direccion: 'Camino de Mejina s/n, 41807, Espartinas',
    },
    mapaQuery: 'Cam. de Mejina, s/n, 41807 Espartinas, Sevilla, España',
  },

  // 6. Bus Transport
  traslados: {
    heading: 'BUS TRANSFERS',
    subtitulo: 'Free bus service for all guests',
    cards: [
      {
        titulo: 'Departure',
        hora: '13:30',
        origen: 'Parroquia San Antonio Maria Claret',
        destino: 'Hacienda San Luis de Mejina',
        nota: 'Punctual departure. Please arrive 10 minutes early.',
      },
      {
        titulo: 'To the venue (from hotels)',
        hora: '12:00',
        origen: 'Av. de la Constitución (in front of the Cathedral)',
        destino: 'Hacienda San Luis de Mejina',
        nota: 'Intermediate stop at Hotel Alfonso XIII.',
      },
      {
        titulo: 'Return',
        hora: '21:30',
        origen: 'Hacienda San Luis de Mejina',
        destino: 'Plaza Nueva, Seville center',
        nota: 'First return bus.',
      },
      {
        titulo: 'Return',
        hora: '23:00',
        origen: 'Hacienda San Luis de Mejina',
        destino: 'Plaza Nueva, Seville center',
        nota: 'Last bus of the night.',
      },
    ],
  },

  // 7. Accommodation
  alojamiento: {
    heading: 'Where to stay in Seville',
    subtitulo: 'These are some of our accommodation recommendations in Seville. If you have any questions or need help choosing the best option, feel free to write to us. We will be happy to help you.',
    hoteles: [
      {
        nombre: 'Hotel Lobby Sevilla',
        direccion: 'C. Reyes Católicos 23, 41001',
        distancia: '14 min from the hacienda',
        telefono: '+34 854 53 88 68',
        reserva: 'https://www.lobbyroomhotel.com',
      },
      {
        nombre: 'Hotel Petit Palace Puerta de Triana',
        direccion: 'C. Reyes Católicos, 5, Casco Antiguo, 41001',
        distancia: '15 min from the hacienda',
        telefono: '+34 954 21 62 59',
        reserva: 'https://www.petitpalace.com',
      },
      {
        nombre: 'Hotel Cervantes',
        direccion: 'C. Cervantes 12, 41003',
        distancia: '19 min from the hacienda',
        telefono: '+34 954 90 02 80',
        reserva: 'https://www.hotel-cervantes.com',
      },
      {
        nombre: 'Eurostars Al-Ándalus Palace',
        direccion: 'Av de la Palmera s/n, 41012',
        distancia: '21 min from the hacienda',
        telefono: '+34 954 23 06 00',
        reserva: 'https://www.eurostarshotels.com/eurostars-al-andalus-palace.html',
      },
      {
        nombre: 'Hotel Ribera de Triana',
        direccion: 'Plaza de la Chapina 1, 41010',
        distancia: '13 min from the hacienda',
        telefono: '+34 900 80 88 22(ext 2)',
        reserva: 'https://hotelriberadetriana.com',
      },
      {
        nombre: 'Hotel Petit Palace Vargas',
        direccion: 'Plaza La Legión 7, 41001',
        distancia: '12 min from the hacienda',
        telefono: '+34 954 26 80 80',
        reserva: 'https://www.petitpalace.com',
      },
    ],
  },

  // 8. Seville Guide
  guia: {
    heading: 'SEVILLE GUIDE',
    subtitulo: 'Places you must visit if you are in the city',
    lugares: [
      {
        nombre: 'Real Alcázar',
        descripcion: 'It is the oldest royal palace still in use in Europe, located a few minutes walk from the historic center. It combines Islamic, Mudejar, Gothic, Renaissance and Baroque styles through a thousand years of history.',
        imagen:
          'https://i.pinimg.com/736x/85/e1/82/85e182f33428df40d5c92cd8c97994fc.jpg',
        imagenAlt: 'Arches of the Real Alcázar of Seville',
      },
      {
        nombre: 'Plaza de España',
        descripcion: 'It stands out for its large semicircular building with facades of arches and columns.',
        imagen:
          'https://i.pinimg.com/736x/f7/04/46/f7044621d6c53e07b4a65119775b0f5f.jpg',
        imagenAlt: 'Plaza de España of Seville',
      },
      {
        nombre: 'Barrio Santa Cruz',
        descripcion: 'It was the old Jewish quarter of Seville. Today it is one of the most popular and busy neighborhoods in the city.',
        imagen:
          'https://i.pinimg.com/1200x/ec/18/ae/ec18ae3f6f14f3f3205022b2f7ea78c9.jpg',
        imagenAlt: 'Santa Cruz Neighborhood',
      },
      {
        nombre: 'Las Setas',
        descripcion: 'Known for being the largest wooden structure in the world.',
        imagen:
          'https://i.pinimg.com/736x/c7/b3/0d/c7b30d8b6c553eb287f1c0312d42410a.jpg',
        imagenAlt: 'Setas',
      },
      {
        nombre: 'Triana',
        descripcion: 'This neighborhood is famous for its strong own identity, its deep-rooted flamenco tradition, its maritime history and its location on the other side of the Guadalquivir river connected by the popular Isabel II Bridge.',
        imagen:
          'https://i.pinimg.com/736x/7d/3f/6b/7d3f6bf23a7eceabf39ae5637ac2658c.jpg',
        imagenAlt: 'Triana',
      },
    ],
  },

  // 9. Gifts
  regalo: {
    heading: 'Gifts',
    parrafo:
      'For our future home we have a toaster, coffee maker, and even too many mate cups. If you would like to give us a gift, our honeymoon fund will appreciate it:',
    datos: {
      titular: 'Julieta Llarrull & Julio Cirera Benito',
      iban: 'ES5615830001119150667751',
      bic: 'REVOESM2',
    },
    botonLabel: 'View details',
  },

  // 10. RSVP
  rsvp: {
    heading: 'RSVP',
    intro:
      'Please confirm your attendance as soon as possible. Below you will find a form with the information we need. A few weeks before the wedding you will receive a new reminder so you can confirm your attendance definitively.',
    fechaLimite: 'x of xxxxx 202x',
    // Form fields
    form: {
      nombre: 'Full name',
      nombrePlaceholder: 'Enter your name',
      telefono: 'Phone',
      telefonoPlaceholder: 'Enter your phone',
      email: 'Email',
      emailPlaceholder: 'Invalid email',
      asistencia: 'Will you attend?',
      siAsisto: 'Yes, I will be there',
      noAsisto: 'I cannot attend',
      acompanantes: 'Number of companions',
      autobus: 'Bus: Will you need the bus service?',
      si: 'Yes',
      no: 'No',
      restricciones: 'Dietary restrictions (Please indicate if you have any allergies, intolerances, or special dietary needs)',
      cancion: 'Must-play song (What is that song that you think must definitely play at our wedding?)',
      mensaje: 'Message (optional)',
      enviar: 'Confirm attendance',
      enviando: 'Sending...',
      error: 'There was a problem sending. Please try again in a few minutes.',
      exitoTitulo: 'Thank you!',
      exitoMensaje: 'We received your confirmation. We have sent you an email with the details.',
      enviarOtra: 'Send another response'
    }
  },

  // 11. FAQ / Contact
  faq: {
    heading: 'Frequently Asked Questions',
    preguntas: [
      {
        q: 'DRESS CODE',
        a: 'Formal',
      },
      {
        q: 'PARKING',
        a: 'At the hacienda we have space for you to leave your car without a problem. If it is more comfortable for you, you can come in your own vehicle; if not, you also have the option to come by bus.',
      },
      {
        q: 'ALLERGIES',
        a: 'Indicate your restrictions on the confirmation form and we will take them into account.',
      },
    ],
    contacto: {
      texto: 'If you have any questions, you can write to us at:',
      email: 'Julieta.Julio.boda@gmail.com',
      telefono: '+34 635 07 11 85',
    },
    firma: 'We are thrilled to share this special day with you.',
    firma2: 'Julieta & Julio',
  },
};
