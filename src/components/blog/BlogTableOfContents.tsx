"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type TocHeading = {
  id: string;
  text: string;
  level: number;
};

const SCROLL_OFFSET = 96;

function collectHeadings(): TocHeading[] {
  const article = document.querySelector(".blog-post-article");
  if (!article) return [];

  return Array.from(article.querySelectorAll("h2, h3"))
    .filter((element) => !element.hasAttribute("data-exclude-nav"))
    .map((element, index) => ({
      id: element.id || `heading-${index}`,
      text: element.textContent?.trim() ?? "",
      level: Number(element.tagName.charAt(1)),
    }))
    .filter((heading) => heading.text.length > 0);
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function BlogTableOfContents() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const updateHeadings = () => {
      const next = collectHeadings();
      setHeadings(next);
      setActiveId((current) => current ?? next[0]?.id ?? null);
    };

    updateHeadings();

    const article = document.querySelector(".blog-post-article");
    const observer = article ? new MutationObserver(updateHeadings) : null;
    observer?.observe(article!, { childList: true, subtree: true });

    const retry = window.setTimeout(updateHeadings, 100);
    const retryLate = window.setTimeout(updateHeadings, 500);

    return () => {
      observer?.disconnect();
      window.clearTimeout(retry);
      window.clearTimeout(retryLate);
    };
  }, [pathname]);

  useEffect(() => {
    if (headings.length === 0) return;

    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible[0]?.target.id) {
        setActiveId(visible[0].target.id);
      }
    }, { rootMargin: `-${SCROLL_OFFSET}px 0px -55% 0px`, threshold: [0, 1] });

    for (const element of elements) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="blog-post-toc blog-post-toc--desktop" aria-label="Contents">
      <ul className="blog-post-toc__list">
        {headings.map((heading) => {
          const isActive = heading.id === activeId;
          return (
            <li key={heading.id} className={`blog-post-toc__item blog-post-toc__item--h${heading.level}${isActive ? " is-active" : ""}`}>
              <a
                href={`#${heading.id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  const target = document.getElementById(heading.id);
                  if (!target) return;
                  const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
                  window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
                  setActiveId(heading.id);
                }}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
