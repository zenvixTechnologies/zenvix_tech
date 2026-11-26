"use client";

import { useEffect, useState } from "react";

/** Sticky contents list that highlights the section currently in view. */
export default function LegalToc({ items }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const nodes = items.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page">
      <p className="label mb-5 text-muted-dark">On this page</p>
      <ol className="space-y-1 border-l border-line-dark">
        {items.map(({ id, heading }, index) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                aria-current={isActive ? "location" : undefined}
                className={`relative -ml-px flex gap-3 border-l py-2 pl-4 text-sm transition-colors duration-500 ${
                  isActive
                    ? "border-violet-deep font-semibold text-ink"
                    : "border-transparent text-muted-dark hover:text-ink"
                }`}
                href={`#${id}`}
              >
                <span className={`tabular-nums ${isActive ? "text-violet-deep" : ""}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {heading}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
