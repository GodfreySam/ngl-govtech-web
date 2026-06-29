import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Landmark, Globe, Cpu, BookOpen, Lightbulb, Briefcase } from "lucide-react";

const partners = [
  { icon: Landmark, label: "Government Institutions", description: "Federal and state agencies, MDAs" },
  { icon: Globe, label: "Development Partners", description: "Multilateral organizations and donors" },
  { icon: Cpu, label: "Technology Partners", description: "Global and local technology companies" },
  { icon: BookOpen, label: "Academia", description: "Universities and research institutions" },
  { icon: Lightbulb, label: "Innovation Ecosystems", description: "Tech hubs, incubators, startups" },
  { icon: Briefcase, label: "Private Sector", description: "Local and international businesses" },
];

export default function PartnerEcosystem() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-14">
            <SectionHeader
              label="Partnership Ecosystem"
              title="Stronger Together"
              subtitle="NGL operates within a rich ecosystem of partners committed to Nigeria's digital development."
              align="center"
            />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map(({ icon: Icon, label, description }, i) => (
            <ScrollReveal key={label} delay={i * 75}>
              <div className="flex items-start gap-4 bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-card transition-all duration-300 group h-full">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-green-50 group-hover:border-green-200 transition-all duration-300">
                  <Icon size={18} className="text-slate group-hover:text-green-600 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-navy text-sm mb-1">{label}</h3>
                  <p className="text-slate text-xs leading-relaxed">{description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
