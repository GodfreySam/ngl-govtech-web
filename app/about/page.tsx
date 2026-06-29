import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import VisionMission from "@/components/sections/VisionMission";
import PartnerEcosystem from "@/components/sections/PartnerEcosystem";
import { HeroBgAbout } from "@/components/sections/HeroBgVariants";

export const metadata: Metadata = {
  title: "About NGL",
  description:
    "Learn about NASENI Golborn Limited, a strategic Public-Private Partnership accelerating digital transformation across Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <HeroBgAbout />
        <div className="container-wide relative z-10">
          <span className="label-tag-white">About NGL</span>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance max-w-3xl mt-2">
            Who We Are and Why We Exist
          </h1>
          <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
            NASENI Golborn Limited (NGL) is a strategic Public-Private Partnership established to
            accelerate digital transformation, institutional modernization, and technology-enabled
            public service delivery across Nigeria.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section className="section-pad bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-start">
          <SectionHeader
            label="Our Story"
            title="The Partnership That Nigeria Needed"
            subtitle="NGL was formed at the intersection of national mandate and private sector innovation, combining the credibility and reach of a public institution with the technology expertise and delivery agility of a world-class technology company."
          />
          <div className="space-y-5 text-slate text-sm leading-relaxed">
            <p>
              Nigeria&apos;s public institutions have long faced a paradox: significant technology
              ambition with limited execution capacity. International vendors deliver global
              solutions that don&apos;t fit local context. Local vendors lack the scale and depth
              to execute at national level. NGL was created to bridge that gap.
            </p>
            <p>
              As a joint venture rooted in the NASENI mandate to develop national science,
              engineering, and technology capacity, NGL carries institutional authority that
              opens doors across the public sector. Combined with Golborn&apos;s technology
              implementation expertise, this creates a partnership uniquely equipped to deliver
              digital transformation at scale.
            </p>
            <p>
              We are not a typical technology vendor. We are a long-term development partner,
              investing in the success of every institution we serve and measuring our impact
              in improved citizen outcomes, not just deployed systems.
            </p>
          </div>
        </div>
      </section>

      {/* The NGL model */}
      <section className="section-pad bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-14">
            <SectionHeader
              label="The NGL Model"
              title="Public Purpose + Private Innovation"
              subtitle="The combination of two distinct strengths creates something neither could achieve alone."
              align="center"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Public Sector Strength",
                color: "border-navy bg-navy text-white",
                items: [
                  "National priorities alignment",
                  "Institutional access and credibility",
                  "Policy and regulatory alignment",
                  "National scale reach",
                  "Long-term sustainability mandate",
                ],
              },
              {
                title: "Private Sector Strength",
                color: "border-green bg-green text-white",
                items: [
                  "Technology expertise and depth",
                  "Innovation and R&D capacity",
                  "Delivery capability and speed",
                  "Operational agility",
                  "Execution discipline",
                ],
              },
            ].map(({ title, color, items }) => (
              <div key={title} className={`rounded-3xl p-8 ${color}`}>
                <h3 className="font-display font-bold text-xl mb-6">{title}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm opacity-90">
                      <CheckCircle2 size={15} className="shrink-0 opacity-70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VisionMission />

      <PartnerEcosystem />

      {/* CTA */}
      <section className="section-pad-sm bg-white">
        <div className="container-wide text-center">
          <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-slate text-base mb-8 max-w-xl mx-auto">
            Whether you&apos;re a government institution, development partner, or technology
            company. We&apos;d love to explore how NGL can help.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
