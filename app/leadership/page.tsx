import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import LeadershipCarousel from "@/components/sections/LeadershipCarousel";
import { HeroBgLeadership } from "@/components/sections/HeroBgVariants";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the leadership team driving NASENI Golborn Limited's mission.",
};

const boardMembers = [
  {
    name: "Dr. Olayode Olasupo",
    title: "Board Chairman",
    affiliation: "NASENI Representative",
    initials: "OO",
    photo: "/images/team/olayode-olasupo.png",
  },
  {
    name: "Dr. Kehinde Samuel-Ajakaiye",
    title: "Non-Executive Director",
    affiliation: "NASENI Representative",
    initials: "KA",
    photo: "/images/team/kehinde-samuel-ajakaiye.png",
  },
  {
    name: "Esther Jadaman",
    title: "Managing Director",
    affiliation: "Golborn Representative",
    initials: "EJ",
    photo: "/images/team/esther-jadaman.png",
  },
  {
    name: "Godwin Arigbonu",
    title: "Executive Director",
    affiliation: "Golborn Representative",
    initials: "GA",
    photo: "/images/team/godwin-arigbonu.png",
  },
  {
    name: "Paul Ebiala",
    title: "Non-Executive Director",
    affiliation: "Golborn Representative",
    initials: "PE",
    photo: "/images/team/paul-ebiala.png",
  },
];

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <HeroBgLeadership />
        <div className="container-wide relative z-10">
          <span className="label-tag-white">Leadership</span>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance max-w-3xl mt-2">
            The Team Building Nigeria&apos;s Digital Future
          </h1>
          <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
            NGL is led by a board of seasoned public sector, technology, and governance leaders
            united by a shared commitment to national development.
          </p>
        </div>
      </section>

      {/* Board */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <SectionHeader
              label="Board of Directors"
              title="Leadership Grounded in National Purpose"
              subtitle="Five leaders who bring complementary expertise in technology, governance, law, and national development."
              align="center"
            />
          </div>

          <LeadershipCarousel members={boardMembers} />
        </div>
      </section>

      {/* Advisory note */}
      <section className="section-pad-sm bg-gray-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              label="Advisory Council"
              title="Guided by Nigeria&apos;s Best Minds"
              subtitle="NGL benefits from an advisory council of distinguished Nigerians across technology, public service, development finance, and academia who provide strategic guidance on our mission and programs."
              align="center"
            />
          </div>
        </div>
      </section>
    </>
  );
}
