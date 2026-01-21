export function BackgroundGlow() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="background-gradient"></div>
        <div className="parallax parallax--primary">
          <div
            className="parallax__scroller"
            style={{
              transform:
                "translate3d(calc(var(--parallax-offset, 0px) * -0.18), 0, 0)"
            }}
          >
            <span>Ramadhani</span>
            <span>Ramadhani</span>
            <span>Ramadhani</span>
            <span>Ramadhani</span>
          </div>
        </div>
        <div className="parallax parallax--secondary">
          <div
            className="parallax__scroller"
            style={{
              transform:
                "translate3d(calc(var(--parallax-offset, 0px) * 0.12), 0, 0)"
            }}
          >
            <span>Portfolio</span>
            <span>Portfolio</span>
            <span>Portfolio</span>
            <span>Portfolio</span>
          </div>
        </div>
      </div>
    </>
  );
}
