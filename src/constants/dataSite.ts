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


export const blogPostsBlog: BlogPost[] = [
  {
    title: "El futuro de los CMS Headless en 2026",
    description: "Descubre por qué la arquitectura desacoplada está dominando el mercado y cómo puede mejorar el rendimiento de tu sitio web de manera radical.",
    content: "",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    tags: ["Dev", "CMS", "Performance"],
    relevance: "Tech Data",
    relevanceType: "tech",
  },
  {
    title: "IA Generativa en el Diseño de Interfaces",
    description: "Cómo las nuevas herramientas de inteligencia artificial están cambiando el flujo de trabajo de los diseñadores de interfaces en todo el mundo.",
    content: "",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
    tags: ["IA", "UX", "WebDesign"],
    relevance: "Breaking News",
    relevanceType: "news",
  },
  {
    title: "Optimización de Core Web Vitals",
    description: "Guía definitiva para lograr un puntaje perfecto en Google Lighthouse optimizando la carga de fuentes y el renderizado de imágenes.",
    content: "",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    tags: ["SEO", "Performance", "Google"],
    relevance: "Dev News",
    relevanceType: "dev",
  },
  {
    title: "Nuevos Estándares de Accesibilidad",
    description: "Todo lo que necesitas saber sobre las actualizaciones de la WCAG y cómo asegurar que tu sitio web sea inclusivo para todos los usuarios.",
    content: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    tags: ["A11y", "W3C", "Frontend"],
    relevance: "Tech Data",
    relevanceType: "tech",
  },
  {
    title: "React 20: ¿Qué hay de nuevo?",
    description: "Analizamos las nuevas funcionalidades de la versión más reciente de React, incluyendo el compilador automático optimizado.",
    content: "",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
    tags: ["React", "JavaScript", "Frontend"],
    relevance: "Dev News",
    relevanceType: "dev",
  },
  {
    title: "Ciberseguridad en el Edge Computing",
    description: "Protegiendo los datos en la periferia: estrategias esenciales para aplicaciones distribuidas en 2026.",
    content: "",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    tags: ["Security", "Edge", "Cloud"],
    relevance: "Tech Data",
    relevanceType: "tech",
  },
  {
    title: "El auge de la Computación Cuántica en la Nube",
    description: "AWS y Google anuncian nuevos nodos cuánticos accesibles para desarrolladores web a través de APIs estándar.",
    content: "",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600",
    tags: ["Quantum", "Cloud", "Future"],
    relevance: "Breaking News",
    relevanceType: "news",
  },
  {
    title: "TypeScript 6.0: Tipado Nominal",
    description: "La característica más esperada por la comunidad finalmente llega para mejorar la seguridad de nuestros dominios de datos.",
    content: "",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=600",
    tags: ["TypeScript", "Dev", "Backend"],
    relevance: "Dev News",
    relevanceType: "dev",
  },
  {
    title: "Sostenibilidad Digital: Web Verde",
    description: "Cómo reducir la huella de carbono de tus aplicaciones mediante la optimización de transferencia de datos y servidores eco-friendly.",
    content: "",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600",
    tags: ["GreenIT", "Ethics", "Web"],
    relevance: "Tech Data",
    relevanceType: "tech",
  },
  {
    title: "WebGPU: Gráficos de Consola en el Navegador",
    description: "Explorando el potencial de WebGPU para crear experiencias 3D inmersivas sin necesidad de plugins externos.",
    content: "",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
    tags: ["WebGPU", "3D", "Graphics"],
    relevance: "Dev News",
    relevanceType: "dev",
  },
  {
    title: "Micro-frontends con Module Federation",
    description: "Patrones avanzados para escalar aplicaciones empresariales masivas sin morir en el intento de despliegue.",
    content: "",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
    tags: ["Architecture", "Scalability", "JS"],
    relevance: "Tech Data",
    relevanceType: "tech",
  },
  {
    title: "Apple Vision Pro 3 y la Web Espacial",
    description: "Nuevas APIs de Safari permiten interactuar con elementos DOM en un espacio tridimensional de forma nativa.",
    content: "",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=600",
    tags: ["AR", "VisionOS", "Apple"],
    relevance: "Breaking News",
    relevanceType: "news",
  },
  {
    title: "Adiós a las Contraseñas: Passkeys Everywhere",
    description: "El consorcio FIDO anuncia la adopción del 99% de los sitios globales del estándar de autenticación sin contraseña.",
    content: "",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=600",
    tags: ["Security", "Web", "Auth"],
    relevance: "Breaking News",
    relevanceType: "news",
  },
  {
    title: "Rust en el Frontend: ¿El fin de JS?",
    description: "Analizamos el crecimiento de frameworks basados en Rust que compilan a WebAssembly con un rendimiento superior.",
    content: "",
    image: "https://us1.discourse-cdn.com/flex019/uploads/rust_lang/original/3X/e/8/e8c2d205923872d40940b27bcb5a4301c7dbb67a.jpeg",
    tags: ["Rust", "Wasm", "Performance"],
    relevance: "Dev News",
    relevanceType: "dev",
  },
  {
    title: "Diseño Adaptativo para Pantallas Plegables",
    description: "Nuevas técnicas de CSS para manejar el 'fold' y aprovechar las pantallas duales en dispositivos móviles modernos.",
    content: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07W7KP2F1LCZMmL0nO3zyrDwW-gbq3qTN7_B8AlGURFFVsmgqoPSl49Bs3Njh",
    tags: ["CSS", "Mobile", "UI"],
    relevance: "Tech Data",
    relevanceType: "tech",
  },
];