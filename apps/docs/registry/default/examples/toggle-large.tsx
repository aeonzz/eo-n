import { Italic } from "lucide-react";

import { Toggle } from "@/registry/default/ui/toggle";

export default function ToogleLarge() {
  return (
    <Toggle aria-label="Toggle italic" variant="outline" size="lg">
      <Italic className="size-4" />
    </Toggle>
  );
}
