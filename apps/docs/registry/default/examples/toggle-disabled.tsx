import { Italic } from "lucide-react";

import { Toggle } from "@/registry/default/ui/toggle";

export default function ToogleDisabled() {
  return (
    <Toggle aria-label="Toggle italic" variant="outline" disabled>
      <Italic className="size-4" />
    </Toggle>
  );
}
