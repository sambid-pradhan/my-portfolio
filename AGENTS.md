# Agent Guide

This is a personal portfolio and MDX blog built with Next.js App Router and Once UI. Keep changes small, preserve the existing visual system, and write content with the same practical, evidence-first feel as Andrew's agent reviews: direct claim, concrete proof, honest limits, useful verdict.

## Repo map

- `src/app/` contains App Router routes, layouts, metadata, sitemap, robots, and API routes.
- `src/app/blog/posts/` contains MDX blog posts.
- `src/components/blog/` contains blog rendering, post lists, table of contents, and sharing UI.
- `src/components/portfolio/` contains the site shell, navigation, theme toggle, page transitions, and portfolio UI.
- `src/resources/` contains site content, icons, metadata, custom CSS, and Once UI config.
- `public/images/` contains static images used by posts and pages.

## Code rules

- Read nearby files before editing. Reuse existing components, utilities, and styling patterns.
- Make the smallest change that solves the task. Do not add abstractions, dependencies, or config for imagined future needs.
- Do not overwrite user changes or assume a clean git state.
- Keep content, metadata, and profile data in `src/resources/` unless the codebase already has a stronger local pattern.
- Use `npm run build` for meaningful App Router, MDX, and type checks when code changes are non-trivial.

## Styling rules

- Preserve the cream, navy, and coral visual language.
- Keep blog typography aligned with the portfolio system: `DM Sans` for body, `Fraunces` for headings.
- Use existing font tokens from `src/resources/custom.css`: `--font-body`, `--font-heading`, `--font-label`, and `--font-code`.
- Put blog-scoped rendering overrides in `src/resources/custom.css`; do not hardcode one-off fonts inside posts.
- If touching theme, layout, navigation, or MDX rendering, check desktop and mobile behavior.

## Blog voice

- Open with the useful answer, not a preamble.
- Write like a practitioner who has actually used the thing.
- Prefer specific claims over vibes: line counts, dates, constraints, tradeoffs, workflow examples, cost, failure modes.
- Use short sections with exact headings. Good headings answer "what is this section doing?"
- Keep paragraphs compact. Split anything that carries more than one idea.
- Include honest limitations before the verdict. This is part of the trust signal, not a footnote.
- Avoid hype language, generic intros, and SEO filler.

## Blog structure

Use this shape when it fits the topic:

1. Frontmatter with `title`, `summary`, `publishedAt`, `tag`, and image fields when needed.
2. A one-paragraph thesis or `TL;DR`.
3. A short "What is it?" or "What this is not" section to set scope.
4. The core breakdown: architecture, workflow, decision model, comparison, or steps.
5. A real example that shows the thing in use.
6. "Honest limitations" or "Where it does not help."
7. "Who should use it?" or a fit/no-fit table.
8. FAQ only when readers would actually ask those questions.
9. Verdict with the practical recommendation.
10. References or further reading for claims that depend on external facts.

## MDX rules

- Preserve frontmatter and existing MDX conventions.
- Use markdown tables for compact comparisons.
- Use fenced code blocks for commands, pseudocode, and terminal examples.
- Add images only when they clarify the point; include useful alt text.
- Link primary sources for technical or factual claims. If facts are date-sensitive, say when they were checked.

## Build and deploy

- `npm run dev` starts local development.
- `npm run build` validates the production build.
- Vercel deploys from the `my-portfolio` folder.
