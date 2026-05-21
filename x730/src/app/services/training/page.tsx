import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = { title: "Training" };

export default function Page() {
  return (
    <ServicePageLayout
      num="07" subtitle="Security Training"
      title="Training"
      heroHeading="Professional" heroAccent="Training."
      shape="icosahedron"
      description={[
        "The best technology and processes are only as effective as the people behind them. X730 designs and delivers security training programs that elevate capability — whether for a corporate security team, executive staff, or an individual.",
        "Our instructors are operational professionals with real-world experience in protective operations, threat assessment, and crisis response. Training is scenario-based, practical, and directly applicable.",
        "Programs are delivered on-site, at our facilities, or in customized field environments. Available in English and French.",
      ]}
      features={[
        "Executive and corporate security awareness",
        "Close protection officer training",
        "Situational awareness and threat recognition",
        "First aid and emergency response",
        "Defensive driving",
        "Crisis communication and media handling",
        "Security team leadership",
        "Customized corporate programs",
      ]}
      process={[
        { step: "01", title: "Assess", desc: "Evaluate current capability levels and identify training objectives." },
        { step: "02", title: "Design", desc: "Develop a customized curriculum for real-world scenarios." },
        { step: "03", title: "Train", desc: "Practical, scenario-based training with experienced instructors." },
        { step: "04", title: "Certify", desc: "Completion certifications and development recommendations." },
      ]}
      prevService={{ label: "Advanced Technology", href: "/services/advanced-technology" }}
    />
  );
}
