import { useEffect, useState } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

/** Slow warm shader gradient. Client-only (WebGL). Fades into the page background. */
const palettes = {
  dark: { c1: "#ff7a1f", c2: "#e8341c", c3: "#4a0f06", brightness: 1, veil: "from-bg/40 via-bg/20 to-bg" },
  light: { c1: "#ffb347", c2: "#ff7a45", c3: "#ffe6c7", brightness: 1.35, veil: "from-bg/10 via-transparent to-bg" },
};

function useTheme() {
  const read = () => (document.documentElement.dataset.theme === "light" ? "light" : "dark");
  const [t, setT] = useState<"light" | "dark">(read);
  useEffect(() => {
    const mo = new MutationObserver(() => setT(read()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);
  return t;
}

export default function HeroGradient() {
  const theme = useTheme();
  const p = palettes[theme];
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <ShaderGradientCanvas
        style={{ position: "absolute", inset: 0 }}
        pixelDensity={1}
        fov={45}
      >
        <ShaderGradient
          control="props"
          type="waterPlane"
          animate="on"
          uSpeed={0.12}
          uStrength={3.2}
          uDensity={1.4}
          color1={p.c1}
          color2={p.c2}
          color3={p.c3}
          grain="on"
          lightType="3d"
          brightness={p.brightness}
          cAzimuthAngle={180}
        />
      </ShaderGradientCanvas>
      <div className={`absolute inset-0 bg-gradient-to-b ${p.veil}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,transparent_0%,var(--bg)_85%)] opacity-50" />
    </div>
  );
}
