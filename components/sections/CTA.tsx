"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { Divider } from "@/components/ui/Divider";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <Section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto">
        <Divider className="mb-20" />

        <FadeIn>
          <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] overflow-hidden px-8 py-20 md:px-20 text-center">
            {/* Background glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-white/[0.03] rounded-full blur-3xl" />
            </div>

            {/* Fine dot grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-white/30 uppercase mb-8"
              >
                <span className="w-1 h-1 rounded-full bg-green-400/80 animate-pulse" />
                Currently accepting projects
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-[-0.04em] leading-[1.1] text-white mb-6 max-w-2xl mx-auto"
              >
                Ready to build a sharper
                <br />
                <span className="text-white/35">digital presence?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-base text-white/40 mb-10 max-w-sm mx-auto leading-relaxed"
              >
                Share your goals and we&apos;ll shape a premium website,
                dashboard, landing page, booking system, or web application
                that helps your business grow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                <Button
                  variant="primary"
                  href="https://wa.me/6287864200926"
                  className="text-sm px-7 py-3"
                >
                  Book Free Consultation
                  <ArrowRight size={14} />
                </Button>
                <Button
                  variant="ghost"
                  href="mailto:reihan.gfarel@gmail.com"
                  className="text-sm px-6 py-3"
                >
                  reihan.gfarel@gmail.com
                </Button>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
