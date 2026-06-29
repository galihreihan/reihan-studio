"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Divider } from "@/components/ui/Divider";

const steps = [
  {
    phase: "Discovery",
    duration: "Week 1",
    description:
      "We begin with a focused conversation about your goals, audience, and growth priorities. The aim is to understand the opportunity before we shape the experience.",
    outputs: ["Scope document", "Project timeline", "Kick-off call"],
  },
  {
    phase: "Strategy",
    duration: "Week 1–2",
    description:
      "We define the structure, user journeys, and visual direction before a single pixel is placed so the experience feels intentional from the start.",
    outputs: ["Sitemap", "Wireframes", "Moodboard"],
  },
  {
    phase: "Design",
    duration: "Week 2–4",
    description:
      "We turn the direction into refined interfaces for every key screen and interaction, then refine them with your feedback until the experience feels complete.",
    outputs: ["Full UI design", "Design system", "Prototype"],
  },
  {
    phase: "Build",
    duration: "Week 4–8",
    description:
      "We build the experience with clean, scalable code and bring it to a staging environment so you can review everything before launch.",
    outputs: ["Staging site", "CMS setup", "Performance report"],
  },
  {
    phase: "Launch",
    duration: "Week 8",
    description:
      "We handle deployment, QA, and handover so the launch feels seamless. You receive a walkthrough, documentation, and continued support after go-live.",
    outputs: ["Live site", "Handover docs", "30-day support"],
  },
];

export function Process() {
  return (
    <Section id="process" className="py-32">
      <div className="max-w-7xl mx-auto">
        <Divider className="mb-20" />

        <FadeIn>
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-[-0.03em] leading-tight text-white mb-4">
            A clear path from strategy
            <br />
            <span className="text-white/30">to launch.</span>
          </h2>
          <p className="text-base text-white/40 max-w-md mb-16 leading-relaxed">
            Our process is structured, collaborative, and transparent so you
            always know what comes next and how each step supports the final
            result.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <FadeIn key={step.phase} delay={i * 0.08}>
                <div
                  className={`relative grid md:grid-cols-2 gap-8 md:gap-16 pb-12 last:pb-0 ${
                    i % 2 === 0 ? "" : "md:[&>div]:order-last"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1 w-5 h-5 rounded-full bg-[#0a0a0a] border border-white/10 items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  </div>

                  {/* Content */}
                  <div
                    className={`${
                      i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12 md:col-start-2"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3 md:justify-end">
                      <span className="text-xs font-mono text-white/25">
                        {step.duration}
                      </span>
                      <span className="text-xs font-mono text-white/15">·</span>
                      <span className="text-xs font-mono text-white/25">
                        Phase {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-white mb-2">
                      {step.phase}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {step.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-1.5 mt-4 ${
                        i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {step.outputs.map((output) => (
                        <span
                          key={output}
                          className="text-[10px] font-mono text-white/20 bg-white/[0.04] px-2 py-1 rounded"
                        >
                          {output}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Spacer for opposite column */}
                  <div className="hidden md:block" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
