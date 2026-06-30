"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface Member {
  name: string;
  title: string;
  affiliation: string;
  initials: string;
  photo?: string;
}

const headerGradients = [
  "from-navy-dark via-navy to-navy-300",
  "from-[#0a2240] via-navy to-navy-400",
  "from-[#052e27] via-green-800 to-green-600",
  "from-navy-dark via-navy to-navy-300",
  "from-[#0a2240] via-navy to-navy-400",
];

function MemberCard({ member, index }: { member: Member; index: number }) {
  const isNaseni = member.affiliation.includes("NASENI");

  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300">

      {/* ── Gradient photo header ── */}
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
          headerGradients[index % headerGradients.length]
        )}
        style={{ height: "220px" }}
      >
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />

        {member.photo ? (
          <div className="relative z-10 w-40 h-40">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-contain"
              sizes="160px"
            />
          </div>
        ) : (
          <span
            className="relative z-10 font-display font-bold text-white/30 select-none leading-none"
            style={{ fontSize: "6rem" }}
          >
            {member.initials}
          </span>
        )}

        {/* Subtle bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display font-bold text-navy text-lg sm:text-xl leading-snug mb-1">
          {member.name}
        </h3>
        <p className="text-green-600 font-semibold text-sm mb-auto pb-5">
          {member.title}
        </p>

        {/* Affiliation */}
        <div className="pt-4 border-t border-slate-100">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-navy/50">
            <span
              className={cn(
                "w-2 h-2 rounded-full shrink-0",
                isNaseni ? "bg-navy-300" : "bg-green-500"
              )}
            />
            {member.affiliation}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function LeadershipCarousel({ members }: { members: Member[] }) {
  return (
    <>
      {/* ── Mobile: horizontal snap carousel ── */}
      <div
        className="md:hidden flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4"
        style={{ scrollbarWidth: "none" } as React.CSSProperties}
      >
        {members.map((member, i) => (
          <div
            key={member.name}
            className="snap-center shrink-0 w-[76vw] max-w-[300px]"
          >
            <MemberCard member={member} index={i} />
          </div>
        ))}
        {/* trailing spacer so last card isn't flush with edge */}
        <div className="shrink-0 w-2" aria-hidden="true" />
      </div>

      {/*
        ── Desktop: CSS grid ──
        Base (md–xl):  4-col grid, each card spans 2 → 2 cards per row.
          5th card: col-start-2 col-span-2  → sits centered in cols 2-3.

        XL (≥1280px):  6-col grid, each card spans 2 → 3 cards per row.
          4th card: col-start-2             → cols 2-3
          5th card: col-start-4             → cols 4-5
          Bottom row reads [·][card4][card5][·] — a centered pair.
      */}
      <div className="hidden md:grid md:grid-cols-4 xl:grid-cols-6 gap-6">
        {members.map((member, i) => {
          const n = members.length;
          const lastRowStart = n % 3 === 0 ? n : n - (n % 3); // first index of last xl-row
          const xlColStart =
            i === lastRowStart     ? "xl:col-start-2" :
            i === lastRowStart + 1 ? "xl:col-start-4" :
            undefined;
          // md centering: last item when count is odd
          const mdColStart =
            i === n - 1 && n % 2 === 1 ? "md:col-start-2" : undefined;

          return (
            <div
              key={member.name}
              className={cn("col-span-2", xlColStart, mdColStart)}
            >
              <MemberCard member={member} index={i} />
            </div>
          );
        })}
      </div>
    </>
  );
}
