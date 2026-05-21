import type { Metadata } from "next";
import { ViewTransition } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact X730 INC. for a confidential security consultation. Available 24/7.",
};

export default function ContactPage() {
  return (
    <ViewTransition name="page-content" enter="page-enter" exit="page-enter">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 to-[#080808]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-6">Get In Touch</SectionLabel>
            <h1
              className="leading-none tracking-wide text-[#F5F5F7] uppercase"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(3rem, 10vw, 9rem)",
              }}
            >
              Contact
              <br />
              <span className="text-[#C4A35A]">X730</span>
            </h1>
            <p className="mt-6 text-[#9A9AA8] max-w-lg text-lg">
              All inquiries are treated with absolute confidentiality. We respond
              to every request personally.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section-py max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <ScrollReveal direction="left">
              <div className="border border-[#1E1E24] bg-[#0D0D0F] p-8">
                <h3
                  className="text-xl text-[#F5F5F7] uppercase mb-6"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  Contact Details
                </h3>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-xs text-[#C4A35A] tracking-widest uppercase mb-2">
                      Website
                    </p>
                    <p className="text-sm text-[#9A9AA8]">www.x730.ca</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#C4A35A] tracking-widest uppercase mb-2">
                      Location
                    </p>
                    <p className="text-sm text-[#9A9AA8]">Canada</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#C4A35A] tracking-widest uppercase mb-2">
                      Availability
                    </p>
                    <p className="text-sm text-[#9A9AA8]">24/7 — We are always available</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100}>
              <div className="border border-[#1E1E24] bg-[#0D0D0F] p-8">
                <h3
                  className="text-xl text-[#F5F5F7] uppercase mb-4"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  Confidentiality
                </h3>
                <p className="text-sm text-[#6B6B78] leading-relaxed">
                  Every inquiry and consultation is protected under strict
                  confidentiality. We do not share client information under any
                  circumstances. Your security matters begin and end with us.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </ViewTransition>
  );
}
