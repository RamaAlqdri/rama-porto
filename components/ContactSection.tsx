import type { ContactCard } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

type ContactSectionProps = {
  contactCards: ContactCard[];
  cvUrl: string;
};

const sectionPadding = "pt-12 pb-8 md:pt-16 md:pb-12";

export function ContactSection({ contactCards, cvUrl }: ContactSectionProps) {
  return (
    <section className={`contact ${sectionPadding}`} id="contact">
      <SectionHeading
        title="Contact"
        description="I'm always interested in hearing about new projects and opportunities. Feel free to reach out."
      />

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
          <h3 className="text-base font-semibold text-white">Need my CV?</h3>
          <p className="mt-2 text-sm text-white/70">
            Download the latest resume PDF for detailed experience and project
            history.
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
  );
}
