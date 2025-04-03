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
      className="relative"
      {...props}
    >
      <ProgressPrimitive.Track
        data-slot="progress-track"
        className={cn(
          "bg-muted block h-2 w-full overflow-hidden rounded-full",
          className
        )}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="bg-primary block transition-all duration-500"
        />
      </ProgressPrimitive.Track>
      {children}
    </ProgressPrimitive.Root>
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
        "text-foreground mt-2 flex justify-end text-xs font-medium",
        className
      )}
      {...props}
    />
  );
}

export { Progress, ProgressValue };
