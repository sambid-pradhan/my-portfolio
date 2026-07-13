# Work About Mobile Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reframe `/work` as a public projects gallery, move enterprise client work into `/about`, and improve home page mobile responsiveness.

**Architecture:** Keep the existing portfolio data in `siteContent.ts`, replace `WorkTabs` with a stateless project gallery using `hobbyProjects`, add an enterprise section to `AboutContent`, and make targeted responsive CSS changes in `portfolio.css`.

**Tech Stack:** Next.js App Router, React, TypeScript, CSS.

---

### Task 1: Reframe Work Page

**Files:**
- Modify: `src/components/portfolio/WorkTabs.tsx`

- [ ] **Step 1: Replace tabbed Work UI with project gallery**

Implement `WorkTabs` as a stateless component that renders:
- Header eyebrow `Projects Lab`
- H1 `Projects I’m building.`
- Intro text about public tools, experiments, and product ideas
- Featured card for `hobbyProjects[0]`
- Compact grid for `hobbyProjects.slice(1)`
- CTA linking to email

### Task 2: Move Enterprise Proof to About

**Files:**
- Modify: `src/components/portfolio/AboutContent.tsx`

- [ ] **Step 1: Import `clientProjects`**

Add `clientProjects` to the existing import from `siteContent`.

- [ ] **Step 2: Add Enterprise Impact section after the About hero**

Render client project cards in a section with class names:
- `enterprise-section`
- `enterprise-grid`
- `enterprise-card`
- `enterprise-card-head`
- `enterprise-client`
- `enterprise-role`
- `enterprise-title`
- `enterprise-impact`
- `enterprise-tech`

### Task 3: Add Responsive Styling

**Files:**
- Modify: `src/components/portfolio/portfolio.css`

- [ ] **Step 1: Add styles for new Work gallery**

Add styles for:
- `work-intro`
- `project-lab-grid`
- `project-lab-card`
- `project-lab-card--featured`
- `project-lab-visual`
- `project-lab-body`
- `project-lab-status`
- `project-lab-title`
- `project-lab-desc`
- `project-lab-tags`
- `project-lab-tag`
- `project-lab-cta`

- [ ] **Step 2: Add styles for About enterprise section**

Add styles for the enterprise class names from Task 2.

- [ ] **Step 3: Fix home mobile layout**

Within the existing mobile media queries, ensure:
- `.hero` uses `min-height: auto`
- `.hero-grid` becomes a single column
- `.hero-copy` can center on small screens
- `.hero-name` uses smaller type and non-negative letter spacing
- `.hero-btns` wraps and full-width buttons are possible
- `.profile-img` is constrained to a mobile-friendly max width
- `.hero-chips` wraps without overflow

### Task 4: Validate

**Files:**
- No file modifications expected.

- [ ] **Step 1: Run TypeScript check**

Run: `npx tsc --noEmit`
Expected: exit code 0.

- [ ] **Step 2: Fetch rendered pages**

Run: `Invoke-WebRequest -UseBasicParsing http://localhost:3000/work`
Expected: HTML contains `Projects I’m building.` and does not contain `Client Projects`.

Run: `Invoke-WebRequest -UseBasicParsing http://localhost:3000/about`
Expected: HTML contains `Enterprise Impact`.
