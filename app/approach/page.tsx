import type { Metadata } from "next";
import { HeroBgApproach } from "@/components/sections/HeroBgVariants";
import Link from "next/link";
import { ArrowRight, Compass, Users, GraduationCap, Handshake } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "NGL's five-phase methodology for delivering digital transformation in Nigeria's public sector.",
};

const phases = [
  {
    number: "01",
    title: "Assess",
    accent: "text-green-600",
    dot: "bg-green-500",
    numBg: "bg-green-50 border-green-200",
    tagline: "Understand institutional priorities",
    description:
      "We begin every engagement with a deep institutional diagnostic. This means understanding the policy context, the existing technology landscape, the people involved, and the pain points that matter most. We do not recommend solutions before we understand problems.",
    activities: [
      "Institutional readiness assessment",
      "Stakeholder mapping and engagement",
      "Current-state technology audit",
      "Process and workflow documentation",
      "Priority setting workshops",
      "Risk and constraint identification",
    ],
  },
  {
    number: "02",
    title: "Design",
    accent: "text-navy",
    dot: "bg-navy",
    numBg: "bg-navy-50 border-navy/20",
    tagline: "Co-create solutions with stakeholders",
    description:
      "Great technology fails when designed in isolation. NGL's design phase is a collaborative process that brings together institutional stakeholders, end users, technology architects, and change management experts to co-create solutions that will actually be used.",
    activities: [
      "Human-centered design sprints",
      "Solution architecture workshops",
      "Technology selection and validation",
      "Prototype development and testing",
      "Change management planning",
      "Implementation roadmap creation",
    ],
  },
  {
    number: "03",
    title: "Build",
    accent: "text-green-600",
    dot: "bg-green-500",
    numBg: "bg-green-50 border-green-200",
    tagline: "Develop and integrate systems",
    description:
      "Our engineering teams develop, configure, and integrate systems using proven technology frameworks adapted to Nigeria's institutional context. We build iteratively, with regular stakeholder reviews and clear quality gates at every milestone.",
    activities: [
      "Agile development sprints",
      "System configuration and customization",
      "API and integration development",
      "Data migration and cleansing",
      "Security and compliance hardening",
      "User acceptance testing",
    ],
  },
  {
    number: "04",
    title: "Deploy",
    accent: "text-navy",
    dot: "bg-navy",
    numBg: "bg-navy-50 border-navy/20",
    tagline: "Implement and train",
    description:
      "A successful deployment is more than a technical cutover. NGL's deployment phase includes comprehensive change management, structured training programs, and a hypercare period to ensure the transition from old ways of working to new is smooth and sustainable.",
    activities: [
      "Phased rollout planning",
      "Comprehensive end-user training",
      "Change management execution",
      "Hypercare and issue resolution",
      "Go-live support and stabilization",
      "Performance baseline establishment",
    ],
  },
  {
    number: "05",
    title: "Sustain",
    accent: "text-green-600",
    dot: "bg-green-500",
    numBg: "bg-green-50 border-green-200",
    tagline: "Support and continuously improve",
    description:
      "NGL's commitment does not end at go-live. Our sustain phase provides ongoing technical support, continuous improvement cycles, performance monitoring, and structured knowledge transfer, building the institutional capability to manage and evolve systems independently.",
    activities: [
      "Tiered technical support",
      "Performance monitoring and optimization",
      "Feature enhancement cycles",
      "Capacity building and knowledge transfer",
      "Annual system health assessments",
      "Technology refresh planning",
    ],
  },
];

export default function ApproachPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <HeroBgApproach />
        <div className="container-wide relative z-10">
          <span className="label-tag-white">Our Approach</span>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance max-w-3xl mt-2">
            A Methodology Built on Institutional Reality
          </h1>
          <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
            Five disciplined phases that take engagements from diagnosis to sustainable operation,
            always with deep institutional context and a commitment to knowledge transfer.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="section-pad bg-slate-50">
        <div className="container-wide space-y-6">
          {phases.map(({ number, title, accent, dot, numBg, tagline, description, activities }) => (
            <div
              key={number}
              className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 grid lg:grid-cols-5 gap-8"
            >
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4 mb-5">
                  <span className={`font-display font-bold text-4xl w-16 h-16 rounded-2xl border flex items-center justify-center shrink-0 ${accent} ${numBg}`}>
                    {number}
                  </span>
                  <div>
                    <h2 className="font-display font-bold text-navy text-2xl">{title}</h2>
                    <p className={`text-sm font-medium ${accent}`}>{tagline}</p>
                  </div>
                </div>
                <p className="text-slate text-sm leading-relaxed">{description}</p>
              </div>
              <div className="lg:col-span-2">
                <div className="text-slate/50 text-xs font-semibold uppercase tracking-wider mb-4">
                  Key Activities
                </div>
                <ul className="space-y-2.5">
                  {activities.map((act) => (
                    <li key={act} className="flex items-center gap-2.5 text-slate text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionHeader
              label="Principles"
              title="What Guides Every Engagement"
              subtitle="Our methodology is underpinned by four non-negotiable principles."
              align="center"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Compass,      title: "Context First",        desc: "We never apply generic solutions. Every recommendation is grounded in Nigeria's specific institutional reality." },
              { icon: Users,        title: "Co-creation",          desc: "Stakeholders are partners in design, not audiences for delivery. The best solutions are built together." },
              { icon: GraduationCap, title: "Knowledge Transfer",  desc: "Every engagement leaves the institution more capable than it was before NGL arrived." },
              { icon: Handshake,    title: "Long-Term Partnership", desc: "We measure success in years, not project milestones. Our relationship continues beyond go-live." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-base p-6">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-green-600" />
                </div>
                <h3 className="font-display font-semibold text-navy text-sm mb-2">{title}</h3>
                <p className="text-slate text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm bg-gray-50">
        <div className="container-wide text-center">
          <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl mb-4">
            Ready to Begin Your Assessment?
          </h2>
          <p className="text-slate text-base mb-8 max-w-xl mx-auto">
            The first phase costs nothing but a conversation. Let&apos;s understand your institution&apos;s priorities together.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
