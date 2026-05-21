import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { GeometricScene3D } from "@/components/3d/Scene3D";

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
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#070707]">
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="w-full lg:w-[50%] h-full opacity-60">
            <GeometricScene3D shape="radar" color="#ffffff" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/85 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 w-full">
          <SectionLabel className="mb-6">Questions</SectionLabel>
          <h1
            className="text-gradient-white uppercase leading-[0.9]"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(3.5rem, 11vw, 10rem)",
            }}
          >
            Frequently
            <br />
            <span className="text-[#C4A35A]" style={{ WebkitTextFillColor: "#C4A35A" }}>
              Asked
            </span>
          </h1>
          <p className="mt-8 text-[#5A5A5A] max-w-md leading-relaxed">
            Answers to common questions about our services, process, and standards.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py max-w-4xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-12">
          <SectionLabel className="mb-4">Everything You Need To Know</SectionLabel>
        </ScrollReveal>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0C0C0C] border-t border-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-gradient-white uppercase leading-none mb-6"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2rem, 5vw, 4rem)",
              }}
            >
              Still Have Questions?
            </h2>
            <p className="text-[#5A5A5A] mb-10">We are happy to speak directly.</p>
            <Link href="/contact" transitionTypes={["nav-forward"]} className="btn-white">
              Contact Us
              <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </ViewTransition>
  );
}
