"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const EASE = "easeOut" as const;
const STAGGER = 0.12;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: EASE },
  };
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 pt-24 pb-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute top-32 right-1/4 w-48 h-48 bg-white/[0.02] rounded-full blur-2xl" />
      </div>

      {/* Fine grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-white/30 uppercase">
            <span className="w-1 h-1 rounded-full bg-green-400/80 animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(STAGGER)}
          className="text-[clamp(2.4rem,6vw,5.5rem)] font-semibold tracking-[-0.04em] leading-[1.08] text-white mb-6"
        >
          Premium websites that
          <br />
          <span className="text-white/40">help businesses earn trust.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(STAGGER * 2)}
          className="text-[clamp(1rem,2vw,1.2rem)] text-white/40 leading-relaxed max-w-xl mx-auto mb-12 tracking-[-0.01em]"
        >
          We design and build modern websites and digital products for ambitious
          businesses that want to stand out.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(STAGGER * 3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button variant="primary" href="#contact" className="text-sm px-6 py-3">
            Start a Project
            <ArrowRight size={14} />
          </Button>
          <Button variant="ghost" href="#work" className="text-sm px-6 py-3">
            View Work
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          {...fadeUp(STAGGER * 4)}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          {[
            { value: "40+", label: "Projects delivered" },
            { value: "98%", label: "Client satisfaction" },
            { value: "5★", label: "Average rating" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-semibold tracking-[-0.03em] text-white">
                {value}
              </div>
              <div className="text-xs text-white/30 tracking-wide mt-0.5">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
