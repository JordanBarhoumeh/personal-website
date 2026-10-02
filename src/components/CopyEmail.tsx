import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${email}`}
        className="break-all text-2xl font-semibold tracking-tight underline decoration-border decoration-2 underline-offset-8 transition-colors hover:decoration-primary sm:text-4xl"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email copied" : "Copy email address"}
        className="relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-full border border-border bg-surface px-4 text-sm transition-colors hover:border-primary/60"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "done" : "copy"}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="inline-flex items-center gap-2"
          >
            {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy"}
          </motion.span>
        </AnimatePresence>
      </button>
      <span className="sr-only" role="status" aria-live="polite">{copied ? "Email address copied to clipboard" : ""}</span>
    </div>
  );
}
