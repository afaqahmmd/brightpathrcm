# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing site for **BrightPathRCM**, a medical billing / revenue-cycle-management company. Next.js 14 App Router, plain JavaScript (JSX), global SCSS, deployed on Vercel. No backend, no database, no tests. The codebase was forked from a previous client's site and fully redesigned; the old client's assets and removed components live in `_legacy/` (not built, safe to delete).

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build (also lints); all routes are statically generated
npm run start   # serve production build
npm run lint    # next lint (eslint-config-next core-web-vitals)
```

There is no test suite.

## Content and configuration

- `src/lib/siteConfig.js`: brand name, domain, contact details (Denver office address and phone are real; email and domain are still placeholders), socials, map embed URL, nav links. Empty strings hide the related UI (e.g. empty `mapEmbedUrl` hides the About page map).
- `src/lib/DataStore.js`: all site copy as exported arrays (`whyChooseUs`, `revenueLeaks`, `processSteps`, `qaArray`, `testimonials`, `values`, `blogs`, `services`, `specialityCategories`, `specialities`). `services[].icon` holds React elements, so the file contains JSX.
  - `revenueLeaks[].serviceId` links each problem to a service; the home page `ServiceSection` features the service with id 6 (`FEATURED_ID`).
  - `testimonials` are placeholders (`placeholder: true` renders a "Sample" badge). Replace with real, approved quotes.
  - Do not add statistics, client counts, years in business, certifications or compliance claims unless the client has supplied them. Coverage numbers on the site are derived from array lengths (`services.length`, `specialities.length`).
- `blogs` and `services` have numeric `id` and an HTML `body` rendered with `html-react-parser` on `src/app/blog/[id]` and `src/app/services/[id]` (loose `==` lookup, `generateStaticParams`, `notFound()` for unknown ids). Blog bodies start with an `<h2>` duplicating the title; the blog page strips it.
- `src/app/sitemap.js` and `robots.js` are generated from the data and `siteConfig.url`; there is no static sitemap in `public/`.
- Remote images come from `images.pexels.com`, the only host allowed for `next/image` in `next.config.mjs`.

## Styling

`src/app/layout.js` imports `./styles.scss` directly (Next compiles it; there is no precompiled CSS). `styles.scss` imports `src/styles/_imports.scss`, which imports foundation partials then every component/page partial **by explicit path**. A new `.scss` partial must be added to `_imports.scss`; components never import their own styles.

- `_tokens.scss`: CSS custom properties. Brand colours (`--navy-*`, `--orange-*`) are constant; surface/text tokens (`--bg`, `--surface`, `--heading`, `--text`, `--muted`, `--line`, `--accent-text`) are light-only (there is no dark mode). Use tokens rather than raw colours.
- `_mixins.scss`: `up($bp)` / `down($bp)` breakpoints (`$bp-sm` 640, `$bp-md` 900, `$bp-lg` 1120), `on-navy` (re-points tokens for navy sections), `focus-ring`.
- `_ui.scss`: shared primitives (`.container`, `.section`, `.section--surface|--tint` (light), `.section--navy|--deep`, `.eyebrow`, `.display`/`.h2`/`.h3`, `.accent`, `.lede`, `.btn` + modifiers, `.link-arrow`, `.tag`, `.duotone` image treatment, `.prose` for HTML bodies, `.reveal`).
- Orange text on light surfaces must use `var(--accent-text)` (AA-safe `--orange-600`); `--orange-500` is for fills and CTA buttons, which use navy text.
- Fonts come from `next/font` as CSS variables: Plus Jakarta Sans (`--font-display`, headings at 600–800 weight with tight negative tracking), Manrope (body), IBM Plex Mono (labels/data). All sans-serif; no italics for emphasis (`.accent` is colour only).
- Class naming is BEM-ish (`.block__element--modifier`), global, no CSS modules.
- Don't put `overflow: hidden` on an ancestor of a `position: sticky` element (it becomes the sticky container); use `overflow: clip`.

## Reveal animations

An inline script in `layout.js` adds the `js` class to `<html>` before paint, so `.reveal` only hides content when JS runs. The site is light-only; the old theme toggle was removed.

## Components and rendering

- Pages are server components exporting `metadata` (title template `%s | BrightPathRCM` is set in the layout). Client components are limited to interactive pieces: `Navbar` (sticky header, full-screen mobile menu), `Reveal` (IntersectionObserver fade-in), `QACard` (accessible accordion), `TestimonialSection`, `SpecialityDirectory` (search + category filter), `ContactForm`.
- `PageHeader` is the shared light header for inner pages (breadcrumbs, eyebrow, title, intro, optional `aside`). `CTASection` is the closing conversion band; pass `title`/`text` to vary it.

## External services / env vars

Configured via `NEXT_PUBLIC_*` env vars (no `.env` is committed):
- `ContactForm` POSTs JSON to `src/app/api/contact/route.js`, which validates input (required fields, length limits, email format, a hidden `bp_hp` honeypot (meaningless name so autofill never fills it; hits are logged)) and sends via Nodemailer over SMTP. Server-only env vars: `SMTP_HOST`, `SMTP_PORT` (465 = implicit TLS), `SMTP_USER`, `SMTP_PASSWORD`, optional `CONTACT_TO` (defaults to `SMTP_USER`). Submissions arrive with `Reply-To` set to the visitor. Never prefix these with `NEXT_PUBLIC_`. See `.env.example`. Many home/office networks block outbound SMTP, so the send may only work once deployed.
- Tawk.to chat in `layout.js`: `NEXT_PUBLIC_TWAKTO_PROPERTY_ID`, `NEXT_PUBLIC_TWAKTO_WIDGET_ID` (note the "TWAKTO" spelling). The script is only rendered when both are set.
- Vercel Analytics and Speed Insights are mounted in the layout; their scripts 404 locally, which is expected.
