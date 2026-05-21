import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = { title: "Close Protection" };

export default function Page() {
  return (
    <ServicePageLayout
      num="02" subtitle="Close Protection"
      title="Close Protection"
      heroHeading="Elite" heroAccent="Protection."
      shape="shield"
      description={[
        "When personal safety is non-negotiable, X730 provides close protection at the highest professional standard. Our officers are drawn from elite military, special operations, and law enforcement — individuals who have protected principals in genuinely hostile environments.",
        "Effective protection is invisible. Our officers blend seamlessly while maintaining total situational awareness. We manage every detail so our clients can focus on what matters.",
        "Every engagement begins with advance work: route planning, venue assessment, threat mapping, and emergency contingency development. Nothing left to chance.",
      ]}
      features={[
        "Executive and corporate protection",
        "VIP and celebrity protection",
        "International travel protection",
        "Residential and estate security",
        "Advance work and route planning",
        "Threat assessment and mapping",
        "Emergency response protocols",
        "Female protection officers available",
      ]}
      process={[
        { step: "01", title: "Brief", desc: "Detailed briefing on schedule, threat environment, and requirements." },
        { step: "02", title: "Advance", desc: "Thorough advance work — venues, routes, contacts, emergency protocols." },
        { step: "03", title: "Deploy", desc: "Qualified officers deployed, briefed, equipped, and coordinated." },
        { step: "04", title: "Debrief", desc: "Post-engagement debrief and threat assessment update." },
      ]}
      prevService={{ label: "Security Consulting", href: "/services/security-consulting" }}
      nextService={{ label: "Event Security", href: "/services/event-security" }}
    />
  );
}
