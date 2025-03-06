import * as React from "react";
import { NumberField as NumberInputPrimitive } from "@base-ui-components/react/number-field";

import { cn } from "@/lib/utils";

function NumberInput({
  className,
  ...props
}: React.ComponentProps<typeof NumberInputPrimitive.Root>) {
  return (
    <NumberInputPrimitive.Root
      data-slot="number-input"
      className={cn("flex flex-col items-start gap-1", className)}
      {...props}
    />
  );
}

function NumberInputScrubArea({
  className,
  ...props
}: React.ComponentProps<typeof NumberInputPrimitive.ScrubArea>) {
  return (
    <NumberInputPrimitive.ScrubArea
      data-slot="number-input-scrub-area"
      className={cn("cursor-ew-resize", className)}
      {...props}
    />
  );
}

function NumberInputScrubAreaCursor({
  ...props
}: React.ComponentProps<typeof NumberInputPrimitive.ScrubAreaCursor>) {
  return (
    <NumberInputPrimitive.ScrubAreaCursor
      data-slot="number-input-scrub-area-cursor"
      {...props}
    />
  );
}

function NumberInputGroup({
  className,
  ...props
}: React.ComponentProps<typeof NumberInputPrimitive.Group>) {
  return (
    <NumberInputPrimitive.Group
      data-slot="number-input-group"
      className={cn("", className)}
      {...props}
    />
  );
}
function NumberInputField({
  className,
  ...props
}: React.ComponentProps<typeof NumberInputPrimitive.Input>) {
  return (
    <NumberInputPrimitive.Input
      data-slot="number-input-field"
      className={cn("", className)}
      {...props}
    />
  );
}

function NumberInputDecrement({
  className,
  ...props
}: React.ComponentProps<typeof NumberInputPrimitive.Decrement>) {
  return (
    <NumberInputPrimitive.Decrement
      data-slot="number-input-decrement"
      className={cn("", className)}
      {...props}
    />
  );
}

function NumberInputIncrement({
  className,
  ...props
}: React.ComponentProps<typeof NumberInputPrimitive.Increment>) {
  return (
    <NumberInputPrimitive.Increment
      data-slot="number-input-increment"
      className={cn("", className)}
      {...props}
    />
  );
}

export {
  NumberInput,
  NumberInputScrubArea,
  NumberInputScrubAreaCursor,
  NumberInputGroup,
  NumberInputField,
  NumberInputDecrement,
  NumberInputIncrement,
};
