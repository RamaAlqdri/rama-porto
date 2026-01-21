export function BackgroundGlow() {
  return (
    <>
      <div className="pointer-events-none absolute -top-28 right-0 h-72 w-72 rounded-full bg-accent/30 blur-[140px]"></div>
      <div className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-white/10 blur-[160px]"></div>
    </>
  );
}
