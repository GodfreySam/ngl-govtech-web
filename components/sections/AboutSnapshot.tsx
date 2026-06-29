import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

const strengths = [
  "Public sector mandate and national reach",
  "Technology innovation and implementation expertise",
  "Institutional transformation capabilities",
  "Sustainable digital infrastructure delivery",
];

export default function AboutSnapshot() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <ScrollReveal>
            <div>
              <SectionHeader
                label="Who We Are"
                title="A New Model for Digital Transformation in Nigeria"
                subtitle="NASENI Golborn Limited (NGL) is a strategic Public-Private Partnership established to accelerate digital transformation, institutional modernization, and technology-enabled public service delivery across Nigeria."
              />

              <ul className="mt-8 space-y-3.5">
                {strengths.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-slate text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about" className="btn-outline mt-8">
                Learn More About NGL
                <ArrowRight size={15} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right: model card */}
          <ScrollReveal delay={150}>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-card">
              <div className="text-green-600 text-xs font-semibold uppercase tracking-widest mb-1">The NGL Model</div>
              <h3 className="font-display font-bold text-navy text-xl mb-7">
                Public Purpose + Private Innovation
              </h3>

              <div className="grid grid-cols-2 gap-3 mb-7">
                {[
                  {
                    side: "Public Sector",
                    color: "border-navy/20",
                    label: "text-navy",
                    items: ["National priorities", "Institutional access", "Policy alignment", "Scale"],
                  },
                  {
                    side: "Private Sector",
                    color: "border-green-200",
                    label: "text-green-600",
                    items: ["Technology expertise", "Innovation", "Delivery capability", "Agility"],
                  },
                ].map(({ side, color, label, items }) => (
                  <div key={side} className={`bg-slate-50 border rounded-2xl p-4 ${color}`}>
                    <div className={`font-semibold text-xs uppercase tracking-wider mb-3 ${label}`}>
                      {side}
                    </div>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li key={item} className="text-navy/60 text-xs flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 text-center">
                {[
                  { value: "PPP", label: "Partnership" },
                  { value: "8+", label: "Focus Areas" },
                  { value: "NG", label: "National Reach" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="font-display font-bold text-navy text-2xl">{value}</div>
                    <div className="text-slate text-xs mt-0.5">{label}</div>
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
