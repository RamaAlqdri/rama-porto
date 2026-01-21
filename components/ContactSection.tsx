import type { ContactContent } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

type ContactSectionProps = {
  content: ContactContent;
};

const sectionPadding = "pt-12 pb-8 md:pt-16 md:pb-12";

const inputClassName =
  "contact__input w-full rounded-lg border border-white/10 bg-input/90 p-4 text-[0.938rem] font-semibold text-white outline-none transition-colors duration-300 focus:border-accentPink focus:ring-1 focus:ring-accent/40";

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section className={`contact ${sectionPadding}`} id="contact">
      <SectionHeading
        title={content.title}
        description={content.description}
      />

      <div className="contact__container mx-4 grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10 lg:mx-auto">
        <div className="space-y-6">
          <div className="contact__panel glass-strong rounded-2xl p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {content.infoPanel.title}
                </h3>
                <p className="text-sm text-white/70">
                  {content.infoPanel.description}
                </p>
              </div>
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-white/40">
                {content.infoPanel.badge}
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {content.cards.map((item) => (
                <div
                  key={item.label}
                  className="contact__card glass rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-1"
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
                          className="text-sm text-white transition-colors duration-300 hover:text-accentPink"
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
          </div>

          <div className="contact__panel glass rounded-2xl p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <h3 className="text-base font-semibold text-white">
                {content.cvPanel.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {content.cvPanel.description}
              </p>
            </div>
            <a
              href={content.cvPanel.cvUrl}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent via-accentPurple to-accentPink px-4 py-2 text-sm font-semibold text-white shadow-button transition-transform duration-300 hover:-translate-y-0.5 sm:mt-0"
              download
            >
              <i className="bx bx-download"></i>
              {content.cvPanel.buttonLabel}
            </a>
          </div>

          <div className="contact__panel glass rounded-2xl p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-base font-semibold text-white">
                  {content.availabilityPanel.title}
                </h4>
                <p className="mt-1 text-sm text-white/70">
                  {content.availabilityPanel.description}
                </p>
              </div>
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent">
                {content.availabilityPanel.badge}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/60">
              {content.availabilityPanel.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="contact__panel glass-strong rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {content.formPanel.title}
              </h3>
              <p className="text-sm text-white/70">
                {content.formPanel.description}
              </p>
            </div>
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-white/40">
              {content.formPanel.badge}
            </span>
          </div>

          <form className="contact__form mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
                >
                  {content.formPanel.fields.nameLabel}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder={content.formPanel.fields.namePlaceholder}
                  className={inputClassName}
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
                >
                  {content.formPanel.fields.emailLabel}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder={content.formPanel.fields.emailPlaceholder}
                  className={inputClassName}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="contact-project"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
              >
                {content.formPanel.fields.projectLabel}
              </label>
              <input
                id="contact-project"
                type="text"
                placeholder={content.formPanel.fields.projectPlaceholder}
                className={inputClassName}
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="contact-message"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
              >
                {content.formPanel.fields.messageLabel}
              </label>
              <textarea
                id="contact-message"
                rows={6}
                placeholder={content.formPanel.fields.messagePlaceholder}
                className={inputClassName}
              ></textarea>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-white/50">
                {content.formPanel.footerNote}
              </p>
              <button
                type="button"
                className="contact__button inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent via-accentPurple to-accentPink px-6 py-3 text-sm font-semibold text-white shadow-button transition-transform duration-300 hover:-translate-y-0.5"
              >
                {content.formPanel.buttonLabel}
                <i className="bx bx-send text-base"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
