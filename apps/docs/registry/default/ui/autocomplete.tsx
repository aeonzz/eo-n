"use client";

import * as React from "react";
import { Autocomplete as AutocompletePrimitive } from "@base-ui/react";

import { cn } from "@/lib/utils";
import { Input } from "@/registry/default/ui/input";

const useFilter = AutocompletePrimitive.useFilter;

const Autocomplete = AutocompletePrimitive.Root;

const AutocompleteValue = AutocompletePrimitive.Value;

const AutocompleteCollection = AutocompletePrimitive.Collection;

function AutocompleteInput({
  className,
  render,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Input>) {
  return (
    <AutocompletePrimitive.Input
      data-slot="autocomplete-input"
      className={cn(className)}
      render={render ?? <Input />}
      {...props}
    />
  );
}

function AutocompleteTrigger({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Trigger>) {
  return (
    <AutocompletePrimitive.Trigger
      data-slot="autocomplete-trigger"
      {...props}
    />
  );
}

function AutocompleteIcon({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Icon>) {
  return (
    <AutocompletePrimitive.Icon
      data-slot="autocomplete-icon"
      className={cn(
        "opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&svg]:size-4 [&svg]:shrink-0 [&svg]:cursor-pointer",
        className
      )}
      {...props}
    />
  );
}

function AutocompleteClear({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Clear>) {
  return (
    <AutocompletePrimitive.Clear
      data-slot="autocomplete-clear"
      className={cn(
        "shrink-0 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&svg]:size-4 [&svg]:shrink-0 [&svg]:cursor-pointer",
        className
      )}
      {...props}
    />
  );
}

function AutocompleteList({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.List>) {
  return (
    <AutocompletePrimitive.List
      data-slot="autocomplete-list"
      className={cn(
        "max-h-[min(23rem,var(--available-height))] overflow-y-auto overscroll-contain p-1 data-[empty]:m-0 data-[empty]:p-0",
        className
      )}
      {...props}
    />
  );
}

function AutocompletePortal({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Portal>) {
  return (
    <AutocompletePrimitive.Portal data-slot="autocomplete-portal" {...props} />
  );
}

function AutocompleteBackdrop({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Backdrop>) {
  return (
    <AutocompletePrimitive.Backdrop
      data-slot="autocomplete-backdrop"
      {...props}
    />
  );
}

interface AutocompleteContentProps
  extends Omit<
    React.ComponentProps<typeof AutocompletePrimitive.Positioner>,
    "render"
  > {}

function AutocompleteContent({
  className,
  sideOffset = 6,
  children,
  ...props
}: AutocompleteContentProps) {
  return (
    <AutocompletePortal>
      <AutocompleteBackdrop />
      <AutocompletePrimitive.Positioner
        data-slot="autocomplete-positioner"
        sideOffset={sideOffset}
        className="z-50 size-auto"
        {...props}
      >
        <AutocompletePrimitive.Popup
          data-slot="autocomplete-content"
          className={cn(
            "group bg-popover text-popover-foreground max-h-[min(23rem,var(--available-height))] w-[var(--anchor-width)] max-w-[var(--available-width)] overflow-hidden rounded-md border shadow-md transition-[transform,scale,opacity] duration-150 ease-out",
            "origin-[var(--transform-origin)] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            className
          )}
        >
          {children}
        </AutocompletePrimitive.Popup>
      </AutocompletePrimitive.Positioner>
    </AutocompletePortal>
  );
}

function AutocompleteStatus({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Status>) {
  return (
    <AutocompletePrimitive.Status
      data-slot="autocomplete-status"
      className={cn(
        "text-muted-foreground flex items-center gap-2 px-2 py-1.5 text-sm font-normal empty:m-0 empty:p-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function AutocompleteEmpty({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Empty>) {
  return (
    <AutocompletePrimitive.Empty
      data-slot="autocomplete-empty"
      className={cn(
        "text-muted-foreground py-2 text-center text-sm empty:m-0 empty:p-0",
        className
      )}
      {...props}
    />
  );
}

function AutocompleteRow({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Row>) {
  return <AutocompletePrimitive.Row data-slot="autocomplete-row" {...props} />;
}

function AutocompleteItem({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Item>) {
  return (
    <AutocompletePrimitive.Item
      data-slot="autocomplete-item"
      className={cn(
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function AutocompleteGroup({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Group>) {
  return (
    <AutocompletePrimitive.Group data-slot="autocomplete-group" {...props} />
  );
}

function AutocompleteGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.GroupLabel>) {
  return (
    <AutocompletePrimitive.GroupLabel
      data-slot="autocomplete-group-label"
      className={cn(
        "text-muted-foreground px-2 py-1.5 text-xs font-medium",
        className
      )}
      {...props}
    />
  );
}

function AutocompleteSeparator({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Separator>) {
  return (
    <AutocompletePrimitive.Separator
      data-slot="autocomplete-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

export {
  Autocomplete,
  AutocompleteValue,
  AutocompleteInput,
  AutocompleteTrigger,
  AutocompleteIcon,
  AutocompleteClear,
  AutocompleteList,
  AutocompletePortal,
  AutocompleteBackdrop,
  AutocompleteContent,
  AutocompleteStatus,
  AutocompleteEmpty,
  AutocompleteCollection,
  AutocompleteRow,
  AutocompleteItem,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteSeparator,
  useFilter,
};
