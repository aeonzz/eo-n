import * as React from "react";

interface ComponentCollectionWrapperProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export function ComponentCollectionWrapper({
  children,
  ...props
}: ComponentCollectionWrapperProps) {
  return (
    <div className="bg-background flex h-[556px] flex-col gap-1" {...props}>
      {children}
    </div>
  );
}
