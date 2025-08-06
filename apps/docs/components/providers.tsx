"use client";

import { RootProvider } from "fumadocs-ui/provider";
import { createStore, Provider as JotaiProvider } from "jotai";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ToastProvider } from "@/registry/default/ui/toast";

import { ReactScanProvider } from "./react-scan-provider";

const store = createStore();

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ToastProvider richColors>
      <RootProvider
        theme={{
          attribute: "class",
          defaultTheme: "system",
          enableSystem: true,
          disableTransitionOnChange: true,
        }}
        search={{
          links: [
            ["Introduction", "/docs/ui"],
            ["Installtion", "/docs/ui/installation"],
            ["Components", "/docs/ui/accordion"],
          ],
        }}
      >
        <JotaiProvider store={store}>
          <TooltipProvider>
            <ReactScanProvider>{children}</ReactScanProvider>
          </TooltipProvider>
        </JotaiProvider>
      </RootProvider>
    </ToastProvider>
  );
}
