import { useRef, useState, type ReactNode } from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: ReactNode;
  beam?: boolean;
  href?: string;
}

/** Card with a cursor-following warm spotlight; optional animated border beam. */
export default function SpotlightCard({ className, children, beam, href }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, o: 0 });
  const Tag = href ? "a" : "div";
  return (
    <Tag
      {...(href ? { href } : {})}
      ref={ref as never}
      onMouseMove={(e: React.MouseEvent) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top, o: 1 });
      }}
      onMouseLeave={() => setPos((p) => ({ ...p, o: 0 }))}
      className={cn(
        "group relative block overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: pos.o,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%)`,
        }}
      />
      {beam && <BorderBeam size={180} duration={9} colorFrom="#ffa23a" colorTo="#ff5a36" />}
      <div className="relative">{children}</div>
    </Tag>
  );
}
