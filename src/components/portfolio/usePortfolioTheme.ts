"use client";

import { useCallback, useEffect, useState } from "react";
import {
  isPortfolioTheme,
  PORTFOLIO_THEME_MODE_STORAGE_KEY,
  PORTFOLIO_THEME_STORAGE_KEY,
  type PortfolioTheme,
} from "./portfolioTheme";

function getDefaultTheme(): PortfolioTheme {
  if (typeof window === "undefined") return "light";
  const themeMode = localStorage.getItem(PORTFOLIO_THEME_MODE_STORAGE_KEY);
  const storedTheme = localStorage.getItem(PORTFOLIO_THEME_STORAGE_KEY);
  const normalizedTheme = storedTheme === "night" ? "dark" : storedTheme;
  return themeMode === "manual" && isPortfolioTheme(normalizedTheme) ? normalizedTheme : "light";
}

function applyTheme(theme: PortfolioTheme, mode: "default" | "manual" = "default") {
  document.documentElement.setAttribute("data-portfolio-theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(PORTFOLIO_THEME_STORAGE_KEY, theme);
  localStorage.setItem(PORTFOLIO_THEME_MODE_STORAGE_KEY, mode);
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
    applyTheme(next, "manual");
  }, []);

  return { theme, setTheme, mounted };
}
