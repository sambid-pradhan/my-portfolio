import { useEffect, useState } from "react";

export type Page = "home" | "about" | "work" | "blog";

const PAGE_ORDER: Page[] = ["home", "about", "work", "blog"];

export function pathnameToPage(pathname: string): Page {
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/work")) return "work";
  if (pathname.startsWith("/blog")) return "blog";
  return "home";
}

export function getPageDirection(from: Page, to: Page): 1 | -1 {
  const fromIdx = PAGE_ORDER.indexOf(from);
  const toIdx = PAGE_ORDER.indexOf(to);
  if (fromIdx === toIdx) return 1;
  return toIdx > fromIdx ? 1 : -1;
}

export function useHeroIntro() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("portfolio-hero-intro")) setActive(false);
  }, []);

  useEffect(() => {
    if (!active) return;
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("portfolio-hero-intro", "1");
      setActive(false);
    }, 1400);
    return () => window.clearTimeout(timer);
  }, [active]);

  return active;
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}
