import { Minus, Plus } from "lucide-react";

import {
  NumberInput,
  NumberInputDecrement,
  NumberInputField,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputScrubArea,
} from "@/registry/default/ui/number-input";

import { Label } from "../ui/label";

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
