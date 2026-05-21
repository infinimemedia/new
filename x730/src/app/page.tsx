import { ViewTransition } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { GlobeScene3D, GeometricScene3D } from "@/components/3d/Scene3D";

const stats = [
  { value: "15+", label: "Years" },
  { value: "500+", label: "Operations" },
  { value: "3", label: "Continents" },
  { value: "100%", label: "Discretion" },
];

const services = [
  { num: "01", title: "Security Consulting", href: "/services/security-consulting" },
  { num: "02", title: "Close Protection", href: "/services/close-protection" },
  { num: "03", title: "Event Security", href: "/services/event-security" },
  { num: "04", title: "Risk Assessments", href: "/services/risk-assessments" },
  { num: "05", title: "Private Investigation", href: "/services/private-investigation" },
  { num: "06", title: "Advanced Technology", href: "/services/advanced-technology" },
  { num: "07", title: "Training", href: "/services/training" },
];

export default function HomePage() {
  return (
    <ViewTransition name="page-content" enter="page-enter" exit="page-enter">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#070707]">
        {/* 3D Globe — full canvas behind content */}
        <div className="absolute inset-0 flex items-center justify-end pr-0">
          <div className="w-full lg:w-[60%] h-full opacity-90">
            <GlobeScene3D />
          </div>
        </div>

        {/* Left gradient to mask globe edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 w-full">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-12">
              <span className="w-8 h-px bg-[#C4A35A]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#C4A35A] font-medium">
                X730 INC. · Elite Security
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-gradient-white uppercase leading-[0.9] tracking-tight"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(5rem, 16vw, 15rem)",
              }}
            >
              Security.
              <br />
              Intelligence.
              <br />
              <span className="text-[#C4A35A]" style={{ WebkitTextFillColor: "#C4A35A" }}>
                Precision.
              </span>
            </h1>

            <p className="mt-8 text-[#5A5A5A] text-base lg:text-lg leading-relaxed max-w-md">
              Managing all security needs from A to Z. Selecting the best
              professionals. Zero compromise.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" transitionTypes={["nav-forward"]} className="btn-white">
                Request Consultation
                <ArrowRight size={14} />
              </Link>
              <Link href="/services" transitionTypes={["nav-forward"]} className="btn-outline">
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#5A5A5A]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#5A5A5A] to-transparent" />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="border-y border-[#1C1C1C] bg-[#0C0C0C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-[#1C1C1C]">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80} className="lg:px-10 text-center lg:text-left">
                <div
                  className="text-5xl lg:text-6xl text-[#F4F4F5] mb-1"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-[#5A5A5A] tracking-[0.15em] uppercase">{s.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="relative section-py overflow-hidden">
        {/* 3D torus in background */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none">
          <GeometricScene3D shape="torus" color="#ffffff" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-16">
            <SectionLabel className="mb-4">Full Spectrum</SectionLabel>
            <h2
              className="text-gradient-white uppercase leading-none"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              }}
            >
              Seven Disciplines.
              <br />
              One Standard.
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-0 border-t border-[#1C1C1C]">
            {services.map((s, i) => (
              <ScrollReveal key={s.href} delay={i * 40}>
                <Link
                  href={s.href}
                  transitionTypes={["nav-forward"]}
                  className="group flex items-center justify-between py-6 border-b border-[#1C1C1C] hover:bg-[#0C0C0C] px-4 -mx-4 transition-colors duration-200"
                >
                  <div className="flex items-center gap-6 lg:gap-12">
                    <span className="text-xs text-[#3a3a3a] font-mono w-6">{s.num}</span>
                    <h3
                      className="text-xl lg:text-2xl text-[#F4F4F5] uppercase group-hover:text-white transition-colors"
                      style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[#2a2a2a] group-hover:text-[#F4F4F5] group-hover:translate-x-1 transition-all duration-300"
                  />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section className="relative section-py bg-[#0C0C0C] border-y border-[#1C1C1C] overflow-hidden">
        {/* 3D icosahedron */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none">
          <GeometricScene3D shape="icosahedron" color="#ffffff" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:ml-[40%]">
            <ScrollReveal>
              <SectionLabel className="mb-6">Who We Are</SectionLabel>
              <h2
                className="text-gradient-white uppercase leading-none mb-8"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                }}
              >
                We Manage Security.
                <br />
                You Focus on Everything Else.
              </h2>
              <p className="text-[#5A5A5A] leading-relaxed mb-6 max-w-xl">
                X730 INC. selects and deploys elite security professionals across
                every discipline — from consulting to close protection. Built by
                operators, trusted by corporations, governments, and individuals
                who cannot afford failure.
              </p>
              <Link href="/about" transitionTypes={["nav-forward"]} className="btn-white">
                About X730
                <ArrowRight size={14} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────── */}
      <section className="section-py max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1C1C1C]">
          {["Integrity", "Experience", "Excellence", "Discretion"].map((v, i) => (
            <ScrollReveal key={v} delay={i * 80}>
              <div className="bg-[#070707] p-8 lg:p-12 flex flex-col justify-between min-h-48">
                <div
                  className="text-6xl text-[#1C1C1C]"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  0{i + 1}
                </div>
                <div
                  className="text-xl lg:text-2xl text-[#F4F4F5] uppercase mt-6"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {v}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative py-32 bg-[#0C0C0C] border-t border-[#1C1C1C] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <GeometricScene3D shape="particles" color="#ffffff" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-gradient-white uppercase leading-none mb-6"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(3rem, 8vw, 7rem)",
              }}
            >
              Ready?
            </h2>
            <p className="text-[#5A5A5A] mb-10 text-lg">
              Confidential. Obligation-free. Personal.
            </p>
            <Link href="/contact" transitionTypes={["nav-forward"]} className="btn-white">
              Book a Consultation
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </ViewTransition>
  );
}
