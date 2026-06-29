"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Divider } from "@/components/ui/Divider";

const differentiators = [
  {
    title: "Senior talent, every project",
    description:
      "No juniors. No outsourcing. The people you talk to are the people who build your product.",
  },
  {
    title: "Design and code in one team",
    description:
      "No handoff friction. We move from concept to production faster because design and engineering work together from day one.",
  },
  {
    title: "Fixed-scope, fixed-price",
    description:
      "Know exactly what you're getting and what you're paying before we start. No surprises, no scope creep.",
  },
  {
    title: "Opinionated about quality",
    description:
      "We push back when something won't serve your users. Our name is on the work too.",
  },
  {
    title: "Post-launch support",
    description:
      "We don't disappear after delivery. Every project includes a 30-day support window.",
  },
  {
    title: "Built to hand over",
    description:
      "Your team can maintain and extend what we build. Clean code, full documentation, zero lock-in.",
  },
];

export function WhyUs() {
  return (
    <Section id="why" className="py-32">
      <div className="max-w-7xl mx-auto">
        <Divider className="mb-20" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-[-0.03em] leading-tight text-white mb-6">
              We care about
              <br />
              <span className="text-white/30">what ships, not what demos.</span>
            </h2>
            <p className="text-base text-white/40 leading-relaxed max-w-sm">
              Most agencies optimise for presentations. We optimise for the
              real-world experience of your customers — and for your business
              results.
            </p>

            {/* Testimonial */}
            <div className="mt-12 p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <p className="text-sm text-white/60 leading-relaxed italic mb-4">
                &ldquo;They challenged us when our instincts were wrong, and
                delivered something we could never have spec&apos;d ourselves.
                Best web investment we&apos;ve made.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium text-white/50">
                  AR
                </div>
                <div>
                  <div className="text-xs font-medium text-white/60">
                    Alex Reeves
                  </div>
                  <div className="text-[10px] text-white/25">
                    CEO, Meridian Finance
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            {differentiators.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06} direction="left">
                <div className="flex gap-4 p-5 rounded-xl border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.015] transition-all duration-300 group">
                  <div className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-white/10 transition-colors">
                    <Check size={10} className="text-white/50" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-[-0.01em] text-white/80 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/35 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
