import Image from "next/image";

import type { AboutContent } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

type AboutSectionProps = {
  content: AboutContent;
};

const sectionPadding = "pt-12 pb-8 md:pt-16 md:pb-12";

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className={`about ${sectionPadding}`} id="about">
      <SectionHeading title={content.title} description={content.description} />

      <div className="about__container mx-4 grid max-w-7xl gap-8 text-center sm:grid-cols-2 sm:items-center sm:text-left lg:mx-auto">
        <div className="about__img mx-auto">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={899}
            height={899}
            sizes="(min-width: 768px) 300px, 200px"
            className="w-[200px] rounded-lg md:w-[300px]"
          />
        </div>

        <div>
          <h2 className="about__subtitle mb-4 text-[1.25rem] font-semibold">
            {content.subtitle}
          </h2>
          <p className="about__text">{content.summary}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div
                key={stat.label}
                className="stats__card glass rounded-xl px-4 py-3 text-center sm:text-left"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {content.focusAreas.map((area) => (
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
  );
}
