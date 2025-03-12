"use client";

import * as React from "react";
import { Menu as DropdownMenuPrimitive } from "@base-ui-components/react/menu";
import { Check, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return (
    <DropdownMenuPrimitive.Root data-slot="dropdown-menu-menu" {...props} />
  );
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

function DropdownMenuSubMenuTrigger({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubmenuTrigger>) {
  return (
    <DropdownMenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-menu-trigger"
      className={cn(
        "data-[popup-open]:bg-accent data-[popup-open]:text-accent-foreground",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

function DropdownMenuBackdrop({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Backdrop>) {
  return (
    <DropdownMenuPrimitive.Backdrop
      data-slot="dropdown-menu-backdrop"
      {...props}
    />
  );
}

function DropdownMenuPositioner({
  children,
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Positioner>) {
  return (
    <DropdownMenuPortal>
      <DropdownMenuBackdrop />
      <DropdownMenuPrimitive.Positioner
        data-slot="dropdown-menu-positioner"
        sideOffset={sideOffset}
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.Positioner>
    </DropdownMenuPortal>
  );
}

interface DropdownMenuContentProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Popup> {}

function DropdownMenuContent({
  className,
  children,
  ...props
}: DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Popup
      data-slot="dropdown-menu-content"
      className={cn(
        "bg-popover text-popover-foreground ring-border ring-offset-background z-50 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md ring-2 ring-offset-1 transition-[transform,scale,opacity] duration-150 ease-out",
        "origin-[var(--transform-origin)] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Popup>
  );
}

function DropdownMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item>) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&>svg]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-muted -mx-1 h-px", className)}
      {...props}
    />
  );
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

function DropdownMenuGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.GroupLabel>) {
  return (
    <DropdownMenuPrimitive.GroupLabel
      data-slot="dropdown-menu-groupLabel"
      className={cn(
        "border-muted -mx-1 border-b px-3 py-2 text-sm leading-none font-semibold",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radioGroup"
      {...props}
    />
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radioItem"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1 pr-2 pl-6 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-2 w-2 items-center justify-center">
        <DropdownMenuPrimitive.RadioItemIndicator>
          <Circle className="size-2 fill-current" />
        </DropdownMenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkboxItem"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1 pr-2 pl-6 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-2 w-2 items-center justify-center">
        <DropdownMenuPrimitive.CheckboxItemIndicator>
          <Check className="size-4" />
        </DropdownMenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuGroupLabel,
  DropdownMenuSeparator,
  DropdownMenuBackdrop,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuPositioner,
  DropdownMenuRadioGroup,
};
