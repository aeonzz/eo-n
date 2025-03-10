import * as React from "react";
import { Input as InputPrimitive } from "@base-ui-components/react/input";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-border focus-visible:outline-primary/30 flex h-9 w-full rounded-md border px-3 py-1 text-base transition-all ease-out file:border-0 t file:text-sm file:font-medium focus-visible:ring-4 focus-visible:outline-[1px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "bg-transparent file:bg-transparent",
        secondary:
          "bg-secondary file:bg-secondary border-secondary-foreground/5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type InputVariants = VariantProps<typeof inputVariants>;

interface InputProps extends InputVariants, React.ComponentProps<"input"> {}

function Input({ className, type, variant, ...props }: InputProps) {
  return (
    <InputPrimitive
      data-slot="input"
      className={cn(inputVariants({ className, variant }))}
      {...props}
    />
  );
}

export { Input };
