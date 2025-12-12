import * as React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
      active: {
        true: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        active: true,
        class: "bg-primary/90",
      },
      {
        variant: "destructive",
        active: true,
        class: "bg-destructive/90 dark:bg-destructive/90",
      },
      {
        variant: "outline",
        active: true,
        class: "bg-accent text-accent-foreground dark:bg-accent",
      },
      {
        variant: "secondary",
        active: true,
        class: "bg-secondary/80",
      },
      {
        variant: "ghost",
        active: true,
        class: "bg-accent text-accent-foreground dark:bg-accent",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      active: false,
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = React.ComponentProps<typeof ButtonPrimitive> &
  ButtonVariants & {
    active?: boolean;
  };

function Button({ className, variant, size, active, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-active={active}
      className={cn(buttonVariants({ variant, size, active, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
