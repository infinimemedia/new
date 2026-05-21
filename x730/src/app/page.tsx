import { ViewTransition } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Eye, Users, Globe } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Operations Completed" },
  { value: "3", label: "Continents Active" },
  { value: "100%", label: "Client Discretion" },
];

const services = [
  {
    icon: Shield,
    title: "Security Consulting",
    desc: "Strategic security assessments and tailored consulting for corporations and high-net-worth individuals.",
    href: "/services/security-consulting",
    num: "01",
  },
  {
    icon: Users,
    title: "Close Protection",
    desc: "Elite executive protection delivered by former law enforcement and military professionals.",
    href: "/services/close-protection",
    num: "02",
  },
  {
    icon: Globe,
    title: "Event Security",
    desc: "Comprehensive security management for high-profile corporate, private, and public events.",
    href: "/services/event-security",
    num: "03",
  },
  {
    icon: Eye,
    title: "Risk Assessments",
    desc: "In-depth threat and vulnerability analysis to identify and neutralize risks before they materialize.",
    href: "/services/risk-assessments",
    num: "04",
  },
  {
    icon: Shield,
    title: "Private Investigation",
    desc: "Discreet, professional investigations for corporate due diligence and sensitive personal matters.",
    href: "/services/private-investigation",
    num: "05",
  },
  {
    icon: Eye,
    title: "Advanced Technology",
    desc: "Cutting-edge surveillance, counter-surveillance, and intelligence technology solutions.",
    href: "/services/advanced-technology",
    num: "06",
  },
];

const testimonials = [
  {
    quote:
      "X730 redefined what we expected from a security partner. Their professionalism and discretion are unmatched.",
    author: "CEO, International Holding Group",
    role: "Corporate Client",
  },
  {
    quote:
      "When we needed real security — not just a logo on a jacket — X730 delivered. Every single time.",
    author: "Private Client",
    role: "UHNWI",
  },
  {
    quote:
      "Their risk assessment identified three critical vulnerabilities our previous provider missed entirely.",
    author: "Chief Security Officer",
    role: "Fortune 500 Company",
  },
];

