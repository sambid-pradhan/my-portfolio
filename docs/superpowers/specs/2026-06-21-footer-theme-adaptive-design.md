# Footer Theme-Adaptive Design

**Date:** 2026-06-21  
**Status:** Approved  
**Scope:** Portfolio footer on all shell routes

## Problem

In dark/night themes, the footer uses `background: var(--teal-dark)`. That token is repurposed as light heading text in those themes, producing a pale mint bar with low-contrast white text.

## Decision

**Theme-adaptive footer (Option B):** Footer blends with the page background in all themes, separated by a subtle top border. No heavy dark band in any mode.

## Footer tokens

Add to `portfolio.css` per theme:

| Token | Light | Dark | Night |
|-------|-------|------|-------|
| `--footer-bg` | `var(--cream)` | `var(--cream)` | `var(--cream)` |
| `--footer-border` | `var(--border)` | `var(--border)` | `var(--border)` |
| `--footer-text` | `var(--muted)` | `var(--muted)` | `var(--muted)` |
| `--footer-link` | `var(--teal-dark)` | `var(--text)` | `var(--text)` |
| `--footer-link-hover` | `var(--coral-dark)` | `var(--coral-dark)` | `var(--coral-dark)` |

## CSS changes

Update `footer` block:

- `background: var(--footer-bg)`
- `border-top: 1px solid var(--footer-border)`
- `color: var(--footer-text)`
- Links use `--footer-link` / `--footer-link-hover`

Remove hardcoded `rgba(255, 255, 255, …)` link colors.

## Out of scope

- Footer content or layout changes
- Broader `--teal-dark` rename refactor
- Once UI routes outside portfolio shell

## Success criteria

1. Dark/night footer matches page background — no pale mint bar
2. Light footer blends with cream page
3. Readable text and links on all three themes
4. Clear separation via top border only
