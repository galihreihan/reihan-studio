"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Divider } from "@/components/ui/Divider";

interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  accent: string;
}

const projects: Project[] = [
  {
    id: "01",
    name: "Meridian Finance",
    category: "Fintech",
    description:
      "End-to-end redesign of a B2B financial platform — cleaner information hierarchy, faster onboarding, and a design system that scales.",
    tags: ["Web Design", "Design System", "Next.js"],
    year: "2024",
    accent: "from-blue-950/40 to-transparent",
  },
  {
    id: "02",
    name: "Volta Studio",
    category: "Creative Agency",
    description:
      "Brand identity and digital presence for an architecture studio. Typography-led with deliberate restraint and tactile texture.",
    tags: ["Branding", "Web Development", "Motion"],
    year: "2024",
    accent: "from-stone-900/60 to-transparent",
  },
  {
    id: "03",
    name: "Harrow Health",
    category: "Healthcare",
    description:
      "Patient-facing portal and marketing site. Accessibility-first design that builds confidence without the clinical coldness.",
    tags: ["Product Design", "React", "Accessibility"],
    year: "2023",
    accent: "from-emerald-950/30 to-transparent",
  },
  {
    id: "04",
    name: "Plinth Commerce",
    category: "E-commerce",
    description:
      "Conversion-optimised storefront for a premium lifestyle brand. Reduced checkout friction, increased average order value by 34%.",
    tags: ["E-commerce", "CRO", "Shopify"],
    year: "2023",
    accent: "from-purple-950/30 to-transparent",
  },
];

export function FeaturedWork() {
  return (
    <Section id="work" className="py-32">
      <div className="max-w-7xl mx-auto">
        <Divider className="mb-20" />

        <FadeIn>
          <SectionLabel>Featured Work</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-[-0.03em] leading-tight text-white max-w-md">
              Selected projects
              <br />
              <span className="text-white/30">from the last two years.</span>
            </h2>
            <a
              href="#contact"
              className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1.5 group"
            >
              View all work
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <motion.div
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden cursor-pointer p-8 h-full min-h-[280px] flex flex-col justify-between"
                whileHover={{ borderColor: "rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                {/* Accent gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-white/20">
                        {project.id}
                      </span>
                      <span className="text-xs text-white/30 bg-white/[0.05] px-2.5 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-white/20">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-white mb-3">
                    {project.name}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-8">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-white/25 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
