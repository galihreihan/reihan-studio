"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Divider } from "@/components/ui/Divider";

const steps = [
  {
    phase: "Discovery",
    duration: "Week 1",
    description:
      "We dig into your business goals, target audience, and competitive landscape. No briefs, just conversations. We need to understand the problem before we design the solution.",
    outputs: ["Scope document", "Project timeline", "Kick-off call"],
  },
  {
    phase: "Strategy",
    duration: "Week 1–2",
    description:
      "Information architecture, user flows, and the visual direction. We align on the approach before a single pixel is placed. This prevents expensive changes later.",
    outputs: ["Sitemap", "Wireframes", "Moodboard"],
  },
  {
    phase: "Design",
    duration: "Week 2–4",
    description:
      "High-fidelity screens across every key viewport. We present, you review, we refine. Two rounds of revisions are included — in practice, we rarely need both.",
    outputs: ["Full UI design", "Design system", "Prototype"],
  },
  {
    phase: "Build",
    duration: "Week 4–8",
    description:
      "Production code. Every component is typed, tested, and accessible. We ship to a staging environment so you can review before anything touches your domain.",
    outputs: ["Staging site", "CMS setup", "Performance report"],
  },
  {
    phase: "Launch",
    duration: "Week 8",
    description:
      "We handle the deployment, domain setup, and a final round of QA across devices. You get a walkthrough call, documentation, and 30 days of included support.",
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
            From idea to live site
            <br />
            <span className="text-white/30">in eight weeks.</span>
          </h2>
          <p className="text-base text-white/40 max-w-md mb-16 leading-relaxed">
            A clear process means no surprises. You know what&apos;s happening,
            when it&apos;s happening, and what&apos;s expected of you at every stage.
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
