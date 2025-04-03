"use client";

import * as React from "react";
import { Toolbar as ToolbarPrimitive } from "@base-ui-components/react/toolbar";

import { cn } from "@/lib/utils";

function Toolbar({
  className,
  ...props
}: Omit<React.ComponentProps<typeof ToolbarPrimitive.Root>, "orientation">) {
  return (
    <ToolbarPrimitive.Root
      data-slot="toolbar"
      className={cn("flex items-center gap-1 rounded-lg border p-1", className)}
      {...props}
    />
  );
}

function ToolbarButton({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Button>) {
  return (
    <ToolbarPrimitive.Button
      data-slot="toolbar-button"
      className={cn(
        "shadow-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    />
  );
}

function ToolbarLink({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Link>) {
  return (
    <ToolbarPrimitive.Link
      data-slot="toolbar-link"
      className={cn("", className)}
      {...props}
    />
  );
}

function ToolbarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Separator>) {
  return (
    <ToolbarPrimitive.Separator
      data-slot="toolbar-separator"
      className={cn("bg-border h-8 w-px", className)}
      {...props}
    />
  );
}

function ToolbarGroup({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Group>) {
  return (
    <ToolbarPrimitive.Group
      data-slot="toolbar-group"
      className={cn(
        "flex items-center gap-1 *:data-[slot='toolbar-button']:cursor-pointer",
        className
      )}
      {...props}
    />
  );
}

function ToolbarInput({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Input>) {
  return (
    <ToolbarPrimitive.Input
      data-slot="toolbar-input"
      className={cn("", className)}
      {...props}
    />
  );
}

export {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarGroup,
  ToolbarInput,
};
