import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import LiquidGlass from "./Glass";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";
const read = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    setTheme(read());
    const mo = new MutationObserver(() => setTheme(read()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);

  const toggle = (e: React.MouseEvent) => {
    const root = document.documentElement;
    const next: Theme = theme === "light" ? "dark" : "light";
    const apply = () => {
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch {}
    };
    if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) return apply();
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    root.style.setProperty("--tx", `${r.left + r.width / 2}px`);
    root.style.setProperty("--ty", `${r.top + r.height / 2}px`);
    root.setAttribute("data-theme-vt", "");
    document.startViewTransition(apply).finished.finally(() => root.removeAttribute("data-theme-vt"));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      className="relative grid h-10 w-10 place-items-center rounded-full"
    >
      <LiquidGlass
        cornerRadius={999}
        padding="0"
        displacementScale={50}
        blurAmount={0.06}
        saturation={140}
        aberrationIntensity={1.5}
        elasticity={0.25}
        overLight={theme === "light"}
        style={{ position: "absolute", top: "50%", left: "50%" }}
      >
        <span className="grid h-10 w-10 place-items-center text-text">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={theme}
              initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid place-items-center"
            >
              {theme === "light" ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
            </motion.span>
          </AnimatePresence>
        </span>
      </LiquidGlass>
    </button>
  );
}
