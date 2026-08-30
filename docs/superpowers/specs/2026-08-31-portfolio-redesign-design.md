# Portfolio Redesign — Design Doc

**Date:** 2026-08-31
**Project:** `AparnaDeshpande-IISER` (Vue 3 + Vite + Tailwind CSS v4), faculty/lab portfolio site for Dr. Aparna Deshpande, IISER Pune.

## Goal

Full visual overhaul of all 8 pages, moving from the current ad-hoc Tailwind styling (flat dark navbar, generic white shadow cards, inconsistent spacing, a few typos/dead code) to a cohesive "editorial academic" design system. Content, information architecture, and page structure stay as they are — this is a visual and code-quality pass, not a content or IA rewrite.

**Hard constraint: no content changes.** All existing text strings (bio copy, publication titles/citations, talk descriptions, names, dates, quotes, etc.) and all image files (photos, logos, icons) stay byte-for-byte intact — same wording, same files, same crops. This pass only changes markup, CSS classes, layout, and component structure around that content. Nothing in the "cleanup" work (typo fixes, dead-code removal) touches user-facing text or images — it's limited to broken CSS class names and unused `.vue` files.

## Approach chosen (via visual companion)

- **Aesthetic:** Minimal academic, "Editorial Serif + Teal" variant — serif display headings, sans body text, warm off-white background, teal accent (replacing the current flat `#111828` navy used everywhere for rules/accents).
- **Home layout:** Centered Editorial — small circular photo, large serif name, eyebrow role/institution line, tagline, social/contact row, with the "Lab Notes" bulletin panel as a distinct block below the fold, and the Feynman quote retained as a closing element.
- **Theming:** Light and dark themes driven by `prefers-color-scheme` (OS setting). No explicit toggle UI. Tailwind v4's `dark:` variant defaults to the media-query strategy, so no custom variant config is needed.
- **Fonts:** Bundled, self-hosted webfonts via `@fontsource` (no runtime CDN calls) — **Fraunces** (variable, serif display) for headings, **Inter** (variable, sans) for body/UI text.
- **Navigation:** Keep all 8 flat nav items, restyle only (no dropdowns/grouping).
- **Publications:** Keep the card grid, restyle only (no switch to list/timeline).
- **Cleanup:** Fix cosmetic bugs and remove dead code encountered along the way (approved).

## Design system

### Color tokens (defined in `src/CSS/base.css` via `@theme`)

Light (default):
- `--color-bg: #fbfaf8` (warm off-white page background)
- `--color-surface: #ffffff` (cards/panels)
- `--color-border: #e5e7eb`
- `--color-ink: #1f2937` (body text)
- `--color-ink-muted: #6b7280` (secondary text)
- `--color-accent: #0f766e` (teal-700 — links, eyebrows, rules, active nav)
- `--color-accent-soft: #f0fdfa` (teal-50 — bulletin/list item backgrounds, hover fills)

Dark (`prefers-color-scheme: dark`):
- `--color-bg: #14171a`
- `--color-surface: #1c2024`
- `--color-border: #2d333b`
- `--color-ink: #e5e7eb`
- `--color-ink-muted: #9ca3af`
- `--color-accent: #2dd4bf` (teal-400, brighter for dark-background contrast)
- `--color-accent-soft: rgba(45,212,191,0.12)`

The navbar currently forces a dark background (`#111828`) regardless of theme — this is an intentional change: the header becomes a themed surface like the rest of the page (sticky, `bg-surface/80` + `backdrop-blur` + bottom border), not a permanently-dark bar.

### Typography

- Display/serif (`font-serif` override): Fraunces, weights 500/600, used for `h1`/`h2` page and section titles.
- Body/sans (`font-sans` override): Inter, weights 400/500/600, used for everything else — body copy, nav, labels, buttons.
- Eyebrow labels (e.g. "Associate Professor · IISER Pune", section pretitles): small, uppercase, letter-spaced, sans, accent-colored.
- Scale: page `h1` ~2.25rem, section `h2` ~1.5rem, body ~1rem, meta/small ~0.875rem.

