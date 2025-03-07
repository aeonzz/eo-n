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
      className={cn(
        "flex w-full flex-col items-start gap-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
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
      className={cn(
        "flex h-10 w-full items-center rounded-md border",
        className
      )}
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
      className={cn(
        "h-full w-full border-x text-center text-base tabular-nums focus:outline-none",
        className
      )}
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
      className={cn(
        "flex aspect-square h-full cursor-pointer items-center justify-center [&_svg]:size-5 [&_svg]:shrink-0",
        className
      )}
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
      className={cn(
        "flex aspect-square h-full cursor-pointer items-center justify-center [&_svg]:size-5 [&_svg]:shrink-0",
        className
      )}
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
