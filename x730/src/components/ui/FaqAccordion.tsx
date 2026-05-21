"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-0">
      {faqs.map((faq, i) => (
        <ScrollReveal key={i} delay={i * 40}>
          <div className="border-b border-[#1E1E24]">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            >
              <span
                className={`text-base font-medium transition-colors duration-200 ${
                  open === i ? "text-[#C4A35A]" : "text-[#F5F5F7] group-hover:text-[#C4A35A]"
                }`}
              >
                {faq.q}
              </span>
              <span className="shrink-0 text-[#C4A35A]">
                {open === i ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                open === i ? "max-h-96 pb-6" : "max-h-0"
              }`}
            >
              <p className="text-sm text-[#9A9AA8] leading-relaxed">{faq.a}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
