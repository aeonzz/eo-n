"use client";

import * as React from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const TooltipCreateHandle = TooltipPrimitive.createHandle;

function TooltipProvider({
  delay = 0,
  ...props
}: TooltipPrimitive.Provider.Props) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  );
}

const Tooltip = TooltipPrimitive.Root;

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
        className="z-50 h-(--positioner-height) max-h-[var(--available-height)] w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom,transform] duration-150 ease-out"
        {...props}
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-popup"
          className={cn(
            "bg-primary text-primary-foreground relative h-(--popup-height,auto) max-h-[var(--available-height)] w-(--popup-width,auto) max-w-[var(--available-width)] rounded-md text-xs text-balance transition-[width,height,opacity,scale] duration-150 ease-out",
            "origin-[var(--transform-origin)] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            className
          )}
        >
          <TooltipViewport>{children}</TooltipViewport>
          <TooltipPrimitive.Arrow className="transition-[left] duration-150 ease-out data-[side=bottom]:top-[-10px] data-[side=bottom]:rotate-180 data-[side=left]:right-[-10px] data-[side=left]:-rotate-90 data-[side=right]:left-[-10px] data-[side=right]:rotate-90 data-[side=top]:bottom-[-10px]">
            <ChevronDown className="fill-primary stroke-primary size-4 shrink-0" />
          </TooltipPrimitive.Arrow>
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPortal>
  );
}

function TooltipViewport({
  className,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Viewport>) {
  return (
    <TooltipPrimitive.Viewport
      data-slot="tooltip-viewport"
      className={cn(
        "relative size-full overflow-visible",
        "px-[var(--viewport-inline-padding)] py-1 [--viewport-inline-padding:0.5rem] **:data-current:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))] **:data-current:opacity-100 **:data-current:transition-opacity **:data-current:data-ending-style:opacity-0 **:data-previous:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))] **:data-previous:opacity-100 **:data-previous:transition-opacity **:data-previous:data-ending-style:opacity-0 **:data-current:data-starting-style:opacity-0 **:data-previous:data-starting-style:opacity-0",
        className
      )}
      {...props}
    />
  );
}

export {
  TooltipCreateHandle,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipViewport,
};
