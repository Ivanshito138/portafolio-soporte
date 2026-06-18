export const translations = {
  es: {
    nav: {
      about: 'Sobre Mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      contact: 'Contacto',
      contactBtn: 'Contactar',
    },
    hero: {
      viewProjects: 'Ver Proyectos',
      downloadCV: 'Descargar CV',
      contactMe: 'Contactar',
    },
    about: {
      title: 'Sobre Mí',
      yearsExperience: 'Años de Experiencia',
      ticketsResolved: 'Tickets Resueltos',
      satisfaction: 'Satisfacción',
    },
    skills: {
      title: 'Habilidades',
      technical: 'Técnicas',
      soft: 'Blandas',
    },
    projects: { title: 'Proyectos Destacados' },
    certifications: { title: 'Certificaciones' },
    contact: {
      title: 'Contacto',
      email: 'Email',
      phone: 'Teléfono',
      location: 'Ubicación',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      role: 'Analista de Soporte Técnico',
    },
    lang: {
      switchTo: 'English',
    },
    theme: {
      toggle: 'Cambiar modo oscuro',
    },
    menu: {
      open: 'Abrir menú',
      close: 'Cerrar menú',
    },
    notFound: {
      title: 'Página no encontrada',
      description: 'La página que buscas no existe o ha sido movida.',
      goHome: 'Volver al inicio',
    },
    meta: {
      description: 'Portafolio de Iván Raúl Mesco Benavente, Analista de Soporte Técnico. Resolviendo problemas tecnológicos con más de 3 años de experiencia',
      keywords: 'soporte técnico, analista de soporte, técnico en TI, help desk, Lima, Perú, Iván Raúl Mesco Benavente, servicio técnico, administración de redes, Microsoft 365, Active Directory',
    },
  },
  en: {
    nav: {
      about: 'About Me',
      skills: 'Skills',
      projects: 'Projects',
      certifications: 'Certifications',
      contact: 'Contact',
      contactBtn: 'Get in Touch',
    },
    hero: {
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
      contactMe: 'Contact Me',
    },
    about: {
      title: 'About Me',
      yearsExperience: 'Years of Experience',
      ticketsResolved: 'Tickets Resolved',
      satisfaction: 'Satisfaction',
    },
    skills: {
      title: 'Skills',
      technical: 'Technical',
      soft: 'Soft',
    },
    projects: { title: 'Featured Projects' },
    certifications: { title: 'Certifications' },
    contact: {
      title: 'Contact',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
    },
    footer: {
      rights: 'All rights reserved.',
      role: 'Technical Support Analyst',
    },
    lang: {
      switchTo: 'Español',
    },
    theme: {
      toggle: 'Toggle dark mode',
    },
    menu: {
      open: 'Open menu',
      close: 'Close menu',
    },
    notFound: {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist or has been moved.',
      goHome: 'Go back home',
    },
    meta: {
      description: 'Portfolio of Iván Raúl Mesco Benavente, Technical Support Analyst. Solving technology problems with over 3 years of experience',
      keywords: 'technical support, IT support analyst, help desk, Lima Peru, Iván Raúl Mesco Benavente, network administration, Microsoft 365, Active Directory, troubleshooting',
    },
  },
};

export type Lang = keyof typeof translations;
