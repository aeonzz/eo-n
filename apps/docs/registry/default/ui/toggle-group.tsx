"use client";

import * as React from "react";
import { ToggleGroup as ToggleGroupRoot } from "@base-ui-components/react/toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Toggle, toggleVariants } from "@/registry/default/ui/toggle";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
});

function ToggleGroup({
  className,
  size,
  variant,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupRoot> &
  VariantProps<typeof toggleVariants>) {
  const contextValue = React.useMemo(
    () => ({
      size: size ?? "default",
      variant: variant ?? "default",
    }),
    [size, variant]
  );

  return (
    <ToggleGroupRoot
      data-slot="toggle-group"
      className={cn(
        "flex items-center justify-center gap-1 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={contextValue}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupRoot>
  );
}

function ToggleGroupItem({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof Toggle>) {
  const context = React.useContext(ToggleGroupContext);
  return (
    <Toggle
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </Toggle>
  );
}

export { ToggleGroup, ToggleGroupItem };
