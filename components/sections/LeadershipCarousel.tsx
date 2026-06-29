"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface Member {
  name: string;
  title: string;
  affiliation: string;
  initials: string;
  photo?: string;
}

const avatarColors = [
  "from-navy to-navy-300",
  "from-green-700 to-green-500",
];

export default function LeadershipCarousel({ members }: { members: Member[] }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => setIdx(i => (i - 1 + members.length) % members.length), [members.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % members.length), [members.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [paused, next]);

  const member = members[idx];
  const color = avatarColors[idx % avatarColors.length];

  return (
    <div
      aria-roledescription="carousel"
      aria-label="Board of Directors"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >

      {/* Card */}
      <div className="grid md:grid-cols-2 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">

        {/* Left — photo */}
        <div className={cn(
          "relative flex flex-col items-center justify-center min-h-[320px] md:min-h-[480px] overflow-hidden bg-gradient-to-br",
          color
        )}>
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />

          {member.photo ? (
            <div className="relative z-10 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="360px"
                priority={idx === 0}
              />
            </div>
          ) : (
            <span
              className="relative z-10 font-display font-bold text-white select-none"
              style={{ fontSize: "clamp(5rem, 14vw, 10rem)", lineHeight: 1, opacity: 0.75 }}
            >
              {member.initials}
            </span>
          )}

          {/* Counter */}
          <div className="absolute bottom-6 left-6 flex items-center gap-1.5 z-10">
            <span className="text-white/80 font-mono text-xs tabular-nums drop-shadow">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span className="text-white/40 text-xs">/</span>
            <span className="text-white/50 font-mono text-xs tabular-nums drop-shadow">
              {String(members.length).padStart(2, "0")}
            </span>
          </div>

          {/* Affiliation badge */}
          {member.affiliation && (
            <div className="absolute top-5 right-5 z-10">
              <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold px-3 py-1 rounded-full border border-white/30 tracking-wide">
                {member.affiliation}
              </span>
            </div>
          )}

          {/* Pause indicator */}
          {paused && (
            <div className="absolute bottom-6 right-6 z-10">
              <Pause size={14} className="text-white/50" />
            </div>
          )}
        </div>

        {/* Right — name & title */}
        <div className="bg-white px-10 py-14 lg:px-16 lg:py-20 flex flex-col justify-center">
          <span className="label-tag mb-8">Board of Directors</span>

          <h3 className="font-display font-bold text-navy text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4">
            {member.name}
          </h3>

          <p className="text-green font-semibold text-base tracking-wide mb-8">
            {member.title}
          </p>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-green" />
            <span className="text-xs font-medium text-navy/60 tracking-wide">{member.affiliation}</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6 px-1">
        <button
          type="button"
          onClick={() => { setPaused(true); prev(); }}
          aria-label="Previous member"
          className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-navy/50 hover:border-navy hover:text-navy hover:bg-navy/5 transition-all"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dots + play/pause toggle */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            {members.map((m, i) => (
              <button
                key={m.name}
                type="button"
                aria-label={m.name}
                onClick={() => { setPaused(true); setIdx(i); }}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === idx
                    ? "w-8 h-2.5 bg-green"
                    : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPaused(p => !p)}
            aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-navy/40 hover:border-navy hover:text-navy hover:bg-navy/5 transition-all"
          >
            {paused ? <Play size={13} /> : <Pause size={13} />}
          </button>
        </div>

        <button
          type="button"
          onClick={() => { setPaused(true); next(); }}
          aria-label="Next member"
          className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-navy/50 hover:border-navy hover:text-navy hover:bg-navy/5 transition-all"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
