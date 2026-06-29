import { Eye, Compass } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function VisionMission() {
  return (
    <section className="section-pad-sm bg-white">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Vision */}
          <ScrollReveal>
            <div className="relative bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 h-full">
              <div className="w-11 h-11 rounded-2xl bg-navy-50 flex items-center justify-center mb-6">
                <Eye size={20} className="text-navy" />
              </div>
              <div className="text-green-600 text-xs font-semibold uppercase tracking-widest mb-3">Vision</div>
              <h2 className="font-display font-bold text-navy text-2xl sm:text-3xl leading-tight text-balance">
                Nigeria&apos;s Leading Institutional Technology Company
              </h2>
              <p className="text-slate text-sm mt-4 leading-relaxed">
                To become Nigeria&apos;s premier institutional technology and digital public
                infrastructure company, setting the standard for how technology transforms
                government and public life.
              </p>
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal delay={150}>
            <div className="relative bg-white border border-green-200 rounded-3xl p-8 lg:p-10 h-full">
              <div className="w-11 h-11 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
                <Compass size={20} className="text-green-600" />
              </div>
              <div className="text-green-600 text-xs font-semibold uppercase tracking-widest mb-3">Mission</div>
              <h2 className="font-display font-bold text-navy text-2xl sm:text-3xl leading-tight text-balance">
                Design, Deploy, and Sustain Technology for National Development
              </h2>
              <p className="text-slate text-sm mt-4 leading-relaxed">
                To design, deploy, and sustain technology solutions that strengthen institutions,
                improve public services, and accelerate national development, leaving capability
                behind in every engagement.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
