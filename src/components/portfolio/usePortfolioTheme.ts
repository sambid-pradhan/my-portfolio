"use client";

import { useCallback, useEffect, useState } from "react";
import {
  isPortfolioTheme,
  PORTFOLIO_THEME_STORAGE_KEY,
  type PortfolioTheme,
} from "./portfolioTheme";

function readStoredTheme(): PortfolioTheme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(PORTFOLIO_THEME_STORAGE_KEY);
  return isPortfolioTheme(stored) ? stored : "light";
}

function applyTheme(theme: PortfolioTheme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(PORTFOLIO_THEME_STORAGE_KEY, theme);
}

export function usePortfolioTheme() {
  const [theme, setThemeState] = useState<PortfolioTheme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = readStoredTheme();
    setThemeState(stored);
    applyTheme(stored);
    setMounted(true);
  }, []);

  const setTheme = useCallback((next: PortfolioTheme) => {
    setThemeState(next);
    applyTheme(next);
  }, []);

  return { theme, setTheme, mounted };
}
