import { lazy, Suspense, useEffect, useState } from "react";
import HeroContent from "./HeroContent";

const HeroGradient = lazy(() => import("./HeroGradient"));

export default function Hero() {
  const [gl, setGl] = useState(false);
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) setGl(true);
  }, []);
  return (
    <section className="relative isolate overflow-hidden">
      {/* static fallback glow while WebGL loads / for reduced motion */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_70%_30%,var(--secondary),transparent_60%)]" />
      {gl && (
        <Suspense fallback={null}>
          <HeroGradient />
        </Suspense>
      )}
      <HeroContent />
    </section>
  );
}
