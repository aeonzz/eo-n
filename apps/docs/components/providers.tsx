"use client";

import { RootProvider, type RootProviderProps } from "fumadocs-ui/provider";
import { createStore, Provider as JotaiProvider } from "jotai";

import { TooltipProvider } from "@/components/ui/tooltip";

const store = createStore();

interface ProvidersProps extends RootProviderProps {
  children: React.ReactNode;
}

export function Providers({ children, ...props }: ProvidersProps) {
  return (
    <RootProvider {...props}>
      <JotaiProvider store={store}>
        <TooltipProvider>{children}</TooltipProvider>
      </JotaiProvider>
    </RootProvider>
  );
}
