import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = {
  title: "Security Consulting",
  description:
    "Strategic security assessments and tailored consulting for corporations, governments, and high-net-worth individuals.",
};

export default function SecurityConsultingPage() {
  return (
    <ServicePageLayout
      num="01"
      title="Security Consulting"
      subtitle="Security Consulting"
      heroLine="Strategic|Security|\nConsulting"
      description={[
        "Security is only as strong as the strategy behind it. X730's security consulting service begins with a comprehensive analysis of your current posture — mapping threats, identifying gaps, and understanding your specific risk environment.",
        "Our consultants are former military officers, intelligence professionals, and law enforcement executives who have operated in the most demanding environments. We do not offer generic frameworks. We deliver precise, actionable strategies built around your reality.",
        "Whether you are protecting a corporate headquarters, a distributed operation, or a high-net-worth individual, our consulting service gives you clarity, confidence, and a roadmap that works.",
      ]}
      features={[
        "Comprehensive security posture assessment",
        "Threat and vulnerability analysis",
        "Written security strategy and roadmap",
        "Policy and procedure development",
        "Vendor and technology evaluation",
        "Regulatory compliance review",
        "Executive briefings and recommendations",
        "Ongoing advisory retainer available",
      ]}
      process={[
        {
          step: "01",
          title: "Discovery",
          desc: "We conduct in-depth interviews and site assessments to understand your current security posture.",
        },
        {
          step: "02",
          title: "Analysis",
          desc: "We identify vulnerabilities, map threat vectors, and assess your risk tolerance.",
        },
        {
          step: "03",
          title: "Strategy",
          desc: "We develop a written security strategy with prioritized, actionable recommendations.",
        },
        {
          step: "04",
          title: "Implementation",
          desc: "We support execution and provide ongoing advisory to ensure strategies are properly deployed.",
        },
      ]}
      nextService={{ label: "Close Protection", href: "/services/close-protection" }}
    />
  );
}
