"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { pathnameToPage } from "./usePageTransition";

const links = [
  { href: "/", page: "home" as const, label: "Home" },
  { href: "/about", page: "about" as const, label: "About" },
  { href: "/work", page: "work" as const, label: "Work" },
  { href: "/blog", page: "blog" as const, label: "Blog" },
];

export function PortfolioNav() {
  const pathname = usePathname();
  const active = pathnameToPage(pathname);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <nav aria-label="Main">
      <Link href="/" className="nav-logo" onClick={close}>
        S<span>.</span>Pradhan
      </Link>
      <button
        type="button"
        className="nav-menu-btn"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <ul className={`nav-links${open ? " is-open" : ""}`} id="nav-links">
        {links.map(({ href, page, label }) => (
          <li key={page}>
            <Link
              href={href}
              className={active === page ? "active" : undefined}
              onClick={close}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
