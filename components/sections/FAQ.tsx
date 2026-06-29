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
      "Most marketing websites range from $8,000–$25,000. Digital products and platforms start at $20,000. Every project is scoped individually — we'll give you a fixed quote before we start so there are no surprises.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A standard website takes 6–8 weeks from kick-off to launch. More complex digital products take 10–16 weeks. Timeline depends on scope and how quickly you can provide feedback — we'll agree this upfront.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes, if the fit is right. We work with funded startups and established businesses. What matters most is that you have a clear vision of who you're building for, and the budget to invest in quality.",
  },
  {
    question: "Can you redesign our existing website?",
    answer:
      "Absolutely. Redesigns make up about half our work. We start with a discovery session to understand what's not working, and we always audit your existing analytics before proposing any changes.",
  },
  {
    question: "Do you offer ongoing retainers?",
    answer:
      "We offer monthly retainers for select clients after a successful project together. Typically 20–40 hours per month covering design updates, new features, and performance optimisation.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "A call. We'll ask you about your business, your customers, and what you're trying to achieve. From that, we'll scope the project and send you a proposal within 48 hours.",
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
              Questions we get
              <br />
              <span className="text-white/30">asked a lot.</span>
            </h2>
            <p className="text-base text-white/40 leading-relaxed">
              If yours isn&apos;t here, send us a message. We respond to every
              enquiry within 24 hours.
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
