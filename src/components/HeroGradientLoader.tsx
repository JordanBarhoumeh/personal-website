import { lazy, Suspense, useEffect, useState } from "react";

const HeroGradient = lazy(() => import("./HeroGradient"));

/** Loads the WebGL gradient only when it is worth it: motion allowed, decent hardware, not data-saver. */
export default function HeroGradientLoader() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const weak = (nav.hardwareConcurrency ?? 8) < 4 || (nav.deviceMemory ?? 8) < 4 || nav.connection?.saveData;
    if (reduce || weak) return;
    const ric = (window as any).requestIdleCallback as undefined | ((cb: () => void, o?: { timeout: number }) => number);
    const t = ric ? ric(() => setOn(true), { timeout: 2000 }) : window.setTimeout(() => setOn(true), 800);
    return () => ((window as any).cancelIdleCallback ?? clearTimeout)(t);
  }, []);
  return on ? (
    <Suspense fallback={null}>
      <HeroGradient />
    </Suspense>
  ) : null;
}
