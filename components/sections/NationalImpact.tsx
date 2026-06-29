import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

const impactAreas = [
  { label: "Digital Government", description: "Modernizing the technology stack of federal and state agencies" },
  { label: "Economic Growth", description: "Enabling digital infrastructure that supports GDP expansion" },
  { label: "Institutional Performance", description: "Measurable gains in agency efficiency and accountability" },
  { label: "Innovation", description: "Seeding GovTech ecosystems and local technology capacity" },
  { label: "Service Delivery", description: "Faster, more accessible public services for all Nigerians" },
  { label: "Digital Inclusion", description: "Infrastructure that reaches underserved communities" },
  { label: "Workforce Capability", description: "Building a pipeline of skilled digital government professionals" },
];

const stats = [
  { value: "36", label: "States", sub: "national reach" },
  { value: "8+", label: "Sectors", sub: "served" },
  { value: "10+", label: "Solutions", sub: "in portfolio" },
  { value: "5", label: "Phases", sub: "engagement model" },
];

export default function NationalImpact() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <SectionHeader
              label="National Impact"
              title="Supporting Nigeria's Digital Future"
              subtitle="NGL's work touches every dimension of the nation's development agenda, from the citizen experience at the front line to the data infrastructure powering policy at the top."
            />
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div>
              <div className="space-y-0 divide-y divide-slate-100">
                {impactAreas.map(({ label, description }) => (
                  <div
                    key={label}
                    className="flex items-start gap-5 py-5 group hover:bg-green-50/40 -mx-4 px-4 rounded-xl transition-colors duration-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-green mt-2 shrink-0 group-hover:scale-125 transition-transform duration-200" />
                    <div>
                      <div className="font-display font-semibold text-navy text-sm mb-0.5">{label}</div>
                      <div className="text-slate text-xs leading-relaxed">{description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100 rounded-2xl overflow-hidden shadow-card">
          {stats.map(({ value, label, sub }, i) => (
            <ScrollReveal key={label} delay={i * 100}>
              <div className="bg-white py-8 flex flex-col items-center text-center h-full">
                <div className="font-display font-bold text-navy text-3xl sm:text-4xl">{value}</div>
                <div className="font-semibold text-navy text-sm mt-1">{label}</div>
                <div className="text-slate text-xs mt-0.5">{sub}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