### Shared visual patterns (new, small, reused across pages)

To avoid repeating the same markup block 8 times, add a couple of `@layer components` classes in `base.css`:
- `.card` — replaces the mix of `rounded-lg shadow-lg p-8 border-2 border-gray-100` / `shadow p-6 border-2 border-gray-400` seen across Research/Publications/Group tiles with one consistent style: surface background, 1px border, `rounded-xl`, subtle hover (border→accent, soft shadow).
- `.eyebrow` — small caps accent label used above titles.
- `.section-rule` — short accent-colored underline rule (replaces every hardcoded `bg-[#111828]` divider).
- A shared `PageHeader.vue` component (eyebrow optional + serif title + rule), replacing the near-identical title+rule markup duplicated in `AboutView`, `ResearchView`, `PublicationsView`, `GroupView`, `OutreachView`, `ScienceedView`, `STMLabView`.
- Global link styling moves from two duplicated `<style scoped>` blocks (`AboutView.vue`, `STMLabView.vue`) into one rule in `base.css`, using the accent token instead of the current ad hoc blue/purple/red palette.

### Component-level changes

- **NavigationBar.vue** — light sticky themed header; serif wordmark linking home; nav links restyled (uppercase, tracking, teal underline for active/hover instead of gray block fill); mobile hamburger repositioned into normal flex flow (current mobile button is `absolute`-positioned and overlaps oddly — fixed as part of this pass).
- **HomePage.vue / ProfileInfo.vue / BulletinBoard.vue / FootQuote.vue** — restructured to the Centered Editorial layout; content unchanged, one consolidated photo treatment (circular, small). `BulletinBoard` list items restyled from flat `bg-blue-50` to `bg-accent-soft` with a left accent border.
- **PastTrajectory.vue** (About timeline) — restyle dot/line color to accent instead of gray.
- **MyLabInfo.vue** (STM Lab) — instrument list gets accent bullet styling instead of default disc markers.
- **GroupView.vue** — carousel nav/pagination recolored to accent; member tiles use `.card`; typo `broder-2` fixed.
- **ResearchView.vue / PublicationsView.vue** — tiles use `.card`; broken `brounded-full` class (renders as an invisible box — meant to be the accent underline) fixed to an actual accent rule.
- **OutreachView.vue / ScienceedView.vue** — `PageHeader` adopted; talk/read tiles use `.card`.
- **GroupSlider.vue** — dead code (unused, duplicate of the carousel inlined in `GroupView.vue`) — deleted.

### Assets

`profile.png` (Home) and `propic.png` (About) are both actually used, for different crops/contexts — kept as-is, not dead code. No asset deletions planned beyond removing `GroupSlider.vue`'s reference (the component itself, not the shared `team/1.png` image, which stays in use).

## Technical notes

- Tailwind v4 is configured CSS-first (`@import "tailwindcss"` in `base.css`, no `tailwind.config.js`) — new tokens go into a `@theme` block there; no separate config file needed.
- Fonts added as npm deps (`@fontsource-variable/fraunces`, `@fontsource-variable/inter`), imported once in `main.js`, mapped to `--font-serif`/`--font-sans` in the `@theme` block.
- `dark:` variant needs no setup — Tailwind v4 defaults to `prefers-color-scheme`.

## Out of scope

- No content/copy rewrites — no text changes anywhere, no image changes/replacements/re-crops.
- No new pages, no nav restructuring/grouping (confirmed: keep 8 flat items).
- No publications layout change (confirmed: keep card grid).
- No CMS/backend/data changes.
- No new automated test framework (none exists today; not requested).

## Verification plan

- `npm run lint` and `npm run build` (production build must succeed under the existing `base: '/portfolio/'` + `gh-pages` deploy setup).
- Manual check via `npm run dev` across mobile (~375px) and desktop (~1280px) widths, in both light and dark OS theme, for all 8 pages.
