"use client";

import * as React from "react";
import { Progress as ProgressPrimitive } from "@base-ui-components/react/progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative grid grid-cols-1 gap-1 overflow-hidden has-data-[slot='progress-label']:grid-cols-2",
        className
      )}
      {...props}
    >
      {children}
      <ProgressPrimitive.Track
        data-slot="progress-track"
        className="bg-secondary col-span-full block h-2 w-full overflow-hidden rounded-full"
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="bg-primary block transition-all duration-500"
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  );
}

function ProgressLabel({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Label>) {
  return (
    <ProgressPrimitive.Label
      data-slot="progress-label"
      className={cn("text-foreground text-sm font-medium", className)}
      {...props}
    />
  );
}

function ProgressValue({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Value>) {
  return (
    <ProgressPrimitive.Value
      data-slot="progress-value"
      className={cn(
        "text-foreground text-right text-sm font-medium",
        className
      )}
      {...props}
    />
  );
}

export { Progress, ProgressValue, ProgressLabel };
