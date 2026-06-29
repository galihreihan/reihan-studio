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
    name: "Luxury Hotel Booking Platform",
    category: "Hospitality",
    description:
      "A premium booking experience designed for high-end hospitality, balancing elegance, ease of use, and conversion-focused flow.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2024",
    accent: "from-blue-950/40 to-transparent",
  },
  {
    id: "02",
    name: "Trading Analytics Dashboard",
    category: "Fintech",
    description:
      "A sophisticated analytics interface crafted for fast-moving decision-making, with a clear hierarchy and premium data presentation.",
    tags: ["React", "TypeScript", "Charts"],
    year: "2024",
    accent: "from-stone-900/60 to-transparent",
  },
  {
    id: "03",
    name: "Modern Restaurant Website",
    category: "Food & Beverage",
    description:
      "A refined digital presence for a contemporary restaurant brand, built to showcase atmosphere, menu, and reservations with confidence.",
    tags: ["Next.js", "Framer Motion", "CMS"],
    year: "2023",
    accent: "from-emerald-950/30 to-transparent",
  },
  {
    id: "04",
    name: "Real Estate Company Website",
    category: "Real Estate",
    description:
      "A polished property experience focused on trust, clarity, and effortless browsing for buyers and investors.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    year: "2023",
    accent: "from-purple-950/30 to-transparent",
  },
  {
    id: "05",
    name: "Business Management Dashboard",
    category: "SaaS",
    description:
      "A structured operations dashboard designed to simplify reporting, streamline workflows, and improve day-to-day team efficiency.",
    tags: ["React", "TypeScript", "Design System"],
    year: "2023",
    accent: "from-cyan-950/30 to-transparent",
  },
  {
    id: "06",
    name: "Fintech Landing Page",
    category: "Fintech",
    description:
      "A conversion-led landing experience built to communicate trust, product value, and a premium brand story at first glance.",
    tags: ["Next.js", "Tailwind CSS", "Conversion"],
    year: "2022",
    accent: "from-violet-950/30 to-transparent",
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
              Selected showcase projects
              <br />
              <span className="text-white/30">for premium digital experiences.</span>
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

                  <div className="mb-3">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-white mb-2">
                      {project.name}
                    </h3>
                    <span className="inline-flex items-center text-[10px] font-mono tracking-[0.2em] uppercase text-white/25 bg-white/[0.05] px-2.5 py-1 rounded-full">
                      Concept Project
                    </span>
                  </div>
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
