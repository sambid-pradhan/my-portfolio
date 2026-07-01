"use client";

import { useCallback, useEffect, useState } from "react";
import {
  getPortfolioThemeForHour,
  PORTFOLIO_THEME_STORAGE_KEY,
  type PortfolioTheme,
} from "./portfolioTheme";

function getDefaultTheme(): PortfolioTheme {
  if (typeof window === "undefined") return "light";
  return getPortfolioThemeForHour(new Date().getHours());
}

function applyTheme(theme: PortfolioTheme) {
  document.documentElement.setAttribute("data-portfolio-theme", theme);
  document.documentElement.setAttribute("data-theme", theme === "night" ? "dark" : theme);
  localStorage.setItem(PORTFOLIO_THEME_STORAGE_KEY, theme);
}

export function usePortfolioTheme() {
  const [theme, setThemeState] = useState<PortfolioTheme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const defaultTheme = getDefaultTheme();
    setThemeState(defaultTheme);
    applyTheme(defaultTheme);
    setMounted(true);
  }, []);

  const setTheme = useCallback((next: PortfolioTheme) => {
    setThemeState(next);
    applyTheme(next);
  }, []);

  return { theme, setTheme, mounted };
}
