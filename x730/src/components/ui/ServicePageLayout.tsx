import { ViewTransition } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

interface ServicePageLayoutProps {
  num: string;
  title: string;
  subtitle: string;
  heroLine: string;
  description: string[];
  features: string[];
  process: { step: string; title: string; desc: string }[];
  prevService?: { label: string; href: string };
  nextService?: { label: string; href: string };
}

export default function ServicePageLayout({
  num,
  title,
  subtitle,
  heroLine,
  description,
  features,
  process,
  prevService,
  nextService,
}: ServicePageLayoutProps) {
  return (
    <ViewTransition name="page-content" enter="page-enter" exit="page-enter">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 to-[#080808]" />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C4A35A]/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/services"
                transitionTypes={["nav-back"]}
                className="text-xs text-[#6B6B78] hover:text-[#C4A35A] tracking-widest uppercase transition-colors flex items-center gap-2"
              >
                <ArrowLeft size={12} />
                Services
              </Link>
              <span className="text-[#1E1E24]">/</span>
              <span className="text-xs text-[#C4A35A] tracking-widest uppercase">
                {num}
              </span>
            </div>
            <SectionLabel className="mb-6">{subtitle}</SectionLabel>
            <h1
              className="leading-none tracking-wide text-[#F5F5F7] uppercase"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(3rem, 10vw, 9rem)",
              }}
            >
              {heroLine.split("|").map((part, i) =>
                i % 2 === 0 ? (
                  <span key={i}>{part}</span>
                ) : (
                  <span key={i} className="text-[#C4A35A]">
                    {part}
                  </span>
                )
              )}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Main content */}
      <section className="section-py max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Description */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <SectionLabel className="mb-6">Overview</SectionLabel>
              <div className="flex flex-col gap-5">
                {description.map((para, i) => (
                  <p key={i} className="text-[#9A9AA8] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Features sidebar */}
          <ScrollReveal direction="right">
            <div className="border border-[#1E1E24] bg-[#0D0D0F] p-8">
              <h3
                className="text-lg text-[#F5F5F7] uppercase mb-6"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                What&apos;s Included
              </h3>
              <ul className="flex flex-col gap-4">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle
                      size={14}
                      className="text-[#C4A35A] shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-[#9A9AA8]">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-[#1E1E24]">
                <Link
                  href="/contact"
                  transitionTypes={["nav-forward"]}
                  className="btn-gold w-full justify-center"
                >
                  Request This Service
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      {process.length > 0 && (
        <section className="section-py bg-[#0D0D0F] border-y border-[#1E1E24]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal className="mb-16">
              <SectionLabel className="mb-4">How We Work</SectionLabel>
              <h2
                className="leading-none tracking-wide text-[#F5F5F7] uppercase"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                }}
              >
                Our <span className="text-[#C4A35A]">Process</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, i) => (
                <ScrollReveal key={p.step} delay={i * 80}>
                  <div className="border border-[#1E1E24] bg-[#080808] p-6 h-full">
                    <div
                      className="text-4xl text-[#C4A35A]/20 mb-4"
                      style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                    >
                      {p.step}
                    </div>
                    <h3
                      className="text-lg text-[#F5F5F7] uppercase mb-3"
                      style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#6B6B78] leading-relaxed">{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation between services */}
      <section className="border-t border-[#1E1E24]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-[#1E1E24]">
            {prevService ? (
              <Link
                href={prevService.href}
                transitionTypes={["nav-back"]}
                className="group flex items-center gap-4 py-8 px-6 hover:bg-[#0D0D0F] transition-colors"
              >
                <ArrowLeft
                  size={20}
                  className="text-[#2E2E36] group-hover:text-[#C4A35A] transition-colors"
                />
                <div>
                  <p className="text-xs text-[#6B6B78] tracking-widest uppercase mb-1">
                    Previous
                  </p>
                  <p className="text-sm font-semibold text-[#F5F5F7] group-hover:text-[#C4A35A] transition-colors">
                    {prevService.label}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextService ? (
              <Link
                href={nextService.href}
                transitionTypes={["nav-forward"]}
                className="group flex items-center justify-end gap-4 py-8 px-6 hover:bg-[#0D0D0F] transition-colors"
              >
                <div className="text-right">
                  <p className="text-xs text-[#6B6B78] tracking-widest uppercase mb-1">
                    Next
                  </p>
                  <p className="text-sm font-semibold text-[#F5F5F7] group-hover:text-[#C4A35A] transition-colors">
                    {nextService.label}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-[#2E2E36] group-hover:text-[#C4A35A] transition-colors"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </ViewTransition>
  );
}
