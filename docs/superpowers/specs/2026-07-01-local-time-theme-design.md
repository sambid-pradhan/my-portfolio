# Local Time Theme Design

## Goal

When a visitor has not manually chosen a portfolio theme, the site should pick an initial theme from the visitor's own browser clock before the page paints.

## Behavior

- Keep any saved `portfolio-theme` value as the source of truth.
- If no saved value exists, choose `light` from 07:00 through 17:59 local time.
- Choose `dark` from 18:00 through 21:59 local time.
- Choose `night` from 22:00 through 06:59 local time.
- Once the visitor clicks a theme option, keep saving that manual choice in `localStorage`.

## Architecture

Add a shared helper in `src/components/portfolio/portfolioTheme.ts` that converts a local hour into a `PortfolioTheme`. Use that helper in the client hook and mirror the same logic in the inline head script in `src/app/layout.tsx` to avoid a flash of the wrong theme.

## Testing

Run TypeScript validation after the change. Manually verify by clearing `localStorage.portfolio-theme` and confirming `data-theme` is set from the current local hour, then click the theme toggle and confirm the saved choice persists.
