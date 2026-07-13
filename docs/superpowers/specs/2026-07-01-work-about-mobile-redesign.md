# Work, About, and Mobile Home Redesign

## Goal

Make the portfolio information architecture clearer and improve mobile compatibility on the home page.

## Requirements

- `/work` should no longer split content into "Client Projects" and "Side Projects".
- `/work` should become a public project gallery for self-directed/productizable projects only.
- Client/enterprise projects should move to `/about` as professional credibility under an "Enterprise Impact" section.
- The home page should be more usable on mobile: no awkward overflow, cramped hero composition, or oversized elements that push content off screen.

## Design

`/work` becomes a "Projects Lab" page with a focused header, one featured project for ContractLens, a compact grid for upcoming ideas, and a collaboration CTA. It uses the existing `hobbyProjects` data and removes tab state entirely.

`/about` gains an "Enterprise Impact" section after the hero. The current `clientProjects` cards are reused in a tighter professional layout: client, role, description, impact, and tech tags. This makes About the place for career proof while Work stays focused on public builds.

The home page mobile adjustments keep the same visual identity but improve small viewport behavior: stack hero content earlier, reduce hero min-height, constrain profile image size, let CTA buttons wrap cleanly, reduce title letter-spacing on mobile, and keep chip rows from creating horizontal overflow.

## Acceptance Checks

- `/work` shows no tabs and no client project section.
- `/work` shows ContractLens and the remaining public project/idea cards.
- `/about` shows the enterprise/client project cards.
- Home page works at 375px width without horizontal scroll or overlapping content.
- TypeScript validation passes with `npx tsc --noEmit`.
