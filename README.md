# NASENI Golborn Limited — Official Website

The official website for **NASENI Golborn Limited (NGL)**, a strategic Public-Private Partnership established to accelerate digital transformation, institutional modernisation, and technology-enabled public service delivery across Nigeria.

**Live URL:** `https://nasenigolborn.com` *(update when deployed)*

---

## Tech Stack

| Layer | Technology | Version |
| --- | --- | --- |
| Framework | Next.js (App Router) | 14.2.5 |
| Language | TypeScript | 5.x |
| CMS | TinaCMS (Git-backed) | 1.6.x |
| Styling | Tailwind CSS | 3.4.x |
| Package Manager | Yarn | 4.9.1 |
| Deployment | Vercel (recommended) | — |

---

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn 4 (`corepack enable` to activate)

### 1. Clone the repository

```bash
git clone https://github.com/your-org/ngl-website.git
cd ngl-website
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
# TinaCMS — get these from https://app.tina.io
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id_here
TINA_TOKEN=your_token_here

# Git branch for TinaCMS content (defaults to "main")
GITHUB_BRANCH=main
```

> In local development these can be left empty — TinaCMS runs against the local filesystem and no authentication is required.

### 4. Start the development server

```bash
yarn dev
```

| Service | URL |
| --- | --- |
| Website | http://localhost:3000 |
| CMS Editor | http://localhost:3000/admin |
| TinaCMS Data Layer | http://localhost:9000 |

> Both the Next.js server and the TinaCMS data layer start together. Do not close the terminal while editing.

---

## Project Structure

```
ngl-website/
│
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (Header, Footer, skip link)
│   ├── globals.css             # Global styles, design tokens, component classes
│   ├── page.tsx                # Homepage
│   ├── about/
│   ├── approach/
│   ├── contact/
│   ├── insights/               # Article listing + dynamic [slug] page
│   ├── leadership/
│   ├── sectors/
│   └── solutions/
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav, keyboard-accessible dropdowns
│   │   └── Footer.tsx          # Footer + CTA band
│   ├── sections/               # Page-level section components
│   │   ├── Hero.tsx
│   │   ├── HeroBackground.tsx  # Animated SVG circuit grid
│   │   ├── AboutSnapshot.tsx
│   │   ├── FocusAreas.tsx
│   │   ├── SolutionsGrid.tsx
│   │   ├── ApproachSection.tsx
│   │   ├── NationalImpact.tsx
│   │   └── LeadershipCarousel.tsx  # Auto-advancing, keyboard-navigable carousel
│   └── ui/
│       └── SectionHeader.tsx   # Reusable section heading component
│
├── content/                    # Git-backed CMS content (edited via /admin)
│   ├── config/
│   │   └── site.json           # Site-wide settings (name, email, socials)
│   ├── insights/               # Article MDX files
│   ├── pages/                  # Static page MDX files
│   └── team/                   # Leadership team MDX files
│
├── .tina/
│   └── config.ts               # TinaCMS schema (collections, fields)
│
├── lib/
│   └── utils.ts                # cn() helper (clsx + tailwind-merge)
│
├── public/
│   └── images/                 # Uploaded media (managed via TinaCMS)
│
├── tailwind.config.ts          # Custom design tokens
├── TINACMS-GUIDE.md            # CMS usage guide for content editors
└── README.md                   # This file
```

---

## Pages

| Route | Description |
| --- | --- |
| `/` | Homepage — Hero, About snapshot, Focus Areas, Solutions, Approach, Impact |
| `/about` | Company overview, PPP model, values |
| `/solutions` | Full solution portfolio with capability breakdowns |
| `/sectors` | Sector expertise |
| `/approach` | Five-phase delivery methodology |
| `/leadership` | Board of Directors carousel |
| `/insights` | Thought leadership articles + newsletter CTA |
| `/contact` | Contact form + office information |
| `/admin` | TinaCMS editor (local: no auth, production: TinaCloud auth) |

---

## Content Management

Content is stored as MDX/JSON files in `content/` and edited through the TinaCMS visual editor at `/admin`.

