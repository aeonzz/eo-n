"use client";

/**
 * @see https://github.com/shadcn-ui/ui/blob/main/apps/www/components/component-source.tsx
 */
import type * as React from "react";

import { cn } from "@/lib/utils";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  collapsible?: boolean;
}

export function ComponentSource({
  children,
  className,
  collapsible = true,
  ...props
}: ComponentSourceProps) {
  return (
    <CodeBlockWrapper
      expandButtonTitle="Expand"
      className={cn("my-6 overflow-hidden rounded-md", className)}
      collapsible={collapsible}
      {...props}
    >
      {children}
    </CodeBlockWrapper>
  );
}
