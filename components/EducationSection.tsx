import type { Education, LanguageItem } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

type EducationSectionProps = {
  education: Education;
  languages: LanguageItem[];
  awards: string[];
};

const sectionPadding = "pt-12 pb-8 md:pt-16 md:pb-12";

export function EducationSection({
  education,
  languages,
  awards
}: EducationSectionProps) {
  return (
    <section className={`education ${sectionPadding}`} id="education">
      <SectionHeading
        title="Education & Languages"
        description="Academic background, awards, and communication skills."
      />

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
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent via-accentPurple to-accentPink"></span>
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
