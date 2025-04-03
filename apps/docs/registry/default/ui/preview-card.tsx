"use client";

import * as React from "react";
import { PreviewCard as PreviewCardPrimitive } from "@base-ui-components/react/preview-card";

import { cn } from "@/lib/utils";

function PreviewCard({
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Root>) {
  return <PreviewCardPrimitive.Root data-slot="preview-card" {...props} />;
}

function PreviewCardTrigger({
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Trigger>) {
  return (
    <PreviewCardPrimitive.Trigger data-slot="preview-card-trigger" {...props} />
  );
}

function PreviewCardPortal({
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Portal>) {
  return (
    <PreviewCardPrimitive.Portal data-slot="preview-card-portal" {...props} />
  );
}

function PreviewCardBackdrop({
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Backdrop>) {
  return (
    <PreviewCardPrimitive.Backdrop
      data-slot="preview-card-backdrop"
      {...props}
    />
  );
}

interface PreviewCardContentProps
  extends React.ComponentProps<typeof PreviewCardPrimitive.Popup> {
  positionerProps?: Omit<PreviewCardPrimitive.Positioner.Props, "className">;
}

function PreviewCardContent({
  positionerProps,
  className,
  children,
  ...props
}: PreviewCardContentProps) {
  const { sideOffset = 6 } = positionerProps || {};
  return (
    <PreviewCardPortal>
      <PreviewCardBackdrop />
      <PreviewCardPrimitive.Positioner
        data-slot="dropdown-menu-positioner"
        sideOffset={sideOffset}
        {...positionerProps}
      >
        <PreviewCardPrimitive.Popup
          data-slot="preview-card-content"
          className={cn(
            "bg-popover text-popover-foreground ring-border ring-offset-background z-50 min-w-64 rounded-md border p-4 shadow-md ring-1 ring-offset-[0.75px] transition-[transform,scale,opacity] duration-150 ease-out outline-none",
            "origin-[var(--transform-origin)] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            className
          )}
          {...props}
        >
          {children}
        </PreviewCardPrimitive.Popup>
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPortal>
  );
}

export {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPortal,
  PreviewCardBackdrop,
  PreviewCardContent,
};
