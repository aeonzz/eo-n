"use client";

import * as React from "react";
import { Popover as PopoverPrimitive } from "@base-ui/react";

import { cn } from "@/lib/utils";

const PopoverCreateHandle = PopoverPrimitive.createHandle;

const Popover = PopoverPrimitive.Root;

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverBackdrop({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Backdrop>) {
  return <PopoverPrimitive.Backdrop data-slot="popover-backdrop" {...props} />;
}

function PopoverPortal({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Portal>) {
  return <PopoverPrimitive.Portal data-slot="popover-portal" {...props} />;
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
        className="z-50 h-(--positioner-height) max-h-[var(--available-height)] w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom,transform] duration-150 ease-out"
        {...props}
      >
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={cn(
            "group bg-popover text-popover-foreground relative h-(--popup-height,auto) max-h-[var(--available-height)] w-(--popup-width,auto) max-w-[var(--available-width)] overflow-x-hidden overflow-y-auto overscroll-contain rounded-md border p-4 shadow-md transition-[width,height,opacity,scale] duration-150 ease-out",
            "origin-[var(--transform-origin)] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            className
          )}
        >
          <PopoverViewport>{children}</PopoverViewport>
        </PopoverPrimitive.Popup>
      </PopoverPrimitive.Positioner>
    </PopoverPortal>
  );
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="popover-header"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function PopoverTitle({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Title>) {
  return (
    <PopoverPrimitive.Title
      data-slot="popover-title"
      className={cn("text-base leading-none font-medium", className)}
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
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function PopoverCLose({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Close>) {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />;
}

function PopoverViewport({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Viewport>) {
  return (
    <PopoverPrimitive.Viewport
      data-slot="popover-viewport"
      className={cn(
        "relative size-full overflow-visible",
        "**:data-current:w-[calc(var(--popup-width)-2)] **:data-current:opacity-100 **:data-current:transition-opacity **:data-current:data-ending-style:opacity-0 **:data-previous:w-[calc(var(--popup-width)-2)] **:data-previous:opacity-100 **:data-previous:transition-opacity **:data-previous:data-ending-style:opacity-0 **:data-current:data-starting-style:opacity-0 **:data-previous:data-starting-style:opacity-0",
        className
      )}
      {...props}
    />
  );
}

export {
  PopoverCreateHandle,
  Popover,
  PopoverTrigger,
  PopoverBackdrop,
  PopoverPortal,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  PopoverCLose,
  PopoverViewport,
};
