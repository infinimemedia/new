import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description:
    "X730 INC. — Elite security professionals with integrity, experience, excellence, and discretion.",
};

const values = [
  {
    title: "Integrity",
    desc: "We operate with absolute honesty. What we promise, we deliver — no exceptions, no shortcuts.",
  },
  {
    title: "Experience",
    desc: "Decades of real-world expertise across military, law enforcement, and intelligence sectors.",
  },
  {
    title: "Excellence",
    desc: "We hold ourselves to the highest standards, continuously refining our methods and capabilities.",
  },
  {
    title: "Discretion",
    desc: "Client confidentiality is sacred. Every engagement is handled with the utmost privacy.",
  },
];

const team = [
  {
    name: "Arie",
    role: "Founder & CEO",
    bio: "Former senior intelligence and security professional with over 15 years directing complex security operations across multiple continents.",
  },
  {
    name: "Operations Lead",
    role: "Director of Operations",
    bio: "Ex-military special operations commander specializing in close protection, threat assessment, and multi-team coordination.",
  },
  {
    name: "Intelligence Lead",
    role: "Head of Intelligence",
    bio: "Former law enforcement investigator with deep expertise in surveillance, counter-intelligence, and advanced threat analysis.",
  },
];

export default function AboutPage() {
  return (
    <ViewTransition name="page-content" enter="page-enter" exit="page-enter">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 to-[#080808]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-6">About X730</SectionLabel>
            <h1
              className="leading-none tracking-wide text-[#F5F5F7] uppercase"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(3rem, 10vw, 9rem)",
              }}
            >
              The Standard
              <br />
              <span className="text-[#C4A35A]">Of Excellence</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section-py bg-[#0D0D0F] border-y border-[#1E1E24]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <SectionLabel className="mb-6">Our Mission</SectionLabel>
              <h2
                className="leading-none tracking-wide text-[#F5F5F7] uppercase mb-8"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                }}
              >
                Security From
                <br />
                <span className="text-[#C4A35A]">A to Z</span>
              </h2>
              <p className="text-[#9A9AA8] leading-relaxed mb-6">
                X730 INC. was founded on a simple conviction: every client
                deserves the very best security professionals, not just whoever
                is available. We built the infrastructure to identify, vet, and
                deploy elite talent — and we manage the entire engagement from
                day one.
              </p>
              <p className="text-[#9A9AA8] leading-relaxed mb-6">
                Our clients include large corporations, government agencies,
                high-net-worth individuals, and organizations navigating complex
                threat environments. What unites them is the expectation of
                results — and the knowledge that X730 delivers.
              </p>
              <p className="text-[#9A9AA8] leading-relaxed">
                We are not the cheapest option. We are the right one.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="border border-[#1E1E24] bg-[#080808] p-10">
                <div
                  className="text-6xl text-[#C4A35A] mb-6"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  X730
                </div>
                <ul className="flex flex-col gap-4">
                  {[
                    "Former military and intelligence professionals",
                    "Proven track record across 3 continents",
                    "Fully licensed and compliant operations",
                    "24/7 operational support capability",
                    "Absolute confidentiality guaranteed",
                    "Customized solutions, not off-the-shelf packages",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={16}
                        className="text-[#C4A35A] shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-[#9A9AA8]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16">
          <SectionLabel className="mb-4">What Drives Us</SectionLabel>
          <h2
            className="leading-none tracking-wide text-[#F5F5F7] uppercase"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
            }}
          >
            Our <span className="text-[#C4A35A]">Core Values</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 80}>
              <div className="border border-[#1E1E24] bg-[#0D0D0F] p-8 h-full">
                <div
                  className="text-5xl text-[#C4A35A]/20 mb-4"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="text-2xl text-[#F5F5F7] uppercase mb-4"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-[#9A9AA8] text-sm leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section-py bg-[#0D0D0F] border-y border-[#1E1E24]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-16">
            <SectionLabel className="mb-4">Leadership</SectionLabel>
            <h2
              className="leading-none tracking-wide text-[#F5F5F7] uppercase"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2rem, 5vw, 4rem)",
              }}
            >
              The Team <span className="text-[#C4A35A]">Behind X730</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 80}>
                <div className="border border-[#1E1E24] bg-[#080808] p-8">
                  <div className="w-16 h-16 bg-[#C4A35A]/10 border border-[#C4A35A]/20 mb-6 flex items-center justify-center">
                    <span
                      className="text-2xl text-[#C4A35A]"
                      style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                    >
                      {member.name[0]}
                    </span>
                  </div>
                  <h3
                    className="text-xl text-[#F5F5F7] uppercase mb-1"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#C4A35A] tracking-widest uppercase mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-[#6B6B78] leading-relaxed">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-[#080808] border-t border-[#1E1E24]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="leading-none tracking-wide text-[#F5F5F7] uppercase mb-6"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2rem, 6vw, 5rem)",
              }}
            >
              Work With <span className="text-[#C4A35A]">The Best</span>
            </h2>
            <p className="text-[#9A9AA8] mb-10">
              Schedule a confidential consultation with our team and discover
              what genuine security excellence looks like.
            </p>
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="btn-gold"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </ViewTransition>
  );
}
