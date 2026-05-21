"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ViewTransition } from "react";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <ViewTransition name="site-nav">
      <header
        style={{ viewTransitionName: "site-nav" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#1E1E24]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            transitionTypes={["nav-back"]}
          >
            <span
              className="font-display text-3xl tracking-widest text-[#F5F5F7] group-hover:text-[#C4A35A] transition-colors duration-200"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              X<span className="text-[#C4A35A]">730</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  transitionTypes={["nav-forward"]}
                  className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "text-[#C4A35A]"
                      : "text-[#9A9AA8] hover:text-[#F5F5F7]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              transitionTypes={["nav-forward"]}
              className="btn-gold text-xs"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#F5F5F7] p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-96 border-b border-[#1E1E24]" : "max-h-0"
          } bg-[#080808]/98 backdrop-blur-md`}
        >
          <ul className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-sm font-medium tracking-widest uppercase py-2 transition-colors ${
                    pathname === link.href
                      ? "text-[#C4A35A]"
                      : "text-[#9A9AA8]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact" className="btn-gold w-full justify-center text-xs">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </ViewTransition>
  );
}
