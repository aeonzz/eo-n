import * as React from "react";

import { cn } from "@/lib/utils";

interface ComponentCardProps extends React.ComponentProps<"div"> {
  name: string;
}

function ComponentCard({
  name,
  className,
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
      <div className="flex flex-col items-start gap-2 p-4">{children}</div>
    </div>
  );
}

export { ComponentCard };
