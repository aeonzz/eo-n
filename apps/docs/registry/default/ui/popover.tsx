"use client";

import * as React from "react";
import { Popover as PopoverPrimitive } from "@base-ui-components/react/popover";

import { cn } from "@/lib/utils";

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverPortal({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Portal>) {
  return <PopoverPrimitive.Portal data-slot="popover-portal" {...props} />;
}

function PopoverBackdrop({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Backdrop>) {
  return <PopoverPrimitive.Backdrop data-slot="popover-backdrop" {...props} />;
}

interface PopoverContentProps
  extends Omit<
    React.ComponentProps<typeof PopoverPrimitive.Positioner>,
    "render"
  > {}

function PopoverContent({
  className,
  sideOffset = 4,
  children,
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPortal>
      <PopoverBackdrop />
      <PopoverPrimitive.Positioner
        data-slot="popover-positioner"
        sideOffset={sideOffset}
        className="z-50 size-auto"
        {...props}
      >
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={cn(
            "bg-popover text-popover-foreground z-50 h-full max-h-[var(--available-height)] w-full min-w-[8rem] overflow-x-hidden overflow-y-auto overscroll-contain rounded-md border transition-[transform,scale,opacity] duration-150 ease-out",
            "origin-[var(--transform-origin)] p-4 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            className
          )}
          {...props}
        >
          {children}
        </PopoverPrimitive.Popup>
      </PopoverPrimitive.Positioner>
    </PopoverPortal>
  );
}

function PopoverTitle({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Title>) {
  return (
    <PopoverPrimitive.Title
      data-slot="popover-title"
      className={cn("text-lg leading-none font-medium", className)}
      {...props}
    />
  );
}

function PopoverDescription({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Description>) {
  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      className={cn("text-muted-foreground mt-1 text-sm", className)}
      {...props}
    />
  );
}
export {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverBackdrop,
  PopoverTitle,
  PopoverDescription,
  PopoverContent,
};
