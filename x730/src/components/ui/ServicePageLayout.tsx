import { ViewTransition } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";
import { GeometricScene3D } from "@/components/3d/Scene3D";
import { ButtonHover } from "@/components/ui/button-hover";

type ShapeType = "icosahedron" | "torus" | "octahedron" | "radar" | "rings" | "particles" | "crystal" | "shield" | "target" | "circuit";

interface ServicePageLayoutProps {
  num: string;
  title: string;
  subtitle: string;
  heroHeading: string;
  heroAccent: string;
  description: string[];
  features: string[];
  process: { step: string; title: string; desc: string }[];
  shape: ShapeType;
  prevService?: { label: string; href: string };
  nextService?: { label: string; href: string };
}

export default function ServicePageLayout({
  num, title, subtitle, heroHeading, heroAccent,
  description, features, process, shape,
  prevService, nextService,
}: ServicePageLayoutProps) {
  return (
    <ViewTransition name="page-content" enter="page-enter" exit="page-enter">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#070707]">
        {/* 3D scene */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="w-full lg:w-[55%] h-full opacity-80">
            <GeometricScene3D shape={shape} color="#ffffff" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/85 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-10">
            <Link
              href="/services"
              transitionTypes={["nav-back"]}
              className="flex items-center gap-2 text-xs text-[#3a3a3a] hover:text-[#F4F4F5] tracking-[0.2em] uppercase transition-colors"
            >
              <ArrowLeft size={10} /> Services
            </Link>
            <span className="text-[#2a2a2a]">/</span>
            <span className="text-xs text-[#5A5A5A] tracking-[0.2em] uppercase font-mono">{num}</span>
          </div>

          <SectionLabel className="mb-6">{subtitle}</SectionLabel>
          <h1
            className="text-gradient-white uppercase leading-[0.9]"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(3.5rem, 11vw, 10rem)",
            }}
          >
            {heroHeading}
            <br />
            <span className="text-[#C4A35A]" style={{ WebkitTextFillColor: "#C4A35A" }}>
              {heroAccent}
            </span>
          </h1>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────── */}
      <section className="section-py max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <SectionLabel className="mb-8">Overview</SectionLabel>
              <div className="flex flex-col gap-5">
                {description.map((p, i) => (
                  <p key={i} className="text-[#5A5A5A] leading-relaxed">{p}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right">
            <div className="border border-[#1C1C1C] bg-[#0C0C0C] p-8">
              <h3
                className="text-lg text-[#F4F4F5] uppercase mb-6"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Included
              </h3>
              <ul className="flex flex-col gap-4">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle size={13} className="text-[#F4F4F5] shrink-0 mt-0.5 opacity-50" />
                    <span className="text-sm text-[#5A5A5A]">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-[#1C1C1C]">
                <ButtonHover
                  href="/contact"
                  variant="gold"
                  className="w-full justify-center"
                  transitionTypes={["nav-forward"]}
                >
                  Request This Service <ArrowRight size={12} />
                </ButtonHover>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="section-py bg-[#0C0C0C] border-y border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-14">
            <SectionLabel className="mb-4">How We Work</SectionLabel>
            <h2
              className="text-gradient-white uppercase leading-none"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2rem, 5vw, 4rem)",
              }}
            >
              Process
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#1C1C1C]">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 70}>
                <div className="bg-[#070707] p-8 h-full">
                  <div
                    className="text-5xl text-[#1C1C1C] mb-6"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    {p.step}
                  </div>
                  <h3
                    className="text-lg text-[#F4F4F5] uppercase mb-3"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prev / Next ───────────────────────────────────── */}
      <section className="border-t border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-[#1C1C1C]">
            {prevService ? (
              <Link href={prevService.href} transitionTypes={["nav-back"]}
                className="group flex items-center gap-4 py-8 px-4 hover:bg-[#0C0C0C] transition-colors">
                <ArrowLeft size={18} className="text-[#2a2a2a] group-hover:text-[#F4F4F5] transition-colors" />
                <div>
                  <p className="text-[10px] text-[#3a3a3a] tracking-[0.2em] uppercase mb-1">Previous</p>
                  <p className="text-sm font-medium text-[#F4F4F5]">{prevService.label}</p>
                </div>
              </Link>
            ) : <div />}
            {nextService ? (
              <Link href={nextService.href} transitionTypes={["nav-forward"]}
                className="group flex items-center justify-end gap-4 py-8 px-4 hover:bg-[#0C0C0C] transition-colors">
                <div className="text-right">
                  <p className="text-[10px] text-[#3a3a3a] tracking-[0.2em] uppercase mb-1">Next</p>
                  <p className="text-sm font-medium text-[#F4F4F5]">{nextService.label}</p>
                </div>
                <ArrowRight size={18} className="text-[#2a2a2a] group-hover:text-[#F4F4F5] transition-colors" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

    </ViewTransition>
  );
}
