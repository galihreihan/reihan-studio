"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full text-sm font-medium tracking-[-0.01em] transition-all duration-200 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-white text-black px-5 py-2.5 hover:bg-white/90 active:scale-[0.98]",
    ghost:
      "text-white/60 px-4 py-2.5 hover:text-white border border-white/10 hover:border-white/20 active:scale-[0.98]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
