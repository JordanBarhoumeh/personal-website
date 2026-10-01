import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import LiquidGlass from "./Glass";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

const words = ["Headline", "goes", "here"];

export default function HeroContent() {
  return (
    <div className="mx-auto flex min-h-[88dvh] max-w-5xl flex-col justify-center px-6 pb-20 pt-24">
      <BlurFade delay={0.05}>
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <AnimatedShinyText className="mx-0 text-sm text-text/60 dark:text-text/60 via-primary dark:via-primary">Now building in public</AnimatedShinyText>
        </div>
      </BlurFade>

      <h1 className="max-w-4xl text-6xl font-semibold leading-[0.98] sm:text-8xl">
        {words.map((w, i) => (
          <span key={w} className={`inline-block overflow-hidden align-bottom ${i < words.length - 1 ? "mr-[0.25em]" : ""}`}>
            <motion.span
              className="inline-block"
              initial={{ y: "110%", rotate: 4 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {w}
            </motion.span>
          </span>
        ))}
        <motion.span
          className="text-primary"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 300, damping: 12 }}
        >
          .
        </motion.span>
      </h1>

      <BlurFade delay={0.55}>
        <p className="mt-8 max-w-xl text-lg text-text/80 sm:text-xl">
          Placeholder for the one-line value proposition. Data science background, working in AI and ML, building apps in public.
        </p>
      </BlurFade>

      <BlurFade delay={0.7}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            See my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="/blog" className="relative block h-[46px] w-[196px]">
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
              <span className="block w-[196px] py-3 text-center text-sm font-medium text-white [:root[data-theme=light]_&]:text-[#14100c]">Read the build log</span>
            </LiquidGlass>
          </a>
        </div>
      </BlurFade>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </div>
  );
}
