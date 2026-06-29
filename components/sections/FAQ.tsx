"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Divider } from "@/components/ui/Divider";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much does a project typically cost?",
    answer:
      "Most marketing websites range from $8,000–$25,000. Digital products and platforms start at $20,000. Every engagement is scoped carefully and we provide a clear proposal before work begins so the investment is predictable.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A standard website typically takes 6–8 weeks from kickoff to launch. More complex digital products usually take 10–16 weeks. We agree the timeline upfront so the process stays focused and efficient.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes, when the fit is right. We work with funded startups and established businesses that value quality, clarity, and a thoughtful approach to growth.",
  },
  {
    question: "Can you redesign our existing website?",
    answer:
      "Absolutely. Redesigns are a major part of our work. We begin by understanding what is not working, then shape a stronger experience around your goals and audience.",
  },
  {
    question: "Do you offer ongoing retainers?",
    answer:
      "We offer retainers for select clients after a successful launch. These typically cover design updates, new features, and ongoing optimisation as your business evolves.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "A conversation is enough to begin. We’ll learn about your business, your audience, and your goals, then send a clear proposal and recommended next steps within 48 hours.",
  },
];

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.05}>
      <div className="border-b border-white/[0.06]">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
          aria-expanded={open}
        >
          <span className="text-sm font-medium tracking-[-0.01em] text-white/70 group-hover:text-white transition-colors pr-8">
            {item.question}
          </span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 w-5 h-5 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors"
          >
            <Plus size={10} className="text-white/40" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="overflow-hidden"
            >
              <p className="text-sm text-white/40 leading-relaxed pb-5">
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export function FAQ() {
  return (
    <Section id="faq" className="py-32">
      <div className="max-w-7xl mx-auto">
        <Divider className="mb-20" />

        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-[-0.03em] leading-tight text-white mb-4">
              Questions clients ask
              <br />
              <span className="text-white/30">before we begin.</span>
            </h2>
            <p className="text-base text-white/40 leading-relaxed">
              If yours isn&apos;t here, send us a message. We respond to every
              enquiry with clarity and care.
            </p>
          </FadeIn>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} item={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
