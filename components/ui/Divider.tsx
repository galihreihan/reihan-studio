interface DividerProps {
  className?: string;
}

export function Divider({ className = "" }: DividerProps) {
  return (
    <div
      className={`w-full h-px bg-white/[0.06] ${className}`}
      aria-hidden="true"
    />
  );
}
