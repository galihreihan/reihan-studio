"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Code2,
  Zap,
  BarChart3,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Divider } from "@/components/ui/Divider";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
}

const services: Service[] = [
  {
    icon: Layers,
    title: "Web Design",
    description:
      "We craft visual identities and interfaces that feel premium from the first pixel. Every decision — from the typeface to the micro-interaction — is intentional.",
    deliverables: [
      "Brand direction",
      "UI/UX design",
      "Design system",
      "Prototype",
    ],
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Production-grade code built on modern frameworks. Fast, accessible, and maintainable by your team long after we've shipped.",
    deliverables: ["Next.js / React", "TypeScript", "CMS integration", "SEO"],
  },
  {
    icon: Zap,
    title: "Digital Products",
    description:
      "From SaaS dashboards to customer portals — we build the complex interfaces your business needs to operate at a higher level.",
    deliverables: [
      "Product strategy",
      "User research",
      "MVP build",
      "Iteration",
    ],
  },
  {
    icon: BarChart3,
    title: "Growth & CRO",
    description:
      "Design that converts. We analyse your funnel, identify friction points, and rebuild the experience around what actually moves the needle.",
    deliverables: [
      "Conversion audit",
      "A/B testing",
      "Analytics setup",
      "Reporting",
    ],
  },
];

export function Services() {
  return (
    <Section id="services" className="py-32">
      <div className="max-w-7xl mx-auto">
        <Divider className="mb-20" />

        <FadeIn>
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-[-0.03em] leading-tight text-white mb-16 max-w-lg">
            Everything you need
            <br />
            <span className="text-white/30">under one roof.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.04]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={i * 0.07}>
                <motion.div
                  className="bg-[#0a0a0a] p-8 h-full flex flex-col gap-6 group hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                    <Icon size={18} className="text-white/60" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.02em] text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/[0.05]">
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="text-xs text-white/25 flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-white/15 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
