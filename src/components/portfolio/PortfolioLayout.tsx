"use client";

import { PortfolioFooter } from "./PortfolioFooter";
import { PortfolioNav } from "./PortfolioNav";
import { PageTransition } from "./PageTransition";
import { ToastProvider } from "./Toast";

export function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <PortfolioNav />
      <main id="main-content">
        <PageTransition>{children}</PageTransition>
      </main>
      <PortfolioFooter />
    </ToastProvider>
  );
}
