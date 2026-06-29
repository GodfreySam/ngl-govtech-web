import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Target, Users2, MapPin, Award, BookOpen, Leaf, GraduationCap, BookMarked } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "National Development Focus",
    description:
      "Every solution we design is anchored in Nigeria's long-term development priorities, not short-term project wins.",
  },
  {
    icon: Users2,
    title: "Public-Private Partnership Model",
    description:
      "We combine the mandate of a public institution with the agility and innovation of a private technology company.",
  },
  {
    icon: MapPin,
    title: "Local Context Expertise",
    description:
      "We understand Nigeria's institutional landscape, regulatory environment, and on-the-ground realities.",
  },
  {
    icon: Award,
    title: "Technology Excellence",
    description:
      "Our engineers and architects deliver world-class solutions using globally proven, locally adapted methodologies.",
  },
  {
    icon: BookOpen,
    title: "Institutional Understanding",
    description:
      "We go beyond IT. We understand governance structures, policy cycles, and the human dimensions of change.",
  },
  {
    icon: Leaf,
    title: "Long-Term Sustainability",
    description:
      "We design for longevity. Our solutions are built to grow, evolve, and remain relevant over decades.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    description:
      "We embed knowledge transfer into every engagement so partners gain lasting technical independence.",
  },
  {
    icon: BookMarked,
    title: "Knowledge Transfer",
    description:
      "Structured programs that move expertise from NGL to institutions, building a self-sustaining digital workforce.",
  },
];

export default function WhyNGL() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-14">
            <SectionHeader
              label="Why NGL"
              title="The Differentiators That Matter"
              subtitle="Eight reasons why institutions trust NGL to deliver transformative digital programs."
              align="center"
            />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <ScrollReveal key={title} delay={i * 75}>
              <div className="card-base p-6 group h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 group-hover:bg-green-50/80 transition-colors duration-300 flex items-center justify-center">
                    <Icon size={18} className="text-navy/70 group-hover:text-green transition-colors duration-300" />
                  </div>
                  <span className="font-display font-bold text-navy/20 text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-navy text-sm mb-2">{title}</h3>
                <p className="text-slate text-xs leading-relaxed">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
