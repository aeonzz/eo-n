"use client";

import * as React from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip";

import { cn } from "@/lib/utils";

function TooltipProvider({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" {...props} />;
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
  extends React.ComponentProps<typeof TooltipPrimitive.Popup> {
  positionerProps?: Omit<TooltipPrimitive.Positioner.Props, "className">;
}

function TooltipContent({
  positionerProps,
  className,
  children,
  ...props
}: TooltipContentProps) {
  const { sideOffset = 6 } = positionerProps || {};
  return (
    <TooltipPortal>
      <TooltipPrimitive.Positioner
        data-slot="tooltip-positioner"
        sideOffset={sideOffset}
        {...positionerProps}
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-popup"
          className={cn(
            "bg-popover text-popover-foreground z-50 overflow-hidden rounded-md border px-3 py-1.5 text-xs transition-[transform,scale,opacity] duration-150 ease-out",
            "origin-[var(--transform-origin)] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            className
          )}
          {...props}
        >
          {children}
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
