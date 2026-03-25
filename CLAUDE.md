# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured. `react-simple-maps` was installed with `--legacy-peer-deps` due to React 19 peer dep constraint — use the same flag for any future packages that conflict.

## Architecture

This is a **static corporate website** for BTLABS Consulting, an environmental consulting firm in Senegal/West Africa. Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS.

### Data Layer

All site content lives in a single file: `src/lib/data.ts`. This exports typed constants for site config, contact info, company stats, services, sectors, projects, team, equipment, methodology, and navigation. Components import directly from here — there are no API routes or database calls.

### Pages & Components

Pages are under `src/app/` using the App Router: `/` (home), `/a-propos`, `/services`, `/projets`, `/contact`, and `/not-found`. Each page is a thin server component that composes page-specific components from `src/components/`.

Components are organized by page: `components/home/`, `components/about/`, `components/services/`, `components/projects/`, `components/contact/`, plus `components/layout/` (Header, Footer) and `components/ui/` (AnimatedSection, CustomCursor, Marquee).

### Hero Design System

All page heroes share the same split-screen layout — defined in `Hero.tsx` and replicated in `AboutHero`, `ServicesHero`, `ProjectsHero`, `ContactHero`:
- **Background panels** are `absolute inset-0` — left half `bg-gray-900`, right half the page image with Ken Burns zoom
- **Content** sits inside the standard `.container` div (not inside the panel) so text aligns with all other sections
- Right image panel must have `overflow-hidden` to contain the Ken Burns scale animation
- Diagonal divider: `clip-path: polygon(0 0, 100% 0, 0 100%)` on a `w-20 bg-gray-900` div at the left edge of the image panel
- Inner pages use `min-h-[75vh]`, homepage uses `min-h-screen`

### Micro-interactions

- **`useMagnetic`** (`src/hooks/useMagnetic.ts`) — hook that makes a button subtly follow the cursor. Wrap the element in a `<div>` with `ref`, `style`, `onMouseMove`, `onMouseLeave` from the hook.
- **Custom cursor** (`src/components/ui/CustomCursor.tsx`) — dot + ring using `mix-blend-mode: difference` (white color, always visible on any background). Registered globally in `layout.tsx`. Hover state tracked via `data-hover` attribute set by JS on `a`/`button` elements.
- CSS for cursor is inside `@media (hover: hover) and (pointer: fine)` in `globals.css` — only activates on desktop.

### Animations

Three custom hooks in `src/hooks/useScrollAnimation.ts` use IntersectionObserver:
- `useScrollAnimation()` — triggers CSS animation class when element enters viewport
- `useStaggerAnimation()` — staggers animation across children
- `useCounterAnimation()` — animates numeric counters with easing

Animation keyframes and utility classes (`.btn-primary`, `.btn-secondary`, `.card`, `.section-padding`, `.btn-shine`, `.animate-marquee`, etc.) are defined in `src/app/globals.css`.

### Section Conventions

- **Background alternation**: white → gray-50 → gray-900 (dark) → white pattern throughout the home page
- **Oversized decorative numbers**: `01`, `02`, `03`, `04` on `Domains`, `FeatureSection`, `ProgressSection`, `ZoneIntervention` — `absolute -top-8 right-0 text-[20rem] font-black text-gray-900/[0.03]`
- **Section titles**: plain `text-3xl md:text-4xl font-bold` on the `h2`, optionally preceded by a small `text-[#37afae] text-sm font-semibold uppercase tracking-widest` pre-label — no pill badges
- **Marquee strip** (`components/ui/Marquee.tsx`): placed between `VideoSection` and `Domains` in `page.tsx`

### ZoneIntervention Map

`src/components/home/ZoneIntervention.tsx` uses `react-simple-maps` with `countries-50m.json` (50m resolution — use this, not 110m, so small countries like Togo render). African countries filtered by a set of ISO numeric string IDs (`AFRICA_IDS`). Highlighted countries (`HIGHLIGHTED_IDS`: Sénégal 686, Guinée Conakry 324, Togo 768) render in teal. Hover tooltip follows mouse via `onMouseMove` on the map container div + `onMouseEnter`/`onMouseLeave` on each `<Geography>`. `react-simple-maps` has no TypeScript declarations — suppress with explicit `any` types on `geographies` and `geo` parameters.

### Styling

Tailwind with a custom config (`tailwind.config.ts`):
- Primary color: blue scale (`primary-50` through `primary-900`)
- Secondary/teal: `#37afae`
- Font: DM Sans — loaded via `next/font/google` in `layout.tsx` as CSS variable `--font-dm-sans` (NOT via `@import` in CSS)

### Images

`next.config.ts` allows remote images from Pexels and Unsplash. Local images are in `public/images/`. Always include a `sizes` prop on any `<Image fill>` component. The `VideoSection` uses a Next.js `<Image>` (not CSS `backgroundImage`) for optimization.

### SEO

Each page exports a `metadata` object. The root layout sets the title template. OpenGraph is configured for French locale (`fr_FR`).

### Deployment

Configured for Vercel (`vercel.json` present). No environment variables are required — all content is static.
