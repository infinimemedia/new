import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = {
  title: "Close Protection",
  description:
    "Elite executive and personal protection by former military and law enforcement professionals.",
};

export default function CloseProtectionPage() {
  return (
    <ServicePageLayout
      num="02"
      title="Close Protection"
      subtitle="Close Protection"
      heroLine="Elite|Close|\nProtection"
      description={[
        "When personal safety is non-negotiable, X730 provides close protection services that operate at the highest professional standard. Our protection officers are drawn from elite military, special operations, and law enforcement backgrounds — individuals who have protected principals in genuinely hostile environments.",
        "We understand that effective protection is invisible. Our officers blend seamlessly into their environment while maintaining total situational awareness. Whether escorting a CEO through a complex travel itinerary or providing residential protection, we manage every detail so our clients can focus on what matters.",
        "Every engagement begins with advance work: route planning, venue assessment, threat mapping, and emergency contingency development. Nothing is left to chance.",
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
        {
          step: "01",
          title: "Brief",
          desc: "We conduct a detailed briefing to understand the client's schedule, threat environment, and requirements.",
        },
        {
          step: "02",
          title: "Advance",
          desc: "We perform thorough advance work — venues, routes, contacts, and emergency protocols.",
        },
        {
          step: "03",
          title: "Deploy",
          desc: "Qualified protection officers are deployed, maintaining constant situational awareness.",
        },
        {
          step: "04",
          title: "Debrief",
          desc: "Post-engagement debrief to review performance, update threat assessments, and improve future operations.",
        },
      ]}
      prevService={{ label: "Security Consulting", href: "/services/security-consulting" }}
      nextService={{ label: "Event Security", href: "/services/event-security" }}
    />
  );
}
