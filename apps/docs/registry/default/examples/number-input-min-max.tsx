import { Minus, Plus } from "lucide-react";

import { Label } from "@/registry/default/ui/label";
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputField,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputScrubArea,
} from "@/registry/default/ui/number-input";

export default function NumberInputMinMax() {
  return (
    <NumberInput min={0} max={100} defaultValue={0} className="max-w-3xs">
      <NumberInputScrubArea>
        <Label className="cursor-ew-resize">Rating</Label>
      </NumberInputScrubArea>
      <NumberInputGroup>
        <NumberInputDecrement>
          <Minus />
        </NumberInputDecrement>
        <NumberInputField />
        <NumberInputIncrement>
          <Plus />
        </NumberInputIncrement>
      </NumberInputGroup>
    </NumberInput>
  );
}
