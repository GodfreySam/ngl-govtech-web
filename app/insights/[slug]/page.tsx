import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Insight",
};

export default function InsightDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="container-wide relative z-10 max-w-3xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Insights
          </Link>
          <span className="inline-block bg-green/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold mb-4">
            Digital Infrastructure
          </span>
          <h1 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
            The Interoperability Imperative
          </h1>
          <div className="flex flex-wrap items-center gap-5 mt-6 text-white/50 text-xs">
            <span className="flex items-center gap-1.5"><Calendar size={12} /> June 2025</span>
            <span className="flex items-center gap-1.5"><Clock size={12} /> 8 min read</span>
            <span className="flex items-center gap-1.5"><User size={12} /> NGL Research Team</span>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide max-w-3xl">
          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-navy prose-a:text-green">
            <p className="lead text-lg text-slate leading-relaxed">
              Nigeria&apos;s government operates hundreds of discrete technology systems, each built in isolation,
              each protecting its own data, and each creating friction for the institutions and citizens that depend on them.
            </p>
            <h2>The Cost of Silos</h2>
            <p>
              When a citizen applies for a business permit, the business registration authority cannot confirm
              their identity with the national identity database. When a pension agency verifies a retiree,
              it cannot access HR records from the originating ministry. When a revenue authority tries to
              cross-check taxpayer declarations, it has no reliable link to customs or company registration data.
            </p>
            <p>
              These are not edge cases. They are the everyday reality of public sector technology in Nigeria.
            </p>
            <h2>The Architecture of Interoperability</h2>
            <p>True interoperability is not simply about connecting APIs. It requires three things working in concert:</p>
            <ol>
              <li><strong>Technical standards</strong>: agreed data formats, API protocols, and authentication mechanisms that systems can speak across organizational boundaries</li>
              <li><strong>Governance frameworks</strong>: data sharing agreements, privacy protections, and accountability mechanisms that make data sharing legally and institutionally safe</li>
              <li><strong>Operational trust</strong>: the confidence that data shared will be used appropriately, protected adequately, and reciprocated in kind</li>
            </ol>
            <h2>The Path Forward</h2>
            <p>
              NGL&apos;s interoperability platform provides the integration layer that sits between government systems,
              normalizing data, enforcing governance rules, and enabling real-time data exchange across agencies.
            </p>
            <p>
              Building this requires more than technology. It requires convening power, policy alignment, and the
              patience to work through institutional resistance. NGL&apos;s position as a Public-Private Partnership
              gives us the credibility to do exactly that.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad-sm bg-gray-50">
        <div className="container-wide text-center">
          <h2 className="font-display font-bold text-navy text-2xl sm:text-3xl mb-4">
            Interested in Interoperability for Your Institution?
          </h2>
          <Link href="/contact" className="btn-primary">
            Talk to Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
