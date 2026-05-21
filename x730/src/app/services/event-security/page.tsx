import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = { title: "Event Security" };

export default function EventSecurityPage() {
  return (
    <ServicePageLayout
      num="03"
      title="Event Security"
      subtitle="Event Security"
      heroLine="Seamless|Event|\nSecurity"
      description={[
        "Every event carries security considerations that, if mismanaged, can result in reputational damage, legal liability, or genuine harm. X730 designs and executes event security plans that are comprehensive, scalable, and invisible to guests.",
        "From intimate private dinners requiring discreet protection to large corporate conferences with complex access control requirements, we have the operational depth to handle any event type and scale.",
        "Our event security teams include uniformed and plain-clothes officers, control room operators, and a dedicated event security coordinator who manages operations from planning through post-event debrief.",
      ]}
      features={[
        "Pre-event security assessment and planning",
        "Access control and credential management",
        "Uniformed and plain-clothes security teams",
        "Venue security sweeps",
        "VIP guest protection",
        "Crowd management and monitoring",
        "Emergency response coordination",
        "Post-event debrief and reporting",
      ]}
      process={[
        { step: "01", title: "Assessment", desc: "Venue walkthrough, threat mapping, and identification of all access points." },
        { step: "02", title: "Plan", desc: "Develop a full event security plan including personnel deployment and emergency protocols." },
        { step: "03", title: "Execute", desc: "Professional security team deployed — briefed, equipped, and coordinated." },
        { step: "04", title: "Debrief", desc: "Post-event review and incident report delivered to client." },
      ]}
      prevService={{ label: "Close Protection", href: "/services/close-protection" }}
      nextService={{ label: "Risk Assessments", href: "/services/risk-assessments" }}
    />
  );
}
