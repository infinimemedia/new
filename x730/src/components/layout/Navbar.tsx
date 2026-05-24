"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ViewTransition } from "react";
import { Menu, X } from "lucide-react";
import { ButtonHover } from "@/components/ui/button-hover";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <ViewTransition name="site-nav">
      <header
        style={{ viewTransitionName: "site-nav" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#070707]/90 backdrop-blur-xl border-b border-[#1C1C1C]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" transitionTypes={["nav-back"]} className="group">
            <span
              className="text-2xl tracking-[0.3em] text-[#F4F4F5] group-hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              X<span className="text-[#C4A35A]">730</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  transitionTypes={["nav-forward"]}
                  className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-200 ${
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "text-[#F4F4F5]"
                      : "text-[#5A5A5A] hover:text-[#F4F4F5]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <ButtonHover href="/contact" variant="gold" size="sm" transitionTypes={["nav-forward"]}>
              Contact
            </ButtonHover>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-[#F4F4F5] p-2" aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 border-b border-[#1C1C1C]" : "max-h-0"} bg-[#070707]/98 backdrop-blur-xl`}>
          <ul className="px-6 py-5 flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-xs font-medium tracking-[0.2em] uppercase text-[#5A5A5A]">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <ButtonHover href="/contact" variant="gold" size="sm" className="w-full justify-center">
                Contact
              </ButtonHover>
            </li>
          </ul>
        </div>
      </header>
    </ViewTransition>
  );
}
