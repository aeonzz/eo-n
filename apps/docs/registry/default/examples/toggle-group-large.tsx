import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group";

export default function ToggleGroupLarge() {
  return (
    <ToggleGroup size="lg" className="gap-0.75 rounded-lg border p-0.75">
      <ToggleGroupItem value="left" aria-label="Toggle left">
        <AlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Toggle center">
        <AlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Toggle right">
        <AlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
