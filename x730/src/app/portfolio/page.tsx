import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "X730 INC. case studies and operational track record across security, protection, and investigation.",
};

const cases = [
  {
    category: "Close Protection",
    title: "Executive Protection — International Tour",
    desc: "12-month close protection engagement for a senior executive traveling across North America, Europe, and the Middle East. Advance work, threat assessment, and 24/7 protective detail coordination across 14 countries.",
    outcome: "Zero incidents. Seamless operations across all jurisdictions.",
    tags: ["Close Protection", "Travel", "International"],
  },
  {
    category: "Event Security",
    title: "High-Profile Corporate Summit",
    desc: "Full-spectrum security management for a 3-day private summit with 400 attendees including government officials, CEOs, and international guests. Access control, perimeter security, and dedicated VIP protection.",
    outcome: "Incident-free event. Client renewed annual contract.",
    tags: ["Event Security", "VIP", "Corporate"],
  },
  {
    category: "Risk Assessment",
    title: "Corporate Headquarters Security Audit",
    desc: "Comprehensive security assessment of a multinational company's Canadian headquarters. Identified 12 critical vulnerabilities across physical, personnel, and technology domains — all remediated within 90 days.",
    outcome: "Full remediation plan implemented. Insurance premiums reduced.",
    tags: ["Risk Assessment", "Corporate", "Physical Security"],
  },
  {
    category: "Private Investigation",
    title: "Corporate Fraud Investigation",
    desc: "Discreet investigation into suspected financial fraud within a mid-size organization. Covert surveillance, financial tracing, and witness interviews resulting in documentary evidence presented in legal proceedings.",
    outcome: "Evidence accepted in court. Full financial recovery achieved.",
    tags: ["Investigation", "Corporate", "Fraud"],
  },
  {
    category: "Security Consulting",
    title: "Government Agency Security Review",
    desc: "Complete security posture review for a regional government agency. Developed and implemented a new security framework covering access control, personnel screening, and emergency response protocols.",
    outcome: "Framework adopted agency-wide. Certified compliant with federal standards.",
    tags: ["Consulting", "Government", "Compliance"],
  },
  {
    category: "Advanced Technology",
    title: "Counter-Surveillance Installation",
    desc: "Technical counter-surveillance assessment for a high-net-worth individual following suspected corporate espionage. Detected and neutralized three concealed listening devices. Deployed a secure communication infrastructure.",
    outcome: "Threat neutralized. Secure communications established.",
    tags: ["Technology", "Counter-Surveillance", "TSCM"],
  },
];

export default function PortfolioPage() {
  return (
    <ViewTransition name="page-content" enter="page-enter" exit="page-enter">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 to-[#080808]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-6">Our Work</SectionLabel>
            <h1
              className="leading-none tracking-wide text-[#F5F5F7] uppercase"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(3rem, 10vw, 9rem)",
              }}
            >
              Operational
              <br />
              <span className="text-[#C4A35A]">Track Record</span>
            </h1>
            <p className="mt-6 text-[#9A9AA8] max-w-lg">
              Due to the sensitive nature of our work, client names and specific
              operational details are withheld. These case summaries illustrate
              our capabilities and results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Cases */}
      <section className="section-py max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <ScrollReveal key={i} delay={i * 70}>
              <div className="service-card p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs text-[#C4A35A] tracking-widest uppercase font-mono">
                    {c.category}
                  </span>
                  <span className="text-xs text-[#6B6B78] font-mono">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#F5F5F7] mb-4">
                  {c.title}
                </h3>
                <p className="text-sm text-[#6B6B78] leading-relaxed mb-6 flex-1">
                  {c.desc}
                </p>
                <div className="border-t border-[#1E1E24] pt-4">
                  <p className="text-xs text-[#C4A35A]/80 mb-4">
                    <span className="text-[#6B6B78]">Outcome: </span>
                    {c.outcome}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[#6B6B78] border border-[#1E1E24] px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0D0D0F] border-t border-[#1E1E24]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="leading-none tracking-wide text-[#F5F5F7] uppercase mb-6"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2rem, 6vw, 5rem)",
              }}
            >
              Let&apos;s Work <span className="text-[#C4A35A]">Together</span>
            </h2>
            <p className="text-[#9A9AA8] mb-10">
              Every engagement starts with a confidential conversation.
              Tell us what you need.
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="btn-gold"
            >
              Start a Conversation
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </ViewTransition>
  );
}
