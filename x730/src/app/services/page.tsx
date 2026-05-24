import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { GeometricScene3D } from "@/components/3d/Scene3D";
import { ButtonHover } from "@/components/ui/button-hover";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-spectrum security solutions: consulting, close protection, event security, risk assessment, private investigation, advanced technology, and training.",
};

const services = [
  {
    num: "01",
    title: "Security Consulting",
    desc: "We analyze your current security posture, identify vulnerabilities, and deliver a strategic roadmap — whether for a single facility, a corporate network, or an individual.",
    href: "/services/security-consulting",
    tags: ["Corporate", "Government", "Private"],
  },
  {
    num: "02",
    title: "Close Protection",
    desc: "Elite personal protection for executives, dignitaries, and high-profile individuals. Our close protection officers are former military and law enforcement professionals.",
    href: "/services/close-protection",
    tags: ["Executive", "VIP", "Travel"],
  },
  {
    num: "03",
    title: "Event Security",
    desc: "From intimate private gatherings to large-scale corporate events, we design and execute comprehensive security plans. Access control, crowd management, threat detection.",
    href: "/services/event-security",
    tags: ["Corporate", "Private", "Public"],
  },
  {
    num: "04",
    title: "Risk Assessments",
    desc: "Proactive threat analysis before incidents occur. We evaluate physical, digital, and operational vulnerabilities to produce actionable intelligence.",
    href: "/services/risk-assessments",
    tags: ["Physical", "Operational", "Digital"],
  },
  {
    num: "05",
    title: "Private Investigation",
    desc: "Discreet, thorough investigations for corporate due diligence, fraud, asset tracing, and sensitive personal matters — with absolute confidentiality.",
    href: "/services/private-investigation",
    tags: ["Corporate", "Legal", "Personal"],
  },
  {
    num: "06",
    title: "Advanced Technology",
    desc: "State-of-the-art surveillance, counter-surveillance, and intelligence technology deployed by certified specialists. The latest tools with operational expertise.",
    href: "/services/advanced-technology",
    tags: ["Surveillance", "Counter-Intel", "Tech"],
  },
  {
    num: "07",
    title: "Training",
    desc: "Security training programs for corporate teams, security professionals, and individuals. From situational awareness to advanced protective techniques.",
    href: "/services/training",
    tags: ["Corporate", "Individual", "Professional"],
  },
];

export default function ServicesPage() {
  return (
    <ViewTransition name="page-content" enter="page-enter" exit="page-enter">

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#070707]">
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="w-full lg:w-[55%] h-full opacity-70">
            <GeometricScene3D shape="torus" color="#ffffff" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/85 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 w-full">
          <SectionLabel className="mb-6">What We Offer</SectionLabel>
          <h1
            className="text-gradient-white uppercase leading-[0.9]"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(3.5rem, 11vw, 10rem)",
            }}
          >
            Security
            <br />
            <span className="text-[#C4A35A]" style={{ WebkitTextFillColor: "#C4A35A" }}>
              Solutions
            </span>
          </h1>
          <p className="mt-8 text-[#5A5A5A] max-w-md leading-relaxed">
            Seven disciplines. One standard. We manage every dimension of your security.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-py max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-14">
          <SectionLabel className="mb-4">Full Spectrum</SectionLabel>
          <h2
            className="text-gradient-white uppercase leading-none"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
            }}
          >
            Seven Disciplines
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-0 border-t border-[#1C1C1C]">
          {services.map((s, i) => (
            <ScrollReveal key={s.href} delay={i * 40}>
              <Link
                href={s.href}
                transitionTypes={["nav-forward"]}
                className="group flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 py-8 border-b border-[#1C1C1C] hover:bg-[#0C0C0C] px-4 -mx-4 transition-colors duration-200"
              >
                <span className="text-xs text-[#3a3a3a] font-mono shrink-0 w-6">
                  {s.num}
                </span>
                <h2
                  className="text-2xl lg:text-3xl text-[#F4F4F5] uppercase group-hover:text-white transition-colors duration-300 shrink-0 lg:w-64"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {s.title}
                </h2>
                <p className="text-sm text-[#5A5A5A] leading-relaxed flex-1 max-w-xl">
                  {s.desc}
                </p>
                <div className="flex items-center justify-between lg:flex-col lg:items-end gap-4">
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-[#3a3a3a] border border-[#1C1C1C] px-2 py-1 tracking-widest uppercase group-hover:border-[#F4F4F5]/20 group-hover:text-[#5A5A5A] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[#2a2a2a] group-hover:text-[#F4F4F5] group-hover:translate-x-1 transition-all duration-300 shrink-0"
                  />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-[#0C0C0C] border-t border-[#1C1C1C] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <GeometricScene3D shape="particles" color="#ffffff" />
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
              Not Sure Where
              <br />
              To Start?
            </h2>
            <p className="text-[#5A5A5A] mb-10">
              Our specialists will assess your situation and recommend the right solution.
              Consultations are confidential and obligation-free.
            </p>
            <ButtonHover href="/contact" variant="gold" transitionTypes={["nav-forward"]}>
              Speak With a Specialist
              <ArrowRight size={16} />
            </ButtonHover>
          </ScrollReveal>
        </div>
      </section>

    </ViewTransition>
  );
}
