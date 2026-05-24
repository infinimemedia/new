import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import HalideLanding from '@/components/ui/halide-topo-hero';
import InteractiveSelector from '@/components/ui/interactive-selector';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { GridPattern } from '@/components/ui/grid-pattern';

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
          HERO — Halide Topo 3D Parallax
      ══════════════════════════════════════════════════ */}
      <HalideLanding />

      {/* ══════════════════════════════════════════════════
          SERVICES — Interactive Selector
          GridPattern: dashed skew behind the selector
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#070707] border-t border-[#0F0F0F] py-24 px-6 lg:px-16 overflow-hidden">
        {/* Gold dashed grid — skewed, fades out toward right */}
        <GridPattern
          width={44}
          height={44}
          strokeDasharray="3 3"
          className={cn(
            'fill-[#C4A35A]/[0.03] stroke-[#C4A35A]/[0.07]',
            '[mask-image:linear-gradient(to_right,white_0%,transparent_80%)]',
          )}
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
              <span className="text-[#2A2A2A]">One Standard.</span>
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
          GridPattern: radial, highlighted squares on each stat
      ══════════════════════════════════════════════════ */}
      <section className="relative border-y border-[#111] bg-[#0C0C0C] overflow-hidden">
        {/* Subtle full-width grid */}
        <GridPattern
          width={36}
          height={36}
          squares={[
            [1, 2], [3, 1], [6, 3], [9, 2], [12, 1], [15, 3],
            [2, 5], [5, 4], [8, 5], [11, 4], [14, 5],
          ]}
          className={cn(
            'fill-[#C4A35A]/[0.06] stroke-[#C4A35A]/[0.04]',
            '[mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,white,transparent)]',
          )}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 py-16">
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
          GridPattern: bottom-right diagonal gradient mask
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#070707] py-28 px-6 lg:px-16 overflow-hidden">
        {/* Corner grid — fades in from bottom-right */}
        <GridPattern
          width={50}
          height={50}
          squares={[
            [8, 3], [10, 5], [12, 3], [14, 5], [16, 3],
            [9, 7], [11, 7], [13, 7], [15, 7],
          ]}
          className={cn(
            'fill-[#C4A35A]/[0.08] stroke-[#C4A35A]/[0.05]',
            '[mask-image:linear-gradient(to_bottom_left,white_0%,transparent_55%)]',
          )}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
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
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#C4A35A] text-xs font-bold uppercase tracking-[0.2em] hover:gap-4 transition-all duration-200"
              >
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
      <section className="relative bg-[#C4A35A] py-16 px-6 lg:px-16 overflow-hidden">
        {/* Very subtle dark grid on gold — adds texture */}
        <GridPattern
          width={32}
          height={32}
          strokeDasharray="2 4"
          className="fill-[#070707]/[0.04] stroke-[#070707]/[0.06]"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
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
          GridPattern: radial burst with gold squares
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#070707] py-36 px-6 lg:px-16 border-t border-[#0F0F0F] overflow-hidden">
        {/* Radial grid centred on the heading */}
        <GridPattern
          width={40}
          height={40}
          squares={[
            [3, 3],  [4, 1],  [6, 2],  [8, 3],  [10, 1],
            [5, 5],  [7, 4],  [9, 5],  [11, 4], [13, 5],
            [4, 7],  [6, 6],  [8, 7],  [10, 6], [12, 7],
            [3, 9],  [5, 9],  [7, 8],  [9, 9],  [11, 8],
          ]}
          className={cn(
            'fill-[#C4A35A]/[0.07] stroke-[#C4A35A]/[0.05]',
            '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[-20%] h-[140%]',
          )}
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
