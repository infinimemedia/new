import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about X730 security services.",
};

const faqs = [
  {
    q: "How do I know if X730 is the right security provider for my needs?",
    a: "X730 serves clients who require professional-grade security — corporations, government bodies, high-net-worth individuals, and organizations with genuine security requirements. If you are unsure whether our services match your needs, we recommend scheduling a confidential consultation. We will be honest about whether we are the right fit.",
  },
  {
    q: "How does X730 select its security professionals?",
    a: "Every professional we deploy undergoes a rigorous vetting process including background checks, reference verification, credentials review, and personal interviews. We draw primarily from military, law enforcement, and intelligence backgrounds. We never compromise on quality — even when timelines are tight.",
  },
  {
    q: "Are your services available outside of Canada?",
    a: "Yes. We have supported operations across North America, Europe, and the Middle East. International engagements are handled with the same standards as domestic ones, with additional attention to jurisdictional compliance and logistical coordination.",
  },
  {
    q: "How do you handle client confidentiality?",
    a: "Client confidentiality is a non-negotiable principle at X730. All engagements, inquiries, and operational details are kept strictly confidential. We sign NDAs as standard practice and our team is trained to treat all client information as classified.",
  },
  {
    q: "Why is X730 more expensive than other providers?",
    a: "We position ourselves at the premium tier of the market because that is where our quality sits. Our professionals are genuinely elite — not entry-level guards with minimal training. The cost of inadequate security is always higher than the cost of doing it right.",
  },
  {
    q: "How quickly can X730 respond to urgent security needs?",
    a: "We maintain rapid response capability for urgent situations. Contact us directly and we will assess your requirements immediately. For planned engagements, we recommend as much lead time as possible to allow for thorough preparation.",
  },
  {
    q: "Do you offer ongoing security retainers or only project-based work?",
    a: "Both. We work with clients on individual projects, extended engagements, and ongoing retainer agreements. Many clients begin with a single engagement and choose to maintain a relationship with X730 on a retainer basis for advisory services and priority access.",
  },
  {
    q: "What information do you need to begin a consultation?",
    a: "Very little upfront. We can begin with a high-level description of your situation and requirements. Our specialists will guide the conversation to understand your needs. You are never required to share sensitive information until you are comfortable doing so.",
  },
];

export default function FaqPage() {
  return (
    <ViewTransition name="page-content" enter="page-enter" exit="page-enter">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 to-[#080808]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-6">Questions</SectionLabel>
            <h1
              className="leading-none tracking-wide text-[#F5F5F7] uppercase"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(3rem, 10vw, 9rem)",
              }}
            >
              Frequently
              <br />
              <span className="text-[#C4A35A]">Asked</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py max-w-4xl mx-auto px-6 lg:px-8">
        <FaqAccordion faqs={faqs} />
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D0D0F] border-t border-[#1E1E24]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-[#9A9AA8] mb-6 text-lg">
              Still have questions? We are happy to speak directly.
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="btn-gold"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </ViewTransition>
  );
}
