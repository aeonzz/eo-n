"use client";

import * as React from "react";
import { Meter as MeterPrimitive } from "@base-ui-components/react/meter";

import { cn } from "@/lib/utils";

function Meter({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MeterPrimitive.Root>) {
  return (
    <MeterPrimitive.Root
      data-slot="meter"
      className={cn(
        "relative grid w-full grid-cols-1 gap-1 overflow-hidden select-none has-[[data-slot=meter-label]]:grid-cols-2",
        className
      )}
      {...props}
    >
      {children}
      <MeterPrimitive.Track
        data-slot="meter-track"
        className="bg-secondary col-span-full block h-2 w-full overflow-hidden rounded-full"
      >
        <MeterPrimitive.Indicator
          data-slot="meter-indicator"
          className="bg-primary block transition-all duration-500"
        />
      </MeterPrimitive.Track>
    </MeterPrimitive.Root>
  );
}

function MeterValue({
  className,
  ...props
}: React.ComponentProps<typeof MeterPrimitive.Value>) {
  return (
    <MeterPrimitive.Value
      data-slot="meter-value"
      className={cn(
        "text-foreground text-right text-sm font-medium",
        className
      )}
      {...props}
    />
  );
}

function MeterLabel({
  className,
  ...props
}: React.ComponentProps<typeof MeterPrimitive.Label>) {
  return (
    <MeterPrimitive.Label
      data-slot="meter-label"
      className={cn("text-foreground text-sm font-medium", className)}
      {...props}
    />
  );
}

export { Meter, MeterValue, MeterLabel };
