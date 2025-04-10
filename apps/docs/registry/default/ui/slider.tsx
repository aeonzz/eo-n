"use client";

import * as React from "react";
import { Slider as SliderPrimitive } from "@base-ui-components/react/slider";

import { cn } from "@/lib/utils";

function SliderValue({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Value>) {
  return (
    <SliderPrimitive.Value
      data-slot="slider-value"
      className={cn(
        "data-[disabled]:text-muted-foreground text-sm leading-none font-medium tracking-tight data-[disabled]:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
}

function Slider({
  children,
  className,
  ...props
}: Omit<React.ComponentProps<typeof SliderPrimitive.Root>, "orientation">) {
  return (
    <SliderPrimitive.Root
      data-slot="slider"
      className={cn("relative w-full data-[disabled]:opacity-50", className)}
      {...props}
    >
      {children}
      <SliderPrimitive.Control
        data-slot="slider-control"
        className="flex w-full touch-none items-center select-none"
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="bg-secondary h-1 w-full rounded-md"
        >
          <SliderPrimitive.Indicator className="bg-secondary-foreground rounded-md select-none" />
          <SliderPrimitive.Thumb className="bg-background ring-ring/50 border-primary size-4 shrink-0 rounded-full border-2 shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden data-[disabled]:pointer-events-none data-[dragging]:ring-4 data-[dragging]:outline-hidden" />
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider, SliderValue };
