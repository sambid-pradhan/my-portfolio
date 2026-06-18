"use client";

import { PortfolioFooter } from "./PortfolioFooter";
import { PortfolioNav } from "./PortfolioNav";
import { PageTransition } from "./PageTransition";
import { ToastProvider } from "./Toast";

export function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <PortfolioNav />
      <PageTransition>{children}</PageTransition>
      <PortfolioFooter />
    </ToastProvider>
  );
}
