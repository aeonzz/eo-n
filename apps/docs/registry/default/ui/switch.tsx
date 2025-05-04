"use client";

import * as React from "react";
import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const switchVariants = cva(
  "peer group data-[checked]:bg-primary dark:data-[unchecked]:bg-input/80 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center border px-0.5 shadow-xs transition-all duration-150 outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "rounded-full",
        square: "rounded-sm",
      },
      size: {
        default: "h-6.5 w-10",
        sm: "h-5.5 w-8",
        lg: "h-7.5 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type SwitchVariants = VariantProps<typeof switchVariants>;

export interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root>,
    SwitchVariants {}

function Switch({ className, variant, size, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(switchVariants({ variant, size, className }))}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "bg-background dark:data-[unchecked]:bg-foreground dark:data-[checked]:bg-primary-foreground pointer-events-none size-5 rounded-full shadow-sm ring-0 transition-transform duration-150 ease-in-out data-[checked]:translate-x-3.5",
          size === "sm" && "size-4 data-[checked]:translate-x-2.5",
          size === "lg" && "size-6 data-[checked]:translate-x-4.5",
          variant === "square" && "rounded"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch, switchVariants };
