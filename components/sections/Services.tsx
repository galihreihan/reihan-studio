"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Code2,
  Zap,
  BarChart3,
  LayoutTemplate,
  Monitor,
  CalendarDays,
  Sparkles,
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
    title: "Premium Company Website",
    description:
      "A refined online presence that communicates credibility, showcases your offer clearly, and gives your business a polished digital front door.",
    deliverables: ["Brand-aligned experience", "Clear messaging", "Higher trust", "Stronger first impression"],
  },
  {
    icon: LayoutTemplate,
    title: "High-Converting Landing Page",
    description:
      "A focused conversion asset designed to turn traffic into enquiries, leads, or sales with sharper positioning and stronger user flow.",
    deliverables: ["Sharper value proposition", "Clear calls to action", "Better conversion", "Faster results"],
  },
  {
    icon: Monitor,
    title: "Admin Dashboard",
    description:
      "A clean, efficient internal interface that helps teams manage data, workflows, and operations with greater clarity and speed.",
    deliverables: ["Operational clarity", "Better usability", "Faster workflow", "Scalable interface"],
  },
  {
    icon: CalendarDays,
    title: "Booking & Reservation System",
    description:
      "A frictionless booking experience that makes scheduling simple for clients while helping your business run more smoothly behind the scenes.",
    deliverables: ["Streamlined booking", "Reduced friction", "Better client experience", "Reliable automation"],
  },
  {
    icon: Code2,
    title: "Custom Business Web Application",
    description:
      "A tailored digital product built for your operations, customers, or internal processes — designed to perform reliably and scale with your business.",
    deliverables: ["Tailored functionality", "Modern architecture", "Long-term scalability", "Business efficiency"],
  },
  {
    icon: Sparkles,
    title: "Website Redesign & Optimization",
    description:
      "A strategic refresh of an existing site to improve performance, clarity, and conversion without losing the strengths you already have.",
    deliverables: ["Improved experience", "Stronger positioning", "Faster performance", "Better engagement"],
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
            Premium digital solutions
            <br />
            <span className="text-white/30">for businesses that expect more.</span>
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
