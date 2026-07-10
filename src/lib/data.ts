export type Treatment = {
  id: string;
  name: string;
  description: string;
  duration: string;
  image: string;
};

export const treatments: Treatment[] = [
  {
    id: "limpieza-facial",
    name: "Limpieza Facial Profunda",
    description:
      "Purificación en profundidad con extracción manual y activos calmantes para una piel visiblemente renovada.",
    duration: "60 min",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "dermaplaning",
    name: "Dermaplaning",
    description:
      "Exfoliación mecánica de precisión que revela una textura uniforme y luminosa desde la primera sesión.",
    duration: "45 min",
    image:
      "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "radiofrecuencia",
    name: "Radiofrecuencia Facial",
    description:
      "Estimulación de colágeno mediante tecnología térmica controlada para firmeza y contorno definido.",
    duration: "50 min",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "criolipolisis",
    name: "Criolipólisis",
    description:
      "Reducción localizada de adiposidad mediante frío controlado, sin cirugía ni tiempo de recuperación.",
    duration: "70 min",
    image:
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "masajes",
    name: "Masaje de Bienestar",
    description:
      "Protocolo manual diseñado para liberar tensión profunda y restaurar el equilibrio corporal.",
    duration: "80 min",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "depilacion-laser",
    name: "Depilación Láser",
    description:
      "Tecnología de diodo de última generación, resultados progresivos y una piel impecablemente lisa.",
    duration: "40 min",
    image:
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "hydrafacial",
    name: "HydraFacial",
    description:
      "Hidratación, exfoliación e infusión de activos en un único protocolo de resultados inmediatos.",
    duration: "55 min",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1400&auto=format&fit=crop",
  },
];

export type Benefit = {
  id: string;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    id: "tecnologia",
    title: "Tecnología de última generación",
    description: "Equipamiento certificado, renovado y calibrado bajo estándares clínicos internacionales.",
  },
  {
    id: "profesionales",
    title: "Profesionales certificados",
    description: "Un equipo formado en las técnicas más avanzadas de estética y bienestar integral.",
  },
  {
    id: "personalizada",
    title: "Atención personalizada",
    description: "Cada protocolo se diseña a partir de un diagnóstico individual, sin fórmulas genéricas.",
  },
  {
    id: "productos",
    title: "Productos premium",
    description: "Trabajamos exclusivamente con líneas cosméticas de grado profesional y trazabilidad clínica.",
  },
  {
    id: "naturales",
    title: "Resultados naturales",
    description: "Buscamos realzar, nunca transformar. El equilibrio es nuestro criterio estético.",
  },
  {
    id: "ambiente",
    title: "Ambiente relajante",
    description: "Espacios diseñados para que cada visita sea, en sí misma, un momento de calma.",
  },
];

export type Result = {
  id: string;
  title: string;
  category: string;
  before: string;
  after: string;
};

export const results: Result[] = [
  {
    id: "r1",
    title: "Firmeza facial",
    category: "Radiofrecuencia",
    before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "r2",
    title: "Luminosidad",
    category: "HydraFacial",
    before: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "r3",
    title: "Contorno corporal",
    category: "Criolipólisis",
    before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "r4",
    title: "Textura uniforme",
    category: "Dermaplaning",
    before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1200&auto=format&fit=crop",
  },
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    id: "t1",
    name: "Dra. Valentina Rocca",
    role: "Directora Médica",
    bio: "Especialista en medicina estética con más de 15 años de trayectoria clínica.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "t2",
    name: "Julieta Fernández",
    role: "Cosmetóloga Senior",
    bio: "Referente en protocolos faciales de alta precisión y tecnología no invasiva.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "t3",
    name: "Martina Loyola",
    role: "Especialista Corporal",
    bio: "Enfocada en contorno corporal y bienestar a través de técnicas manuales avanzadas.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "q1",
    quote:
      "Desde la primera consulta entendí que esto era distinto. El nivel de detalle en cada tratamiento y la calidez del equipo son incomparables.",
    name: "Camila Estévez",
    role: "Paciente desde 2022",
    rating: 5,
  },
  {
    id: "q2",
    quote:
      "Un espacio donde el tiempo se detiene. Los resultados son notables, pero lo que más valoro es la escucha real detrás de cada protocolo.",
    name: "Sofía Márquez",
    role: "Paciente desde 2023",
    rating: 5,
  },
  {
    id: "q3",
    quote:
      "Profesionalismo absoluto. Cada visita se siente como una decisión de cuidado personal, no como un trámite estético más.",
    name: "Renata Boggio",
    role: "Paciente desde 2021",
    rating: 5,
  },
];

export type Promotion = {
  id: string;
  title: string;
  description: string;
  tag: string;
};

export const promotions: Promotion[] = [
  {
    id: "p1",
    title: "Pack Renueva",
    description: "3 sesiones de HydraFacial + limpieza profunda de regalo.",
    tag: "Más elegido",
  },
  {
    id: "p2",
    title: "Ritual de Bienestar",
    description: "Masaje de 80 min + acceso a sala de relajación.",
    tag: "Nuevo",
  },
  {
    id: "p3",
    title: "Gift Card Aura",
    description: "Un regalo de cuidado, sin fecha de vencimiento.",
    tag: "Regalo",
  },
];

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    id: "f1",
    question: "¿Necesito una consulta previa antes de mi primer tratamiento?",
    answer:
      "Sí. Toda primera visita incluye un diagnóstico personalizado sin cargo, donde definimos el protocolo más adecuado para tu piel y objetivos.",
  },
  {
    id: "f2",
    question: "¿Los tratamientos requieren tiempo de recuperación?",
    answer:
      "La mayoría de nuestros protocolos no invasivos no requieren reposo. Te indicaremos cuidados específicos según cada procedimiento.",
  },
  {
    id: "f3",
    question: "¿Cada cuánto se recomienda repetir un tratamiento?",
    answer:
      "Depende del protocolo y tu piel. En la consulta inicial diseñamos un plan con frecuencia sugerida para resultados sostenidos.",
  },
  {
    id: "f4",
    question: "¿Trabajan con productos aptos para pieles sensibles?",
    answer:
      "Sí, contamos con líneas específicas para pieles reactivas o sensibilizadas, siempre bajo supervisión profesional.",
  },
  {
    id: "f5",
    question: "¿Cómo puedo reservar un turno?",
    answer:
      "Podés reservar directamente desde el formulario de esta página, por WhatsApp o llamando a nuestro centro.",
  },
];
