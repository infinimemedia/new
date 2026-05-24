import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ButtonHover } from "@/components/ui/button-hover";
import AboutPage from "@/components/ui/about-page";

export const metadata: Metadata = { title: "About" };

export default function AboutRoute() {
  return (
    <ViewTransition name="page-content" enter="page-enter" exit="page-enter">
      {/* ── Main about component ─────────────────────── */}
      <AboutPage />

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 bg-[#0C0C0C] border-t border-[#1C1C1C] overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-[#F4F4F5] uppercase leading-none mb-6"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
              }}
            >
              Work With The Best
            </h2>
            <p className="text-[#5A5A5A] mb-10">
              Schedule a confidential consultation with our team.
            </p>
            <ButtonHover href="/contact" variant="gold" transitionTypes={["nav-forward"]}>
              Get in Touch <ArrowRight size={14} />
            </ButtonHover>
          </ScrollReveal>
        </div>
      </section>
    </ViewTransition>
  );
}
