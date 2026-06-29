import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 md:px-10 lg:px-16 ${className}`}
    >
      {children}
    </section>
  );
}

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-white/40 uppercase mb-6">
      <span className="w-4 h-px bg-white/20" />
      {children}
    </span>
  );
}
