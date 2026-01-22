import Image from "next/image";

import type { HeroContent } from "../data/portfolio";

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  const {
    badge,
    titlePrefix,
    name,
    role,
    description,
    primaryCta,
    secondaryCta,
    socials,
    image
  } = content;

  return (
    <section
      className="home relative mx-4 grid max-w-7xl gap-y-20 pb-20 pt-16 max-[585px]:gap-y-0 max-[585px]:pb-0 sm:pb-8 md:pb-8 md:pt-32 lg:mx-auto lg:pt-40"
      id="home"
    >
      <div className="home__data self-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/70">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-accent via-accentPurple to-accentPink animate-pulse"></span>
          {badge}
        </div>
        <h1 className="home__title mb-6 text-[1.5rem] font-bold min-[968px]:text-[3.5rem]">
          {titlePrefix} <br />
          <span className="text-gradient">{name}</span>
          <br />
          {role}
        </h1>
        <p className="home__description max-w-xl text-sm text-gradient sm:text-base">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={primaryCta.href}
            className="cta__button inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent via-accentPurple to-accentPink px-6 py-3 text-sm font-semibold text-white shadow-button transition-transform duration-300 hover:-translate-y-0.5"
            download={primaryCta.download}
          >
            <i className={`${primaryCta.icon} text-lg`}></i>
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="cta__button inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-accentPink hover:text-accentPink"
          >
            <i className={`${secondaryCta.icon} text-lg`}></i>
            {secondaryCta.label}
          </a>
        </div>
      </div>

      <div className="home__social flex flex-row gap-4 self-end sm:gap-8 sm:pb-10">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="home__social-icon w-fit text-[4rem] text-white transition-colors duration-300 hover:text-accentPink max-[585px]:text-2xl"
            aria-label={social.label}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>

      <div className="home__img absolute bottom-0 right-0 w-[300px] max-[585px]:hidden sm:bottom-[25%] sm:w-[280px] md:bottom-[10%] md:w-[340px] lg:w-[520px]">
        <Image
          src={image.src}
          alt={image.alt}
          width={640}
          height={800}
          sizes="(min-width: 1200px) 520px, (min-width: 768px) 340px, 280px"
          className="w-full rounded-3xl object-cover"
          priority
        />
      </div>
    </section>
  );
}
