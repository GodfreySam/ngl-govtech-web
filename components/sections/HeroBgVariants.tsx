/**
 * Animated SVG hero backgrounds — one variant per page.
 *
 * Home    → HeroBackground.tsx  (circuit grid / data packets)
 * About   → HeroBgAbout         (partnership ripples — concentric rings)
 * Solutions → HeroBgSolutions   (diagonal tech streams)
 * Sectors → HeroBgSectors       (compass arcs — sector slices)
 * Approach → HeroBgApproach     (sequential node path — 5 phases)
 * Leadership → HeroBgLeadership (orbital system)
 * Insights → HeroBgInsights     (constellation — knowledge network)
 * Contact  → HeroBgContact      (signal waves from a source)
 */

const REDUCED = `@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }`;

/* ─── ABOUT — Partnership Ripples ────────────────────────────────────────── */
export function HeroBgAbout() {
  const cx = 380;
  const cy = 310;
  const rings = [60, 130, 210, 300, 400];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes ripple {
          0%   { opacity: 0; }
          20%  { opacity: 0.35; }
          80%  { opacity: 0.18; }
          100% { opacity: 0; }
        }
        .ripple { animation: ripple 4s ease-in-out infinite; }
        ${REDUCED}
      `}</style>
      <svg viewBox="0 0 1200 650" preserveAspectRatio="xMidYMid slice" className="w-full h-full" fill="none">
        {/* Faint dot grid */}
        <g fill="white" opacity="0.06">
          {Array.from({ length: 9 }, (_, c) =>
            Array.from({ length: 6 }, (_, r) => (
              <circle key={`${c}-${r}`} cx={60 + c * 130} cy={55 + r * 110} r="1.5" />
            ))
          )}
        </g>

        {/* Concentric rings — white */}
        {rings.map((r, i) => (
          <circle
            key={r}
            cx={cx} cy={cy} r={r}
            stroke="white" strokeWidth="1"
            className="ripple"
            style={{ animationDelay: `${i * 0.65}s` }}
          />
        ))}

        {/* Teal accent rings at offset phases */}
        {[100, 250].map((r, i) => (
          <circle
            key={`t${r}`}
            cx={cx} cy={cy} r={r}
            stroke="#0D7C6C" strokeWidth="1.5"
            className="ripple"
            style={{ animationDelay: `${0.35 + i * 1.3}s` }}
          />
        ))}

        {/* Radial spokes (faint) */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={angle}
              x1={cx} y1={cy}
              x2={cx + Math.cos(rad) * 420}
              y2={cy + Math.sin(rad) * 420}
              stroke="white" strokeWidth="0.5" opacity="0.05"
            />
          );
        })}

        {/* Centre glow */}
        <circle cx={cx} cy={cy} r="6" fill="white" opacity="0.15" />
        <circle cx={cx} cy={cy} r="3" fill="white" opacity="0.55" />

        {/* Teal corner accent */}
        <radialGradient id="aboutGlow" cx="100%" cy="0%" r="50%">
          <stop offset="0%" stopColor="#0D7C6C" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0D7C6C" stopOpacity="0" />
        </radialGradient>
        <rect x="0" y="0" width="1200" height="650" fill="url(#aboutGlow)" />
      </svg>
    </div>
  );
}

/* ─── SOLUTIONS — Diagonal Tech Streams ──────────────────────────────────── */
export function HeroBgSolutions() {
  // Diagonal rails from bottom-left toward top-right
  const rails = [
    { x1: -100, y1: 650, x2: 600,  y2: -50,  dur: "3.8s", delay: "0s"   },
    { x1: 0,    y1: 650, x2: 700,  y2: -50,  dur: "4.5s", delay: "0.7s" },
    { x1: 150,  y1: 650, x2: 850,  y2: -50,  dur: "3.2s", delay: "1.4s" },
    { x1: 350,  y1: 650, x2: 1050, y2: -50,  dur: "5.0s", delay: "0.3s" },
    { x1: 550,  y1: 650, x2: 1250, y2: -50,  dur: "4.2s", delay: "1.1s" },
    { x1: 700,  y1: 650, x2: 1400, y2: -50,  dur: "3.6s", delay: "2.0s" },
    { x1: 900,  y1: 650, x2: 1600, y2: -50,  dur: "4.8s", delay: "0.5s" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes stream {
          0%   { stroke-dashoffset: 400; opacity: 0; }
          10%  { opacity: 0.6; }
          90%  { opacity: 0.6; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes pkt-diag {
          0%   { transform: translate(0,0); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)); opacity: 0; }
        }
        .stream-line { stroke-dasharray: 60 340; animation: stream var(--dur,4s) var(--delay,0s) infinite linear; }
        .pkt-d       { animation: pkt-diag var(--dur,4s) var(--delay,0s) infinite linear; }
        ${REDUCED}
      `}</style>
      <svg viewBox="0 0 1200 650" preserveAspectRatio="xMidYMid slice" className="w-full h-full" fill="none">
        {/* Rail lines */}
        {rails.map((r, i) => (
          <line
            key={i}
            x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
            stroke="white" strokeWidth="0.75" opacity="0.07"
          />
        ))}

        {/* Animated streams */}
        {rails.map((r, i) => (
          <line
            key={`s${i}`}
            x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
            stroke={i % 3 === 0 ? "#0D7C6C" : "white"} strokeWidth="1.5"
            className="stream-line"
            style={{ "--dur": r.dur, "--delay": r.delay } as React.CSSProperties}
          />
        ))}

        {/* Data packets travelling diagonally */}
        {[
          { x: 200, y: 500, dx: "400px", dy: "-430px", dur: "3.8s", delay: "0.2s" },
          { x: 500, y: 550, dx: "350px", dy: "-375px", dur: "4.5s", delay: "1.0s" },
          { x: 800, y: 480, dx: "280px", dy: "-300px", dur: "3.2s", delay: "0.6s" },
        ].map((p, i) => (
          <rect
            key={i}
            x={p.x} y={p.y} width="7" height="3" rx="1.5"
            fill="white" opacity="0.8"
            className="pkt-d"
            style={{ "--dx": p.dx, "--dy": p.dy, "--dur": p.dur, "--delay": p.delay } as React.CSSProperties}
          />
        ))}

        {/* Faint grid bg */}
        <g stroke="white" strokeWidth="0.5" opacity="0.04">
          {Array.from({ length: 8 }, (_, i) => (
            <line key={`gv${i}`} x1={150 * i} y1={0} x2={150 * i} y2={650} />
          ))}
          {Array.from({ length: 5 }, (_, i) => (
            <line key={`gh${i}`} x1={0} y1={130 * i} x2={1200} y2={130 * i} />
          ))}
        </g>

        <radialGradient id="solGlow" cx="0%" cy="100%" r="55%">
          <stop offset="0%" stopColor="#0D7C6C" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0D7C6C" stopOpacity="0" />
        </radialGradient>
        <rect x="0" y="0" width="1200" height="650" fill="url(#solGlow)" />
      </svg>
    </div>
  );
}

