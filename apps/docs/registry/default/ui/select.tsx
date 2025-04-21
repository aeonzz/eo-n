"use client";

import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui-components/react/select";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";

function Select({
  alignItemToTrigger = false,
  modal = false,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return (
    <SelectPrimitive.Root
      data-slot="select"
      alignItemToTrigger={alignItemToTrigger}
      modal={modal}
      {...props}
    />
  );
}

function SelectBackdrop({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Backdrop>) {
  return <SelectPrimitive.Backdrop data-slot="select-backdrop" {...props} />;
}

function SelectPortal({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Portal>) {
  return <SelectPrimitive.Portal data-slot="select-portal" {...props} />;
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "border-input ring-offset-background focus:ring-border focus:outline-primary/30 flex h-9 w-full cursor-pointer items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap focus:ring-4 focus:outline-[1px] data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon>
        <ChevronsUpDown className="shrink-0" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectValue({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("w-full overflow-hidden text-ellipsis", className)}
      {...props}
    />
  );
}

export interface SelectContentProps
  extends React.ComponentProps<typeof SelectPrimitive.Popup> {
  positionerProps?: Omit<SelectPrimitive.Positioner.Props, "className">;
}

function SelectContent({
  positionerProps,
  className,
  children,
  ...props
}: SelectContentProps) {
  const { sideOffset = 6 } = positionerProps || {};
  return (
    <SelectPortal>
      <SelectBackdrop />
      <SelectPrimitive.Positioner
        data-slot="select-positioner"
        sideOffset={sideOffset}
        {...positionerProps}
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            "bg-popover text-popover-foreground ring-border ring-offset-background z-50 min-h-[var(--anchor-height)] overflow-y-auto overscroll-contain rounded-md border ring-1 ring-offset-[0.75px] transition-[transform,scale,opacity] duration-150 ease-out",
            "origin-[var(--transform-origin)] p-1 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            className
          )}
          {...props}
        >
          {children}
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPortal>
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex min-w-[calc(var(--anchor-width)_-_0.5rem)] cursor-default items-center rounded-sm px-2 py-1.5 pr-8 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.GroupLabel>) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group-label"
      className={cn(
        "text-muted-foreground px-2 py-1.5 text-xs leading-none",
        className
      )}
      {...props}
    />
  );
}

function SelectSeparator({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof SelectPrimitive.Separator>,
  "orientation"
>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-muted -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectBackdrop,
  SelectPortal,
  SelectItem,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectSeparator,
};