export default function HomePage() {
  return (
    <ViewTransition name="page-content" enter="page-enter" exit="page-enter">
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-transparent to-[#080808]" />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C4A35A]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 text-center">
          <div className="inline-flex items-center gap-3 mb-10">
            <span className="w-10 h-px bg-[#C4A35A]" />
            <span className="text-xs tracking-[0.25em] uppercase text-[#C4A35A] font-semibold">
              X730 INC. · Elite Security
            </span>
            <span className="w-10 h-px bg-[#C4A35A]" />
          </div>

          <h1
            className="leading-none tracking-wider text-[#F5F5F7] uppercase"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(4rem, 14vw, 13rem)",
            }}
          >
            Security.
            <br />
            <span className="text-gold-gradient">Intelligence.</span>
            <br />
            Precision.
          </h1>

          <p className="mt-8 max-w-xl mx-auto text-[#9A9AA8] text-lg leading-relaxed">
            Managing all security needs from A to Z — selecting the best
            professionals for every client, every situation, without compromise.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="btn-gold"
            >
              Request a Consultation
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              transitionTypes={["nav-forward"]}
              className="btn-outline"
            >
              Our Services
            </Link>
          </div>

          <div className="mt-20 flex flex-col items-center gap-3 opacity-40">
            <span className="text-xs tracking-widest uppercase text-[#6B6B78]">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-[#6B6B78] to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────── */}
      <section className="border-y border-[#1E1E24] bg-[#0D0D0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#1E1E24]">
            {stats.map((s, i) => (
              <ScrollReveal
                key={s.label}
                delay={i * 80}
                className="lg:px-10 text-center lg:text-left"
              >
                <div
                  className="text-4xl lg:text-5xl text-[#C4A35A] mb-2"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="text-sm text-[#6B6B78] tracking-wide">{s.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────── */}
      <section className="section-py max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel className="mb-4">What We Do</SectionLabel>
          <h2
            className="leading-none tracking-wide text-[#F5F5F7] uppercase mt-4 mb-16"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
            }}
          >
            Full-Spectrum
            <br />
            <span className="text-[#C4A35A]">Security Solutions</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E1E24]">
          {services.map((s, i) => (
            <ScrollReveal key={s.href} delay={i * 60}>
              <Link
                href={s.href}
                transitionTypes={["nav-forward"]}
                className="service-card block p-8 h-full group"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs text-[#C4A35A] tracking-widest font-mono">
                    {s.num}
                  </span>
                  <s.icon
                    size={20}
                    className="text-[#2E2E36] group-hover:text-[#C4A35A] transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#F5F5F7] mb-3 group-hover:text-[#C4A35A] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-sm text-[#6B6B78] leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs text-[#C4A35A] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowRight size={12} />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 text-center">
          <Link
            href="/services"
            transitionTypes={["nav-forward"]}
            className="btn-outline"
          >
            View All Services
            <ArrowRight size={14} />
          </Link>
        </ScrollReveal>
      </section>

      {/* ── About Teaser ───────────────────────────────── */}
      <section className="section-py bg-[#0D0D0F] border-y border-[#1E1E24]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <SectionLabel className="mb-6">Who We Are</SectionLabel>
              <h2
                className="leading-none tracking-wide text-[#F5F5F7] uppercase mb-8"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: "clamp(2rem, 5vw, 4.5rem)",
                }}
              >
                Your Security,
                <br />
                <span className="text-[#C4A35A]">Our Responsibility</span>
              </h2>
              <p className="text-[#9A9AA8] leading-relaxed mb-6">
                X730 INC. was built on a single principle: every client deserves
                the best security professionals available. We manage the entire
                security spectrum — from initial threat assessment to ongoing
                protection — with integrity and absolute discretion.
              </p>
              <p className="text-[#9A9AA8] leading-relaxed mb-10">
                Our team consists of former military, law enforcement, and
                intelligence professionals who bring real-world expertise to
                every engagement. When you choose X730, you choose a partner who
                delivers on every promise.
              </p>
              <Link
                href="/about"
                transitionTypes={["nav-forward"]}
                className="btn-gold"
              >
                About X730
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {["Integrity", "Experience", "Excellence", "Discretion"].map(
                  (val, i) => (
                    <div
                      key={val}
                      className="border border-[#1E1E24] p-6 bg-[#080808]"
                    >
                      <div
                        className="text-5xl text-[#C4A35A]/20 mb-3"
                        style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                      >
                        0{i + 1}
                      </div>
                      <div
                        className="text-xl text-[#F5F5F7] tracking-wide uppercase"
                        style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                      >
                        {val}
                      </div>
                    </div>
                  )
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────── */}
      <section className="section-py max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel className="justify-center mb-4">Clients</SectionLabel>
          <h2
            className="leading-none tracking-wide text-[#F5F5F7] uppercase"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
            }}
          >
            Trusted by Those Who
            <br />
            <span className="text-[#C4A35A]">Demand the Best</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="border border-[#1E1E24] bg-[#0D0D0F] p-8 h-full">
                <div className="text-3xl text-[#C4A35A]/30 mb-4 font-serif leading-none">
                  &ldquo;
                </div>
                <p className="text-[#9A9AA8] text-sm leading-relaxed mb-8 italic">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 border-t border-[#1E1E24] pt-6">
                  <div className="w-8 h-8 shrink-0 bg-[#C4A35A]/10 border border-[#C4A35A]/20 flex items-center justify-center">
                    <span className="text-[#C4A35A] text-xs font-bold">
                      {t.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#F5F5F7]">
                      {t.author}
                    </p>
                    <p className="text-xs text-[#6B6B78]">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden bg-[#0D0D0F] border-t border-[#1E1E24]">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C4A35A]/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="leading-none tracking-wide text-[#F5F5F7] uppercase mb-6"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
              }}
            >
              Ready to Secure
              <br />
              <span className="text-[#C4A35A]">What Matters?</span>
            </h2>
            <p className="text-[#9A9AA8] mb-10 text-lg">
              Speak directly with our security specialists. Consultations are
              confidential and obligation-free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="btn-gold"
              >
                Book a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                transitionTypes={["nav-forward"]}
                className="btn-outline"
              >
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ViewTransition>
  );
}
