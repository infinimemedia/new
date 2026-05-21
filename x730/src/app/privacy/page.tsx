import type { Metadata } from "next";
import { ViewTransition } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <ViewTransition name="page-content" enter="page-enter" exit="page-enter">
      <section className="relative pt-40 pb-16 overflow-hidden hero-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 to-[#080808]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-6">Legal</SectionLabel>
            <h1
              className="leading-none tracking-wide text-[#F5F5F7] uppercase"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2.5rem, 8vw, 7rem)",
              }}
            >
              Privacy <span className="text-[#C4A35A]">Policy</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-py max-w-4xl mx-auto px-6 lg:px-8">
        <div className="prose prose-invert max-w-none">
          <ScrollReveal>
            <p className="text-xs text-[#6B6B78] mb-10">
              Last updated: {new Date().getFullYear()}
            </p>

            {[
              {
                title: "1. Information We Collect",
                body: "X730 INC. collects information you voluntarily provide when contacting us through our website, including name, email address, phone number, and the content of your inquiry. We do not collect information without your explicit action.",
              },
              {
                title: "2. How We Use Your Information",
                body: "Information collected is used solely for the purpose of responding to your inquiry and providing the services you request. We do not use your information for marketing purposes without your explicit consent.",
              },
              {
                title: "3. Confidentiality",
                body: "X730 INC. treats all client and prospect information with strict confidentiality. We do not sell, rent, or share your personal information with any third party, except as required by law or with your explicit written consent.",
              },
              {
                title: "4. Data Security",
                body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All communications with our team are treated as confidential.",
              },
              {
                title: "5. Retention",
                body: "We retain personal information only as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law. Upon request, we will delete your personal information from our records.",
              },
              {
                title: "6. Your Rights",
                body: "You have the right to access, correct, or delete your personal information held by X730 INC. To exercise these rights, contact us directly through our website.",
              },
              {
                title: "7. Cookies",
                body: "Our website may use cookies for analytical purposes to understand how visitors use our site. You may disable cookies through your browser settings without affecting your ability to use the site.",
              },
              {
                title: "8. Contact",
                body: "For any questions or concerns regarding this privacy policy or our data practices, please contact us through the contact form on our website.",
              },
            ].map((section) => (
              <div key={section.title} className="mb-10">
                <h2
                  className="text-xl text-[#F5F5F7] uppercase mb-4"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {section.title}
                </h2>
                <p className="text-[#9A9AA8] text-sm leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </ViewTransition>
  );
}
