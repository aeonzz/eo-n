"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type Orientation = "horizontal" | "vertical";

interface LineDecoratorProps extends React.ComponentProps<"hr"> {
  orientation?: Orientation;
}

function LineDecorator({
  className,
  orientation = "horizontal",
  ...props
}: LineDecoratorProps) {
  return (
    <hr
      className={cn(
        "border-dashed delay-100 duration-1500 ease-out",
        orientation === "horizontal"
          ? "animate-expand-width h-px w-full border-t"
          : "animate-expand-height h-full w-px border-l",
        className
      )}
      {...props}
    />
  );
}

export { LineDecorator };
