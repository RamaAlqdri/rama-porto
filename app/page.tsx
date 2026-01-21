"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const cvUrl = "/cv/ramadhani-al-qadri-cv.pdf";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Project" },
  { id: "contact", label: "Contact" }
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "12", label: "Projects Delivered" },
  { value: "4", label: "Awards & Papers" }
];

const focusAreas = [
  "Product Strategy",
  "System Design",
  "UI/UX Direction",
  "Data Analytics"
];

const techStack = [
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

const services = [
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

const experienceItems = [
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

const education = {
  degree: "Bachelor of Informatics Engineering",
  university: "Mataram University",
  period: "2019 - 2023",
  gpa: "3.75 / 4.00"
};

const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Professional Working" }
];

const awards = [
  "Best Paper Award - Academic Conference",
  "Top 5 Innovation Project - University Expo"
];

const projectItems = [
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

const contactCards = [
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

const navLinkBase =
  "relative text-white after:content-[''] after:absolute after:left-0 after:top-8 after:h-[0.18rem] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100";

const sectionTitleClass =
  "relative mt-4 mb-8 text-center text-[1.25rem] font-bold text-white min-[968px]:text-[2rem] md:mb-12 after:content-[''] after:absolute after:left-0 after:right-0 after:mx-auto after:top-8 after:h-[0.18rem] after:w-16 after:bg-accent md:after:top-12 md:after:w-20";

const sectionDescriptionClass =
  "mx-auto mb-10 max-w-2xl text-center text-sm text-white/70 md:text-base";

const sectionPadding = "pt-12 pb-8 md:pt-16 md:pb-12";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;
        const sectionTop = section.offsetTop - 50;
        if (scrollY >= sectionTop) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let active = true;
    let revealInstance: { destroy?: () => void } | null = null;

    const initReveal = async () => {
      const ScrollReveal = (await import("scrollreveal")).default;
      if (!active) return;

      const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2000,
        delay: 200
      });

      sr.reveal(
        ".home__data, .about__img, .skills__subtitle, .skills__text, .work__intro",
        {}
      );
      sr.reveal(
        ".home__img, .about__subtitle, .about__text, .skills__img",
        { delay: 400 }
      );
      sr.reveal(".home__social-icon", { interval: 200 });
      sr.reveal(
        ".cta__button, .skills__data, .stats__card, .tech__pill, .focus__chip, .service__card, .project__card, .contact__input, .contact__card, .experience__card, .education__card",
        { interval: 200 }
      );

      revealInstance = sr;
    };

    initReveal();

    return () => {
      active = false;
      revealInstance?.destroy?.();
    };
  }, []);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full shadow-nav">
        <nav className="nav mx-4 flex h-12 max-w-7xl items-center justify-between bg-base font-semibold md:h-[4.5rem] lg:mx-auto">
          <div>
            <a href="#" className="nav__logo text-accent">
              Ramadhani Al-Qadri
            </a>
          </div>

          <div
            className={`nav__menu fixed top-12 h-full w-4/5 bg-base p-8 transition-all duration-500 md:static md:h-auto md:w-auto md:bg-transparent md:p-0 md:transition-none ${
              menuOpen ? "right-0" : "-right-full"
            }`}
            id="nav-menu"
          >
            <ul className="nav__list flex flex-col gap-8 md:flex-row md:gap-12">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li className="nav__item" key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`${navLinkBase} ${
                        isActive ? "after:scale-x-100" : ""
                      } nav__link`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            className="nav__toggle cursor-pointer text-2xl text-white md:hidden"
            id="nav-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            type="button"
          >
            <i className="bx bx-menu"></i>
          </button>
        </nav>
      </header>

      <main className="l-main relative overflow-hidden">
        <div className="pointer-events-none absolute -top-28 right-0 h-72 w-72 rounded-full bg-accent/30 blur-[140px]"></div>
        <div className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-white/10 blur-[160px]"></div>
        <div className="relative">
          <section
            className="home relative mx-4 grid max-w-7xl gap-y-20 pb-20 pt-16 max-[585px]:gap-y-0 max-[585px]:pb-0 sm:pb-8 md:pb-8 md:pt-32 lg:mx-auto lg:pt-40"
            id="home"
          >
            <div className="home__data self-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/70">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                Open for collaborations
              </div>
              <h1 className="home__title mb-6 text-[1.5rem] font-bold min-[968px]:text-[3.5rem]">
                Hello, I&apos;m <br />
                Ramadhani Al-Qadri
                <br />
                Fullstack Developer
              </h1>
              <p className="home__description max-w-xl text-sm text-white/70 sm:text-base">
                Fullstack Developer with experience building digital solutions in
                healthtech, mobility, agriculture, and education.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={cvUrl}
                  className="cta__button inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-button"
                  download
                >
                  <i className="bx bx-download text-lg"></i>
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="cta__button inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <i className="bx bx-send text-lg"></i>
                  Let&apos;s Talk
                </a>
              </div>
            </div>

            <div className="home__social flex flex-row gap-4 self-end sm:gap-8 sm:pb-10">
              <a
                href="https://www.instagram.com/rama.alqd/"
                className="home__social-icon w-fit text-[4rem] text-white transition-colors duration-300 hover:text-accent max-[585px]:text-2xl"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="https://github.com/RamaAlqdri"
                className="home__social-icon w-fit text-[4rem] text-white transition-colors duration-300 hover:text-accent max-[585px]:text-2xl"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ramadhani-al-qadri-660532154/"
                className="home__social-icon w-fit text-[4rem] text-white transition-colors duration-300 hover:text-accent max-[585px]:text-2xl"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>

            <div className="home__img absolute bottom-0 right-0 w-[260px] max-[585px]:hidden sm:bottom-[25%] sm:w-[240px] md:bottom-[10%] md:w-[300px] lg:w-[450px]">
              <svg
                className="home__blob fill-accent"
                viewBox="0 0 479 467"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" maskType="alpha">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                </mask>
                <g mask="url(#mask0)">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                  <image
                    className="home__blob-img w-[23rem]"
                    x="50"
                    y="70"
                    xlinkHref="/image/profile.png"
                  />
                </g>
              </svg>
            </div>
          </section>

          <section className={`about ${sectionPadding}`} id="about">
            <h2 className={sectionTitleClass}>About</h2>

            <div className="about__container mx-4 grid max-w-7xl gap-8 text-center sm:grid-cols-2 sm:items-center sm:text-left lg:mx-auto">
              <div className="about__img mx-auto">
                <Image
                  src="/image/about.jpg"
                  alt="Portrait of Ramadhani Al-Qadri"
                  width={899}
                  height={899}
                  sizes="(min-width: 768px) 300px, 200px"
                  className="w-[200px] rounded-lg md:w-[300px]"
                />
              </div>

              <div>
                <h2 className="about__subtitle mb-4 text-[1.25rem] font-semibold">
                  I&apos;m Rama
                </h2>
                <p className="about__text">
                  An Informatics Engineering student at Mataram University. At
                  the age of 21, I have developed a great interest in
                  programming and design, which I continue to develop
                  throughout my academic journey. In addition to writing code,
                  I also have skills in various parallel areas that strengthen
                  my ability to create innovative and effective technology
                  solutions. I am always eager to learn and collaborate, and
                  ready to take on challenges in the tech world.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="stats__card glass rounded-xl px-4 py-3 text-center sm:text-left"
                    >
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/60">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="focus__chip rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={`skills ${sectionPadding}`} id="skills">
            <h2 className={sectionTitleClass}>Skills</h2>
            <p className={`${sectionDescriptionClass} skills__text`}>
              Skills & Technologies. Modern tech stack for building scalable
              applications.
            </p>

            <div className="skills__container mx-4 grid max-w-7xl gap-8 text-center sm:grid-cols-[0.7fr] sm:justify-center md:grid-cols-2 md:items-center md:text-left lg:mx-auto">
              <div>
                <h2 className="skills__subtitle mb-4 text-[1.25rem] font-semibold">
                  Profesional Skills
                </h2>
                <div className="skills__data relative mb-8 flex items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-card">
                  <div className="skills__names flex items-center gap-4">
                    <i className="bx bxl-typescript skills__icon text-2xl text-white"></i>
                    <span className="skills__name">TYPESCRIPT</span>
                  </div>
                  <div className="skills__bar absolute bottom-0 left-0 h-1 w-[65%] rounded-lg bg-accent -z-10"></div>
                  <div>
                    <span className="skills__percentage">65%</span>
                  </div>
                </div>
                <div className="skills__data relative mb-8 flex items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-card">
                  <div className="skills__names flex items-center gap-4">
                    <i className="bx bxl-java skills__icon text-2xl text-white"></i>
                    <span className="skills__name">JAVA</span>
                  </div>
                  <div className="skills__bar absolute bottom-0 left-0 h-1 w-[75%] rounded-lg bg-accent -z-10"></div>
                  <div>
                    <span className="skills__percentage">75%</span>
                  </div>
                </div>
                <div className="skills__data relative mb-8 flex items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-card">
                  <div className="skills__names flex items-center gap-4">
                    <i className="bx bxl-flutter skills__icon text-2xl text-white"></i>
                    <span className="skills__name">FLUTTER</span>
                  </div>
                  <div className="skills__bar absolute bottom-0 left-0 h-1 w-[15%] rounded-lg bg-accent -z-10"></div>
                  <div>
                    <span className="skills__percentage">15%</span>
                  </div>
                </div>
                <div className="skills__data relative mb-8 flex items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-card">
                  <div className="skills__names flex items-center gap-4">
                    <i className="bx bxs-paint skills__icon text-2xl text-white"></i>
                    <span className="skills__name">UI</span>
                  </div>
                  <div className="skills__bar absolute bottom-0 left-0 h-1 w-[85%] rounded-lg bg-accent -z-10"></div>
                  <div>
                    <span className="skills__percentage">85%</span>
                  </div>
                </div>
              </div>

              <div>
                <Image
                  src="/image/skill.jpg"
                  alt="Technical skills overview"
                  width={1311}
                  height={852}
                  sizes="(min-width: 768px) 520px, 100vw"
                  className="skills__img rounded-lg"
                />
              </div>
            </div>

            <div className="mx-4 mt-10 max-w-7xl lg:mx-auto">
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Technical Arsenal
                    </h3>
                    <p className="text-sm text-white/70">
                      Modern tools used to ship reliable digital products.
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Selected Tools
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="tech__pill rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={`services ${sectionPadding}`} id="services">
            <h2 className={sectionTitleClass}>Services</h2>
            <p className={sectionDescriptionClass}>
              Services designed to help teams ship faster and scale smarter.
            </p>

            <div className="mx-4 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3 lg:mx-auto">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="service__card glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl text-accent">
                      <i className={service.icon}></i>
                    </span>
                    <span className="text-[0.7rem] uppercase tracking-[0.3em] text-white/40">
                      Service
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className={`experience ${sectionPadding}`} id="experience">
            <h2 className={sectionTitleClass}>Experience</h2>
            <p className={sectionDescriptionClass}>Professional Experience.</p>

            <div className="mx-4 grid max-w-7xl gap-6 md:grid-cols-3 lg:mx-auto">
              {experienceItems.map((item) => (
                <div
                  key={item.role}
                  className="experience__card glass rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between text-xs text-white/50">
                    <span className="uppercase tracking-[0.2em]">
                      {item.period}
                    </span>
                    <span>{item.company}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className={`education ${sectionPadding}`} id="education">
            <h2 className={sectionTitleClass}>Education & Languages</h2>
            <p className={sectionDescriptionClass}>
              Academic background, awards, and communication skills.
            </p>

            <div className="mx-4 grid max-w-7xl gap-6 md:grid-cols-3 lg:mx-auto">
              <div className="education__card glass rounded-2xl p-6">
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span className="uppercase tracking-[0.2em]">Education</span>
                  <span>{education.period}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {education.degree}
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  {education.university}
                </p>
                <div className="mt-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  GPA {education.gpa}
                </div>
              </div>

              <div className="education__card glass rounded-2xl p-6">
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span className="uppercase tracking-[0.2em]">Languages</span>
                  <span>Communication Skills</span>
                </div>
                <div className="mt-4 space-y-3">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2"
                    >
                      <span className="text-sm font-semibold text-white">
                        {lang.name}
                      </span>
                      <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="education__card glass rounded-2xl p-6">
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span className="uppercase tracking-[0.2em]">
                    Awards & Achievements
                  </span>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {awards.map((award) => (
                    <li key={award} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent"></span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className={`work ${sectionPadding}`} id="work">
            <h2 className={sectionTitleClass}>Project</h2>
            <p className={`${sectionDescriptionClass} work__intro`}>
              Featured projects. Real-world applications across healthtech,
              mobility, agriculture, and mobile platforms.
            </p>

            <div className="work__container mx-4 grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3 lg:mx-auto">
              {projectItems.map((project) => (
                <div
                  key={project.title}
                  className="project__card glass-strong group overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/50">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.6rem] text-white/70">
                        {project.category}
                      </span>
                      <span>{project.period}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/70">
                      {project.description}
                    </p>
                    <ul className="space-y-2 text-sm text-white/70">
                      {project.highlights.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors duration-300 hover:text-white"
                    >
                      View project
                      <i className="bx bx-right-arrow-alt text-lg"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={`contact ${sectionPadding}`} id="contact">
            <h2 className={sectionTitleClass}>Contact</h2>
            <p className={sectionDescriptionClass}>
              I&apos;m always interested in hearing about new projects and
              opportunities. Feel free to reach out.
            </p>

            <div className="contact__container mx-4 grid max-w-7xl gap-8 sm:place-items-center lg:mx-auto">
              <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {contactCards.map((item) => (
                  <div
                    key={item.label}
                    className="contact__card glass rounded-2xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl text-accent">
                        <i className={item.icon}></i>
                      </span>
                      <div>
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/60">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-white transition-colors duration-300 hover:text-accent"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass rounded-2xl p-5 sm:w-[360px]">
                <h3 className="text-base font-semibold text-white">
                  Need my CV?
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Download the latest resume PDF for detailed experience and
                  project history.
                </p>
                <a
                  href={cvUrl}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-button"
                  download
                >
                  <i className="bx bx-download"></i>
                  Download CV
                </a>
              </div>

              <form className="contact__form w-full sm:w-[360px] sm:pt-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="contact__input mb-8 w-full rounded-lg border-[1.5px] border-input bg-input p-4 text-[0.938rem] font-semibold text-white outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="contact__input mb-8 w-full rounded-lg border-[1.5px] border-input bg-input p-4 text-[0.938rem] font-semibold text-white outline-none"
                />
                <textarea
                  cols={0}
                  rows={10}
                  placeholder="Tell me about your project..."
                  className="contact__input mb-8 w-full rounded-lg border-[1.5px] border-input bg-input p-4 text-[0.938rem] font-semibold text-white outline-none"
                ></textarea>
                <input
                  type="button"
                  value="Send"
                  className="contact__button ml-auto block rounded-lg bg-accent px-10 py-3 text-[0.938rem] font-semibold text-white transition-shadow duration-300 hover:shadow-button"
                />
              </form>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer py-8 text-center font-semibold text-white">
        <p className="footer__copy text-xs">
          &copy; Ramadhani Al-Qadri. All rigths reserved 2024
        </p>
      </footer>
    </>
  );
}
