"use client";

import * as React from "react";
import { Radio as RadioPrimitive } from "@base-ui-components/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui-components/react/radio-group";

import { cn } from "@/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive>) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("flex flex-col gap-2.5", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioPrimitive.Root>) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "peer data-[checked]:bg-primary data-[unchecked]:border-primary flex size-4 shrink-0 items-center justify-center rounded-full outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[unchecked]:border data-[unchecked]:bg-transparent",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator className="before:bg-background flex before:size-2 before:rounded-full data-[unchecked]:hidden" />
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
