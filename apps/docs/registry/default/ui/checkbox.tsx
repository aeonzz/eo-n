"use client";

import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react/checkbox";
import { Check, Minus } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
  parent = false,
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      data-parent={parent}
      parent={parent}
      className={cn(
        "peer border-primary dark:border-primary/50 focus-visible:border-ring focus-visible:ring-ring/50 data-[checked]:bg-primary data-[indeterminate]:bg-border data-[indeterminate]:text-primary data-[checked]:border-primary data-[checked]:text-primary-foreground size-4 shrink-0 rounded-sm border shadow duration-150 ease-out outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        parent && "-ml-4",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn(
          "flex h-full items-center justify-center text-current duration-150 ease-out data-[ending-style]:scale-60 data-[starting-style]:scale-60 data-[unchecked]:hidden"
        )}
        render={(props, state) => (
          <span {...props}>
            {state.indeterminate ? (
              <Minus className="size-4" />
            ) : (
              <Check className="size-4" />
            )}
          </span>
        )}
      />
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
