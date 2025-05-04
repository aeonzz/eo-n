import * as React from "react";

import { cn } from "@/lib/utils";

interface ComponentCardProps extends React.ComponentProps<"div"> {
  name: string;
  column?: boolean;
}

function ComponentCard({
  name,
  className,
  column = false,
  children,
  ...props
}: ComponentCardProps) {
  return (
    <div
      className={cn("bg-background w-full rounded-md border", className)}
      {...props}
    >
      <div className="w-full border-b p-4">
        <h1 className="text-base leading-none font-semibold">{name}</h1>
      </div>
      <div
        className={cn(
          "flex justify-start gap-2 p-4",
          column && "flex-col gap-6"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export { ComponentCard };
