import type { ContactCard } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

type ContactSectionProps = {
  contactCards: ContactCard[];
  cvUrl: string;
};

const sectionPadding = "pt-12 pb-8 md:pt-16 md:pb-12";

const inputClassName =
  "contact__input w-full rounded-lg border-[1.5px] border-input bg-input p-4 text-[0.938rem] font-semibold text-white outline-none transition-colors duration-300 focus:border-accent focus:ring-1 focus:ring-accent/40";

export function ContactSection({ contactCards, cvUrl }: ContactSectionProps) {
  return (
    <section className={`contact ${sectionPadding}`} id="contact">
      <SectionHeading
        title="Contact"
        description="I'm always interested in hearing about new projects and opportunities. Feel free to reach out."
      />

      <div className="contact__container mx-4 grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10 lg:mx-auto">
        <div className="space-y-6">
          <div className="contact__panel glass-strong rounded-2xl p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Contact Information
                </h3>
                <p className="text-sm text-white/70">
                  Let&apos;s build something impactful together. Reach out through
                  any channel below.
                </p>
              </div>
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-white/40">
                Get in touch
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contactCards.map((item) => (
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
          </div>

          <div className="contact__panel glass rounded-2xl p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <h3 className="text-base font-semibold text-white">Need my CV?</h3>
              <p className="mt-2 text-sm text-white/70">
                Download the latest resume PDF for detailed experience and
                project history.
              </p>
            </div>
            <a
              href={cvUrl}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-button sm:mt-0"
              download
            >
              <i className="bx bx-download"></i>
              Download CV
            </a>
          </div>

          <div className="contact__panel glass rounded-2xl p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-base font-semibold text-white">
                  Availability
                </h4>
                <p className="mt-1 text-sm text-white/70">
                  Open for freelance and full-time roles, remote or hybrid.
                </p>
              </div>
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent">
                24h response
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/60">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Remote
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Hybrid
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                On-site
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Consulting
              </span>
            </div>
          </div>
        </div>

        <div className="contact__panel glass-strong rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Start a Project</h3>
              <p className="text-sm text-white/70">
                Share a brief about your product, goals, and timeline.
              </p>
            </div>
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-white/40">
              Form
            </span>
          </div>

          <form className="contact__form mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  className={inputClassName}
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="email@company.com"
                  className={inputClassName}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="contact-project"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
              >
                Project Type
              </label>
              <input
                id="contact-project"
                type="text"
                placeholder="Website, mobile app, dashboard"
                className={inputClassName}
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="contact-message"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={6}
                placeholder="Tell me about your project goals and timeline."
                className={inputClassName}
              ></textarea>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-white/50">
                Typically reply within 24 hours.
              </p>
              <button
                type="button"
                className="contact__button inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-button"
              >
                Send Message
                <i className="bx bx-send text-base"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
