"use client";

import * as React from "react";
import { Index } from "@/__registry__";

import { cn } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";

interface ComponentPreviewProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
}

export function ComponentPreview({
  name,
  className,
  ...props
}: ComponentPreviewProps) {
  const [config] = useConfig();

  const Preview = React.useMemo(() => {
    const Component = Index[config.style][name]?.component;

    if (!Component) {
      return (
        <p className="text-muted-foreground text-sm">
          Component{" "}
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name, config.style]);

  return (
    <div
      className={cn(
        "component-preview flex h-full w-full items-center justify-center rounded-md border p-10",
        className
      )}
      {...props}
    >
      {Preview}
    </div>
  );
}
