export const PORTFOLIO_THEMES = ["light", "dark", "night"] as const;
export type PortfolioTheme = (typeof PORTFOLIO_THEMES)[number];

export const PORTFOLIO_THEME_STORAGE_KEY = "portfolio-theme";
export const PORTFOLIO_THEME_MODE_STORAGE_KEY = "portfolio-theme-mode";

export function isPortfolioTheme(value: string | null): value is PortfolioTheme {
  return value === "light" || value === "dark" || value === "night";
}

export function getNextPortfolioTheme(current: PortfolioTheme): PortfolioTheme {
  const index = PORTFOLIO_THEMES.indexOf(current);
  return PORTFOLIO_THEMES[(index + 1) % PORTFOLIO_THEMES.length];
}

export function getPortfolioThemeForHour(hour: number): PortfolioTheme {
  if (hour >= 7 && hour < 18) return "light";
  if (hour >= 18 && hour < 22) return "dark";
  return "night";
}

export const PORTFOLIO_THEME_LABELS: Record<PortfolioTheme, string> = {
  light: "Light",
  dark: "Dark",
  night: "Night",
};
