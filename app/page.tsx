"use client";

import { useEffect, useState } from "react";

import {
  awards,
  contactCards,
  cvUrl,
  education,
  experienceItems,
  focusAreas,
  languages,
  navItems,
  projectItems,
  services,
  stats,
  techStack
} from "../data/portfolio";
import { AboutSection } from "../components/AboutSection";
import { BackgroundGlow } from "../components/BackgroundGlow";
import { ContactSection } from "../components/ContactSection";
import { EducationSection } from "../components/EducationSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation";
import { ProjectsSection } from "../components/ProjectsSection";
import { ServicesSection } from "../components/ServicesSection";
import { SkillsSection } from "../components/SkillsSection";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.documentElement.style.setProperty("--parallax-offset", "0px");
    }

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      let currentSection = "home";

      if (!prefersReducedMotion) {
        document.documentElement.style.setProperty(
          "--parallax-offset",
          `${scrollY}px`
        );
        document.body.style.setProperty("--parallax-offset", `${scrollY}px`);
      }

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
        ".cta__button, .skills__data, .stats__card, .tech__pill, .focus__chip, .service__card, .project__card, .contact__panel, .contact__input, .contact__card, .experience__card, .education__card",
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
      <Navigation
        items={navItems}
        activeSection={activeSection}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />

      <main className="l-main relative z-10 overflow-hidden">
        <BackgroundGlow />

        <div className="relative">
          <Hero cvUrl={cvUrl} />
          <AboutSection stats={stats} focusAreas={focusAreas} />
          <SkillsSection techStack={techStack} />
          <ServicesSection services={services} />
          <ExperienceSection experienceItems={experienceItems} />
          <EducationSection
            education={education}
            languages={languages}
            awards={awards}
          />
          <ProjectsSection projectItems={projectItems} />
          <ContactSection contactCards={contactCards} cvUrl={cvUrl} />
        </div>
      </main>

      <Footer />
    </>
  );
}
