"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    label: "INFRASTRUCTURE",
    description: "Military-grade cloud architecture built for national security.",
  },
  {
    number: "02",
    label: "INTEROPERABILITY",
    description: "Seamless data exchange between state and federal agencies.",
  },
  {
    number: "03",
    label: "CITIZEN FIRST",
    description: "Designed for universal access across all demographics.",
  },
] as const;

export function FeatureGrid() {
  return (
    <section className="w-full max-w-4xl mx-auto px-page pb-section">
      <div className="border-t border-outline-variant/30 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.number}
            className="py-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="ty-label-sm font-bold text-secondary mb-2 tracking-wide">
              {feature.number} — {feature.label}
            </div>
            <p className="ty-label-md text-on-surface-variant leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
