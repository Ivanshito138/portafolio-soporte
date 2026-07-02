export const portfolio = {
  name: "Iván Raúl Mesco Benavente",
  title: "Technical Support Analyst",
  tagline: "Solving technology problems.",
  about: {
    paragraph1: "IT professional with over 3 years of experience in technical support, incident resolution, and customer service. Specialized in diagnosing hardware and software issues, network administration, and operating systems.",
    paragraph2: "Passionate about technology and committed to providing efficient solutions that improve user productivity. Proven experience in corporate environments and remote/onsite support.",
  },
  email: "ivan.raul.mesco.benavente@gmail.com",
  phone: "+51 906 289 871",
  location: "Lima, Peru",
  linkedin: "https://www.linkedin.com/in/ivan-raul-mesco-benavente/",
  github: "https://github.com/Ivanshito138",
};

export const skills = {
  technical: [
    { name: "Windows 10/11", level: 95 },
    { name: "Linux (Ubuntu, CentOS)", level: 85 },
    { name: "Active Directory", level: 90 },
    { name: "TCP/IP Networking", level: 85 },
    { name: "Office 365 / Microsoft 365", level: 95 },
    { name: "Ticketing (Jira, ServiceNow)", level: 90 },
    { name: "Virtualization (VMware, Hyper-V)", level: 80 },
    { name: "PowerShell / Bash", level: 75 },
    { name: "Hardware (assembly/repair)", level: 90 },
    { name: "Backup and Recovery", level: 85 },
  ],
  soft: [
    "Effective Communication",
    "Problem Solving",
    "Customer Service",
    "Teamwork",
    "Time Management",
    "Analytical Thinking",
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
    name: "Computer Science & IT Technician",
    issuer: "Instituto CESCA",
    year: 2016,
    icon: "🎓",
    pdf: "/certificates/tecnico-computacion.pdf",
  },
  {
    name: "Advanced CSS",
    issuer: "midudev",
    year: 2025,
    icon: "🎨",
    pdf: "/certificates/css-avanzado.pdf",
  },
  {
    name: "Git & GitHub",
    issuer: "Udemy",
    year: 2025,
    icon: "🐙",
    pdf: "/certificates/git-github.pdf",
  },
  {
    name: "Advanced HTML",
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
    title: "Windows 11 Migration",
    description: "Led the migration of 200+ workstations to Windows 11 in a company, including application compatibility, policy configuration, and user training.",
    tags: ["Windows 11", "Active Directory", "GPO", "PowerShell"],
    metrics: "200+ devices | 98% success | 2 weeks",
  },
  {
    title: "Automated Ticketing System",
    description: "Implemented and configured a ticket system with Jira Service Management, automating assignment and categorization of incidents to reduce response times.",
    tags: ["Jira", "Automation", "ITSM", "SLA"],
    metrics: "-40% response time | +60% satisfaction",
  },
  {
    title: "Corporate Network Documentation",
    description: "Documented the entire company network infrastructure, including topology, switch configuration, routers, and access points to facilitate troubleshooting.",
    tags: ["Networking", "Cisco", "Documentation", "Diagrams"],
    metrics: "50+ devices | 100% documented",
  },
  {
    title: "Automated Maintenance Script",
    description: "Developed PowerShell scripts to automate maintenance tasks: disk cleanup, driver updates, service verification, and report generation.",
    tags: ["PowerShell", "Automation", "Maintenance", "Reports"],
    metrics: "-70% manual work | Daily reports",
  },
];
