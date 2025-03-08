import * as React from "react";
import { NumberField as NumberInputPrimitive } from "@base-ui-components/react/number-field";
import { MoveHorizontal, MoveVertical } from "lucide-react";

import { cn } from "@/lib/utils";

function NumberInput({
  className,
  ...props
}: React.ComponentProps<typeof NumberInputPrimitive.Root>) {
  return (
    <NumberInputPrimitive.Root
      data-slot="number-input"
      className={cn("flex w-full flex-col items-start gap-1", className)}
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

function NumberInputScrubArea({
  className,
  children,
  direction,
  ...props
}: React.ComponentProps<typeof NumberInputPrimitive.ScrubArea>) {
  return (
    <NumberInputPrimitive.ScrubArea
      data-slot="number-input-scrub-area"
      className={cn(
        direction === "horizontal" ? "cursor-ew-resize" : "cursor-ns-resize",
        className
      )}
      direction={direction}
      {...props}
    >
      {children}
      <NumberInputScrubAreaCursor>
        {direction === "vertical" ? (
          <MoveVertical className="size-5" />
        ) : (
          <MoveHorizontal className="size-5" />
        )}
      </NumberInputScrubAreaCursor>
    </NumberInputPrimitive.ScrubArea>
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
        "border-input flex h-9 w-full items-center rounded-md border data-disabled:cursor-not-allowed data-disabled:opacity-50",
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
        "border-input focus-visible:ring-border focus-visible:outline-primary/30 h-full w-full border-x px-3 py-1 text-center text-base tabular-nums transition-all ease-out focus-visible:ring-4 focus-visible:outline-[1px] data-disabled:cursor-not-allowed md:text-sm",
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
        "flex h-full min-w-9 cursor-pointer items-center justify-center data-disabled:cursor-not-allowed [&_svg]:shrink-0",
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
        "flex h-full min-w-9 cursor-pointer items-center justify-center data-disabled:cursor-not-allowed [&_svg]:shrink-0",
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
