import { ArrowRight } from "lucide-react";
import LiquidGlass from "./Glass";

export default function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href="/projects"
        className="group inline-flex h-[46px] items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-bg transition-transform hover:scale-[1.03] active:scale-[0.98]"
      >
        See my work
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
      {/* dark theme: refractive liquid glass */}
      <a href="/blog" className="only-dark relative block h-[46px] w-[196px]">
        <LiquidGlass
          cornerRadius={999}
          padding="0"
          displacementScale={60}
          blurAmount={0.07}
          saturation={140}
          aberrationIntensity={2}
          elasticity={0.3}
          style={{ position: "absolute", top: "50%", left: "50%" }}
        >
          <span className="block w-[196px] py-3 text-center text-sm font-medium text-white">Read the build log</span>
        </LiquidGlass>
      </a>
      {/* light theme: clean frosted glass (refraction looks muddy on bright backgrounds) */}
      <a
        href="/blog"
        className="only-light glass inline-flex h-[46px] w-[196px] items-center justify-center rounded-full text-sm font-medium text-text transition-transform hover:scale-[1.03] active:scale-[0.98]"
      >
        Read the build log
      </a>
    </div>
  );
}
