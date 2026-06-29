"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Divider } from "@/components/ui/Divider";

const differentiators = [
  {
    title: "Senior expertise on every engagement",
    description:
      "The people you meet are the people shaping the strategy, design, and build — with no handoff friction and no unnecessary layers.",
  },
  {
    title: "Strategy, design, and development in one team",
    description:
      "We move from concept to production faster because every part of the experience is considered together from the outset.",
  },
  {
    title: "Clear scope, clear investment",
    description:
      "You get a precise proposal, a defined delivery plan, and a shared understanding of what success looks like before work begins.",
  },
  {
    title: "Thoughtful, high-standard execution",
    description:
      "We challenge ideas that do not serve your users or your business, and we raise the bar on quality throughout the process.",
  },
  {
    title: "Support after launch",
    description:
      "We stay involved after delivery to help you refine, improve, and scale the experience with confidence.",
  },
  {
    title: "Built to be maintained",
    description:
      "Your team gets clean code, clear documentation, and a foundation that is easy to extend without lock-in.",
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
              Built for businesses
              <br />
              <span className="text-white/30">that expect more from their website.</span>
            </h2>
            <p className="text-base text-white/40 leading-relaxed max-w-sm">
              Most agencies focus on aesthetics. We focus on the experience your
              customers feel and the outcomes your business needs.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Your website should feel as refined as your offer. We build
                digital experiences that earn trust quickly and convert with
                confidence.
              </p>
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
