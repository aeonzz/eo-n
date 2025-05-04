"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        "flex flex-col gap-2 data-[orientation=vertical]:flex-row",
        className
      )}
      {...props}
    />
  );
}

function TabsList({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground relative z-0 flex items-center rounded-lg p-1 data-[orientation=horizontal]:h-9 data-[orientation=horizontal]:justify-center data-[orientation=vertical]:h-fit data-[orientation=vertical]:flex-col data-[orientation=vertical]:justify-start",
        className
      )}
      {...props}
    >
      {children}
      <TabsPrimitive.Indicator
        renderBeforeHydration
        className="bg-background dark:border-input dark:bg-input/30 absolute z-[-1] h-[calc(var(--active-tab-height))] w-[var(--active-tab-width)] flex-1 rounded-md border shadow-sm transition-all duration-300 ease-out focus-visible:ring-[3px] focus-visible:outline-1 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:left-0 data-[orientation=horizontal]:translate-x-[var(--active-tab-left)] data-[orientation=horizontal]:-translate-y-1/2 data-[orientation=vertical]:top-0 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:translate-y-[var(--active-tab-top)]"
      />
    </TabsPrimitive.List>
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Tab>) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "ring-offset-background dark:data-[selected]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground dark:text-muted-foreground flex w-full items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color] focus-visible:ring-[3px] focus-visible:outline-1 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Panel>) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
