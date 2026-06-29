import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { HeroBgSolutions } from "@/components/sections/HeroBgVariants";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "NGL's portfolio of digital solutions for Nigeria's public sector, from identity systems to citizen service platforms.",
};

const solutions = [
  {
    id: "identity",
    title: "Digital Identity Systems",
    tag: "Foundation",
    description:
      "Biometric-backed national and institutional identity infrastructure enabling trusted digital transactions for citizens and public servants.",
    capabilities: [
      "Biometric enrollment and verification",
      "Digital credential issuance",
      "Identity deduplication engines",
      "Integration with civil registration databases",
      "Foundational ID API layer",
    ],
  },
  {
    id: "performance",
    title: "Performance Management Platforms",
    tag: "Analytics",
    description:
      "Real-time KPI tracking, scorecard management, and accountability dashboards that give leadership visibility into institutional performance.",
    capabilities: [
      "Balanced scorecard implementation",
      "Real-time executive dashboards",
      "Automated reporting workflows",
      "Target setting and variance tracking",
      "Multi-tier performance cascades",
    ],
  },
  {
    id: "erp",
    title: "ERP Systems",
    tag: "Enterprise",
    description:
      "Public sector-tailored enterprise resource planning platforms covering financials, HR, procurement, and asset management.",
    capabilities: [
      "Financial management and budgeting",
      "Human capital management",
      "Procurement and supply chain",
      "Asset and fleet management",
      "IPSAS-compliant accounting",
    ],
  },
  {
    id: "workflow",
    title: "Workflow Automation",
    tag: "Operations",
    description:
      "End-to-end digitization of approval chains, document routing, and business process management across agencies.",
    capabilities: [
      "Visual workflow designer",
      "Electronic signature integration",
      "Approval routing and escalation",
      "Audit trail and compliance logging",
      "Low-code form builder",
    ],
  },
  {
    id: "case",
    title: "Case Management Systems",
    tag: "Service Delivery",
    description:
      "Structured platforms for tracking, managing, and resolving citizen requests, complaints, and regulatory cases.",
    capabilities: [
      "Case intake and triage automation",
      "Assignment and workload management",
      "SLA monitoring and alerts",
      "Citizen status notifications",
      "Analytics and resolution reporting",
    ],
  },
  {
    id: "learning",
    title: "Learning Platforms",
    tag: "Capacity",
    description:
      "Modern LMS and digital training environments for large-scale public sector capacity building programs.",
    capabilities: [
      "SCORM-compatible course library",
      "Virtual classroom integration",
      "Assessment and certification",
      "Learning path management",
      "Progress tracking and reporting",
    ],
  },
  {
    id: "analytics",
    title: "Analytics Dashboards",
    tag: "Data",
    description:
      "Policy intelligence platforms that aggregate data from multiple sources and translate it into actionable insight.",
    capabilities: [
      "Data warehouse integration",
      "Self-service BI tooling",
      "Geospatial analytics",
      "Predictive modeling",
      "Open data portals",
    ],
  },
  {
    id: "citizen",
    title: "Citizen Service Platforms",
    tag: "Citizens",
    description:
      "Unified digital portals that make government services accessible, fast, and frictionless for all Nigerians.",
    capabilities: [
      "Omnichannel service delivery (web, mobile, USSD)",
      "ePayment integration",
      "Service catalog management",
      "Feedback and satisfaction tracking",
      "Accessibility compliance",
    ],
  },
  {
    id: "regtech",
    title: "Regulatory Technology",
    tag: "RegTech",
    description:
      "Platforms that help regulators and oversight agencies automate compliance, monitoring, and enforcement workflows.",
    capabilities: [
      "License and permit management",
      "Inspection and audit workflows",
      "Risk-based surveillance",
      "Regulatory reporting automation",
      "Penalty and sanction management",
    ],
  },
  {
    id: "interop",
    title: "Interoperability Platforms",
    tag: "Integration",
    description:
      "API gateways and integration layers that break down silos and enable seamless data exchange between government systems.",
    capabilities: [
      "RESTful API gateway",
      "Data transformation and mapping",
      "Enterprise service bus",
      "Real-time event streaming",
      "Cross-agency data sharing agreements tooling",
    ],
  },
];

const tagColors: Record<string, string> = {
  Foundation: "bg-green-100 text-green-700",
  Analytics: "bg-blue-100 text-blue-700",
  Enterprise: "bg-slate-100 text-slate-700",
  Operations: "bg-amber-100 text-amber-700",
  "Service Delivery": "bg-teal-100 text-teal-700",
  Capacity: "bg-purple-100 text-purple-700",
  Data: "bg-indigo-100 text-indigo-700",
  Citizens: "bg-orange-100 text-orange-700",
  RegTech: "bg-red-100 text-red-700",
  Integration: "bg-gray-100 text-gray-700",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <HeroBgSolutions />
        <div className="container-wide relative z-10">
          <span className="label-tag-white">Solution Portfolio</span>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance max-w-3xl mt-2">
            Technology That Moves Institutions Forward
          </h1>
          <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
            A comprehensive suite of digital solutions engineered for the Nigerian public sector,
            each one built with deep institutional understanding and a commitment to lasting impact.
          </p>
        </div>
      </section>

      {/* Solutions list */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="space-y-10">
            {solutions.map(({ id, title, tag, description, capabilities }) => (
              <div
                key={id}
                id={id}
                className="grid lg:grid-cols-5 gap-8 items-start py-10 border-b border-slate-100 last:border-0"
              >
                <div className="lg:col-span-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${tagColors[tag] || "bg-gray-100 text-gray-700"}`}
                  >
                    {tag}
                  </span>
                  <h2 className="font-display font-bold text-navy text-2xl sm:text-3xl mb-4">
                    {title}
                  </h2>
                  <p className="text-slate text-base leading-relaxed">{description}</p>
                </div>
                <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-4">
                    Key Capabilities
                  </div>
                  <ul className="space-y-2.5">
                    {capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5 text-sm text-navy/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-green mt-2 shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="container-wide relative z-10 text-center">
          <SectionHeader
            label="Next Step"
            title="Which Solution Fits Your Institution?"
            subtitle="Our team will work with you to identify the right starting point for your digital transformation journey."
            align="center"
            theme="dark"
          />
          <Link href="/contact" className="btn-primary mt-8">
            Talk to Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
