import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = { title: "Security Training" };

export default function TrainingPage() {
  return (
    <ServicePageLayout
      num="07"
      title="Training"
      subtitle="Security Training"
      heroLine="Professional|Security|\nTraining"
      description={[
        "The best technology and processes are only as effective as the people behind them. X730 designs and delivers security training programs that elevate capability — whether for a corporate security team, an executive support staff, or an individual seeking advanced skills.",
        "Our instructors are operational professionals with real-world experience in protective operations, threat assessment, and crisis response. Training is scenario-based, practical, and directly applicable to the environments our clients operate in.",
        "Programs can be delivered on-site, at our facilities, or in customized field environments. All programs are available in English and French.",
      ]}
      features={[
        "Executive and corporate security awareness",
        "Close protection officer training",
        "Situational awareness and threat recognition",
        "First aid and emergency response for security professionals",
        "Defensive driving",
        "Crisis communication and media handling",
        "Security team leadership and management",
        "Customized corporate training programs",
      ]}
      process={[
        { step: "01", title: "Assess", desc: "Evaluate current capability levels and identify specific training objectives." },
        { step: "02", title: "Design", desc: "Develop a customized curriculum aligned to real-world scenarios." },
        { step: "03", title: "Train", desc: "Deliver practical, scenario-based training with experienced instructors." },
        { step: "04", title: "Certify", desc: "Issue completion certifications and provide recommendations for ongoing development." },
      ]}
      prevService={{ label: "Advanced Technology", href: "/services/advanced-technology" }}
    />
  );
}
