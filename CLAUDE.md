# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a **static corporate website** for BTLABS Consulting, an environmental consulting firm in Senegal/West Africa. Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS.

### Data Layer

All site content lives in a single file: `src/lib/data.ts`. This exports typed constants for site config, contact info, company stats, services, sectors, projects, team, equipment, methodology, and navigation. Components import directly from here — there are no API routes or database calls (Supabase is installed but unused).

### Pages & Components

Pages are under `src/app/` using the App Router: `/` (home), `/a-propos`, `/services`, `/projets`, `/contact`, and `/not-found`. Each page is a thin server component that composes page-specific components from `src/components/`.

Components are organized by page: `components/home/`, `components/about/`, `components/services/`, `components/projects/`, `components/contact/`, plus `components/layout/` (Header, Footer) and `components/ui/` (AnimatedSection).

Interactive components use `'use client'` — Header (scroll detection, mobile menu), Footer (newsletter), contact form, Hero, and anything using animation hooks.

### Animations

Three custom hooks in `src/hooks/useScrollAnimation.ts` use IntersectionObserver:
- `useScrollAnimation()` — triggers CSS animation class when element enters viewport
- `useStaggerAnimation()` — staggers animation across children
- `useCounterAnimation()` — animates numeric counters with easing

The `AnimatedSection` component in `components/ui/` wraps content and applies one of several animation types (`fade-up`, `fade-down`, `fade-left`, `fade-right`, `scale`) using these hooks.

Animation keyframes and utility classes (`.btn-primary`, `.btn-secondary`, `.card`, `.section-padding`, etc.) are defined in `src/app/globals.css`.

### Styling

Tailwind with a custom config (`tailwind.config.ts`):
- Primary color: blue scale (`primary-50` through `primary-900`)
- Secondary/teal: `#37afae`
- Font: DM Sans (Google Fonts)

### Images

`next.config.ts` allows remote images from Pexels and Unsplash. Local images are in `public/images/` (hero, services, projects, equipment, logos).

### SEO

Each page exports a `metadata` object. The root layout sets the title template. OpenGraph is configured for French locale (`fr_FR`).

### Deployment

Configured for Vercel (`vercel.json` present). No environment variables are required — all content is static.
