import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = { title: "Private Investigation" };

export default function Page() {
  return (
    <ServicePageLayout
      num="05" subtitle="Private Investigation"
      title="Private Investigation"
      heroHeading="Discreet" heroAccent="Investigation."
      shape="target"
      description={[
        "Truth matters — and obtaining it requires expertise, patience, and absolute discretion. X730's investigation service delivers findings that are thorough, legally compliant, and actionable.",
        "Our investigators are former law enforcement professionals who understand both the legal framework and the practical realities of covert investigations. Every case is treated with seriousness and confidentiality.",
        "Findings are documented meticulously and prepared in formats suitable for legal proceedings when required.",
      ]}
      features={[
        "Corporate due diligence and background checks",
        "Fraud investigation and asset tracing",
        "Surveillance operations",
        "Infidelity and personal investigations",
        "Employee misconduct investigations",
        "Witness location and interviews",
        "Legal documentation and evidence preparation",
        "Court-admissible reporting",
      ]}
      process={[
        { step: "01", title: "Intake", desc: "Confidential briefing on the matter, objectives, and legal requirements." },
        { step: "02", title: "Investigate", desc: "Systematic covert investigation using appropriate techniques." },
        { step: "03", title: "Document", desc: "All findings documented with evidence in legally compliant formats." },
        { step: "04", title: "Report", desc: "Comprehensive written report with recommendations for next steps." },
      ]}
      prevService={{ label: "Risk Assessments", href: "/services/risk-assessments" }}
      nextService={{ label: "Advanced Technology", href: "/services/advanced-technology" }}
    />
  );
}
