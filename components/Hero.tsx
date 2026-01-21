type HeroProps = {
  cvUrl: string;
};

export function Hero({ cvUrl }: HeroProps) {
  return (
    <section
      className="home relative mx-4 grid max-w-7xl gap-y-20 pb-20 pt-16 max-[585px]:gap-y-0 max-[585px]:pb-0 sm:pb-8 md:pb-8 md:pt-32 lg:mx-auto lg:pt-40"
      id="home"
    >
      <div className="home__data self-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/70">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
          Open for collaborations
        </div>
        <h1 className="home__title mb-6 text-[1.5rem] font-bold min-[968px]:text-[3.5rem]">
          Hello, I&apos;m <br />
          Ramadhani Al-Qadri
          <br />
          Fullstack Developer
        </h1>
        <p className="home__description max-w-xl text-sm text-white/70 sm:text-base">
          Fullstack Developer with experience building digital solutions in
          healthtech, mobility, agriculture, and education.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={cvUrl}
            className="cta__button inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-button"
            download
          >
            <i className="bx bx-download text-lg"></i>
            Download CV
          </a>
          <a
            href="#contact"
            className="cta__button inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <i className="bx bx-send text-lg"></i>
            Let&apos;s Talk
          </a>
        </div>
      </div>

      <div className="home__social flex flex-row gap-4 self-end sm:gap-8 sm:pb-10">
        <a
          href="https://www.instagram.com/rama.alqd/"
          className="home__social-icon w-fit text-[4rem] text-white transition-colors duration-300 hover:text-accent max-[585px]:text-2xl"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://github.com/RamaAlqdri"
          className="home__social-icon w-fit text-[4rem] text-white transition-colors duration-300 hover:text-accent max-[585px]:text-2xl"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ramadhani-al-qadri-660532154/"
          className="home__social-icon w-fit text-[4rem] text-white transition-colors duration-300 hover:text-accent max-[585px]:text-2xl"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>

      <div className="home__img absolute bottom-0 right-0 w-[260px] max-[585px]:hidden sm:bottom-[25%] sm:w-[240px] md:bottom-[10%] md:w-[300px] lg:w-[450px]">
        <svg
          className="home__blob fill-accent"
          viewBox="0 0 479 467"
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
              xlinkHref="/image/profile.png"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
