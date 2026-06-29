export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes packet-h {
          0%   { transform: translateX(0); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(var(--len)); opacity: 0; }
        }
        @keyframes packet-v {
          0%   { transform: translateY(0); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(var(--len)); opacity: 0; }
        }
        @keyframes node-pulse {
          0%, 100% { opacity: 0.25; r: 4; }
          50%       { opacity: 0.8;  r: 6; }
        }
        @keyframes node-ring {
          0%   { opacity: 0.5; r: 6; }
          100% { opacity: 0; r: 18; }
        }
        .packet-h { animation: packet-h var(--dur, 4s) var(--delay, 0s) infinite linear; }
        .packet-v { animation: packet-v var(--dur, 4s) var(--delay, 0s) infinite linear; }
        .pulse-node { animation: node-pulse 2.5s ease-in-out infinite; }
        .ring-node  { animation: node-ring 2.5s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .packet-h, .packet-v, .pulse-node, .ring-node { animation: none; }
        }
      `}</style>

      <svg
        viewBox="0 0 1200 650"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Dot grid (10 × 7) ─────────────────────────────── */}
        <g fill="white" opacity="0.10">
          {Array.from({ length: 10 }, (_, col) =>
            Array.from({ length: 7 }, (_, row) => (
              <circle
                key={`dot-${col}-${row}`}
                cx={80 + col * 120}
                cy={65 + row * 90}
                r={2}
              />
            ))
          )}
        </g>

        {/* ── Wire segments ─────────────────────────────────── */}
        <g stroke="white" strokeWidth="1" opacity="0.08">
          {/* Horizontals */}
          <line x1="80"  y1="65"  x2="440" y2="65" />
          <line x1="320" y1="155" x2="800" y2="155" />
          <line x1="200" y1="245" x2="680" y2="245" />
          <line x1="440" y1="335" x2="1040" y2="335" />
          <line x1="80"  y1="425" x2="560" y2="425" />
          <line x1="560" y1="515" x2="1040" y2="515" />
          <line x1="680" y1="605" x2="1160" y2="605" />
          {/* Verticals */}
          <line x1="200" y1="65"  x2="200" y2="425" />
          <line x1="440" y1="155" x2="440" y2="515" />
          <line x1="680" y1="65"  x2="680" y2="335" />
          <line x1="920" y1="155" x2="920" y2="605" />
          <line x1="560" y1="245" x2="560" y2="605" />
          <line x1="800" y1="335" x2="800" y2="515" />
        </g>

        {/* ── Animated data packets (horizontal) ───────────── */}
        {/* packet rect: width=8, height=3 */}
        <g fill="white">
          {/* H1: x=80→440, y=65, len=360 */}
          <rect
            className="packet-h"
            style={{ "--len": "360px", "--dur": "3.8s", "--delay": "0s" } as React.CSSProperties}
            x="80" y="63.5" width="8" height="3" rx="1.5" opacity="0.7"
          />
          {/* H2: x=320→800, y=155, len=480 */}
          <rect
            className="packet-h"
            style={{ "--len": "480px", "--dur": "4.5s", "--delay": "1.2s" } as React.CSSProperties}
            x="320" y="153.5" width="8" height="3" rx="1.5" opacity="0.7"
          />
          {/* H3: x=200→680, y=245, len=480 */}
          <rect
            className="packet-h"
            style={{ "--len": "480px", "--dur": "5.0s", "--delay": "0.6s" } as React.CSSProperties}
            x="200" y="243.5" width="8" height="3" rx="1.5" opacity="0.7"
          />
          {/* H4: x=440→1040, y=335, len=600 */}
          <rect
            className="packet-h"
            style={{ "--len": "600px", "--dur": "5.5s", "--delay": "2.0s" } as React.CSSProperties}
            x="440" y="333.5" width="8" height="3" rx="1.5" opacity="0.7"
          />
          {/* H5: x=560→1040, y=515, len=480 */}
          <rect
            className="packet-h"
            style={{ "--len": "480px", "--dur": "4.2s", "--delay": "0.9s" } as React.CSSProperties}
            x="560" y="513.5" width="8" height="3" rx="1.5" opacity="0.7"
          />
        </g>

        {/* ── Animated data packets (vertical) ─────────────── */}
        <g fill="white">
          {/* V1: x=200, y=65→425, len=360 */}
          <rect
            className="packet-v"
            style={{ "--len": "360px", "--dur": "4.8s", "--delay": "0.4s" } as React.CSSProperties}
            x="198.5" y="65" width="3" height="8" rx="1.5" opacity="0.7"
          />
          {/* V2: x=440, y=155→515, len=360 */}
          <rect
            className="packet-v"
            style={{ "--len": "360px", "--dur": "4.0s", "--delay": "1.8s" } as React.CSSProperties}
            x="438.5" y="155" width="3" height="8" rx="1.5" opacity="0.7"
          />
          {/* V3: x=920, y=155→605, len=450 */}
          <rect
            className="packet-v"
            style={{ "--len": "450px", "--dur": "5.2s", "--delay": "0.2s" } as React.CSSProperties}
            x="918.5" y="155" width="3" height="8" rx="1.5" opacity="0.7"
          />
          {/* V4: x=560, y=245→605, len=360 */}
          <rect
            className="packet-v"
            style={{ "--len": "360px", "--dur": "3.6s", "--delay": "2.5s" } as React.CSSProperties}
            x="558.5" y="245" width="3" height="8" rx="1.5" opacity="0.7"
          />
        </g>

        {/* ── Pulsing active nodes ───────────────────────────── */}
        <g fill="white">
          {/* Node 1: intersection (200, 155) */}
          <circle className="pulse-node" cx="200" cy="155" r="4"
            style={{ animationDelay: "0s" }} />
          <circle className="ring-node" cx="200" cy="155" r="4" fill="none" stroke="white" strokeWidth="1"
            style={{ animationDelay: "0s" }} />

          {/* Node 2: intersection (440, 335) */}
          <circle className="pulse-node" cx="440" cy="335" r="4"
            style={{ animationDelay: "0.9s" }} />
          <circle className="ring-node" cx="440" cy="335" r="4" fill="none" stroke="white" strokeWidth="1"
            style={{ animationDelay: "0.9s" }} />

          {/* Node 3: intersection (680, 155) */}
          <circle className="pulse-node" cx="680" cy="155" r="4"
            style={{ animationDelay: "1.8s" }} />
          <circle className="ring-node" cx="680" cy="155" r="4" fill="none" stroke="white" strokeWidth="1"
            style={{ animationDelay: "1.8s" }} />

          {/* Node 4: intersection (920, 335) */}
          <circle className="pulse-node" cx="920" cy="335" r="4"
            style={{ animationDelay: "0.5s" }} />
          <circle className="ring-node" cx="920" cy="335" r="4" fill="none" stroke="white" strokeWidth="1"
            style={{ animationDelay: "0.5s" }} />

          {/* Node 5: intersection (560, 425) */}
          <circle className="pulse-node" cx="560" cy="425" r="4"
            style={{ animationDelay: "1.3s" }} />
          <circle className="ring-node" cx="560" cy="425" r="4" fill="none" stroke="white" strokeWidth="1"
            style={{ animationDelay: "1.3s" }} />
        </g>

        {/* ── Subtle corner glow (teal tint) ───────────────── */}
        <radialGradient id="tealGlow" cx="100%" cy="0%" r="50%">
          <stop offset="0%" stopColor="#0D7C6C" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0D7C6C" stopOpacity="0" />
        </radialGradient>
        <rect x="0" y="0" width="1200" height="650" fill="url(#tealGlow)" />
      </svg>
    </div>
  );
}
