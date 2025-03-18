import { Bold } from "lucide-react";

import { Toggle } from "@/registry/default/ui/toggle";

export default function ToogleOutline() {
  return (
    <Toggle aria-label="Toggle font weight" variant="outline">
      <Bold className="size-4" />
    </Toggle>
  );
}
