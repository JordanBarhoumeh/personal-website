import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import SpotlightCard from "./SpotlightCard";
import type { Experience } from "@/data/profile";

type Group = { company: string; location?: string; roles: Experience[]; current: boolean };

/** Merge consecutive roles at the same company into one group. */
function group(items: Experience[]): Group[] {
  const out: Group[] = [];
  for (const e of items) {
    const last = out[out.length - 1];
    if (last && last.company === e.company) last.roles.push(e);
    else out.push({ company: e.company, location: e.location, roles: [e], current: false });
  }
  for (const g of out) {
    g.current = g.roles.some((r) => r.endDate === "Present");
    g.location ??= g.roles.find((r) => r.location)?.location;
  }
  return out;
}

export default function ExperienceTimeline({ items }: { items: Experience[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const groups = group(items);

  return (
    <div ref={ref} className="relative pl-8 sm:pl-12">
      {/* rail + scroll-drawn progress line */}
      <div className="absolute bottom-0 left-[7px] top-2 w-px bg-border sm:left-[11px]" />
      <motion.div
        className="absolute left-[7px] top-2 w-px origin-top bg-gradient-to-b from-primary to-accent sm:left-[11px]"
        style={{ scaleY, bottom: 0 }}
      />

      <ol className="space-y-8">
        {groups.map((g, gi) => (
          <li key={g.company + gi} className="relative">
            <span
              className="absolute -left-8 top-7 grid h-4 w-4 place-items-center sm:-left-12 sm:h-6 sm:w-6"
              aria-hidden="true"
            >
              <span className={`h-3 w-3 rounded-full border-2 bg-bg ${g.current ? "border-primary" : "border-muted"}`} />
              {g.current && <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary/60" />}
            </span>
            <BlurFade inView delay={0.05}>
              <SpotlightCard className="p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold sm:text-2xl">{g.company}</h3>
                  {g.location && <span className="font-mono text-xs text-muted">{g.location}</span>}
                </div>
                <ul className="mt-6 space-y-6">
                  {g.roles.map((r) => (
                    <li key={r.role + r.startDate} className="relative border-l border-border pl-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <p className="font-medium text-primary">{r.role}</p>
                        <p className="font-mono text-xs tabular-nums text-muted">
                          {r.startDate} — {r.endDate}
                        </p>
                      </div>
                      <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-muted">{r.type}</p>
                      {r.description && <p className="mt-3 text-text/80">{r.description}</p>}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </BlurFade>
          </li>
        ))}
      </ol>
    </div>
  );
}
