import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import SpotlightCard from "./SpotlightCard";

const stack = ["Python", "PyTorch", "TypeScript", "React", "Astro", "SwiftUI", "SQL", "scikit-learn", "LLMs", "Docker", "Postgres", "Tailwind"];

const projects = [
  { tag: "App", title: "Featured app", blurb: "One line on what it does and who it is for. Replace with a real project.", span: "md:col-span-2 md:row-span-2", beam: true },
  { tag: "ML", title: "Project two", blurb: "Short outcome-focused description.", span: "" },
  { tag: "Tool", title: "Project three", blurb: "Short outcome-focused description.", span: "" },
];

const posts = [
  { date: "2026-10-01", title: "Placeholder post: why I am building in public", read: "5 min" },
  { date: "2026-09-24", title: "Placeholder post: what the first prototype taught me", read: "7 min" },
  { date: "2026-09-12", title: "Placeholder post: choosing a stack", read: "4 min" },
];

export default function Showcase() {
  return (
    <>
      <section className="border-y border-border/60 py-6">
        <Marquee pauseOnHover className="[--duration:35s] [--gap:2.5rem]">
          {stack.map((s) => (
            <span key={s} className="font-mono text-sm text-muted transition-colors hover:text-primary">
              {s}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-28">
        <BlurFade inView>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="font-mono text-sm text-primary">01 / Selected work</p>
              <h2 className="mt-2 text-4xl font-semibold sm:text-5xl">Things I have built</h2>
            </div>
            <a href="/projects" className="hidden items-center gap-1 text-sm text-muted transition-colors hover:text-text sm:inline-flex">
              All projects <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </BlurFade>
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {projects.map((p, i) => (
            <BlurFade key={p.title} inView delay={0.08 * i} className={p.span}>
              <SpotlightCard href="/projects" beam={p.beam} className="flex h-full min-h-56 flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">{p.tag}</span>
                  <ArrowUpRight className="h-5 w-5 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <div className={p.beam ? "mt-24" : "mt-10"}>
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-2 max-w-md text-muted">{p.blurb}</p>
                </div>
              </SpotlightCard>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <BlurFade inView>
          <p className="font-mono text-sm text-primary">02 / Build log</p>
          <h2 className="mt-2 text-4xl font-semibold sm:text-5xl">Latest writing</h2>
        </BlurFade>
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {posts.map((p, i) => (
            <BlurFade key={p.title} inView delay={0.06 * i}>
              <li>
                <a href="/blog" className="group flex items-baseline justify-between gap-6 py-5">
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-2 group-hover:text-primary">{p.title}</span>
                  <span className="shrink-0 font-mono text-xs tabular-nums text-muted">{p.date} · {p.read}</span>
                </a>
              </li>
            </BlurFade>
          ))}
        </ul>
      </section>
    </>
  );
}
