import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = { title: "Risk Assessments" };

export default function RiskAssessmentsPage() {
  return (
    <ServicePageLayout
      num="04"
      title="Risk Assessments"
      subtitle="Risk Assessments"
      heroLine="Proactive|Risk|\nAssessment"
      description={[
        "The most effective security is preventative. X730's risk assessment service identifies threats before they materialize — giving decision-makers the intelligence they need to act with confidence.",
        "Our assessors evaluate physical security, personnel practices, operational procedures, and technology infrastructure to produce a clear picture of your current risk exposure. The output is not a checklist — it is a prioritized, actionable intelligence document.",
        "Risk assessments are suitable for organizations entering new markets, responding to emerging threats, preparing for high-profile events, or simply ensuring their security posture matches their risk profile.",
      ]}
      features={[
        "Physical security vulnerability assessment",
        "Personnel and insider threat evaluation",
        "Operational procedure review",
        "Technology and cyber-physical interface assessment",
        "Threat environment intelligence",
        "Prioritized risk register",
        "Executive summary and recommendations",
        "Quarterly reassessment available",
      ]}
      process={[
        { step: "01", title: "Scoping", desc: "Define the boundaries, objectives, and methodology for the assessment." },
        { step: "02", title: "Evaluate", desc: "Systematic evaluation of all identified risk domains." },
        { step: "03", title: "Analyze", desc: "Prioritize risks by likelihood and impact; identify root causes." },
        { step: "04", title: "Report", desc: "Deliver a comprehensive written risk register with actionable recommendations." },
      ]}
      prevService={{ label: "Event Security", href: "/services/event-security" }}
      nextService={{ label: "Private Investigation", href: "/services/private-investigation" }}
    />
  );
}
