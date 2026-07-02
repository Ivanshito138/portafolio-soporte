export const portfolio = {
  name: "Iván Raúl Mesco Benavente",
  title: "Analista de Soporte Técnico",
  tagline: "Resolviendo problemas tecnológicos.",
  about: {
    paragraph1: "Profesional de TI con más de 3 años de experiencia en soporte técnico, resolución de incidencias y atención al cliente. Especializado en diagnóstico de problemas de hardware y software, administración de redes y sistemas operativos.",
    paragraph2: "Apasionado por la tecnología y comprometido con brindar soluciones eficientes que mejoren la productividad de los usuarios. Experiencia comprobada en entornos corporativos y soporte remoto/presencial.",
  },
  email: "ivan.raul.mesco.benavente@gmail.com",
  phone: "+51 906 289 871",
  location: "Lima, Perú",
  linkedin: "https://www.linkedin.com/in/ivan-raul-mesco-benavente/",
  github: "https://github.com/Ivanshito138",
};

export const skills = {
  technical: [
    { name: "Windows 10/11", level: 95 },
    { name: "Linux (Ubuntu, CentOS)", level: 85 },
    { name: "Active Directory", level: 90 },
    { name: "Redes TCP/IP", level: 85 },
    { name: "Office 365 / Microsoft 365", level: 95 },
    { name: "Ticketing (Jira, ServiceNow)", level: 90 },
    { name: "Virtualización (VMware, Hyper-V)", level: 80 },
    { name: "PowerShell / Bash", level: 75 },
    { name: "Hardware (ensamblaje/reparación)", level: 90 },
    { name: "Copias de seguridad y recuperación", level: 85 },
  ],
  soft: [
    "Comunicación efectiva",
    "Resolución de problemas",
    "Atención al cliente",
    "Trabajo en equipo",
    "Gestión del tiempo",
    "Pensamiento analítico",
  ],
};

export const certifications = [
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    year: 2023,
    icon: "🎓",
  },
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    year: 2023,
    icon: "🌐",
  },
  {
    name: "Microsoft 365 Fundamentals (MS-900)",
    issuer: "Microsoft",
    year: 2024,
    icon: "💻",
  },
  {
    name: "Técnico en Computación e Informática",
    issuer: "Instituto CESCA",
    year: 2016,
    icon: "🎓",
    pdf: "/certificates/tecnico-computacion.pdf",
  },
  {
    name: "CSS Avanzado",
    issuer: "midudev",
    year: 2025,
    icon: "🎨",
    pdf: "/certificates/css-avanzado.pdf",
  },
  {
    name: "Git y GitHub",
    issuer: "Udemy",
    year: 2025,
    icon: "🐙",
    pdf: "/certificates/git-github.pdf",
  },
  {
    name: "HTML Avanzado",
    issuer: "midudev",
    year: 2025,
    icon: "🌐",
    pdf: "/certificates/html-avanzado.pdf",
  },
  {
    name: "OpenCode",
    issuer: "OpenCode",
    year: 2026,
    icon: "🤖",
    pdf: "/certificates/opencodeCertificado.pdf",
  },
];

export const projects = [
  {
    title: "Migración a Windows 11",
    description: "Lideré la migración de 200+ equipos a Windows 11 en una empresa, incluyendo compatibilidad de aplicaciones, configuración de políticas y capacitación a usuarios.",
    tags: ["Windows 11", "Active Directory", "GPO", "PowerShell"],
    metrics: "200+ equipos | 98% éxito | 2 semanas",
  },
  {
    title: "Sistema de Ticketing Automatizado",
    description: "Implementé y configuré un sistema de tickets con Jira Service Management, automatizando la asignación y categorización de incidencias para reducir tiempos de respuesta.",
    tags: ["Jira", "Automatización", "ITSM", "SLA"],
    metrics: "-40% tiempo respuesta | +60% satisfacción",
  },
  {
    title: "Documentación de Red Corporativa",
    description: "Documenté toda la infraestructura de red de la empresa, incluyendo topología, configuración de switches, routers y puntos de acceso para facilitar el troubleshooting.",
    tags: ["Redes", "Cisco", "Documentación", "Diagramas"],
    metrics: "50+ dispositivos | 100% documentado",
  },
  {
    title: "Script de Mantenimiento Automático",
    description: "Desarrollé scripts en PowerShell para automatizar tareas de mantenimiento: limpieza de disco, actualización de drivers, verificación de servicios y generación de reportes.",
    tags: ["PowerShell", "Automatización", "Mantenimiento", "Reportes"],
    metrics: "-70% trabajo manual | Reportes diarios",
  },
];
