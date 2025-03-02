import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 inset-ring-[1px] inset-ring-primary/10 ring-[1px] ring-primary/50",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 inset-ring-[1px] inset-ring-destructive/10 ring-[1px] ring-destructive/50",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 inset-ring-[1px] inset-ring-secondary/10 ring-[1px] ring-secondary/50",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:inset-ring-[1px] hover:inset-ring-accent/10 hover:ring-[1px] hover:ring-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2",
        sm: "rounded-md px-3 py-1.5",
        lg: "rounded-md px-8 py-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.ComponentProps<"button">,
    ButtonVariants {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
