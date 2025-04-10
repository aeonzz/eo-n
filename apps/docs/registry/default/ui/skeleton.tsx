import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const skeletonVariants = cva("bg-primary/10 rounded-md", {
  variants: {
    variant: {
      pulse: "animate-pulse",
      shimmer:
        "before:animate-shimmer before:via-primary/10 dark:before:via-primary/5 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:to-transparent",
    },
  },
  defaultVariants: {
    variant: "pulse",
  },
});

export type SkeletonVariants = VariantProps<typeof skeletonVariants>;

interface SkeletonProps extends React.ComponentProps<"div">, SkeletonVariants {}

export function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(skeletonVariants({ className, variant }))}
      {...props}
    />
  );
}
