"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0  },
};

const stagger = {
  show: { transition: { staggerChildren: 0.13 } },
};

const ease = [0.2, 0.8, 0.2, 1] as const;

export function Hero() {
  const [email, setEmail]         = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="w-full flex flex-col items-center px-page pt-16 pb-8">
      <motion.div
        className="w-full max-w-4xl text-center"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        {/* Logo */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease }}
          className="mb-10"
        >
          <Image
            src="/ngl-logo-naseni.jpeg"
            alt="NGL – a NASENI company"
            width={780}
            height={264}
            className="h-48 w-auto object-contain mx-auto"
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.8, ease }}
          className="ty-display text-primary mb-6"
        >
          The Future of Governance is Loading.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.8, ease }}
          className="ty-body-lg text-on-surface-variant w-full max-w-[36rem] mx-auto mb-10"
        >
          NGL (a NASENI company) is building the next generation of secure,
          efficient, and accessible government technology infrastructure.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease }}
          className="w-full max-w-[32rem] mx-auto"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center gap-3 p-5 rounded-xl bg-secondary/10 border border-secondary/20"
            >
              <ShieldCheck size={18} className="text-secondary shrink-0" />
              <span className="ty-label-md text-secondary">
                Access requested — we&apos;ll be in touch.
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1 min-w-0">
                <Input
                  type="email"
                  placeholder="Government email address"
                  aria-label="Enter your government email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="shrink-0 sm:w-auto w-full">
                Get Early Access
              </Button>
            </form>
          )}

          {/* Trust badge */}
          <div className="flex items-center justify-center gap-1.5 mt-4 text-on-surface-variant/60">
            <ShieldCheck size={14} strokeWidth={1.5} />
            <span className="ty-label-sm">Secure &amp; Private</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
