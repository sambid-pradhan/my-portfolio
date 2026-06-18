# Pastel Palette Rebrand — Design Spec

**Date:** 2026-06-18  
**Status:** Approved for implementation planning  
**Scope:** Portfolio shell routes (`/`, `/about`, `/work`, `/blog`)

## Summary

Full visual rebrand of the portfolio from cream/navy/coral to the [Color Hunt palette](https://colorhunt.co/palette/fcf9eabadfdbffa4a4ffbdbd):

| Name  | Hex       |
|-------|-----------|
| Cream | `#FCF9EA` |
| Mint  | `#BADFDB` |
| Coral | `#FFA4A4` |
| Blush | `#FFBDBD` |

A **deep teal** (`#1e4845`) is derived from mint for dark sections, headings, and body text. **Split accent strategy:** coral for primary CTAs; mint for secondary/outline actions and section accents.

## Decisions (locked)

| Question | Choice |
|----------|--------|
| Adoption depth | Full rebrand (replace cream/coral/navy everywhere in portfolio shell) |
| Dark color | Deep teal derived from mint (`#1e4845` base, `#2a5c58` mid) |
| Accent strategy | Split: coral primary buttons, mint secondary/outline |

## Color token map

Replace and extend tokens in `src/components/portfolio/portfolio.css` `:root`:

| Token | Value | Replaces / role |
|-------|-------|-----------------|
| `--cream` | `#FCF9EA` | Page background, nav |
| `--cream2` | `#F5F2E0` | Alternate section surface |
| `--mint` | `#BADFDB` | Secondary accents, chips, outline borders |
| `--coral` | `#FFA4A4` | Primary CTAs, active nav, link emphasis |
| `--coral-dark` | `#E88888` | Primary button hover (tune if contrast fails) |
| `--coral-l` | `#FFBDBD` | Light coral / alias blush for hovers |
| `--blush` | `#FFBDBD` | Card borders, gradient end, hover fills |
| `--teal-dark` | `#1e4845` | Hero/footer dark sections, headings, `--text` |
| `--teal-mid` | `#2a5c58` | Gradient mid-tone |
| `--text` | `#1e4845` | Body copy |
| `--muted` | `#5a7a77` | Secondary text |
| `--border` | `rgba(30, 72, 69, 0.12)` | Borders on cream surfaces |
| `--on-dark-muted` | `rgba(255, 255, 255, 0.68)` | Muted text on dark bands |

### Gradients (replace navy/coral gradients)

| Token | Value |
|-------|-------|
| `--grad-teal` | `linear-gradient(135deg, #1e4845 0%, #2a5c58 50%, #3d7a75 100%)` |
| `--grad-teal-deep` | `linear-gradient(135deg, #1e4845, #2a5c58)` |
| `--grad-coral` | `linear-gradient(135deg, #FFA4A4, #FFBDBD)` |

**Migration aliases:** Map existing `--navy` / `--navy2` usages to `--teal-dark` / `--teal-mid` (either rename in CSS or set `--navy: var(--teal-dark)` temporarily to reduce diff size, then grep-clean).

### Cream alpha variants

| Token | Value |
|-------|-------|
| `--cream-a93` | `rgba(252, 249, 234, 0.93)` |
| `--cream-a98` | `rgba(252, 249, 234, 0.98)` |

Remove unused `--amber` or repurpose as blush alias if referenced.

## Component mapping

### Navigation
- Background: `--cream-a93` + blur (unchanged behavior)
- Logo + links: `--teal-dark`
- Active link: `--coral`
- Hover: `--coral-dark`

### Hero (home)
- Page background: `--cream`
- Headline: `--teal-dark`; `<em>`: `--coral`
- Primary button: `--coral` fill, white text; hover `--coral-dark`
- Outline button: `--mint` border, `--teal-dark` text; hover mint tint `rgba(186, 223, 219, 0.35)`
- Chips: `rgba(186, 223, 219, 0.45)` background, `--teal-dark` text

### Dark sections (footer, navy-class blocks)
- Background: `--grad-teal` or `--grad-teal-deep`
- Text: white; muted: `--on-dark-muted`
- Link hover: `--blush`

### Work / Blog cards
- Card: white or `--cream2`
- Border: `rgba(186, 223, 219, 0.5)`
- Hover: blush border or soft shadow
- Tags/chips: mint fill

### Typography
- Headings: `--teal-dark` (Fraunces unchanged)
- Body: `--text`
- Captions: `--muted`

## Files to change

| File | Change |
|------|--------|
| `src/components/portfolio/portfolio.css` | Token definitions + all color usages |
| `src/app/api/og/generate/route.tsx` | Background `#1e4845` (already navy-ish; align to token) |
| `src/components/portfolio/*.tsx` | Grep for hardcoded hex; none expected if CSS is complete |

## Out of scope

- Once UI MDX routes (`/gallery`, `/blog/[slug]`, `/work/[slug]`) — keep existing Once UI theme
- `once-ui.config.ts` brand/accent tokens
- Favicon redesign (separate task)
- New color animations or motion changes

## Success criteria

1. All four palette hex values appear visibly in the UI
2. No `#0f2044`, `#1a3260`, `#e8613a`, `#f5a623` on portfolio routes
3. WCAG AA contrast for body text on cream and white text on coral CTAs (adjust `--coral-dark` if needed)
4. OG image at `/api/og/generate` uses teal-dark background
5. `npm run build` passes with no errors

## Verification checklist

- [ ] `/` — hero, buttons, chips, nav
- [ ] `/about` — light + dark sections, profile layout
- [ ] `/work` — tabs, cards, hobby grid
- [ ] `/blog` — post cards
- [ ] Footer on all pages
- [ ] Mobile nav + hamburger
- [ ] `prefers-reduced-motion` — no new motion introduced
- [ ] Share preview / OG image spot-check

## Implementation approach

**Recommended:** Token swap in `portfolio.css` (Approach 1 from brainstorm).

1. Update `:root` tokens per table above
2. Replace `--navy` references with `--teal-dark` (or alias then clean)
3. Replace hardcoded hex via grep: `#0f2044`, `#1a3260`, `#2a4a8a`, `#e8613a`, `#f5a623`, `#fdf8f2`, `#f7f0e6`
4. Update gradient token usages (`--grad1`, `--grad2`, etc.) to new names or values
5. Update OG route background
6. Build + visual pass on four routes

## Risks

| Risk | Mitigation |
|------|------------|
| Coral + white text fails contrast | Use `--coral-dark` or `#D97070` for CTA fills only |
| Mint chips too faint on cream | Increase mint opacity to 0.5–0.6 |
| Old token names (`--navy`) confuse future edits | Grep-clean to `--teal-dark` in same PR |
