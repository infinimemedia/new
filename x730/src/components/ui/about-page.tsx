"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

/* ─────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────── */

interface Achievement {
  label: string
  value: string
}

interface AboutPageProps {
  achievements?: Achievement[]
}

const defaultAchievements: Achievement[] = [
  { label: "Years Active",  value: "15+" },
  { label: "Operations",    value: "500+" },
  { label: "Continents",    value: "3" },
  { label: "Discretion",    value: "100%" },
]

/* ─────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────── */

export default function AboutPage({
  achievements = defaultAchievements,
}: AboutPageProps) {
  return (
    <div className="flex flex-col">

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-28 bg-background">
        <div className="mx-auto max-w-6xl space-y-8 px-6">

          {/* Wide image */}
          <Image
            className="rounded-xl object-cover w-full h-[200px] sm:h-[300px] md:h-[460px]"
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
            alt="X730 Operations"
            width={1400}
            height={600}
            priority
          />

          {/* Headline + CTA */}
          <div className="grid gap-6 md:grid-cols-2 md:gap-16">
            <h1
              className="text-3xl md:text-4xl leading-snug text-[#F4F4F5]"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              The X730{" "}
              <span className="text-[#C4A35A]">ecosystem</span>{" "}
              <span className="text-[#3A3A3A]">
                brings together our operators, solutions, and intelligence.
              </span>
            </h1>

            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                X730 INC. is evolving beyond traditional security. From close
                protection to cutting-edge intelligence platforms — we manage
                every dimension of your security, end to end.
              </p>
              <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                <Link href="/services">
                  <span>Our Services</span>
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-6xl space-y-16 px-6">

          {/* Section header */}
          <div className="grid gap-6 md:grid-cols-2 md:gap-16">
            <h2
              className="text-4xl md:text-5xl text-[#F4F4F5]"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              About X730
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A passionate team of former military and intelligence professionals
              dedicated to delivering security solutions that protect what matters
              most — wherever in the world that may be.
            </p>
          </div>

          {/* ── Stats strip ───────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1C1C1C]">
            {achievements.map((a) => (
              <div key={a.label} className="bg-[#0C0C0C] px-5 py-8 sm:px-10 sm:py-10 text-center">
                <div
                  className="mb-1 text-[#C4A35A]"
                  style={{
                    fontFamily: "var(--font-bebas), sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    lineHeight: 1,
                  }}
                >
                  {a.value}
                </div>
                <div className="text-[10px] text-[#3A3A3A] tracking-[0.25em] uppercase font-semibold">
                  {a.label}
                </div>
              </div>
            ))}
          </div>

          {/* ── Image + Cards grid ────────────────────── */}
          <div className="flex flex-col md:flex-row gap-6">

            {/* Left — tall operator photo */}
            <div className="md:flex-1">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="X730 Operator"
                className="rounded-xl object-cover w-full h-[300px] sm:h-[380px] md:h-full min-h-[400px]"
                width={800}
                height={600}
              />
            </div>

            {/* Right — two stacked cards */}
            <div className="flex flex-col gap-6 md:flex-1">

              {/* Card 1 — dark tech card with hover scale */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="relative overflow-hidden rounded-xl bg-black text-white shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-52 sm:h-64 md:h-48 w-full overflow-hidden"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
                    alt="Security Technology"
                    className="h-full w-full object-cover"
                    width={600}
                    height={400}
                  />
                  {/* Bottom fade */}
                  <div className="absolute bottom-0 h-28 w-full bg-gradient-to-t from-black via-black/70 to-transparent" />
                </motion.div>

                <div className="p-6">
                  <h3
                    className="text-xl text-[#F4F4F5]"
                    style={{
                      fontFamily: "var(--font-bebas), sans-serif",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Uncompromising Protection
                  </h3>
                  <p className="mt-2 text-sm text-[#5A5A5A] leading-relaxed">
                    Our solutions drive relentless security precision — from threat
                    assessment to elite executive protection across three continents.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-4 border-[#C4A35A] text-[#C4A35A] hover:bg-[#C4A35A] hover:text-black"
                  >
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Card 2 — cityscape with gradient overlay */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="relative overflow-hidden rounded-xl shadow-lg min-h-[220px] sm:min-h-[240px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80"
                  alt="City Intelligence"
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                  <h3
                    className="text-xl text-[#F4F4F5]"
                    style={{
                      fontFamily: "var(--font-bebas), sans-serif",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Future-Ready Intelligence
                  </h3>
                  <p className="mt-2 text-sm text-[#8A8A8A] leading-relaxed">
                    Cutting-edge surveillance technology combined with field-proven
                    operator expertise for any threat environment.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
