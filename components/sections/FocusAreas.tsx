import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Globe2, Landmark, Building2, RefreshCcw, Lightbulb, GraduationCap, BarChart2, MonitorSmartphone,
} from "lucide-react";

const areas = [
  {
    icon: Globe2,
    title: "Digital Public Infrastructure",
    description:
      "Foundational digital systems including identity, payments, and data exchange that underpin a modern state.",
  },
  {
    icon: Landmark,
    title: "Government Technology",
    description:
      "Technology platforms that make government operations more efficient, transparent, and accountable.",
  },
  {
    icon: Building2,
    title: "Enterprise Technology",
    description:
      "ERP, workflow automation, and enterprise systems tailored for large public sector organizations.",
  },
  {
    icon: RefreshCcw,
    title: "Institutional Transformation",
    description:
      "End-to-end change programs combining process redesign, technology, and people transformation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Ecosystems",
    description:
      "Enabling environments for GovTech startups, R&D programs, and digital economy initiatives.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Development",
    description:
      "Training, certification, and knowledge transfer programs that build lasting digital skills.",
  },
  {
    icon: BarChart2,
    title: "Data and Analytics",
    description:
      "Dashboards, data warehouses, and analytics platforms that turn raw data into policy intelligence.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Service Delivery",
    description:
      "Citizen-facing platforms and omnichannel portals that make public services accessible to all.",
  },
];

const badgeColors = [
  "bg-green-50 text-green-600",
  "bg-navy-50 text-navy-400",
];

export default function FocusAreas() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <ScrollReveal className="lg:w-80 shrink-0">
            <SectionHeader
              label="Strategic Focus"
              title="Eight Areas of National Impact"
              subtitle="NGL's work spans the full spectrum of digital public infrastructure, from foundational platforms to citizen-facing services."
            />
          </ScrollReveal>

          <div className="flex-1 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {areas.map(({ icon: Icon, title, description }, i) => (
              <ScrollReveal key={title} delay={i * 75}>
                <div className="card-base p-6 group cursor-default h-full">
                  <div className={`w-11 h-11 rounded-xl ${badgeColors[i % 2]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-navy text-sm mb-2 leading-tight">
                    {title}
                  </h3>
                  <p className="text-slate text-xs leading-relaxed">{description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
