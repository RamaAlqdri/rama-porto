export function BackgroundGlow() {
  return (
    <>
      <div
        className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-accent/35 blur-[140px] will-change-transform"
        style={{
          transform:
            "translate3d(0, calc(var(--parallax-offset, 0px) * 0.2), 0)"
        }}
      ></div>
      <div
        className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-white/12 blur-[160px] will-change-transform"
        style={{
          transform:
            "translate3d(0, calc(var(--parallax-offset, 0px) * -0.16), 0)"
        }}
      ></div>
      <div
        className="pointer-events-none absolute bottom-0 right-20 h-64 w-64 rounded-full bg-white/5 blur-[120px] will-change-transform"
        style={{
          transform:
            "translate3d(0, calc(var(--parallax-offset, 0px) * 0.12), 0)"
        }}
      ></div>
      <div
        className="pointer-events-none absolute top-1/4 right-1/3 h-48 w-48 rounded-full bg-accent/10 blur-[110px] will-change-transform"
        style={{
          transform:
            "translate3d(0, calc(var(--parallax-offset, 0px) * -0.22), 0)"
        }}
      ></div>
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          transform:
            "translate3d(0, calc(var(--parallax-offset, 0px) * 0.06), 0)"
        }}
      ></div>
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(117,98,224,0.18), transparent 60%)",
          transform:
            "translate3d(0, calc(var(--parallax-offset, 0px) * -0.1), 0)"
        }}
      ></div>
    </>
  );
}
