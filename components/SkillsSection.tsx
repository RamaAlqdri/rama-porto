import Image from "next/image";

import { SectionHeading } from "./SectionHeading";

type SkillsSectionProps = {
  techStack: string[];
};

const sectionPadding = "pt-12 pb-8 md:pt-16 md:pb-12";

export function SkillsSection({ techStack }: SkillsSectionProps) {
  return (
    <section className={`skills ${sectionPadding}`} id="skills">
      <SectionHeading
        title="Skills"
        description="Skills & Technologies. Modern tech stack for building scalable applications."
        descriptionClassName="skills__text"
      />

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
            <div className="skills__bar absolute bottom-0 left-0 h-1 w-[65%] rounded-lg bg-gradient-to-r from-accent via-accentPurple to-accentPink -z-10"></div>
            <div>
              <span className="skills__percentage">65%</span>
            </div>
          </div>
          <div className="skills__data relative mb-8 flex items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-card">
            <div className="skills__names flex items-center gap-4">
              <i className="bx bxl-java skills__icon text-2xl text-white"></i>
              <span className="skills__name">JAVA</span>
            </div>
            <div className="skills__bar absolute bottom-0 left-0 h-1 w-[75%] rounded-lg bg-gradient-to-r from-accent via-accentPurple to-accentPink -z-10"></div>
            <div>
              <span className="skills__percentage">75%</span>
            </div>
          </div>
          <div className="skills__data relative mb-8 flex items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-card">
            <div className="skills__names flex items-center gap-4">
              <i className="bx bxl-flutter skills__icon text-2xl text-white"></i>
              <span className="skills__name">FLUTTER</span>
            </div>
            <div className="skills__bar absolute bottom-0 left-0 h-1 w-[15%] rounded-lg bg-gradient-to-r from-accent via-accentPurple to-accentPink -z-10"></div>
            <div>
              <span className="skills__percentage">15%</span>
            </div>
          </div>
          <div className="skills__data relative mb-8 flex items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-card">
            <div className="skills__names flex items-center gap-4">
              <i className="bx bxs-paint skills__icon text-2xl text-white"></i>
              <span className="skills__name">UI</span>
            </div>
            <div className="skills__bar absolute bottom-0 left-0 h-1 w-[85%] rounded-lg bg-gradient-to-r from-accent via-accentPurple to-accentPink -z-10"></div>
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
  );
}
