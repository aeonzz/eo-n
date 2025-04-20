import * as React from "react";

import { Progress, ProgressLabel } from "@/registry/default/ui/progress";

export default function ProgressWithLabel() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setValue((current) =>
        Math.min(100, Math.round(current + Math.random() * 25))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Progress value={value} className="min-w-xs">
      <ProgressLabel>Loading...</ProgressLabel>
    </Progress>
  );
}
