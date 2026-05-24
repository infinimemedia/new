import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import HalideLanding from '@/components/ui/halide-topo-hero';
import InteractiveSelector from '@/components/ui/interactive-selector';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { GridPattern } from '@/components/ui/grid-pattern';
import { ButtonHover } from '@/components/ui/button-hover';

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
      <section className="relative bg-[#070707] border-t border-[#0F0F0F] py-14 md:py-24 px-6 lg:px-16 overflow-hidden">
        {/* Gold dashed grid — clearly visible */}
        <GridPattern
          width={40}
          height={40}
          strokeDasharray="4 2"
          squares={[
            [2, 2], [4, 1], [7, 3], [10, 2], [13, 4],
            [3, 5], [6, 4], [9, 6], [12, 5],
          ]}
          className={cn(
            'fill-[#C4A35A]/40 stroke-[#C4A35A]/35',
            '[mask-image:linear-gradient(to_right,white_20%,transparent_90%)]',
          )}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <ScrollReveal className="mb-10 md:mb-14">
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
        {/* Strong radial grid with prominent gold squares */}
        <GridPattern
          width={36}
          height={36}
          squares={[
            [1, 2], [3, 1], [6, 3], [9, 2], [12, 1], [15, 3],
            [2, 5], [5, 4], [8, 5], [11, 4], [14, 5],
            [4, 3], [7, 2], [10, 4], [13, 2],
          ]}
          className={cn(
            'fill-[#C4A35A]/50 stroke-[#C4A35A]/25',
            '[mask-image:radial-gradient(ellipse_90%_70%_at_50%_50%,white,transparent)]',
          )}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#111]">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80}>
                <div className="bg-[#0C0C0C] px-5 py-8 sm:px-10 sm:py-10 text-center">
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
      <section className="relative bg-[#070707] py-16 md:py-28 px-6 lg:px-16 overflow-hidden">
        {/* Full grid — strong diagonal fade, visible squares on right */}
        <GridPattern
          width={50}
          height={50}
          squares={[
            [8, 2], [10, 4], [12, 2], [14, 4], [16, 2],
            [9, 6], [11, 5], [13, 6], [15, 5],
            [7, 4], [17, 3], [18, 6],
          ]}
          className={cn(
            'fill-[#C4A35A]/45 stroke-[#C4A35A]/20',
            '[mask-image:linear-gradient(to_bottom_left,white_10%,transparent_60%)]',
          )}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

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
        {/* Dark grid on gold — clearly visible texture */}
        <GridPattern
          width={32}
          height={32}
          strokeDasharray="2 4"
          className="fill-black/20 stroke-black/30"
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
      <section className="relative bg-[#070707] py-20 md:py-36 px-6 lg:px-16 border-t border-[#0F0F0F] overflow-hidden">
        {/* Radial grid centred on the heading */}
        <GridPattern
          width={40}
          height={40}
          squares={[
            [3, 3],  [4, 1],  [6, 2],  [8, 3],  [10, 1],
            [5, 5],  [7, 4],  [9, 5],  [11, 4], [13, 5],
            [4, 7],  [6, 6],  [8, 7],  [10, 6], [12, 7],
            [3, 9],  [5, 9],  [7, 8],  [9, 9],  [11, 8],
            [2, 5],  [12, 3], [14, 7], [1, 8],  [13, 1],
          ]}
          className={cn(
            'fill-[#C4A35A]/50 stroke-[#C4A35A]/30',
            '[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]',
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
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
              <ButtonHover href="/contact" variant="gold" size="lg" className="w-full sm:w-auto">
                Book a Consultation
                <ArrowRight size={13} />
              </ButtonHover>
              <ButtonHover href="/services" variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Services
              </ButtonHover>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