/* ─── SECTORS — Compass Arcs ─────────────────────────────────────────────── */
export function HeroBgSectors() {
  const cx = 600;
  const cy = 325;
  // 6 sector arcs — each covers 60° with a small gap
  const sectors = Array.from({ length: 6 }, (_, i) => {
    const startDeg = i * 60 + 5;
    const endDeg   = i * 60 + 55;
    const r        = 180 + i * 40; // different radii for depth
    const toRad    = (d: number) => (d * Math.PI) / 180;
    const x1 = cx + r * Math.cos(toRad(startDeg));
    const y1 = cy + r * Math.sin(toRad(startDeg));
    const x2 = cx + r * Math.cos(toRad(endDeg));
    const y2 = cy + r * Math.sin(toRad(endDeg));
    return { x1, y1, x2, y2, r, delay: `${i * 0.5}s` };
  });

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes arc-glow {
          0%, 100% { opacity: 0.06; stroke-width: 1; }
          50%       { opacity: 0.28; stroke-width: 2; }
        }
        .arc-s { animation: arc-glow 3.5s ease-in-out infinite; }
        @keyframes spoke-fade {
          0%, 100% { opacity: 0.04; }
          50%       { opacity: 0.12; }
        }
        .spoke { animation: spoke-fade 5s ease-in-out infinite; }
        ${REDUCED}
      `}</style>
      <svg viewBox="0 0 1200 650" preserveAspectRatio="xMidYMid slice" className="w-full h-full" fill="none">

        {/* Faint full circles at each radius */}
        {sectors.map(({ r, delay }, i) => (
          <circle key={i} cx={cx} cy={cy} r={r}
            stroke="white" strokeWidth="0.5" opacity="0.05" />
        ))}

        {/* Sector arcs */}
        {sectors.map(({ x1, y1, x2, y2, r, delay }, i) => (
          <path
            key={i}
            d={`M ${x1} ${y1} A ${r} ${r} 0 0,1 ${x2} ${y2}`}
            stroke={i % 2 === 0 ? "white" : "#0D7C6C"}
            strokeLinecap="round"
            className="arc-s"
            style={{ animationDelay: delay }}
          />
        ))}

        {/* Spokes */}
        {Array.from({ length: 6 }, (_, i) => {
          const angle = (i * 60 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={cx} y1={cy}
              x2={cx + Math.cos(angle) * 450}
              y2={cy + Math.sin(angle) * 450}
              stroke="white"
              className="spoke"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          );
        })}

        {/* Inner rings */}
        {[40, 80, 130].map((r, i) => (
          <circle key={i} cx={cx} cy={cy} r={r}
            stroke="white" strokeWidth="0.5" opacity="0.08" strokeDasharray="4 8" />
        ))}

        {/* Centre */}
        <circle cx={cx} cy={cy} r="4" fill="#0D7C6C" opacity="0.6" />
        <circle cx={cx} cy={cy} r="10" fill="#0D7C6C" opacity="0.1" />

        <radialGradient id="secGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#0D7C6C" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0D7C6C" stopOpacity="0" />
        </radialGradient>
        <rect x="0" y="0" width="1200" height="650" fill="url(#secGlow)" />
      </svg>
    </div>
  );
}

/* ─── APPROACH — Sequential Phase Path ───────────────────────────────────── */
export function HeroBgApproach() {
  // 5 nodes spread across the canvas
  const nodes = [
    { cx: 160,  cy: 320 },
    { cx: 380,  cy: 200 },
    { cx: 600,  cy: 360 },
    { cx: 820,  cy: 190 },
    { cx: 1040, cy: 330 },
  ];

  // SVG cubic bezier path through the nodes
  const path = `M ${nodes[0].cx},${nodes[0].cy}
    C ${nodes[0].cx + 80},${nodes[0].cy}
      ${nodes[1].cx - 80},${nodes[1].cy}
      ${nodes[1].cx},${nodes[1].cy}
    C ${nodes[1].cx + 80},${nodes[1].cy}
      ${nodes[2].cx - 80},${nodes[2].cy}
      ${nodes[2].cx},${nodes[2].cy}
    C ${nodes[2].cx + 80},${nodes[2].cy}
      ${nodes[3].cx - 80},${nodes[3].cy}
      ${nodes[3].cx},${nodes[3].cy}
    C ${nodes[3].cx + 80},${nodes[3].cy}
      ${nodes[4].cx - 80},${nodes[4].cy}
      ${nodes[4].cx},${nodes[4].cy}`;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes draw-path {
          0%   { stroke-dashoffset: 1400; opacity: 0.1; }
          20%  { opacity: 0.45; }
          80%  { opacity: 0.45; }
          100% { stroke-dashoffset: 0;    opacity: 0.1; }
        }
        @keyframes node-seq {
          0%, 15%, 100% { opacity: 0.15; r: 8; }
          30%, 70%      { opacity: 0.7;  r: 14; }
          85%           { opacity: 0.15; r: 8; }
        }
        @keyframes node-ring-seq {
          0%   { r: 14; opacity: 0.4; }
          100% { r: 40; opacity: 0; }
        }
        .path-draw { stroke-dasharray: 1400; animation: draw-path 6s ease-in-out infinite; }
        .node-seq  { animation: node-seq 6s ease-in-out infinite; }
        .node-ring-seq { animation: node-ring-seq 6s ease-out infinite; }
        ${REDUCED}
      `}</style>
      <svg viewBox="0 0 1200 650" preserveAspectRatio="xMidYMid slice" className="w-full h-full" fill="none">

        {/* Faint background grid */}
        <g stroke="white" strokeWidth="0.5" opacity="0.04">
          {Array.from({ length: 7 }, (_, i) => (
            <line key={`v${i}`} x1={170 * i} y1={0} x2={170 * i} y2={650} />
          ))}
          {Array.from({ length: 5 }, (_, i) => (
            <line key={`h${i}`} x1={0} y1={130 * i} x2={1200} y2={130 * i} />
          ))}
        </g>

        {/* Static faint path */}
        <path d={path} stroke="white" strokeWidth="1" opacity="0.08" />

        {/* Animated drawing path */}
        <path d={path} stroke="#0D7C6C" strokeWidth="2" className="path-draw" />

        {/* Node rings (behind nodes) */}
        {nodes.map(({ cx, cy }, i) => (
          <circle key={`nr${i}`} cx={cx} cy={cy} r="14" fill="none"
            stroke="white" strokeWidth="1"
            className="node-ring-seq"
            style={{ animationDelay: `${i * 1.0}s` }}
          />
        ))}

        {/* Nodes */}
        {nodes.map(({ cx, cy }, i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="8" fill="white"
              className="node-seq"
              style={{ animationDelay: `${i * 1.0}s` }}
            />
            <circle cx={cx} cy={cy} r="3" fill="#0D7C6C" opacity="0.9" />
          </g>
        ))}

        {/* Vertical drop lines from nodes */}
        {nodes.map(({ cx, cy }, i) => (
          <line key={`d${i}`}
            x1={cx} y1={cy + 16}
            x2={cx} y2={620}
            stroke="white" strokeWidth="0.5" opacity="0.05"
            strokeDasharray="3 6"
          />
        ))}

        <radialGradient id="appGlow" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#0D7C6C" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0D7C6C" stopOpacity="0" />
        </radialGradient>
        <rect x="0" y="0" width="1200" height="650" fill="url(#appGlow)" />
      </svg>
    </div>
  );
}

