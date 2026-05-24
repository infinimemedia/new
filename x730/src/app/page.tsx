import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import InteractiveSelector from '@/components/ui/interactive-selector';
import ScrollReveal from '@/components/ui/ScrollReveal';

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */

const stats = [
  { value: '15+', label: 'Years Active' },
  { value: '500+', label: 'Operations' },
  { value: '3', label: 'Continents' },
  { value: '100%', label: 'Discretion' },
];

const values = [
  {
    num: '01',
    title: 'Integrity',
    body: 'Our word is our bond. Every commitment is honoured, every confidence protected, without exception.',
  },
  {
    num: '02',
    title: 'Experience',
    body: '15+ years of field-tested operations. We have seen every threat scenario — and neutralised it.',
  },
  {
    num: '03',
    title: 'Excellence',
    body: 'We deploy only the top 1 % of vetted professionals. No shortcuts. No second chances.',
  },
  {
    num: '04',
    title: 'Discretion',
    body: 'Every engagement is confidential. Your privacy is as sacred to us as your security.',
  },
];

/* ─────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-start justify-center overflow-hidden bg-[#070707] px-6 lg:px-16 pt-24 pb-20">
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right,#F4F4F5 1px,transparent 1px),linear-gradient(to bottom,#F4F4F5 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gold vertical line accent */}
        <div className="absolute left-6 lg:left-16 top-32 bottom-20 w-px bg-gradient-to-b from-[#C4A35A]/60 via-[#C4A35A]/20 to-transparent" />

        <div className="relative z-10 max-w-5xl pl-8 lg:pl-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-6 h-px bg-[#C4A35A]" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#C4A35A] font-semibold">
              X730 INC. · Elite Security
            </span>
          </div>

          {/* Headline */}
          <h1
            className="uppercase leading-[0.88] tracking-tight text-[#F4F4F5] mb-8"
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(4.5rem,14vw,13rem)',
            }}
          >
            Security.
            <br />
            Intelligence.
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg,#C4A35A 0%,#D4B56A 60%,#C4A35A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Precision.
            </span>
          </h1>

          {/* Sub */}
          <p className="text-[#5A5A5A] text-base lg:text-lg leading-relaxed max-w-lg mb-12">
            Managing all security needs from A&nbsp;to&nbsp;Z.
            Selecting the best professionals. Zero compromise.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C4A35A] text-[#070707] text-xs font-bold uppercase tracking-[0.18em] px-8 py-4 hover:bg-[#D4B56A] transition-colors duration-200"
            >
              Request Consultation
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-[#1C1C1C] text-[#5A5A5A] text-xs font-bold uppercase tracking-[0.18em] px-8 py-4 hover:border-[#C4A35A] hover:text-[#C4A35A] transition-colors duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 right-8 lg:right-16 flex flex-col items-center gap-2 opacity-25">
          <ChevronDown size={14} className="text-[#5A5A5A] animate-bounce" />
          <div className="w-px h-12 bg-gradient-to-b from-[#5A5A5A] to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SERVICES — INTERACTIVE SELECTOR
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#070707] border-t border-[#0F0F0F] py-24 px-6 lg:px-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right,#C4A35A 1px,transparent 1px),linear-gradient(to bottom,#C4A35A 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <ScrollReveal className="mb-14">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#C4A35A] font-semibold flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-[#C4A35A]" />
              Full Spectrum Protection
            </span>
            <h2
              className="text-[#F4F4F5] uppercase leading-none"
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(2.8rem,7vw,6rem)',
              }}
            >
              Seven Disciplines.
              <br />
              <span className="text-[#3A3A3A]">One Standard.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <InteractiveSelector />
          </ScrollReveal>

          <ScrollReveal className="mt-8 flex justify-end">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#C4A35A] text-xs font-bold uppercase tracking-[0.2em] hover:gap-4 transition-all duration-200"
            >
              View All Services
              <ArrowRight size={13} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STATS
      ══════════════════════════════════════════════════ */}
      <section className="border-y border-[#111] bg-[#0C0C0C]">
        <div className="max-w-5xl mx-auto px-6 lg:px-16 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#111]">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80}>
                <div className="bg-[#0C0C0C] px-10 py-10 text-center">
                  <div
                    className="text-[#C4A35A] mb-1"
                    style={{
                      fontFamily: 'var(--font-bebas)',
                      fontSize: 'clamp(3rem,6vw,5rem)',
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[10px] text-[#3A3A3A] tracking-[0.25em] uppercase font-semibold">
                    {s.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#070707] py-28 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left — heading */}
            <ScrollReveal>
              <span className="text-[11px] tracking-[0.35em] uppercase text-[#C4A35A] font-semibold flex items-center gap-2 mb-6">
                <span className="w-5 h-px bg-[#C4A35A]" />
                About X730
              </span>
              <h2
                className="text-[#F4F4F5] uppercase leading-[0.88] mb-8"
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: 'clamp(3rem,7vw,6.5rem)',
                }}
              >
                Operators.
                <br />
                Not
                <br />
                Consultants.
              </h2>
              <p className="text-[#5A5A5A] leading-relaxed mb-8 text-sm lg:text-base max-w-sm">
                X730 INC. selects and deploys elite security professionals
                across every discipline — from consulting to close
                protection. Built by operators, trusted by corporations,
                governments, and individuals who cannot afford failure.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#C4A35A] text-xs font-bold uppercase tracking-[0.2em] hover:gap-4 transition-all duration-200">
                About X730
                <ArrowRight size={13} />
              </Link>
            </ScrollReveal>

            {/* Right — values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#111]">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 80}>
                  <div className="bg-[#070707] p-8 border border-[#0F0F0F] hover:border-[#1C1C1C] transition-colors duration-300">
                    <div
                      className="text-[#1A1A1A] mb-4 leading-none"
                      style={{ fontFamily: 'var(--font-bebas)', fontSize: '3rem' }}
                    >
                      {v.num}
                    </div>
                    <div
                      className="text-[#F4F4F5] uppercase mb-3 text-lg"
                      style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
                    >
                      {v.title}
                    </div>
                    <p className="text-[#3A3A3A] text-xs leading-relaxed">{v.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          QUOTE DIVIDER
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#C4A35A] py-16 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-[#070707] uppercase leading-tight"
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(2rem,5vw,4rem)',
              letterSpacing: '0.02em',
            }}
          >
            &ldquo;When the stakes are highest,
            <br />
            X730 is the only call you need to make.&rdquo;
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#070707] py-36 px-6 lg:px-16 border-t border-[#0F0F0F]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at center, #C4A35A 0%, transparent 70%)',
            backgroundSize: '100% 100%',
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#C4A35A] font-semibold mb-6 inline-block">
              Get In Touch
            </span>
            <h2
              className="text-[#F4F4F5] uppercase leading-none mb-6"
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(5rem,14vw,11rem)',
              }}
            >
              Ready?
            </h2>
            <p className="text-[#3A3A3A] mb-12 text-sm lg:text-base leading-relaxed max-w-sm mx-auto">
              Confidential. Obligation-free. Personal.
              Every security challenge is unique — let&apos;s build
              your solution together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#C4A35A] text-[#070707] text-xs font-bold uppercase tracking-[0.18em] px-10 py-4 hover:bg-[#D4B56A] transition-colors duration-200"
              >
                Book a Consultation
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-[#1C1C1C] text-[#5A5A5A] text-xs font-bold uppercase tracking-[0.18em] px-10 py-4 hover:border-[#C4A35A] hover:text-[#C4A35A] transition-colors duration-200"
              >
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
