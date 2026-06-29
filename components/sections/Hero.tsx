import Link from "next/link";
import { ArrowRight, Shield, Cpu, BarChart3 } from "lucide-react";
import HeroBackground from "./HeroBackground";

const pillars = [
  { icon: Shield, label: "Public Sector Mandate" },
  { icon: Cpu, label: "Technology Innovation" },
  { icon: BarChart3, label: "Institutional Expertise" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      <HeroBackground />

      <div className="container-wide relative z-10 pt-28 pb-20">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-green-400" />
            <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">
              Joint Venture · Public-Private Partnership
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-bold text-white leading-tight text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Building Digital Public
            <br />
            <span className="text-green-400">Infrastructure</span> for
            <br />
            National Development
          </h1>

          <p className="text-white/75 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
            NASENI Golborn Limited (NGL) accelerates Nigeria&apos;s digital transformation by
            designing, deploying, and sustaining technology solutions that strengthen
            institutions and improve citizen outcomes.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link href="/about" className="btn-primary">
              Discover NGL
              <ArrowRight size={16} />
            </Link>
            <Link href="/solutions" className="btn-secondary">
              Explore Solutions
            </Link>
          </div>

          {/* Pillars */}
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {pillars.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5"
              >
                <Icon size={15} className="text-green-400" />
                <span className="text-white/80 text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