| Collection | Path | Format |
| --- | --- | --- |
| Pages | `content/pages/` | MDX |
| Insights | `content/insights/` | MDX |
| Team Members | `content/team/` | MDX |
| Site Configuration | `content/config/site.json` | JSON |

See **[TINACMS-GUIDE.md](./TINACMS-GUIDE.md)** for a full step-by-step guide for content editors.

---

## Design System

### Brand Colours

| Token | Hex | Tailwind Class | Usage |
| --- | --- | --- | --- |
| Navy | `#0B1D3E` | `bg-navy` / `text-navy` | Primary backgrounds, headings |
| Navy Dark | `#060F21` | `bg-navy-dark` | Footer, deep dark sections |
| Green (Teal) | `#0D7C6C` | `bg-green` / `text-green` | CTAs, accents, highlights |
| Slate | `#64748B` | `text-slate` | Body text, descriptions |
| Light | `#F7F8FA` | `bg-light` | Off-white backgrounds |

### Component Classes (globals.css)

| Class | Description |
| --- | --- |
| `.btn-primary` | Teal filled rounded button |
| `.btn-secondary` | White border ghost button (for dark backgrounds) |
| `.btn-outline` | Navy border button (for light backgrounds) |
| `.btn-white` | White filled button (for teal/green backgrounds) |
| `.label-tag` | Section eyebrow label with teal line |
| `.label-tag-white` | Section eyebrow label for dark backgrounds |
| `.card-base` | White card with border, shadow, and hover lift |
| `.container-wide` | Max-width container with responsive horizontal padding |
| `.section-pad` | Responsive vertical section padding |

---

## Accessibility

The site is built to WCAG 2.1 AA standards:

- Skip-to-content link on every page
- All interactive elements have visible `:focus-visible` teal ring
- Keyboard-navigable header dropdowns with `Escape` to close
- `aria-expanded`, `aria-label`, `aria-required`, `role="menu"` throughout
- `prefers-reduced-motion` support on hero background animation
- Semantic HTML5 landmarks (`<main>`, `<nav>`, `<header>`, `<footer>`)

---

## Deployment

### Vercel (Recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
3. Add the following environment variables in the Vercel dashboard:

```
NEXT_PUBLIC_TINA_CLIENT_ID   →  from app.tina.io
TINA_TOKEN                   →  from app.tina.io
GITHUB_BRANCH                →  main
```

4. Click **Deploy**

Every push to `main` triggers an automatic rebuild and deployment.

### TinaCloud (enables /admin on the live site)

1. Create a project at [app.tina.io](https://app.tina.io)
2. Connect your GitHub repository
3. Copy the **Client ID** and **Token** into Vercel environment variables
4. Editors can then log in at `https://nasenigolborn.com/admin` to edit content live

### Manual build

```bash
yarn build   # Builds TinaCMS admin + Next.js production bundle
yarn start   # Serves the production build at http://localhost:3000
```

---

## Development Scripts

```bash
yarn dev        # Start dev server (TinaCMS + Next.js)
yarn build      # Production build
yarn start      # Serve production build locally
yarn lint       # ESLint
```

---

## Key Dependencies

| Package | Purpose |
| --- | --- |
| `tinacms` | CMS runtime and editor UI |
| `@tinacms/cli` | Dev server and build tooling |
| `@tinacms/mdx` | MDX rendering for TinaCMS content |
| `react-dnd` + `react-dnd-html5-backend` | Required peer dep for TinaCMS drag-and-drop |
| `lucide-react` | Icon library |
| `tailwind-merge` + `clsx` | Conditional className utilities |
| `react-intersection-observer` | Scroll-triggered animations |

---

## Contributing

1. Branch off `main`: `git checkout -b feature/your-feature`
2. Make changes
3. Run `yarn lint` and `yarn tsc --noEmit` before committing
4. Open a pull request against `main`

Content-only changes (inside `content/`) can be committed directly to `main` if editing through the CMS.

---

## License

Private — All rights reserved. NASENI Golborn Limited © 2025.
