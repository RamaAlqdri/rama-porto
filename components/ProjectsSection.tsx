import Image from "next/image";

import type { ProjectItem } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

type ProjectsSectionProps = {
  projectItems: ProjectItem[];
};

const sectionPadding = "pt-12 pb-8 md:pt-16 md:pb-12";

export function ProjectsSection({ projectItems }: ProjectsSectionProps) {
  return (
    <section className={`work ${sectionPadding}`} id="work">
      <SectionHeading
        title="Project"
        description="Featured projects. Real-world applications across healthtech, mobility, agriculture, and mobile platforms."
        descriptionClassName="work__intro"
      />

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
              <p className="text-sm text-white/70">{project.description}</p>
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
  );
}
