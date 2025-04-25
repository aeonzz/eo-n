"use client";

import { RootProvider, type RootProviderProps } from "fumadocs-ui/provider";
import { createStore, Provider as JotaiProvider } from "jotai";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ToastProvider } from "@/registry/default/ui/toast";

import { ReactScanProvider } from "./react-scan-provider";

const store = createStore();

interface ProvidersProps extends RootProviderProps {
  children: React.ReactNode;
}

export function Providers({ children, ...props }: ProvidersProps) {
  return (
    <ToastProvider richColors>
      <RootProvider {...props}>
        <JotaiProvider store={store}>
          <TooltipProvider>
            <ReactScanProvider>{children}</ReactScanProvider>
          </TooltipProvider>
        </JotaiProvider>
      </RootProvider>
    </ToastProvider>
  );
}
