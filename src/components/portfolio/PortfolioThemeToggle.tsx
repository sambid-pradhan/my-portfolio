"use client";

import { PORTFOLIO_THEMES, PORTFOLIO_THEME_LABELS, type PortfolioTheme } from "./portfolioTheme";
import { usePortfolioTheme } from "./usePortfolioTheme";

const THEME_ICONS: Record<PortfolioTheme, string> = {
  light: "☀",
  dark: "◐",
  night: "★",
};

export function PortfolioThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, mounted } = usePortfolioTheme();

  if (!mounted) {
    return (
      <div className={`theme-switcher${className ? ` ${className}` : ""}`} aria-hidden="true">
        <span className="theme-switcher__btn is-active">☀</span>
      </div>
    );
  }

  return (
    <div
      className={`theme-switcher${className ? ` ${className}` : ""}`}
      role="radiogroup"
      aria-label="Color theme"
    >
      {PORTFOLIO_THEMES.map((option) => (
        <button
          key={option}
          type="button"
          role="radio"
          aria-checked={theme === option}
          aria-label={`${PORTFOLIO_THEME_LABELS[option]} mode`}
          title={PORTFOLIO_THEME_LABELS[option]}
          className={`theme-switcher__btn${theme === option ? " is-active" : ""}`}
          onClick={() => setTheme(option)}
        >
          {THEME_ICONS[option]}
        </button>
      ))}
    </div>
  );
}
