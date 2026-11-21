import * as React from "react";

// React's <ViewTransition> (enabled via experimental.viewTransition in next.config).
// Falls back to rendering children untouched where the export is unavailable.
const ViewTransition = React.ViewTransition ?? React.unstable_ViewTransition;

/** Morphs an element between routes when both pages render the same `name`. */
export default function SharedTransition({ name, children }) {
  if (!ViewTransition) return children;
  return (
    <ViewTransition name={name} share="project-morph">
      {children}
    </ViewTransition>
  );
}
