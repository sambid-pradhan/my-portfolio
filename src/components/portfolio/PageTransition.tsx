"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getPageDirection, pathnameToPage, useReducedMotion } from "./usePageTransition";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const prevRef = useRef(pathname);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    setDirection(getPageDirection(pathnameToPage(prevRef.current), pathnameToPage(pathname)));
    prevRef.current = pathname;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }, [pathname, reduced]);

  if (reduced) {
    return <main className="page-stage">{children}</main>;
  }

  return (
    <main className="page-stage">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          className="page is-active"
          initial={{ opacity: 0, x: direction * 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -16 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
