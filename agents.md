# Agent Guide

This repo is a personal portfolio built with Next.js App Router, MDX blog content, and a portfolio-specific layout/theme system. Keep changes small, intentional, and aligned with the existing editorial feel.

## What to optimize for

- Preserve the current portfolio experience: cream/navy/coral visual language, smooth page transitions, and the existing layout structure.
- Make the smallest change that solves the task.
- Prefer working inside the existing patterns instead of introducing new abstractions.
- Keep the site fast, readable, and easy to maintain.

## Repo map

- `src/app/` contains the App Router routes, layouts, metadata, sitemap, robots, and API routes.
- `src/components/portfolio/` holds the main site shell, navigation, theme toggle, transitions, and shared portfolio UI.
- `src/app/blog/posts/` contains MDX blog posts.
- `src/resources/` holds site content, icons, metadata, and shared configuration.
- `public/images/` contains static assets such as profile images.

## Working rules

- Check existing files before editing anything new.
- Follow the current component and naming conventions.
- Avoid unrelated refactors unless they clearly support the requested change.
- Don't overwrite user changes or assume a clean git state.
- If a change touches theme, layout, or navigation, verify the result in the browser flow mentally and with tests if available.

## Content and MDX

- Blog content lives in MDX, so preserve frontmatter and MDX conventions when editing posts.
- Shared metadata and profile content should stay in `src/resources/` unless a stronger pattern already exists.
- If you add or move content, update any route helpers or indexes that depend on it.

## Typography and styling

- Keep blog typography aligned with the portfolio system: `DM Sans` for body text and `Fraunces` for headings.
- Use the existing font tokens from `src/resources/custom.css`: `--font-body`, `--font-heading`, `--font-label`, and `--font-code`.
- When editing MDX rendering or blog post pages, remember that Once UI components can bring their own typography classes. Add blog-scoped overrides in `src/resources/custom.css` instead of changing fonts ad hoc inside individual posts.
- Do not introduce one-off blog fonts, hardcoded `Georgia`, `Inter`, `Arial`, or generated image text styles unless they intentionally match the existing site language.

## Build and deploy

- Use `npm run dev` for local development.
- Use `npm run build` to catch App Router, MDX, and typing issues.
- This repo is set up for Vercel deployment from the `my-portfolio` folder.

## Safety

- Prefer reversible changes.
- Ask before making broad structural changes.
- When unsure, document the tradeoff and choose the option that keeps the portfolio stable.
