import navigationData from "./sections/navigation.json";
import heroData from "./sections/hero.json";
import aboutData from "./sections/about.json";
import skillsData from "./sections/skills.json";
import servicesData from "./sections/services.json";
import experienceData from "./sections/experience.json";
import educationData from "./sections/education.json";
import projectsData from "./sections/projects.json";
import contactData from "./sections/contact.json";
import footerData from "./sections/footer.json";

export type NavItem = {
  id: string;
  label: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
};

export type NavigationContent = {
  brand: string;
  items: NavItem[];
};

export type HeroCta = {
  label: string;
  href: string;
  icon: string;
  download?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type HeroContent = {
  badge: string;
  titlePrefix: string;
  name: string;
  role: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  socials: SocialLink[];
  image: ImageAsset;
};

export type StatItem = {
  value: string;
  label: string;
};

export type AboutContent = {
  title: string;
  description?: string;
  subtitle: string;
  summary: string;
  image: ImageAsset;
  stats: StatItem[];
  focusAreas: string[];
};

export type SkillBar = {
  label: string;
  icon: string;
  percentage: number;
};

export type SkillsContent = {
  title: string;
  description: string;
  subtitle: string;
  skillBars: SkillBar[];
  image: ImageAsset;
  techStackTitle: string;
  techStackDescription: string;
  techStackLabel: string;
  techStack: string[];
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export type ServicesContent = {
  title: string;
  description: string;
  cardLabel: string;
  items: ServiceItem[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type ExperienceContent = {
  title: string;
  description: string;
  items: ExperienceItem[];
};

export type Education = {
  degree: string;
  university: string;
  period: string;
  gpa: string;
};

export type LanguageItem = {
  name: string;
  level: string;
};

export type EducationContent = {
  title: string;
  description: string;
  educationLabel: string;
  languagesLabel: string;
  languagesTagline: string;
  awardsLabel: string;
  gpaLabel: string;
  education: Education;
  languages: LanguageItem[];
  awards: string[];
};

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

export type ProjectsContent = {
  title: string;
  description: string;
  viewLabel: string;
  items: ProjectItem[];
};

export type ContactCard = {
  label: string;
  value: string;
  href?: string;
  icon: string;
};

export type ContactInfoPanel = {
  title: string;
  description: string;
  badge: string;
};

export type ContactCvPanel = {
  title: string;
  description: string;
  buttonLabel: string;
  cvUrl: string;
};

export type ContactAvailabilityPanel = {
  title: string;
  description: string;
  badge: string;
  tags: string[];
};

export type ContactFormFields = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  projectLabel: string;
  projectPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
};

export type ContactFormPanel = {
  title: string;
  description: string;
  badge: string;
  fields: ContactFormFields;
  footerNote: string;
  buttonLabel: string;
};

export type ContactContent = {
  title: string;
  description: string;
  infoPanel: ContactInfoPanel;
  cards: ContactCard[];
  cvPanel: ContactCvPanel;
  availabilityPanel: ContactAvailabilityPanel;
  formPanel: ContactFormPanel;
};

export type FooterContent = {
  text: string;
};

export const navigationContent: NavigationContent = navigationData;
export const heroContent: HeroContent = heroData;
export const aboutContent: AboutContent = aboutData;
export const skillsContent: SkillsContent = skillsData;
export const servicesContent: ServicesContent = servicesData;
export const experienceContent: ExperienceContent = experienceData;
export const educationContent: EducationContent = educationData;
export const projectsContent: ProjectsContent = projectsData;
export const contactContent: ContactContent = contactData;
export const footerContent: FooterContent = footerData;
