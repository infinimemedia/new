import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = { title: "Event Security" };

export default function Page() {
  return (
    <ServicePageLayout
      num="03" subtitle="Event Security"
      title="Event Security"
      heroHeading="Seamless" heroAccent="Security."
      shape="rings"
      description={[
        "Every event carries security considerations that, if mismanaged, result in reputational damage, legal liability, or genuine harm. X730 designs and executes event security plans that are comprehensive, scalable, and invisible to guests.",
        "From intimate private dinners to large corporate conferences, we have the operational depth to handle any event type and scale with equal professionalism.",
        "Our teams include uniformed and plain-clothes officers, control room operators, and a dedicated coordinator who manages operations from planning through post-event debrief.",
      ]}
      features={[
        "Pre-event security assessment and planning",
        "Access control and credential management",
        "Uniformed and plain-clothes teams",
        "Venue security sweeps",
        "VIP guest protection",
        "Crowd management and monitoring",
        "Emergency response coordination",
        "Post-event debrief and reporting",
      ]}
      process={[
        { step: "01", title: "Assessment", desc: "Venue walkthrough, threat mapping, identification of all access points." },
        { step: "02", title: "Plan", desc: "Full event security plan including deployment and emergency protocols." },
        { step: "03", title: "Execute", desc: "Professional team deployed — briefed, equipped, coordinated." },
        { step: "04", title: "Debrief", desc: "Post-event review and incident report delivered to client." },
      ]}
      prevService={{ label: "Close Protection", href: "/services/close-protection" }}
      nextService={{ label: "Risk Assessments", href: "/services/risk-assessments" }}
    />
  );
}
