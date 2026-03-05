import processOne from "@assets/images/process-1.png";
import processTwo from "@assets/images/process-2.png";
import processThree from "@assets/images/process-3.png";
import processFour from "@assets/images/process-4.png";
import processFive from "@assets/images/process-5.png";
import processSix from "@assets/images/process-6.png";

export const processSteps = [
  {
    title: "Conocerte",
    subtitle: "Entender quién eres, qué hacer y tus metas",
    image: processOne,
    details: [
      { title: "Identificar", value: "Objetivos y necesidades." },
      { title: "Análisis", value: "Público objetivo y competencia" },
      {
        title: "Recopilación",
        value: "Referencias, estilos y funcionalidades",
      },
    ],
  },
  {
    title: "Planificación",
    subtitle: " Organizar el contenido y definir la estructura de la web",
    image: processTwo,
    details: [
      { title: "Rastreo", value: "Mapa del sitio (sitemap)" },
      { title: "Definición", value: "Páginas y secciones" },
      { title: "Navegación", value: "Movilidad entre páginas del sitio" },
    ],
  },
  {
    title: "Bocetar / Diseñar",
    subtitle: "Crear un esquema y dar vida visual básica de tu web",
    image: processThree,
    details: [
      { title: "Validar", value: "Estructura y flujo de navegación" },
      { title: "Versiones", value: "Escritorio y móvil" },
      {
        title: "Revisión y aprobación",
        value: "Corroborar que se visualice correctamente",
      },
    ],
  },
  {
    title: "Desarrollar",
    subtitle: "Convertir el diseño en una web funcional",
    image: processFour,
    details: [
      {
        title: "Programación",
        value: "Codificación de interfaz y funcionalidades",
      },
      { title: "Carga", value: "Se simula con datos válidos" },
    ],
  },
  {
    title: "Testear",
    subtitle: "Asegurar que todo funciona correctamente",
    image: processFive,
    details: [
      {
        title: "Browsers",
        value: "Revisión en los navegadores más usados",
      },
      {
        title: "Datos",
        value: "Test de formularios, links, comportamientos, etc.",
      },
      { title: "Correción", value: "Corregir errores y ajustes finales" },
    ],
  },
  {
    title: "Lanzamiento!!",
    subtitle:
      "Publicar tu sitio oficialmente en internet. Ya puedes visualizarlo y compartirlo!!",
    image: processSix,
    details: [
      { title: "Publicación", value: "Se sube tu sitio" },
      {
        title: "Verificación",
        value: "Se revisa una vez más que todo este correcto",
      },
    ],
  },
];


export const team = [
  {
    name: "Carlos Rivera",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/150?u=carlos",
    bio: "Más de 10 años arquitectando soluciones escalables. Experto en React, Node.js y sistemas distribuidos de alto rendimiento.",
  },
  {
    name: "Elena Martínez",
    role: "UX/UI Designer",
    image: "https://i.pravatar.cc/150?u=elena",
    bio: "Especialista en interfaces intuitivas y sistemas de diseño. Ha liderado el rediseño de plataformas para marcas globales.",
  },
  {
    name: "Julián Sastre",
    role: "CMS Architect",
    image: "https://i.pravatar.cc/150?u=julian",
    bio: "Experto en implementación de CMS headless y estrategias de optimización de contenido para SEO y rendimiento extremo.",
  },
  {
    name: "Sofia Vega",
    role: "Frontend Engineer",
    image: "https://i.pravatar.cc/150?u=sofia",
    bio: "Apasionada por las micro-animaciones y el rendimiento web. Especialista en Astro y frameworks modernos de CSS.",
  },
];

export const cmsProjects: Project[] = [
  {
    title: "Nexus E-commerce",
    description: "Plataforma de comercio electrónico de alto rendimiento con gestión de inventario en tiempo real y pasarela de pagos integrada.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    link: "#",
    deliveryTime: "6 semanas",
    type: "CMS"
  },
  {
    title: "Pulse Blog Engine",
    description: "Sistema de gestión de contenidos optimizado para SEO con editor Markdown, SSR y soporte multi-autor.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000",
    link: "#",
    deliveryTime: "4 semanas",
    type: "CMS"
  },
  {
    title: "Inventory Sync Pro",
    description: "Panel administrativo B2B para control de stock masivo con integración de APIs externas y reportes en PDF.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000",
    link: "#",
    deliveryTime: "8 semanas",
    type: "CMS"
  }
];

export const landingProjects: Project[] = [
  {
    title: "SaaS Launchpad",
    description: "Landing page de alta conversión para startups tecnológicas con animaciones interactivas y secciones A/B testing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    link: "#",
    deliveryTime: "1 semana",
    type: "Landing"
  },
  {
    title: "Evento Pro 2026",
    description: "Sitio de registro de una sola página para conferencias internacionales con integración de tickets y cuenta regresiva.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    link: "#",
    deliveryTime: "2 semanas",
    type: "Landing"
  },
  {
    title: "App Showcase",
    description: "Presentación minimalista para aplicaciones móviles con descarga directa y visualización de features en scroll.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
    link: "#",
    deliveryTime: "1 semana",
    type: "Landing"
  }
];


export const websiteProjects: Project[] = [
  {
    title: "Corporate Horizon",
    description: "Portal institucional con múltiples secciones, integración de blog y sistema de reclutamiento integrado.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    link: "#",
    deliveryTime: "4 semanas",
    type: "Sitio Web"
  },
  {
    title: "Studio Portfolio",
    description: "Sitio web para agencias creativas con galerías dinámicas y transiciones de página fluidas.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000",
    link: "#",
    deliveryTime: "3 semanas",
    type: "Sitio Web"
  },
  {
    title: "Legal Sphere",
    description: "Sitio profesional para firmas legales con gestión de citas y repositorio de documentos privados.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
    link: "#",
    deliveryTime: "5 semanas",
    type: "Sitio Web"
  }
];