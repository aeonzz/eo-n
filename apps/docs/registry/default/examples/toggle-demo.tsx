import { Heart } from "lucide-react";

import { Toggle } from "@/registry/default/ui/toggle";

export default function ToogleDemo() {
  return (
    <Toggle aria-label="Toggle like">
      <Heart className="size-4" />
    </Toggle>
  );
}
