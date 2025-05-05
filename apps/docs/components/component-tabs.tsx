"use client";

import * as React from "react";
import { Index } from "@/__registry__";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";

import { cn } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { styles } from "@/registry/registry-styles";

interface ComponentTabsProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  children: React.ReactNode;
  preventPreviewFocus?: boolean;
  scalePreview?: boolean;
  fullPreview?: boolean;
}

export function ComponentTabs({
  name,
  children,
  preventPreviewFocus,
  scalePreview,
  fullPreview,
  className,
}: ComponentTabsProps) {
  const [config] = useConfig();
  const index = styles.findIndex((style) => style.name === config.style);

  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const Code = Codes[index];

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
    <Tabs items={["Preview", "Code"]} className="bg-background rounded-md">
      <Tab
        value="Preview"
        className={cn("preview-block", {
          "focus-visible:ring-0 focus-visible:outline-hidden":
            preventPreviewFocus,
        })}
        tabIndex={preventPreviewFocus ? -1 : 0}
      >
        <div
          className={cn(
            "component-preview flex h-[400px] w-full items-center justify-center p-8",
            {
              "h-full p-0": fullPreview,
              "sm:p-10": scalePreview,
            },
            className
          )}
        >
          {Preview}
        </div>
      </Tab>
      <Tab value="Code" className="component-block py-0">
        {Code}
      </Tab>
    </Tabs>
  );
}
