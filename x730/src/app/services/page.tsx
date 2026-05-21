import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-spectrum security solutions: consulting, close protection, event security, risk assessment, private investigation, advanced technology, and training.",
};

const services = [
  {
    num: "01",
    title: "Security Consulting",
    desc: "We analyze your current security posture, identify vulnerabilities, and deliver a strategic roadmap — whether for a single facility, a corporate network, or an individual. Our consultants bring real operational experience, not theoretical frameworks.",
    href: "/services/security-consulting",
    tags: ["Corporate", "Government", "Private"],
  },
  {
    num: "02",
    title: "Close Protection",
    desc: "Elite personal protection for executives, dignitaries, and high-profile individuals. Our close protection officers are former military and law enforcement professionals trained in advance work, threat neutralization, and discretion.",
    href: "/services/close-protection",
    tags: ["Executive", "VIP", "Travel"],
  },
  {
    num: "03",
    title: "Event Security",
    desc: "From intimate private gatherings to large-scale corporate events, we design and execute comprehensive security plans. Access control, crowd management, threat detection — managed seamlessly and invisibly.",
    href: "/services/event-security",
    tags: ["Corporate", "Private", "Public"],
  },
  {
    num: "04",
    title: "Risk Assessments",
    desc: "Proactive threat analysis before incidents occur. We evaluate physical, digital, and operational vulnerabilities to produce actionable intelligence — giving you the clarity to make confident security decisions.",
    href: "/services/risk-assessments",
    tags: ["Physical", "Operational", "Digital"],
  },
  {
    num: "05",
    title: "Private Investigation",
    desc: "Discreet, thorough investigations for corporate due diligence, fraud, asset tracing, and sensitive personal matters. Our investigators operate with absolute confidentiality and legal compliance.",
    href: "/services/private-investigation",
    tags: ["Corporate", "Legal", "Personal"],
  },
  {
    num: "06",
    title: "Advanced Technology",
    desc: "State-of-the-art surveillance, counter-surveillance, and intelligence technology deployed by certified specialists. We integrate the latest tools with operational expertise for comprehensive technological security.",
    href: "/services/advanced-technology",
    tags: ["Surveillance", "Counter-Intel", "Tech"],
  },
  {
    num: "07",
    title: "Training",
    desc: "We develop and deliver security training programs for corporate teams, security professionals, and individuals. From situational awareness to advanced protective techniques — elevating your team's capability.",
    href: "/services/training",
    tags: ["Corporate", "Individual", "Professional"],
  },
];

export default function ServicesPage() {
  return (
    <ViewTransition name="page-content" enter="page-enter" exit="page-enter">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 to-[#080808]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-6">What We Offer</SectionLabel>
            <h1
              className="leading-none tracking-wide text-[#F5F5F7] uppercase"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(3rem, 10vw, 9rem)",
              }}
            >
              Security
              <br />
              <span className="text-[#C4A35A]">Solutions</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="section-py max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-0">
          {services.map((s, i) => (
            <ScrollReveal key={s.href} delay={i * 50}>
              <Link
                href={s.href}
                transitionTypes={["nav-forward"]}
                className="group flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 py-10 border-b border-[#1E1E24] hover:bg-[#0D0D0F] px-4 -mx-4 transition-colors duration-200"
              >
                <span
                  className="text-sm text-[#C4A35A]/60 font-mono shrink-0 w-8"
                >
                  {s.num}
                </span>

                <h2
                  className="text-3xl lg:text-4xl text-[#F5F5F7] uppercase group-hover:text-[#C4A35A] transition-colors duration-300 shrink-0 lg:w-72"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {s.title}
                </h2>

                <p className="text-sm text-[#6B6B78] leading-relaxed flex-1 max-w-xl">
                  {s.desc}
                </p>

                <div className="flex items-center justify-between lg:flex-col lg:items-end gap-4">
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[#6B6B78] border border-[#1E1E24] px-2 py-1 group-hover:border-[#C4A35A]/30 group-hover:text-[#C4A35A]/60 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-[#2E2E36] group-hover:text-[#C4A35A] transition-colors duration-300 shrink-0"
                  />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-[#0D0D0F] border-t border-[#1E1E24]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="leading-none tracking-wide text-[#F5F5F7] uppercase mb-6"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2rem, 6vw, 5rem)",
              }}
            >
              Not Sure Where
              <br />
              <span className="text-[#C4A35A]">To Start?</span>
            </h2>
            <p className="text-[#9A9AA8] mb-10">
              Our specialists will assess your situation and recommend the right
              solution. Consultations are confidential and obligation-free.
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="btn-gold"
            >
              Speak With a Specialist
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </ViewTransition>
  );
}
