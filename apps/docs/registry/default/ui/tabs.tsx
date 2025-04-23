"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: Omit<React.ComponentProps<typeof TabsPrimitive.Root>, "orientation">) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        "flex flex-col gap-1 data-[orientation='vertical']:flex-row",
        className
      )}
      {...props}
    />
  );
}

function TabsIndicator({
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Indicator>) {
  return (
    <TabsPrimitive.Indicator
      data-slot="tabs-Indicator"
      renderBeforeHydration
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
        "bg-muted text-muted-foreground relative z-0 flex items-center justify-center gap-1 rounded-md px-1 data-[orientation='vertical']:flex-col",
        className
      )}
      {...props}
    >
      {children}
      <TabsIndicator className="bg-background absolute top-1/2 left-0 z-[-1] h-7 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] -translate-y-1/2 rounded-sm shadow-sm transition-all duration-300 ease-out data-[orientation='vertical']:h-[var(--active-tab-height)] data-[orientation='vertical']:w-6 data-[orientation='vertical']:translate-x-0 data-[orientation='vertical']:translate-y-[var(--active-tab-top)]" />
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
        "ring-offset-background focus-visible:ring-ring data-[selected]:text-foreground flex h-9 w-full items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
      className={cn(
        "ring-offset-background focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsIndicator, TabsContent };
