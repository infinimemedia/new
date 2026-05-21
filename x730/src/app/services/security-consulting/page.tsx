import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = { title: "Security Consulting" };

export default function Page() {
  return (
    <ServicePageLayout
      num="01" subtitle="Security Consulting"
      title="Security Consulting"
      heroHeading="Strategic" heroAccent="Consulting."
      shape="radar"
      description={[
        "Security is only as strong as the strategy behind it. X730's consulting service begins with a comprehensive analysis of your current posture — mapping threats, identifying gaps, and understanding your specific risk environment.",
        "Our consultants are former military officers, intelligence professionals, and law enforcement executives. We deliver precise, actionable strategies built around your reality — not generic frameworks.",
        "Whether protecting a corporate headquarters, a distributed operation, or a high-net-worth individual, we give you clarity, confidence, and a roadmap that works.",
      ]}
      features={[
        "Comprehensive security posture assessment",
        "Threat and vulnerability analysis",
        "Written security strategy and roadmap",
        "Policy and procedure development",
        "Vendor and technology evaluation",
        "Regulatory compliance review",
        "Executive briefings",
        "Ongoing advisory retainer available",
      ]}
      process={[
        { step: "01", title: "Discovery", desc: "In-depth interviews and site assessments to understand your current posture." },
        { step: "02", title: "Analysis", desc: "Identify vulnerabilities, map threat vectors, assess risk tolerance." },
        { step: "03", title: "Strategy", desc: "Written security strategy with prioritized, actionable recommendations." },
        { step: "04", title: "Support", desc: "Ongoing advisory to ensure strategies are properly implemented." },
      ]}
      nextService={{ label: "Close Protection", href: "/services/close-protection" }}
    />
  );
}
