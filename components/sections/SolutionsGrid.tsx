import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

const solutions = [
  {
    title: "Digital Identity Systems",
    description: "Biometric-backed digital identity infrastructure for citizens and residents.",
    tag: "Foundation",
    href: "/solutions#identity",
  },
  {
    title: "Performance Management Platforms",
    description: "Real-time dashboards and KPI tracking for institutional accountability.",
    tag: "Analytics",
    href: "/solutions#performance",
  },
  {
    title: "ERP Systems",
    description: "Public sector enterprise resource planning tailored for government complexity.",
    tag: "Enterprise",
    href: "/solutions#erp",
  },
  {
    title: "Workflow Automation",
    description: "End-to-end process digitization that eliminates manual bottlenecks.",
    tag: "Operations",
    href: "/solutions#workflow",
  },
  {
    title: "Case Management Systems",
    description: "Track, manage, and resolve citizen cases across agencies with full audit trails.",
    tag: "Service Delivery",
    href: "/solutions#case",
  },
  {
    title: "Learning Platforms",
    description: "LMS and digital training environments for public sector capacity building.",
    tag: "Capacity",
    href: "/solutions#learning",
  },
  {
    title: "Analytics Dashboards",
    description: "Policy intelligence from real-time data across multiple institutional sources.",
    tag: "Data",
    href: "/solutions#analytics",
  },
  {
    title: "Citizen Service Platforms",
    description: "Unified portals for seamless access to government services, 24/7.",
    tag: "Citizens",
    href: "/solutions#citizen",
  },
  {
    title: "Regulatory Technology",
    description: "Compliance and oversight platforms for regulators and enforcement agencies.",
    tag: "RegTech",
    href: "/solutions#regtech",
  },
  {
    title: "Interoperability Platforms",
    description: "API gateways and integration layers connecting siloed government systems.",
    tag: "Integration",
    href: "/solutions#interop",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <ScrollReveal>
            <SectionHeader
              label="Solution Portfolio"
              title="Technology That Moves Institutions Forward"
              subtitle="A comprehensive suite of digital solutions engineered for the Nigerian public sector context."
            />
          </ScrollReveal>
          <ScrollReveal delay={150} className="shrink-0">
            <Link href="/solutions" className="btn-outline text-sm">
              All Solutions
              <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {solutions.map(({ title, description, tag, href }, i) => (
            <ScrollReveal key={title} delay={i * 50}>
              <Link
                href={href}
                className="card-base p-5 flex flex-col gap-3 group h-full"
              >
                <span
                  className={`self-start px-2.5 py-1 rounded-full text-xs font-semibold ${
                    i % 2 === 0 ? "bg-green-50 text-green-600" : "bg-navy-50 text-navy-400"
                  }`}
                >
                  {tag}
                </span>
                <h3 className="font-display font-semibold text-navy text-sm group-hover:text-green transition-colors leading-tight">
                  {title}
                </h3>
                <p className="text-slate text-xs leading-relaxed flex-1">{description}</p>
                <span className="flex items-center gap-1 text-green text-xs font-medium mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more <ArrowRight size={11} />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
