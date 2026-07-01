# Local Time Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Default the portfolio theme from the visitor's local time when no manual theme is saved.

**Architecture:** Add a small pure helper for hour-to-theme selection, use it in the React hook, and mirror its logic in the no-flash inline script. Manual theme selection continues to write `portfolio-theme` to `localStorage`.

**Tech Stack:** Next.js App Router, React, TypeScript, browser `localStorage`.

---

### Task 1: Add Time-Based Default Helper

**Files:**
- Modify: `src/components/portfolio/portfolioTheme.ts`
- Modify: `src/components/portfolio/usePortfolioTheme.ts`
- Modify: `src/app/layout.tsx`

- [x] **Step 1: Add helper in `portfolioTheme.ts`**

```ts
export function getPortfolioThemeForHour(hour: number): PortfolioTheme {
  if (hour >= 7 && hour < 18) return "light";
  if (hour >= 18 && hour < 22) return "dark";
  return "night";
}
```

- [x] **Step 2: Use helper in `usePortfolioTheme.ts`**

```ts
function getDefaultTheme(): PortfolioTheme {
  if (typeof window === "undefined") return "light";
  return getPortfolioThemeForHour(new Date().getHours());
}

function readStoredTheme(): PortfolioTheme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(PORTFOLIO_THEME_STORAGE_KEY);
  return isPortfolioTheme(stored) ? stored : getDefaultTheme();
}
```

- [x] **Step 3: Mirror logic in `layout.tsx` inline script**

```ts
const themeInitScript = `(function(){try{var k="portfolio-theme";var t=localStorage.getItem(k);if(t!=="light"&&t!=="dark"&&t!=="night"){var h=new Date().getHours();t=h>=7&&h<18?"light":h>=18&&h<22?"dark":"night"}document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;
```

- [x] **Step 4: Validate**

Run: `npx tsc --noEmit`
Expected: exits with code 0.
