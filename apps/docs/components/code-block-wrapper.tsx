"use client";

/**
 * @see https://github.com/shadcn-ui/ui/blob/main/apps/www/components/code-block-wrapper.tsx
 */
import * as React from "react";

import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/registry/default/ui/button";

interface CodeBlockProps
  extends React.ComponentPropsWithoutRef<typeof Collapsible> {
  expandButtonTitle?: string;
  collapsible?: boolean;
}

export function CodeBlockWrapper({
  expandButtonTitle = "View Code",
  className,
  children,
  collapsible = true,
  ...props
}: CodeBlockProps) {
  const [open, setOpen] = React.useState(false);

  if (!collapsible) {
    return (
      <div className={cn("relative overflow-hidden", className)} {...props}>
        <div className="overflow-auto [&_code]:h-[420px] [&_figure]:my-0 [&_span]:text-[10px] [&_span]:last:pb-5">
          {children}
        </div>
      </div>
    );
  }

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <CollapsibleContent
        forceMount
        className={cn("overflow-hidden", !open && "max-h-32")}
      >
        <div
          className={cn(
            "[&_figure]:my-0 [&_figure]:max-h-[640px] [&_figure]:pb-[20px]",
            !open ? "[&_figure]:overflow-hidden" : "[&_figure]:overflow-auto]"
          )}
        >
          {children}
        </div>
      </CollapsibleContent>
      <div
        className={cn(
          "absolute flex items-center justify-center bg-linear-to-b from-background/10 to-background p-2",
          open ? "inset-x-0 bottom-0 h-12" : "inset-0"
        )}
      >
        <CollapsibleTrigger asChild>
          <Button variant="secondary">
            {open ? "Collapse" : expandButtonTitle} code
          </Button>
        </CollapsibleTrigger>
      </div>
    </Collapsible>
  );
}
