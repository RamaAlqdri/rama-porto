export const cvUrl = "/cv/ramadhani-al-qadri-cv.pdf";

export type NavItem = {
  id: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Project" },
  { id: "contact", label: "Contact" }
];

export type StatItem = {
  value: string;
  label: string;
};

export const stats: StatItem[] = [
  { value: "3+", label: "Years Experience" },
  { value: "12", label: "Projects Delivered" },
  { value: "4", label: "Awards & Papers" }
];

export const focusAreas: string[] = [
  "Product Strategy",
  "System Design",
  "UI/UX Direction",
  "Data Analytics"
];

export const techStack: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "NestJS",
  "Node.js",
  "PostgreSQL",
  "Firebase",
  "Tailwind CSS",
  "Flutter",
  "Docker",
  "Google Maps Platform",
  "Nginx Deployment"
];

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export const services: ServiceItem[] = [
  {
    title: "Fullstack Product Development",
    description:
      "End-to-end delivery for web platforms, dashboards, and internal tools.",
    icon: "bx bx-code-alt"
  },
  {
    title: "API & Integrations",
    description:
      "Secure APIs, payment systems, and third-party integrations that scale.",
    icon: "bx bx-server"
  },
  {
    title: "UI/UX & Design Systems",
    description: "Component-driven UI with consistent, modern experiences.",
    icon: "bx bx-palette"
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform Flutter apps with real-time features.",
    icon: "bx bx-mobile-alt"
  },
  {
    title: "DevOps & Deployment",
    description: "CI/CD pipelines, containerization, and VPS deployment.",
    icon: "bx bx-cloud-upload"
  },
  {
    title: "Data & Insights",
    description: "Analytics dashboards and reporting for better decisions.",
    icon: "bx bx-line-chart"
  }
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    role: "Chief Technology Officer",
    company: "AgriFlow Labs",
    period: "2022 - 2024",
    highlights: [
      "Led technical team in building agritech platform",
      "Architected full-stack solution for farmers and suppliers",
      "Managed technology roadmap and infrastructure"
    ]
  },
  {
    role: "Flutter Developer",
    company: "MobilityLab",
    period: "2021 - 2022",
    highlights: [
      "Developed cross-platform mobile application",
      "Integrated Firebase backend services",
      "Collaborated on UI flows for booking and payments"
    ]
  },
  {
    role: "Fullstack Engineering Intern",
    company: "Healthtech Studio",
    period: "2020 - 2021",
    highlights: [
      "Built analytics dashboard for healthcare operations",
      "Implemented secure APIs for patient records",
      "Improved deployment pipeline with Nginx"
    ]
  }
];

export type Education = {
  degree: string;
  university: string;
  period: string;
  gpa: string;
};

export const education: Education = {
  degree: "Bachelor of Informatics Engineering",
  university: "Mataram University",
  period: "2019 - 2023",
  gpa: "3.75 / 4.00"
};

export type LanguageItem = {
  name: string;
  level: string;
};

export const languages: LanguageItem[] = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Professional Working" }
];

export const awards: string[] = [
  "Best Paper Award - Academic Conference",
  "Top 5 Innovation Project - University Expo"
];

export type ProjectItem = {
  title: string;
  category: string;
  period: string;
  description: string;
  image: string;
  href: string;
  stack: string[];
  highlights: string[];
};

export const projectItems: ProjectItem[] = [
  {
    title: "Clinical Healthtech Platform",
    category: "Healthtech",
    period: "2023",
    description:
      "Comprehensive digital health system integrated with BPJS PCare, featuring patient records, drug inventory, and analytics dashboard for clinic operations.",
    image: "/image/work-1.jpg",
    href: "https://www.figma.com/proto/WN9Vsru5ZnaQCED4cPaUcE/Untitled?node-id=13-187&node-type=frame&t=mKlOuY6yPrOAKi0L-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13%3A187",
    stack: ["Next.js", "NestJS", "PostgreSQL", "RBAC", "Analytics"],
    highlights: [
      "Patient records and e-prescriptions",
      "Inventory and procurement workflows",
      "Operational analytics for clinic teams"
    ]
  },
  {
    title: "E-Bike Rental Platform",
    category: "Mobility",
    period: "2022",
    description:
      "Next.js frontend with NestJS backend for electric bike rental service, featuring real-time booking, payment integration, and VPS deployment.",
    image: "/image/work-2.jpg",
    href: "https://www.figma.com/proto/WN9Vsru5ZnaQCED4cPaUcE/Untitled?node-id=115-2&node-type=frame&t=mKlOuY6yPrOAKi0L-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=115%3A2&show-proto-sidebar=1",
    stack: ["Next.js", "NestJS", "Payments", "Maps", "Nginx"],
    highlights: [
      "Live availability and booking flow",
      "Integrated payments and vouchers",
      "Fleet monitoring dashboard"
    ]
  },
  {
    title: "Agritech Marketplace Platform",
    category: "Agritech",
    period: "2021",
    description:
      "Full-stack platform connecting farmers with suppliers, including marketplace, inventory management, and logistics coordination.",
    image: "/image/work-3.jpg",
    href: "https://www.figma.com/proto/WN9Vsru5ZnaQCED4cPaUcE/Untitled?node-id=115-35&node-type=frame&t=mKlOuY6yPrOAKi0L-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=115%3A35&show-proto-sidebar=1",
    stack: ["React", "Node.js", "PostgreSQL", "Logistics", "Firebase"],
    highlights: [
      "Farmer onboarding and supplier matching",
      "Order tracking and inventory sync",
      "Operational insights for agribusiness"
    ]
  }
];

export type ContactCard = {
  label: string;
  value: string;
  href?: string;
  icon: string;
};

export const contactCards: ContactCard[] = [
  {
    label: "Email",
    value: "rama.alqdri@example.com",
    href: "mailto:rama.alqdri@example.com",
    icon: "bx bx-envelope"
  },
  {
    label: "Phone",
    value: "+62 812-3456-7890",
    href: "tel:+6281234567890",
    icon: "bx bx-phone"
  },
  {
    label: "Location",
    value: "Mataram, Indonesia",
    icon: "bx bx-map"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ramadhani-al-qadri",
    href: "https://www.linkedin.com/in/ramadhani-al-qadri-660532154/",
    icon: "bx bxl-linkedin"
  },
  {
    label: "GitHub",
    value: "github.com/RamaAlqdri",
    href: "https://github.com/RamaAlqdri",
    icon: "bx bxl-github"
  }
];
