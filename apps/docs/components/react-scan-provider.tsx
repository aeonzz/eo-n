"use client";

import * as React from "react";
import { scan } from "react-scan";

interface ReactScanProviderProps {
  children: React.ReactNode;
}

export function ReactScanProvider({ children }: ReactScanProviderProps) {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (process.env.NODE_ENV !== "development") return;

    scan({
      enabled: true,
      trackUnnecessaryRenders: true,
    });
  }, []);

  return <>{children}</>;
}
