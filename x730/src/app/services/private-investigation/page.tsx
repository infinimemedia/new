import type { Metadata } from "next";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export const metadata: Metadata = { title: "Private Investigation" };

export default function PrivateInvestigationPage() {
  return (
    <ServicePageLayout
      num="05"
      title="Private Investigation"
      subtitle="Private Investigation"
      heroLine="Discreet|Investigation"
      description={[
        "Truth matters — and obtaining it requires expertise, patience, and absolute discretion. X730's private investigation service delivers findings that are thorough, legally compliant, and actionable.",
        "Our investigators are former law enforcement professionals who understand both the legal framework and the practical realities of conducting covert investigations. Whether the matter involves corporate fraud, due diligence, asset tracing, or sensitive personal situations, we treat every case with the same seriousness and confidentiality.",
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
        { step: "01", title: "Intake", desc: "Confidential briefing to understand the matter, objectives, and legal requirements." },
        { step: "02", title: "Investigate", desc: "Systematic covert investigation using appropriate techniques and tools." },
        { step: "03", title: "Document", desc: "All findings documented with evidence in legally compliant formats." },
        { step: "04", title: "Report", desc: "Comprehensive written report delivered with recommendations for next steps." },
      ]}
      prevService={{ label: "Risk Assessments", href: "/services/risk-assessments" }}
      nextService={{ label: "Advanced Technology", href: "/services/advanced-technology" }}
    />
  );
}
