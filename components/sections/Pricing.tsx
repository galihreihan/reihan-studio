"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Divider } from "@/components/ui/Divider";
import { ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Landing Page",
    price: "Starting from $1,500",
    description:
      "A refined, high-converting landing page designed to introduce your offer clearly and move visitors toward action.",
    features: ["Premium one-page design", "Conversion-focused structure", "Fast launch timeline", "Mobile responsive"],
    cta: "Get Free Quote",
  },
  {
    name: "Company Profile",
    price: "Starting from $3,000",
    description:
      "A polished multi-section website that communicates your brand, services, and credibility with a premium presence.",
    features: ["Multi-page experience", "Professional storytelling", "SEO-ready structure", "Scalable content sections"],
    cta: "Book Free Consultation",
  },
  {
    name: "Custom Web App",
    price: "Starting from $6,000",
    description:
      "A tailored digital product built for business operations, internal tools, or customer experiences with modern architecture.",
    features: ["Custom user flows", "Modern tech stack", "Scalable foundation", "Built for growth"],
    cta: "Book Free Consultation",
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="py-32">
      <div className="max-w-7xl mx-auto">
        <Divider className="mb-20" />

        <FadeIn>
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-[-0.03em] leading-tight text-white mb-4">
            Clear packages for
            <br />
            <span className="text-white/30">high-value digital projects.</span>
          </h2>
          <p className="text-base text-white/40 max-w-xl leading-relaxed mb-16">
            Whether you need a launch-ready landing page or a custom web experience, each engagement is scoped with clarity and purpose.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4">
          {packages.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/25 mb-2">
                    Starting from
                  </p>
                  <p className="text-2xl font-semibold tracking-[-0.03em] text-white">
                    {item.price}
                  </p>
                </div>

                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-white/40">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6287864200926"
                  className="mt-auto inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item.cta}
                  <ArrowRight size={14} />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
