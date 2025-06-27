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
  variant,
  size,
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
      data-variant={variant}
      data-size={size}
      className={cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col data-[variant=outline]:shadow-xs",
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
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof Toggle> & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext);

  return (
    <Toggle
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none focus:z-10 focus-visible:z-10",
        "group-data-[orientation=horizontal]/toggle-group:first:rounded-l-md group-data-[orientation=vertical]/toggle-group:first:rounded-t-md group-data-[orientation=horizontal]/toggle-group:last:rounded-r-md group-data-[orientation=vertical]/toggle-group:last:rounded-b-md [[data-variant=outline][data-orientation=horizontal]_&]:border-l-0 [[data-variant=outline][data-orientation=horizontal]_&]:first:border-l [[data-variant=outline][data-orientation=vertical]_&]:border-t-0 [[data-variant=outline][data-orientation=vertical]_&]:first:border-t",
        className
      )}
      {...props}
    >
      {children}
    </Toggle>
  );
}

export { ToggleGroup, ToggleGroupItem };
