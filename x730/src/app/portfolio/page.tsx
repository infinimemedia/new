import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { GeometricScene3D } from "@/components/3d/Scene3D";
import { ButtonHover } from "@/components/ui/button-hover";

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
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#070707]">
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="w-full lg:w-[55%] h-full opacity-70">
            <GeometricScene3D shape="target" color="#ffffff" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/85 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 w-full">
          <SectionLabel className="mb-6">Our Work</SectionLabel>
          <h1
            className="text-gradient-white uppercase leading-[0.9]"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(3.5rem, 11vw, 10rem)",
            }}
          >
            Operational
            <br />
            <span className="text-[#C4A35A]" style={{ WebkitTextFillColor: "#C4A35A" }}>
              Track Record
            </span>
          </h1>
          <p className="mt-8 text-[#5A5A5A] max-w-md leading-relaxed">
            Due to the sensitive nature of our work, client names and specific operational
            details are withheld. These case summaries illustrate our capabilities and results.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="section-py max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-14">
          <SectionLabel className="mb-4">Case Studies</SectionLabel>
          <h2
            className="text-gradient-white uppercase leading-none"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
            }}
          >
            Results Speak
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1C1C1C]">
          {cases.map((c, i) => (
            <ScrollReveal key={i} delay={i * 70}>
              <div className="bg-[#070707] p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] text-[#C4A35A] tracking-[0.2em] uppercase font-mono">
                    {c.category}
                  </span>
                  <span className="text-xs text-[#3a3a3a] font-mono">
                    0{i + 1}
                  </span>
                </div>
                <h3
                  className="text-xl text-[#F4F4F5] uppercase mb-4"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed mb-6 flex-1">
                  {c.desc}
                </p>
                <div className="border-t border-[#1C1C1C] pt-4">
                  <p className="text-xs text-[#5A5A5A] mb-4">
                    <span className="text-[#3a3a3a]">Outcome: </span>
                    <span className="text-[#C4A35A]/80">{c.outcome}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-[#3a3a3a] border border-[#1C1C1C] px-2 py-1 tracking-widest uppercase"
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
      <section className="relative py-24 bg-[#0C0C0C] border-t border-[#1C1C1C] overflow-hidden">
        <div className="absolute inset-0 opacity-8 pointer-events-none">
          <GeometricScene3D shape="circuit" color="#ffffff" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-gradient-white uppercase leading-none mb-6"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2rem, 6vw, 5rem)",
              }}
            >
              Let&apos;s Work Together
            </h2>
            <p className="text-[#5A5A5A] mb-10">
              Every engagement starts with a confidential conversation. Tell us what you need.
            </p>
            <ButtonHover href="/contact" variant="gold" transitionTypes={["nav-forward"]}>
              Start a Conversation
              <ArrowRight size={14} />
            </ButtonHover>
          </ScrollReveal>
        </div>
      </section>

    </ViewTransition>
  );
}