/* ─── LEADERSHIP — Orbital System ────────────────────────────────────────── */
export function HeroBgLeadership() {
  const cx = 580;
  const cy = 310;

  const orbits = [
    { rx: 220, ry: 70,  tilt: -15, dur: "8s",  dotColor: "white" },
    { rx: 310, ry: 100, tilt: 25,  dur: "12s", dotColor: "#0D7C6C" },
    { rx: 150, ry: 140, tilt: 60,  dur: "6s",  dotColor: "white" },
    { rx: 380, ry: 60,  tilt: -5,  dur: "16s", dotColor: "white" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.1; }
          50%       { opacity: 0.5; }
        }
        @keyframes centre-pulse {
          0%, 100% { r: 6;  opacity: 0.7; }
          50%       { r: 10; opacity: 0.4; }
        }
        .orbit-group { animation: orbit-spin linear infinite; }
        .star-t { animation: star-twinkle ease-in-out infinite; }
        .centre-p { animation: centre-pulse 3s ease-in-out infinite; }
        ${REDUCED}
      `}</style>
      <svg viewBox="0 0 1200 650" preserveAspectRatio="xMidYMid slice" className="w-full h-full" fill="none">

        {/* Background stars */}
        {Array.from({ length: 30 }, (_, i) => {
          const x = 80 + ((i * 137) % 1040);
          const y = 40 + ((i * 89)  % 570);
          const d = `${(i * 0.7) % 2.5}s`;
          return (
            <circle key={i} cx={x} cy={y} r="1" fill="white"
              className="star-t"
              style={{ animationDelay: d, animationDuration: `${2 + (i % 3)}s` }}
            />
          );
        })}

        {/* Orbit ellipses (static, faint) */}
        {orbits.map(({ rx, ry, tilt }, i) => (
          <ellipse key={i}
            cx={cx} cy={cy} rx={rx} ry={ry}
            stroke="white" strokeWidth="0.5" opacity="0.08"
            transform={`rotate(${tilt}, ${cx}, ${cy})`}
          />
        ))}

        {/* Orbiting dots — CSS rotation on a group */}
        {orbits.map(({ rx, ry, tilt, dur, dotColor }, i) => (
          <g key={i}
            style={{
              transformOrigin: `${cx}px ${cy}px`,
              animation: `orbit-spin ${dur} linear infinite`,
              animationDelay: `${-i * 2}s`,
            }}
          >
            {/* Ellipse squash: offset the dot then apply rotate+scale */}
            <g transform={`rotate(${tilt}, ${cx}, ${cy})`}>
              <circle cx={cx + rx} cy={cy} r="4" fill={dotColor} opacity="0.85" />
              {/* Trailing glow */}
              <circle cx={cx + rx} cy={cy} r="8" fill={dotColor} opacity="0.12" />
            </g>
          </g>
        ))}

        {/* Central star */}
        <circle cx={cx} cy={cy} r="18" fill="white" opacity="0.04" />
        <circle cx={cx} cy={cy} r="6"  fill="white" className="centre-p" />
        <circle cx={cx} cy={cy} r="2"  fill="#0D7C6C" opacity="0.9" />

        <radialGradient id="leadGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0B1D3E" stopOpacity="0" />
          <stop offset="80%" stopColor="#0D7C6C" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#0D7C6C" stopOpacity="0.12" />
        </radialGradient>
        <rect x="0" y="0" width="1200" height="650" fill="url(#leadGlow)" />
      </svg>
    </div>
  );
}

/* ─── INSIGHTS — Knowledge Constellation ─────────────────────────────────── */
export function HeroBgInsights() {
  const stars = [
    { x: 120, y: 180 }, { x: 280, y: 95  }, { x: 430, y: 220 },
    { x: 310, y: 350 }, { x: 550, y: 130 }, { x: 680, y: 280 },
    { x: 820, y: 100 }, { x: 760, y: 380 }, { x: 950, y: 220 },
    { x: 1050,y: 380 }, { x: 180, y: 460 }, { x: 480, y: 450 },
    { x: 640, y: 520 }, { x: 890, y: 480 }, { x: 1100,y: 150 },
    { x: 360, y: 560 }, { x: 700, y: 160 }, { x: 1000,y: 550 },
  ];

  const edges = [
    [0,1],[1,2],[2,3],[1,4],[4,5],[5,6],[6,8],[5,7],[7,9],
    [3,11],[10,3],[11,12],[8,14],[8,9],[4,16],[12,13],[9,13],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.12; r: 2; }
          50%       { opacity: 0.65; r: 4; }
        }
        @keyframes edge-pulse {
          0%, 100% { opacity: 0.04; }
          50%       { opacity: 0.14; }
        }
        .star { animation: twinkle ease-in-out infinite; }
        .edge { animation: edge-pulse ease-in-out infinite; }
        ${REDUCED}
      `}</style>
      <svg viewBox="0 0 1200 650" preserveAspectRatio="xMidYMid slice" className="w-full h-full" fill="none">

        {/* Constellation edges */}
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={stars[a].x} y1={stars[a].y}
            x2={stars[b].x} y2={stars[b].y}
            stroke="white"
            className="edge"
            style={{ animationDelay: `${(i * 0.4) % 3}s`, animationDuration: `${3 + (i % 2)}s` }}
          />
        ))}

        {/* Stars */}
        {stars.map(({ x, y }, i) => {
          const isTeal = [1, 5, 8, 14].includes(i);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="2" fill={isTeal ? "#0D7C6C" : "white"}
                className="star"
                style={{
                  animationDelay: `${(i * 0.37) % 2.5}s`,
                  animationDuration: `${2.5 + (i % 3) * 0.7}s`,
                }}
              />
              {/* Glow halo on accent stars */}
              {isTeal && (
                <circle cx={x} cy={y} r="10" fill="#0D7C6C" opacity="0.08" />
              )}
            </g>
          );
        })}

        {/* Subtle horizontal lines (text document feel) */}
        {Array.from({ length: 4 }, (_, i) => (
          <line key={i}
            x1={900} y1={120 + i * 80}
            x2={1160} y2={120 + i * 80}
            stroke="white" strokeWidth="0.5" opacity="0.06"
            strokeDasharray={`${60 - i * 10} 30`}
          />
        ))}

        <radialGradient id="insGlow" cx="75%" cy="0%" r="50%">
          <stop offset="0%" stopColor="#0D7C6C" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0D7C6C" stopOpacity="0" />
        </radialGradient>
        <rect x="0" y="0" width="1200" height="650" fill="url(#insGlow)" />
      </svg>
    </div>
  );
}

