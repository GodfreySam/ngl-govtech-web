import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "We conduct deep institutional diagnostics to understand priorities, pain points, and technology landscape before recommending any solution.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Working collaboratively with stakeholders, we co-create solutions that reflect real institutional needs, not generic off-the-shelf assumptions.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our engineering teams develop, configure, and integrate systems using proven technology frameworks with local context embedded.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "We implement with comprehensive change management, hands-on training, and structured handover to ensure lasting adoption.",
  },
  {
    number: "05",
    title: "Sustain",
    description:
      "Post-deployment, NGL provides ongoing support, continuous improvement cycles, and capacity transfer to build long-term self-sufficiency.",
  },
];

export default function ApproachSection() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionHeader
              label="Our Approach"
              title="A Methodology Built on Institutional Reality"
              subtitle="Five disciplined phases that take ideas from diagnosis to sustainable operation."
              align="center"
            />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[1.85rem] left-12 right-12 h-px bg-slate-200" />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map(({ number, title, description }, i) => (
              <ScrollReveal key={number} delay={i * 75}>
                <div className="relative group">
                  {/* Number bubble */}
                  <div className="relative z-10 flex items-center gap-4 mb-5 lg:flex-col lg:items-start lg:gap-0">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-green-300 group-hover:bg-green-50 transition-all duration-300 lg:mb-5">
                      <span className="font-display font-bold text-navy/40 text-sm group-hover:text-green-600 transition-colors duration-300">
                        {number}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-navy text-base lg:hidden">{title}</h3>
                  </div>
                  <h3 className="hidden lg:block font-display font-bold text-navy text-base mb-2">{title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
