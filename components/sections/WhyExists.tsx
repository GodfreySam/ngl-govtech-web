import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { AlertTriangle, Layers, Wifi, Database, Users, Cpu, TrendingUp, CheckCircle2 } from "lucide-react";

const challenges = [
  { icon: Layers, label: "Fragmented systems across agencies" },
  { icon: AlertTriangle, label: "Manual processes and bottlenecks" },
  { icon: Wifi, label: "Limited interoperability" },
  { icon: Database, label: "Weak data ecosystems" },
  { icon: Users, label: "Poor service delivery experiences" },
  { icon: TrendingUp, label: "Capacity constraints" },
  { icon: Cpu, label: "Technology implementation gaps" },
];

export default function WhyExists() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Challenges */}
          <ScrollReveal>
            <div>
              <SectionHeader
                label="Nigeria's Institutional Challenge"
                title="The Problem NGL Was Built to Solve"
                subtitle="Nigeria's public institutions face systemic technology gaps that limit efficiency, transparency, and citizen service quality."
              />
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {challenges.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
                  >
                    <Icon size={15} className="text-slate shrink-0" />
                    <span className="text-navy/70 text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Response */}
          <ScrollReveal delay={150}>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10">
              <div className="text-green-600 text-xs font-semibold uppercase tracking-widest mb-3">Our Response</div>
              <h3 className="font-display font-bold text-navy text-2xl sm:text-3xl mb-5 text-balance">
                Building the Digital Foundations Nigeria Needs
              </h3>
              <p className="text-slate text-base leading-relaxed mb-8">
                NGL exists to build the digital foundations that enable efficient institutions and
                improved citizen outcomes. We bridge the gap between policy intent and technology
                reality across every tier of government.
              </p>
              <div className="space-y-3.5">
                {[
                  "Design systems that actually get used",
                  "Deploy with deep institutional context",
                  "Sustain and continuously improve",
                  "Transfer knowledge and build local capacity",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0" />
                    <span className="text-navy/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
