// Pure CSS 3D "gyroscope gem" — renders identically on every browser (no WebGL).
export function HeroVisual() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[460px]">
      <div className="hero-orb" aria-hidden />
      <div className="gem-stage" aria-hidden>
        <div className="gem-3d">
          <span className="gem-ring" />
          <span className="gem-ring" />
          <span className="gem-ring" />
          <span className="gem-ring" />
          <span className="gem-ring" />
          <span className="gem-core" />
          <div className="gem-orbit">
            <span className="gem-spark" />
            <span className="gem-spark two" />
          </div>
        </div>
      </div>
    </div>
  );
}
