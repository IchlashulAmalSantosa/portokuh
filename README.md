# Portfolio — Ichlashul 'Amal Santosa

Dark mode, terminal-inspired portfolio website for a Data Analyst, built with
Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint
- `npm run test` — unit tests (Vitest)

## Project structure

See `src/` — sections and layout components live in `src/components`,
all editable content lives in `src/data` (no JSX to touch when updating copy),
and each project detail page is generated statically from
`src/data/projects.ts` at `/projects/[slug]`.

## Before shipping

- [ ] Replace `public/images/profile.jpg` with a real headshot
- [ ] Replace `public/cv/ichlashul-cv.pdf` with the real CV
- [ ] Update social links in `src/lib/constants.ts`
- [ ] Fill in full case-study detail for the two remaining projects in
      `src/data/projects.ts` (currently marked "detail write-up in progress")
- [ ] Update `metadata` in `src/app/layout.tsx` (OG image, site URL) for SEO

## Changelog

- 2026-09-02 — Initial scaffold generated from design.md
