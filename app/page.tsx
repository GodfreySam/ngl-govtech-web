import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import WhyExists from "@/components/sections/WhyExists";
import VisionMission from "@/components/sections/VisionMission";
import FocusAreas from "@/components/sections/FocusAreas";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import ApproachSection from "@/components/sections/ApproachSection";
import WhyNGL from "@/components/sections/WhyNGL";
import NationalImpact from "@/components/sections/NationalImpact";
import PartnerEcosystem from "@/components/sections/PartnerEcosystem";

export const metadata: Metadata = {
  title: "NASENI Golborn Limited | Digital Public Infrastructure for National Development",
  description:
    "NGL is a strategic Public-Private Partnership accelerating Nigeria's digital transformation by designing, deploying, and sustaining technology solutions for government and public institutions.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnapshot />
      <WhyExists />
      <VisionMission />
      <FocusAreas />
      <SolutionsGrid />
      <ApproachSection />
      <WhyNGL />
      <NationalImpact />
      <PartnerEcosystem />
    </>
  );
}
