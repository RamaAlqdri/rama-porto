import type { ServicesContent } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

type ServicesSectionProps = {
  content: ServicesContent;
};

const sectionPadding = "pt-12 pb-8 md:pt-16 md:pb-12";

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className={`services ${sectionPadding}`} id="services">
      <SectionHeading
        title={content.title}
        description={content.description}
      />

      <div className="mx-4 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3 lg:mx-auto">
        {content.items.map((service) => (
          <div
            key={service.title}
            className="service__card glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl text-accent">
                <i className={service.icon}></i>
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-white/40">
                {content.cardLabel}
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
  );
}
