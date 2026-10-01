import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** Soft warm glow that trails the pointer and swells slightly over interactive elements. */
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [hot, setHot] = useState(false);
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const glowX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const glowY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });

  useEffect(() => {
    const fine = matchMedia("(pointer: fine)").matches;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHot(!!(e.target as Element | null)?.closest?.("a, button, [role='button'], input, textarea, summary"));
    };
    addEventListener("pointermove", move, { passive: true });
    return () => removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden="true">
      <motion.div
        className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 20%, transparent), transparent)",
        }}
        animate={{ scale: hot ? 1.25 : 1, opacity: hot ? 1 : 0.8 }}
        transition={{ type: "spring", stiffness: 160, damping: 22 }}
      />
    </div>
  );
}
