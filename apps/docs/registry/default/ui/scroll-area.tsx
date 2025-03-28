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
      className="relative h-96 overflow-hidden"
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="h-full w-full overscroll-contain rounded-[inherit] px-3">
        {children}
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
        "bg-muted m-1.5 rounded opacity-0 transition-opacity delay-300 select-none data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[hovering]:duration-75 data-[scrolling]:opacity-100 data-[scrolling]:delay-0 data-[scrolling]:duration-75",
        orientation === "vertical" && "w-1.5",
        orientation === "horizontal" && "h-1.5",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb className="bg-muted-foreground/50 size-full rounded-full" />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export { ScrollArea, ScrollAreaScrollbar };
