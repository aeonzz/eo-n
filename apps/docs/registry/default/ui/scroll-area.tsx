"use client";

import * as React from "react";
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react";

import { cn } from "@/lib/utils";

function ScrollArea({
  scrollbars = "vertical",
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root> & {
  scrollbars?: "vertical" | "horizontal" | "both";
}) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative flex min-h-0 overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className={cn(
          "focus-visible:ring-ring/50 min-h-0 flex-1 overscroll-contain rounded-[inherit] p-3 transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
          scrollbars === "vertical" && "overflow-y-auto",
          scrollbars === "horizontal" && "overflow-x-auto",
          scrollbars === "both" && "overflow-auto"
        )}
      >
        <ScrollAreaPrimitive.Content>{children}</ScrollAreaPrimitive.Content>
      </ScrollAreaPrimitive.Viewport>
      {scrollbars === "vertical" && (
        <ScrollAreaScrollbar orientation="vertical" />
      )}
      {scrollbars === "horizontal" && (
        <ScrollAreaScrollbar orientation="horizontal" />
      )}
      {scrollbars === "both" && (
        <>
          <ScrollAreaScrollbar orientation="vertical" />
          <ScrollAreaScrollbar orientation="horizontal" />
        </>
      )}
      <ScrollAreaCorner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollAreaScrollbar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "m-0.5 touch-none rounded opacity-0 transition-opacity delay-300 select-none data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[hovering]:duration-75 data-[scrolling]:opacity-100 data-[scrolling]:delay-0 data-[scrolling]:duration-75",
        orientation === "vertical" && "w-2",
        orientation === "horizontal" && "h-2",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb className="bg-border size-full rounded-full" />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

function ScrollAreaCorner({
  className,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Corner>) {
  return (
    <ScrollAreaPrimitive.Corner
      data-slot="scroll-area-corner"
      className={cn(className)}
      {...props}
    />
  );
}

export { ScrollArea, ScrollAreaScrollbar, ScrollAreaCorner };
