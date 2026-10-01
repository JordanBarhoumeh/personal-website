import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function GlassNav({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const active = links.find((l) => path.startsWith(l.href))?.href;
  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3">
      <nav
        aria-label="Main"
        className="glass pointer-events-auto flex w-full max-w-3xl items-center justify-between gap-2 rounded-full py-1.5 pl-5 pr-1.5"
      >
        <a href="/" className="font-mono text-sm font-medium tracking-tight">
          jordan<span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-1">
          <ul className="hidden items-center text-sm sm:flex">
            {links.map((l) => (
              <li key={l.href} className="relative">
                {active === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-text/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <a
                  href={l.href}
                  aria-current={active === l.href ? "page" : undefined}
                  className={`relative block rounded-full px-3 py-1.5 transition-colors hover:text-text ${active === l.href ? "text-text" : "text-muted"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-text sm:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
            className="glass pointer-events-auto absolute inset-x-3 top-[60px] rounded-3xl p-2 sm:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.href ? "page" : undefined}
                  className={`block rounded-2xl px-4 py-3 text-base transition-colors hover:bg-text/10 ${active === l.href ? "bg-text/10 text-text" : "text-text/80"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
