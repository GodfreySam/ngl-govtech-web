import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { HeroBgInsights } from "@/components/sections/HeroBgVariants";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives, research, and analysis on digital government, GovTech, and institutional transformation in Nigeria.",
};

const insights = [
  {
    slug: "interoperability-imperative",
    category: "Digital Infrastructure",
    title: "The Interoperability Imperative: Why Nigeria's Government Systems Must Connect",
    description:
      "Siloed IT systems cost Nigeria billions in inefficiency every year. This piece explores the technical and governance levers that can unlock cross-agency data sharing at scale.",
    date: "June 2025",
    readTime: "8 min read",
  },
  {
    slug: "digital-identity-foundation",
    category: "Digital Identity",
    title: "Foundational ID as Infrastructure: Building Nigeria's Digital Future from the Ground Up",
    description:
      "A robust digital identity system is the bedrock of every other public digital service. We examine what it takes to build one that works for all Nigerians.",
    date: "May 2025",
    readTime: "6 min read",
  },
  {
    slug: "govtech-local-context",
    category: "GovTech",
    title: "Why GovTech Solutions Fail in Nigeria: And How to Avoid the Same Mistakes",
    description:
      "An analysis of common failure modes in Nigerian government technology projects, and the institutional design principles that lead to better outcomes.",
    date: "April 2025",
    readTime: "10 min read",
  },
  {
    slug: "ppp-digital-infrastructure",
    category: "PPP",
    title: "Public-Private Partnerships for Digital Infrastructure: A Framework for Success",
    description:
      "Drawing on NGL's experience, this piece outlines the governance, commercial, and technical ingredients of a successful GovTech public-private partnership.",
    date: "March 2025",
    readTime: "7 min read",
  },
  {
    slug: "capacity-building-imperative",
    category: "Capacity Development",
    title: "Technology Without Talent: Addressing Nigeria's Digital Skills Gap in the Public Sector",
    description:
      "Hardware and software are only as good as the people who operate them. We explore the structural barriers to digital talent in the Nigerian public sector and how they can be overcome.",
    date: "February 2025",
    readTime: "9 min read",
  },
  {
    slug: "service-delivery-redesign",
    category: "Service Delivery",
    title: "Redesigning the Nigerian Government Service Experience from the Citizen&apos;s Perspective",
    description:
      "What does a truly citizen-centered public service look like? We walk through the design principles and technology enablers that make it achievable.",
    date: "January 2025",
    readTime: "6 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Digital Infrastructure": "bg-navy-50 text-navy",
  "Digital Identity": "bg-green-50 text-green",
  GovTech: "bg-blue-50 text-blue-600",
  PPP: "bg-green-50 text-green-400",
  "Capacity Development": "bg-purple-50 text-purple-600",
  "Service Delivery": "bg-teal-50 text-teal-600",
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <HeroBgInsights />
        <div className="container-wide relative z-10">
          <span className="label-tag-white">Insights</span>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance max-w-3xl mt-2">
            Perspectives on Nigeria&apos;s Digital Transformation
          </h1>
          <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
            Research, analysis, and practical guidance on GovTech, digital public infrastructure,
            and institutional modernization from the NGL team.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {insights.map(({ slug, category, title, description, date, readTime }) => (
              <Link
                key={slug}
                href={`/insights/${slug}`}
                className="card-base overflow-hidden flex flex-col group"
              >
                {/* Image placeholder */}
                <div className="h-44 bg-gradient-to-br from-navy-500 to-navy relative overflow-hidden">
                  <div className="absolute inset-0 bg-dot-pattern opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <span
                    className={`absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[category] || "bg-gray-100 text-gray-600"}`}
                  >
                    {category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate mb-3">
                    <Calendar size={12} />
                    <span>{date}</span>
                    <span>·</span>
                    <span>{readTime}</span>
                  </div>
                  <h2 className="font-display font-bold text-navy text-base leading-tight mb-3 group-hover:text-green transition-colors flex-1">
                    {title}
                  </h2>
                  <p className="text-slate text-xs leading-relaxed line-clamp-3 mb-4">
                    {description}
                  </p>
                  <span className="flex items-center gap-1.5 text-green text-xs font-semibold mt-auto">
                    Read Article <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-pad-sm bg-gray-50">
        <div className="container-wide">
          <div className="bg-gradient-hero rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <SectionHeader
                  label="Stay Informed"
                  title="NGL Insights in Your Inbox"
                  subtitle="Join public sector leaders receiving our monthly briefing on GovTech, digital infrastructure, and institutional transformation."
                  theme="dark"
                />
              </div>
              <form className="flex gap-3 shrink-0 w-full md:w-auto">
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="your@ministry.gov.ng"
                  className="px-4 py-3 rounded-full text-sm text-navy placeholder:text-slate-400 flex-1 md:w-64 focus:ring-2 focus:ring-green"
                />
                <button type="submit" className="btn-primary shrink-0 text-xs px-5 py-3">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
