"use client";

import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui-components/react/select";
import { ChevronDown } from "lucide-react";

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
        "border-input ring-offset-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-sm focus-visible:ring-1 focus-visible:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:opacity-50 data-[popup-open]:[&_svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon>
        <ChevronDown className="transition-[rotate] duration-200 ease-out shrink-0" />
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
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

interface SelectContentProps
  extends React.ComponentProps<typeof SelectPrimitive.Popup> {
  positionerProps?: Omit<SelectPrimitive.Positioner.Props, "className">;
}

function SelectContent({
  className,
  positionerProps,
  children,
  ...props
}: SelectContentProps) {
  const { sideOffset = 6 } = positionerProps || {};
  return (
    <SelectPortal>
      <SelectBackdrop />
      <SelectPrimitive.Positioner
        data-slot="select-content"
        sideOffset={sideOffset}
        {...positionerProps}
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            "bg-popover text-popover-foreground h-[var(--anchor-height)] w-[var(--anchor-width)] overflow-x-hidden overflow-y-auto rounded-md border shadow-md transition-[transform,scale,opacity] duration-150 ease-out",
            "origin-[var(--transform-origin)] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
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

// function SelectItem({...props}: React.ComponentProps<typeof SelectPrimitive.Item>) {
//   return (
//     <SelectPrimitive.Item
//   )
// }


export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectBackdrop,
  SelectPortal,
  SelectContent,
};
