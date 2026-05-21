import Link from "next/link";

const services = [
  { label: "Security Consulting", href: "/services/security-consulting" },
  { label: "Close Protection", href: "/services/close-protection" },
  { label: "Event Security", href: "/services/event-security" },
  { label: "Risk Assessments", href: "/services/risk-assessments" },
  { label: "Private Investigation", href: "/services/private-investigation" },
  { label: "Advanced Technology", href: "/services/advanced-technology" },
  { label: "Training", href: "/services/training" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0F] border-t border-[#1E1E24]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <span
                className="text-5xl tracking-widest text-[#F5F5F7]"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                X<span className="text-[#C4A35A]">730</span>
              </span>
            </Link>
            <p className="mt-4 text-[#6B6B78] text-sm leading-relaxed max-w-xs">
              Managing all security needs from A to Z. Integrity, experience, and
              discretion — serving clients who demand the best.
            </p>
            <p className="mt-6 text-xs text-[#6B6B78] tracking-wider uppercase">
              x730.ca · Canada
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#C4A35A] mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-[#6B6B78] hover:text-[#F5F5F7] transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#C4A35A] mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#6B6B78] hover:text-[#F5F5F7] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#1E1E24] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B6B78]">
            © {new Date().getFullYear()} X730 INC. All rights reserved.
          </p>
          <p className="text-xs text-[#6B6B78] tracking-wider">
            INTEGRITY · EXPERIENCE · EXCELLENCE · DISCRETION
          </p>
        </div>
      </div>
    </footer>
  );
}
