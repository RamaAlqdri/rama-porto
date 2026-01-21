import type { ExperienceItem } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

type ExperienceSectionProps = {
  experienceItems: ExperienceItem[];
};

const sectionPadding = "pt-12 pb-8 md:pt-16 md:pb-12";

export function ExperienceSection({ experienceItems }: ExperienceSectionProps) {
  return (
    <section className={`experience ${sectionPadding}`} id="experience">
      <SectionHeading
        title="Experience"
        description="Professional Experience."
      />

      <div className="mx-4 grid max-w-7xl gap-6 md:grid-cols-3 lg:mx-auto">
        {experienceItems.map((item) => (
          <div
            key={item.role}
            className="experience__card glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between text-xs text-white/50">
              <span className="uppercase tracking-[0.2em]">{item.period}</span>
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
  );
}
