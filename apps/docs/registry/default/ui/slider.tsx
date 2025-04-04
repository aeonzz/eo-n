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

function SliderTrack({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Track>) {
  return (
    <SliderPrimitive.Track
      data-slot="slider-track"
      className={cn("bg-secondary h-1 w-full rounded-md", className)}
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
      className={cn("min-w-52", className)}
      {...props}
    >
      {children}
      <SliderPrimitive.Control
        data-slot="slider-control"
        className="flex w-full touch-none items-center select-none"
      >
        <SliderTrack>
          <SliderPrimitive.Indicator className="bg-secondary-foreground data-[disabled]:bg-muted-foreground rounded-md select-none data-[disabled]:cursor-not-allowed" />
          <SliderPrimitive.Thumb className="bg-secondary-foreground data-[disabled]:bg-muted-foreground size-4 rounded-full border data-[disabled]:cursor-not-allowed" />
        </SliderTrack>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider, SliderValue, SliderTrack };
