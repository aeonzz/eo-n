import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring/20 focus-visible:outline-primary/30 flex min-h-16 max-h-36 w-full rounded-md border px-3 py-1 text-base transition-all ease-out focus-visible:ring-4 focus-visible:outline-[1px] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive/60 aria-invalid:outline-destructive/30 field-sizing-content md:text-sm resize-none break-all",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        secondary: "bg-secondary border-secondary-foreground/5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type TextareaVariants = VariantProps<typeof textareaVariants>;

interface TextareaProps
  extends React.ComponentProps<"textarea">,
    TextareaVariants {}

function Textarea({ className, variant, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ className, variant }))}
      {...props}
    />
  );
}

export { Textarea };
