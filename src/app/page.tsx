import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col items-center">
        <Hero />
        <FeatureGrid />
      </main>
      <Footer />
    </>
  );
}
