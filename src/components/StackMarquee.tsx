import { Marquee } from "@/components/ui/marquee";

const stack = [
  "Python", "R", "SQL", "TypeScript", "React", "Firebase", "BigQuery", "Gemini",
  "scikit-learn", "TensorFlow", "Pandas", "Docker", "Azure", "HealthKit",
];

export default function StackMarquee() {
  return (
    <section className="border-y border-border/60 py-6" aria-label="Technologies I use">
      <Marquee pauseOnHover className="[--duration:35s] [--gap:2.5rem]">
        {stack.map((s) => (
          <span key={s} className="font-mono text-sm text-muted transition-colors hover:text-primary">
            {s}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
