import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { GeometricScene3D } from "@/components/3d/Scene3D";

export const metadata: Metadata = { title: "About" };

const values = [
  { title: "Integrity", desc: "What we promise, we deliver — no exceptions, no shortcuts." },
  { title: "Experience", desc: "Decades of real-world expertise across military, law enforcement, and intelligence." },
  { title: "Excellence", desc: "We hold ourselves to the highest standards, continuously refining our methods." },
  { title: "Discretion", desc: "Client confidentiality is sacred. Every engagement is handled with absolute privacy." },
];

export default function AboutPage() {
  return (
    <ViewTransition name="page-content" enter="page-enter" exit="page-enter">

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#070707]">
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="w-full lg:w-[50%] h-full opacity-70">
            <GeometricScene3D shape="icosahedron" color="#ffffff" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/85 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 w-full">
          <ScrollReveal>
            <SectionLabel className="mb-6">About X730</SectionLabel>
            <h1
              className="text-gradient-white uppercase leading-[0.9]"
              style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(4rem, 12vw, 11rem)" }}
            >
              The Standard
              <br />
              <span className="text-[#C4A35A]" style={{ WebkitTextFillColor: "#C4A35A" }}>
                Of Excellence
              </span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section-py bg-[#0C0C0C] border-y border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <SectionLabel className="mb-6">Our Mission</SectionLabel>
              <h2 className="text-gradient-white uppercase leading-none mb-8"
                style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
                Security From <span className="text-[#C4A35A]" style={{ WebkitTextFillColor: "#C4A35A" }}>A to Z</span>
              </h2>
              <p className="text-[#5A5A5A] leading-relaxed mb-5">
                X730 INC. was founded on a simple conviction: every client deserves the very best security professionals. We built the infrastructure to identify, vet, and deploy elite talent — and manage the entire engagement from day one.
              </p>
              <p className="text-[#5A5A5A] leading-relaxed mb-5">
                Our clients include corporations, government agencies, high-net-worth individuals, and organizations navigating complex threat environments.
              </p>
              <p className="text-[#8A8A8A] leading-relaxed italic">We are not the cheapest option. We are the right one.</p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="border border-[#1C1C1C] bg-[#070707] p-10">
                <div className="text-5xl text-[#F4F4F5] mb-8"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}>
                  X730
                </div>
                <ul className="flex flex-col gap-4">
                  {[
                    "Former military and intelligence professionals",
                    "Proven track record across 3 continents",
                    "Fully licensed and compliant operations",
                    "24/7 operational support capability",
                    "Absolute confidentiality guaranteed",
                    "Customized solutions — not off-the-shelf packages",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={13} className="text-[#F4F4F5] shrink-0 mt-0.5 opacity-40" />
                      <span className="text-sm text-[#5A5A5A]">{item}</span>
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
        <ScrollReveal className="mb-14">
          <SectionLabel className="mb-4">What Drives Us</SectionLabel>
          <h2 className="text-gradient-white uppercase leading-none"
            style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Core Values
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1C1C1C]">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 70}>
              <div className="bg-[#070707] p-10 h-full">
                <div className="text-6xl text-[#1C1C1C] mb-4"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}>0{i + 1}</div>
                <h3 className="text-2xl text-[#F4F4F5] uppercase mb-4"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}>{v.title}</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-[#0C0C0C] border-t border-[#1C1C1C] overflow-hidden">
        <div className="absolute inset-0 opacity-8 pointer-events-none">
          <GeometricScene3D shape="crystal" color="#ffffff" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-gradient-white uppercase leading-none mb-6"
              style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Work With The Best
            </h2>
            <p className="text-[#5A5A5A] mb-10">Schedule a confidential consultation with our team.</p>
            <Link href="/contact" transitionTypes={["nav-forward"]} className="btn-white">
              Get in Touch <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </ViewTransition>
  );
}
