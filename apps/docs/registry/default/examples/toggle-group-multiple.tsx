import { Bold, Italic, Underline } from "lucide-react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group";

export default function ToggleGroupMultiple() {
  return (
    <ToggleGroup toggleMultiple>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
