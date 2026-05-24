import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

const services = [
  { num: '01', title: 'Security Consulting', desc: 'Strategic advisory for organizations facing complex security challenges.' },
  { num: '02', title: 'Close Protection', desc: 'Elite personal protection for executives, VIPs, and high-risk principals.' },
  { num: '03', title: 'Event Security', desc: 'End-to-end security management for high-profile events of any scale.' },
  { num: '04', title: 'Risk Assessments', desc: 'Comprehensive threat analysis and vulnerability evaluations.' },
  { num: '05', title: 'Private Investigation', desc: 'Discreet, professional intelligence gathering and surveillance.' },
  { num: '06', title: 'Advanced Technology', desc: 'Cutting-edge surveillance, counter-surveillance, and security systems.' },
  { num: '07', title: 'Training', desc: 'Elite-level security training programs for individuals and organizations.' },
];

export default function HomePage() {
  return (
    <FlowArt aria-label="X730 Elite Security Solutions">

      {/* ── 01 WHO WE ARE ─────────────────────────────── */}
      <FlowSection
        aria-label="Who we are"
        style={{ backgroundColor: '#070707', color: '#F4F4F5' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A35A]">
          01 — Who We Are
        </p>
        <hr className="border-t border-[#1C1C1C]" />
        <div>
          <h1
            className="font-bold leading-[0.85] uppercase tracking-tight text-[clamp(3.5rem,12vw,14rem)]"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            Security.
            <br />
            Intelligence.
            <br />
            <span className="text-[#C4A35A]">Precision.</span>
          </h1>
        </div>
        <hr className="border-t border-[#1C1C1C]" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed text-[#5A5A5A]">
          Managing all security needs from A to Z. Selecting the best
          professionals. Zero compromise.
        </p>
      </FlowSection>

      {/* ── 02 SERVICES ───────────────────────────────── */}
      <FlowSection
        aria-label="Our services"
        style={{ backgroundColor: '#0C0C0C', color: '#F4F4F5' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A35A]">
          02 — Services
        </p>
        <hr className="border-t border-[#1C1C1C]" />
        <div>
          <h2
            className="font-bold leading-[0.85] uppercase tracking-tight text-[clamp(3.5rem,10vw,12rem)]"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            Seven
            <br />
            Disciplines.
            <br />
            One
            <br />
            Standard.
          </h2>
        </div>
        <hr className="border-t border-[#1C1C1C]" />
        <div className="flex flex-wrap gap-x-[3vw] gap-y-6">
          {services.map((s) => (
            <div key={s.num} className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#C4A35A]">
                {s.num} — {s.title}
              </p>
              <p className="text-[clamp(0.8rem,1.2vw,1rem)] leading-relaxed text-[#5A5A5A]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* ── 03 ABOUT (Gold) ───────────────────────────── */}
      <FlowSection
        aria-label="About X730"
        style={{ backgroundColor: '#C4A35A', color: '#070707' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">
          03 — About X730
        </p>
        <hr className="border-t border-black/20" />
        <div>
          <h2
            className="font-bold leading-[0.85] uppercase tracking-tight text-[clamp(3.5rem,12vw,14rem)]"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            Operators.
            <br />
            Not
            <br />
            Consultants.
          </h2>
        </div>
        <hr className="border-t border-black/20" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed opacity-80">
          Built by operators. Trusted by corporations, governments, and
          individuals who cannot afford failure. Every professional in our
          network is vetted to the highest standard.
        </p>
        <hr className="border-t border-black/20" />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            { label: 'Integrity', desc: 'Our word is our bond. Every commitment is honoured, every confidence protected.' },
            { label: 'Experience', desc: '15+ years. 500+ successful operations across 3 continents. Zero failures.' },
            { label: 'Discretion', desc: 'Every client, every engagement — complete confidentiality, guaranteed.' },
          ].map((v) => (
            <div key={v.label} className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">{v.label}</p>
              <p className="text-[clamp(0.8rem,1.2vw,1rem)] leading-relaxed opacity-70">{v.desc}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* ── 04 RESULTS ────────────────────────────────── */}
      <FlowSection
        aria-label="Proven results"
        style={{ backgroundColor: '#141414', color: '#F4F4F5' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A35A]">
          04 — Proven Results
        </p>
        <hr className="border-t border-[#1C1C1C]" />
        <div>
          <h2
            className="font-bold leading-[0.85] uppercase tracking-tight text-[clamp(3.5rem,12vw,14rem)]"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            15+
            <br />
            Years
            <br />
            Of
            <br />
            Excellence.
          </h2>
        </div>
        <hr className="border-t border-[#1C1C1C]" />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            { stat: '500+', desc: 'Operations completed across North America, Europe, and the Middle East.' },
            { stat: '3 Continents', desc: 'A global network of elite professionals ready to deploy anywhere, anytime.' },
            { stat: '100%', desc: 'Discretion — every client, every engagement, complete confidentiality guaranteed.' },
          ].map((s) => (
            <div key={s.stat} className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#C4A35A]">{s.stat}</p>
              <p className="text-[clamp(0.8rem,1.2vw,1rem)] leading-relaxed text-[#5A5A5A]">{s.desc}</p>
            </div>
          ))}
        </div>
        <hr className="border-t border-[#1C1C1C]" />
        <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed text-[#5A5A5A]">
          When the stakes are highest, X730 is the only call you need to make.
        </p>
      </FlowSection>

      {/* ── 05 CTA ────────────────────────────────────── */}
      <FlowSection
        aria-label="Get in touch"
        style={{ backgroundColor: '#070707', color: '#F4F4F5' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A35A]">
          05 — Get In Touch
        </p>
        <hr className="border-t border-[#1C1C1C]" />
        <div>
          <h2
            className="font-bold leading-[0.85] uppercase tracking-tight text-[clamp(3.5rem,12vw,14rem)]"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            Ready?
          </h2>
        </div>
        <hr className="border-t border-[#1C1C1C]" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed text-[#5A5A5A]">
          Confidential. Obligation-free. Personal. Every security challenge is
          unique — let&apos;s build your solution together.
        </p>
        <hr className="border-t border-[#1C1C1C]" />
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F4F4F5] text-[#070707] text-xs font-bold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white transition-colors duration-200"
          >
            Book a Consultation
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-[#1C1C1C] text-[#5A5A5A] text-xs font-bold uppercase tracking-[0.15em] px-8 py-4 hover:border-[#F4F4F5] hover:text-[#F4F4F5] transition-colors duration-200"
          >
            Our Services
          </Link>
        </div>
      </FlowSection>

    </FlowArt>
  );
}
