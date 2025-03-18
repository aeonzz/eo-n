import { Italic } from "lucide-react";

import { Toggle } from "@/registry/default/ui/toggle";

export default function ToogleSmall() {
  return (
    <Toggle aria-label="Toggle italic" variant="outline" size="sm">
      <Italic className="size-4" />
    </Toggle>
  );
}
