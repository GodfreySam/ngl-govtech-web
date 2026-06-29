import type { Metadata } from "next";
import { HeroBgSectors } from "@/components/sections/HeroBgVariants";
import Link from "next/link";
import { ArrowRight, Landmark, Zap, ShieldCheck, Scale, GraduationCap, Globe, Coins, Users, Lock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "NGL serves Nigeria's most critical sectors, from federal government to energy, education, and digital economy.",
};

const sectors = [
  {
    id: "government",
    icon: Landmark,
    title: "Government & Public Administration",
    description:
      "We partner with federal ministries, departments, and agencies (MDAs) to modernize operations, digitize services, and build institutional capacity for the digital age.",
    examples: [
      "Ministry digital transformation programs",
      "e-Cabinet and records management",
      "Government portal consolidation",
      "Public financial management systems",
    ],
    color: "bg-navy-50 text-navy border-navy/10",
    accent: "bg-navy text-white",
  },
  {
    id: "energy",
    icon: Zap,
    title: "Energy & Utilities",
    description:
      "Supporting Nigeria's power, oil and gas, and utilities sector institutions with operational technology, data management, and regulatory compliance systems.",
    examples: [
      "Utility billing and CRM platforms",
      "Asset and field workforce management",
      "Regulatory reporting automation",
      "Energy sector data analytics",
    ],
    color: "bg-amber-50 text-amber-700 border-amber-100",
    accent: "bg-amber-500 text-white",
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Security & Public Safety",
    description:
      "Providing technology solutions that strengthen law enforcement, border management, emergency response, and national security operations.",
    examples: [
      "Criminal intelligence databases",
      "Border management platforms",
      "Emergency response coordination",
      "Surveillance and analytics",
    ],
    color: "bg-red-50 text-red-700 border-red-100",
    accent: "bg-red-600 text-white",
  },
  {
    id: "regulators",
    icon: Scale,
    title: "Regulators & Oversight Agencies",
    description:
      "Helping regulators across sectors automate licensing, compliance monitoring, enforcement, and stakeholder reporting workflows.",
    examples: [
      "License and permit management",
      "Risk-based surveillance systems",
      "Enforcement and sanctions management",
      "Regulated entity portals",
    ],
    color: "bg-indigo-50 text-indigo-700 border-indigo-100",
    accent: "bg-indigo-600 text-white",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education & Capacity Development",
    description:
      "Building digital infrastructure for Nigeria's education ecosystem, from basic learning management to institutional capacity programs at scale.",
    examples: [
      "National examination platforms",
      "Student information systems",
      "e-Learning and LMS deployment",
      "Teacher professional development portals",
    ],
    color: "bg-green-50 text-green-700 border-green-100",
    accent: "bg-green text-white",
  },
  {
    id: "digital",
    icon: Globe,
    title: "Digital Economy",
    description:
      "Supporting Nigeria's growing digital economy with platforms, policy infrastructure, and innovation ecosystem tools.",
    examples: [
      "Innovation hub management systems",
      "Digital business registry",
      "Startup ecosystem platforms",
      "ICT policy tracking and reporting",
    ],
    color: "bg-blue-50 text-blue-700 border-blue-100",
    accent: "bg-blue-600 text-white",
  },
  {
    id: "finance",
    icon: Coins,
    title: "Revenue & Finance",
    description:
      "Working with revenue authorities, treasuries, and finance agencies to modernize collection, reporting, and financial management.",
    examples: [
      "Integrated tax management",
      "eRevenue and payment platforms",
      "Treasury single account systems",
      "Budget management and reporting",
    ],
    color: "bg-teal-50 text-teal-700 border-teal-100",
    accent: "bg-teal-600 text-white",
  },
  {
    id: "citizen",
    icon: Users,
    title: "Citizen Services",
    description:
      "Designing and delivering platforms that make government services more accessible, faster, and more equitable for all Nigerians.",
    examples: [
      "Unified government service portals",
      "Social protection management",
      "Citizen feedback platforms",
      "Grievance and complaints systems",
    ],
    color: "bg-orange-50 text-orange-700 border-orange-100",
    accent: "bg-orange-500 text-white",
  },
  {
    id: "defence",
    icon: Lock,
    title: "Security, Defence & Public Safety",
    description:
      "Delivering resilient, secure technology platforms to support Nigeria's defence and national security institutions.",
    examples: [
      "Secure command and control systems",
      "Defence logistics platforms",
      "Personnel management systems",
      "Intelligence data management",
    ],
    color: "bg-slate-50 text-slate-700 border-slate-200",
    accent: "bg-slate-700 text-white",
  },
];

export default function SectorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <HeroBgSectors />
        <div className="container-wide relative z-10">
          <span className="label-tag-white">Sector Expertise</span>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance max-w-3xl mt-2">
            Deep Expertise Across Nigeria&apos;s Critical Sectors
          </h1>
          <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
            From federal government to energy, education, and defence. NGL brings proven
            domain knowledge and technology delivery capability to every sector we serve.
          </p>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map(({ id, icon: Icon, title, description, examples, color, accent }) => (
              <div
                key={id}
                id={id}
                className={`rounded-2xl border p-6 ${color} hover:-translate-y-1 transition-transform duration-200 group`}
              >
                <div className={`w-11 h-11 rounded-xl ${accent} flex items-center justify-center mb-5`}>
                  <Icon size={20} />
                </div>
                <h2 className="font-display font-bold text-lg mb-3">{title}</h2>
                <p className="text-sm leading-relaxed opacity-80 mb-5">{description}</p>
                <ul className="space-y-1.5">
                  {examples.map((ex) => (
                    <li key={ex} className="text-xs opacity-70 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-current" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm bg-green relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-60" />
        <div className="container-wide relative z-10 text-center">
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-4">
            Is Your Sector on the List?
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how NGL can help your institution navigate its digital transformation journey.
          </p>
          <Link href="/contact" className="btn-primary">
            Speak With Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
