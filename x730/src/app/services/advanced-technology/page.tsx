import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = { title: "Advanced Technology" };

export default function Page() {
  return (
    <ServicePageLayout
      num="06" subtitle="Technology Solutions"
      title="Advanced Technology"
      heroHeading="Technology" heroAccent="Security."
      shape="circuit"
      description={[
        "Modern security demands modern technology — but technology without expertise is just hardware. X730 integrates cutting-edge security technology with operational knowledge developed in real-world environments.",
        "We deploy, configure, and manage surveillance systems, counter-surveillance measures, access control infrastructure, and intelligence collection platforms. Our technology specialists are certified in the latest systems and understand how adversaries defeat them.",
        "For organizations facing sophisticated threats, we offer technical counter-surveillance assessments to detect unauthorized monitoring at the physical and electronic level.",
      ]}
      features={[
        "CCTV and surveillance system design",
        "Access control system integration",
        "Counter-surveillance assessments (TSCM)",
        "Electronic sweeps for listening devices",
        "Drone detection and counter-drone solutions",
        "Secure communication systems",
        "Perimeter intrusion detection",
        "Technology vulnerability assessments",
      ]}
      process={[
        { step: "01", title: "Assess", desc: "Evaluate existing technology infrastructure and identify gaps." },
        { step: "02", title: "Design", desc: "Develop an integrated solution tailored to your threat environment." },
        { step: "03", title: "Deploy", desc: "Professional installation by certified technicians." },
        { step: "04", title: "Monitor", desc: "Ongoing monitoring, maintenance, and lifecycle management." },
      ]}
      prevService={{ label: "Private Investigation", href: "/services/private-investigation" }}
      nextService={{ label: "Training", href: "/services/training" }}
    />
  );
}
