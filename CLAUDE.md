# NGL Web v2 — Agent Context

## Project

**NGL** (NASENI Government Labs) — a GovTech landing page and web platform for Nigeria's next-generation government technology infrastructure. Built for an audience ranging from high-level policymakers to everyday citizens.

- Design system: **Sovereign Mono** (see `DESIGN.md`)
- HTML prototype: `code.html` — this is the source of truth for the first page
- Screenshot: `screen.png`

## Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSG/ISR for landing, RSC for data pages |
| Language | TypeScript (strict) | GovTech requires reliability |
| Styling | Tailwind CSS v4 | Design tokens wire directly as CSS vars |
| UI Primitives | Radix UI | Accessible, unstyled — we own the design |
| Icons | Lucide React | Monolinear, matches design spec |
| Font | `next/font/google` — Inter | Self-hosted, no FOUT, no external request |
| Forms | React Hook Form + Zod | Validation-first, design requires email form |
| Animation | Framer Motion | Hero entrance animation (matches existing JS) |
| Package manager | pnpm | |

## Design Tokens

All tokens live in `DESIGN.md` frontmatter. They must be wired as:

1. **CSS custom properties** in `src/app/globals.css`
2. **Tailwind config** in `tailwind.config.ts` (referencing the CSS vars)

Token reference (abbreviated):
- `--color-primary: #000917`
- `--color-secondary: #006c49`
- `--color-tertiary-accent: #0090cd`
- `--color-background: #f8f9ff`
- Base spacing unit: `8px`
- Max content width: `1280px`
- Font: Inter, weights 400/500/600/700

## Elevation System

```
Level 0  bg-background (#f8f9ff)
Level 1  bg-white + 1px border outline-variant  → cards
Level 2  Level 1 + dual ambient shadow (shadow-sm tinted with primary)  → interactive cards
Level 3  Level 2 + backdrop-blur-sm  → modals/dropdowns
```

Custom utility: `.micro-elevation` = `box-shadow: 0 4px 6px -1px rgba(0,9,23,0.04), 0 2px 4px -2px rgba(0,9,23,0.04)`

## Project Structure

```
src/
  app/
    layout.tsx          ← Inter font, global meta, body classes
    page.tsx            ← Landing page (ported from code.html)
    globals.css         ← CSS custom properties + base styles
  components/
    ui/
      button.tsx        ← Primary / secondary / ghost variants
      input.tsx         ← Focus ring: 2px azure glow at 20% opacity
      card.tsx          ← Level 1 elevation, optional emerald left-border
      chip.tsx          ← Status tags, desaturated bg + high-contrast text
    layout/
      navbar.tsx
      footer.tsx
    sections/
      hero.tsx          ← Logo + headline + email form + trust indicator
      feature-grid.tsx  ← 3-column feature proof section
  lib/
    utils.ts            ← cn() helper (clsx + tailwind-merge)
```

## Conventions

- Components: named exports, `function` declarations, no default exports except pages
- File naming: `kebab-case.tsx`
- Tailwind: utility-first; no inline `style={}` except for dynamic values
- No `any` types
- Shadows always tinted with Primary Slate — never pure black
- Rounded corners: `rounded` (4px) default; `rounded-lg` (8px) for cards; `rounded-full` only for status chips
- Hover states: luminance shift, not color change (use `opacity-90` or `hover:bg-primary/90`)

## Pages (Phase 1)

- `/` — Landing (hero + feature grid + CTA form)

## Key Content (from prototype)

- Headline: "The Future of Governance is Loading."
- Subheadline: "NGL (a NASENI company) is building the next generation of secure, efficient, and accessible government technology infrastructure."
- CTA: "Get Early Access" (government email input)
- Trust badge: "Secure & Private" (shield icon)
- Feature pillars: Infrastructure · Interoperability · Citizen First
- Nav links: Our Vision · Technology · Impact · Contact Us (CTA button)
