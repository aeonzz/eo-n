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

export default function NumberInputDemo() {
  return (
    <NumberInput defaultValue={0} className="max-w-3xs">
      <NumberInputScrubArea>
        <Label className="cursor-ew-resize">Age</Label>
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
