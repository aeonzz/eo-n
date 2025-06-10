"use client";

import * as React from "react";
import { Menubar as MenubarRoot } from "@base-ui-components/react/menubar";

import { cn } from "@/lib/utils";

function Menubar({
  modal = false,
  className,
  ...props
}: React.ComponentProps<typeof MenubarRoot>) {
  return (
    <MenubarRoot
      data-slot="menubar"
      modal={modal}
      className={cn(
        "bg-background flex min-h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        className
      )}
      {...props}
    />
  );
}

export { Menubar };
