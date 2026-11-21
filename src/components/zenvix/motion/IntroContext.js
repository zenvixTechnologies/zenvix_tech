"use client";

import { createContext, useContext, useState } from "react";

const IntroContext = createContext({ ready: true, setReady: () => {} });

/** `ready` flips true once the intro curtain lifts (or immediately if skipped). */
export function IntroProvider({ children }) {
  const [ready, setReady] = useState(false);

  return (
    <IntroContext.Provider value={{ ready, setReady }}>
      {children}
    </IntroContext.Provider>
  );
}

export const useIntro = () => useContext(IntroContext);
