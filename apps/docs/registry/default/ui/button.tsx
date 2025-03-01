import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
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
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 inset-ring-[1px] inset-ring-secondary/10 ring-[1px] ring-secondary/50",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:inset-ring-[1px] hover:inset-ring-accent/10 hover:ring-[1px] hover:ring-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  icon?: React.ReactElement<SVGElement>;
  iconPlacement?: "left" | "right";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon,
      iconPlacement = "left",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && iconPlacement === "left" && icon}
        <Slottable>{children}</Slottable>
        {icon && iconPlacement === "right" && icon}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
