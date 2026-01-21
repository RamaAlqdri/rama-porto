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

      <div className="home__img absolute bottom-0 right-0 w-[260px] max-[585px]:hidden sm:bottom-[25%] sm:w-[240px] md:bottom-[10%] md:w-[300px] lg:w-[450px]">
        <svg
          className="home__blob fill-accent"
          viewBox="0 0 479 467"
          role="img"
          aria-label={image.alt}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask id="mask0">
            <path
              fill="#fff"
              d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
            />
          </mask>
          <g mask="url(#mask0)">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            <image
              className="home__blob-img w-[23rem]"
              x="50"
              y="70"
              xlinkHref={image.src}
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
