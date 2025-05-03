"use client";

import * as React from "react";
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui-components/react/scroll-area";

import { cn } from "@/lib/utils";

function ScrollArea({
  orientation,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root> &
  Pick<ScrollAreaPrimitive.Scrollbar.Props, "orientation">) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className="relative"
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="focus-visible:ring-ring/50 size-full overflow-hidden overscroll-contain rounded-[inherit] px-3 transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1">
        <ScrollAreaPrimitive.Content>{children}</ScrollAreaPrimitive.Content>
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaScrollbar orientation={orientation} />
      <ScrollAreaPrimitive.Corner />
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

export { ScrollArea, ScrollAreaScrollbar };
