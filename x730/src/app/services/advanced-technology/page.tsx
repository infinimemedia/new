import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = { title: "Advanced Technology Security" };

export default function AdvancedTechnologyPage() {
  return (
    <ServicePageLayout
      num="06"
      title="Advanced Technology"
      subtitle="Technology Solutions"
      heroLine="Advanced|Technology|\nSecurity"
      description={[
        "Modern security demands modern technology — but technology without expertise is just hardware. X730 integrates cutting-edge security technology with operational knowledge developed in real-world environments.",
        "We deploy, configure, and manage surveillance systems, counter-surveillance measures, access control infrastructure, and intelligence collection platforms. Our technology specialists are certified in the latest systems and understand how adversaries attempt to defeat them.",
        "For organizations facing sophisticated threats, we offer technical counter-surveillance assessments to detect unauthorized monitoring and protect sensitive information at the physical and electronic level.",
      ]}
      features={[
        "CCTV and surveillance system design and installation",
        "Access control system integration",
        "Counter-surveillance assessments (TSCM)",
        "Electronic sweeps for listening devices",
        "Drone detection and counter-drone solutions",
        "Secure communication systems",
        "Perimeter intrusion detection",
        "Technology vulnerability assessments",
      ]}
      process={[
        { step: "01", title: "Assess", desc: "Evaluate existing technology infrastructure and identify gaps and vulnerabilities." },
        { step: "02", title: "Design", desc: "Develop an integrated technology solution tailored to your threat environment." },
        { step: "03", title: "Deploy", desc: "Professional installation and configuration by certified technicians." },
        { step: "04", title: "Monitor", desc: "Ongoing monitoring, maintenance, and technology lifecycle management." },
      ]}
      prevService={{ label: "Private Investigation", href: "/services/private-investigation" }}
      nextService={{ label: "Training", href: "/services/training" }}
    />
  );
}
