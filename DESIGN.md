---
name: Sovereign Mono
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4d6079'
  primary: '#000917'
  on-primary: '#ffffff'
  primary-container: '#0d2137'
  on-primary-container: '#7689a4'
  inverse-primary: '#b5c8e5'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000a13'
  on-tertiary: '#ffffff'
  tertiary-container: '#002336'
  on-tertiary-container: '#0090cd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#b5c8e5'
  on-primary-fixed: '#081c32'
  on-primary-fixed-variant: '#364860'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered to embody the authority, reliability, and precision required for GovTech. It serves an audience that ranges from high-level policymakers to everyday citizens, necessitating a UI that is both prestigious and universally accessible.

The visual style is **Corporate Minimalism** with a focus on high-fidelity execution. It draws inspiration from Swiss design principles: heavy emphasis on structured grids, intentional whitespace to reduce cognitive load, and a strict typographic hierarchy. To ensure it feels premium rather than generic, the system utilizes "micro-depth"—using subtle 1px borders and extremely soft ambient shadows that ground elements without breaking the clean, flat aesthetic. The emotional goal is to evoke trust, clarity, and institutional stability.

## Colors

The palette is rooted in a "Deep Slate" primary color to establish a sense of gravity and officialdom. Secondary and tertiary accents are derived from the NGL logo, utilizing a professional emerald green for success states and a clear azure for informational highlights and interactive focus.

- **Primary (Slate/Charcoal):** Used for headers, primary buttons, and critical text to ensure maximum contrast.
- **Secondary (Emerald):** Reserved for growth, confirmation, and primary action accents.
- **Tertiary (Azure):** Used for links, secondary actions, and progress indicators.
- **Neutral (Cool Gray):** A range of cool grays used for borders, secondary text, and background layering to maintain a "sleek" and modern feel.

High contrast (WCAG AA/AAA) is the baseline for all text-on-background combinations.

## Typography

This design system uses **Inter** exclusively to achieve a systematic, utilitarian aesthetic that excels in legibility. The typeface's tall x-height and neutral character make it ideal for data-heavy government interfaces.

The hierarchy is strictly enforced. Display and Headline styles use tighter letter spacing and heavier weights to command attention, while body text uses generous line-heights (1.5x - 1.6x) to facilitate reading of long-form documentation or policy text. Small labels utilize a slight tracking increase and medium weight to ensure they remain distinct even at 12px.

## Layout & Spacing

A **Fixed-Fluid Hybrid Grid** is employed. On desktop, the content is contained within a max-width of 1280px with a 12-column structure. On mobile, it transitions to a 4-column fluid layout.

The spacing rhythm is built on an 8px baseline. "Generous whitespace" is achieved by prioritizing `lg` (48px) and `xl` (80px) gaps between major content sections, creating the "sleek" and un-cluttered atmosphere requested. Gutters are kept wide (24px) to ensure that even dense data tables or form layouts feel breathable. Components should use consistent internal padding (usually `md` for cards and `sm` for buttons).

## Elevation & Depth

To avoid a "generic" flat look, this design system uses **Tonal Layering** combined with high-precision shadows.

1.  **Level 0 (Base):** Background color (#F8FAFC).
2.  **Level 1 (Card/Surface):** White (#FFFFFF) with a 1px border in a very light neutral (#E2E8F0).
3.  **Level 2 (Interactive):** Same as Level 1, but with an "Ambient Lift"—a dual shadow consisting of a soft 4px blur and a secondary 12px diffused shadow with 4% opacity of the primary color.
4.  **Level 3 (Overlay):** Used for modals and dropdowns, featuring a more pronounced shadow and a subtle backdrop blur (8px) to provide focus.

Avoid heavy blacks in shadows; always tint shadows with the Primary Slate color to maintain a cohesive, sophisticated temperature.

## Shapes

The shape language is **Soft and Structural**. A `roundedness` level of 1 (0.25rem / 4px) is the default for most components like input fields and small buttons. This provides a modern touch without sacrificing the professional "seriousness" of the institution.

Larger containers like cards may use `rounded-lg` (8px) to soften the overall layout. Avoid pill-shapes for anything other than status tags (Chips) to maintain a geometric, grid-aligned feel.

## Components

- **Buttons:** Primary buttons use the Primary Slate background with white text. Secondary buttons use a 1px Slate border with Slate text. Hover states should involve a subtle shift in background luminance rather than a color change.
- **Input Fields:** Use a 1px border (#CBD5E1). On focus, the border transitions to Tertiary Azure with a 2px outer glow (ring) of the same color at 20% opacity.
- **Cards:** White backgrounds, 1px light gray borders, and Level 1 elevation. For "Premium" cards, add a 4px left-border accent using the Secondary Emerald color.
- **Chips/Tags:** Used for status. High-contrast text on a very desaturated version of the status color (e.g., dark green text on a 10% emerald background).
- **Lists:** Use 24px vertical padding between items with a light divider line (#F1F5F9). Icons in lists should be monolinear and use the Neutral color.
- **Data Tables:** Strict horizontal-only grid lines. Header cells use `label-sm` typography with a subtle gray background.