/* ─── CONTACT — Signal Waves ─────────────────────────────────────────────── */
export function HeroBgContact() {
  // Source point bottom-right area
  const sx = 950;
  const sy = 500;
  const waveRadii = [60, 130, 210, 300, 400, 510];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes wave-out {
          0%   { opacity: 0; }
          15%  { opacity: 0.3; }
          85%  { opacity: 0.1; }
          100% { opacity: 0; }
        }
        @keyframes source-beat {
          0%, 100% { r: 5;  opacity: 0.8; }
          50%       { r: 9;  opacity: 0.4; }
        }
        .wave   { animation: wave-out 4s ease-out infinite; }
        .source { animation: source-beat 2s ease-in-out infinite; }
        ${REDUCED}
      `}</style>
      <svg viewBox="0 0 1200 650" preserveAspectRatio="xMidYMid slice" className="w-full h-full" fill="none">

        {/* Faint dot grid */}
        <g fill="white" opacity="0.05">
          {Array.from({ length: 9 }, (_, c) =>
            Array.from({ length: 6 }, (_, r) => (
              <circle key={`${c}-${r}`} cx={70 + c * 130} cy={55 + r * 110} r="1.5" />
            ))
          )}
        </g>

        {/* Wave rings — white */}
        {waveRadii.map((r, i) => (
          <circle
            key={r}
            cx={sx} cy={sy} r={r}
            stroke="white" strokeWidth="1"
            className="wave"
            style={{ animationDelay: `${i * 0.55}s` }}
          />
        ))}

        {/* Teal accent waves */}
        {[90, 230, 380].map((r, i) => (
          <circle
            key={`t${r}`}
            cx={sx} cy={sy} r={r}
            stroke="#0D7C6C" strokeWidth="1.5"
            className="wave"
            style={{ animationDelay: `${0.25 + i * 1.1}s` }}
          />
        ))}

        {/* Second source point (upper left) */}
        {[50, 110, 180].map((r, i) => (
          <circle
            key={`s2-${r}`}
            cx={250} cy={160} r={r}
            stroke="white" strokeWidth="0.5"
            className="wave"
            style={{ animationDelay: `${1.5 + i * 0.7}s`, opacity: 0.5 }}
          />
        ))}

        {/* Source dots */}
        <circle cx={sx} cy={sy} r="5" fill="white" className="source" />
        <circle cx={sx} cy={sy} r="12" fill="white" opacity="0.08" />
        <circle cx={250} cy={160} r="3" fill="#0D7C6C" opacity="0.6" />
        <circle cx={250} cy={160} r="8" fill="#0D7C6C" opacity="0.08" />

        {/* Connecting line between sources */}
        <line x1={250} y1={160} x2={sx} y2={sy}
          stroke="white" strokeWidth="0.5" opacity="0.05"
          strokeDasharray="8 14" />

        <radialGradient id="ctcGlow" cx="85%" cy="85%" r="55%">
          <stop offset="0%" stopColor="#0D7C6C" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0D7C6C" stopOpacity="0" />
        </radialGradient>
        <rect x="0" y="0" width="1200" height="650" fill="url(#ctcGlow)" />
      </svg>
    </div>
  );
}
