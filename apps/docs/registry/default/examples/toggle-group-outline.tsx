import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group";

export default function ToggleGroupOutline() {
  return (
    <ToggleGroup variant="outline">
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
