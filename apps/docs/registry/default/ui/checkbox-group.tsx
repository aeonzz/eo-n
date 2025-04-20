"use client";

import * as React from "react";
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui-components/react/checkbox-group";

import { cn } from "@/lib/utils";

function CheckboxGroup({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxGroupPrimitive>) {
  return (
    <CheckboxGroupPrimitive
      data-slot="checkbox-group"
      className={cn(
        "disabled:cursor-not-allowed disabled:opacity-50 has-data-[parent='true']:ml-4 flex flex-col space-y-2.5",
        className
      )}
      {...props}
    />
  );
}

export { CheckboxGroup };
