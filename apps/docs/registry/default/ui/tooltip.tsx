"use client";

import * as React from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

function TooltipProvider({
  delay = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipPortal({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Portal>) {
  return <TooltipPrimitive.Portal data-slot="tooltip-portal" {...props} />;
}

interface TooltipContentProps
  extends Omit<
    React.ComponentProps<typeof TooltipPrimitive.Positioner>,
    "render"
  > {}

function TooltipContent({
  className,
  sideOffset = 10,
  children,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPortal>
      <TooltipPrimitive.Positioner
        data-slot="tooltip-positioner"
        sideOffset={sideOffset}
        className="z-50 size-auto"
        {...props}
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-popup"
          className={cn(
            "bg-primary text-primary-foreground w-fit rounded-md px-3 py-1.5 text-xs text-balance transition-[transform,scale,opacity] duration-150 ease-out",
            "origin-[var(--transform-origin)] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            className
          )}
        >
          {children}
          <TooltipPrimitive.Arrow className="data-[side=bottom]:top-[-10px] data-[side=bottom]:rotate-180 data-[side=left]:right-[-10px] data-[side=left]:-rotate-90 data-[side=right]:left-[-10px] data-[side=right]:rotate-90 data-[side=top]:bottom-[-10px]">
            <ChevronDown className="fill-primary stroke-primary size-4 shrink-0" />
          </TooltipPrimitive.Arrow>
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPortal>
  );
}

export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
};
