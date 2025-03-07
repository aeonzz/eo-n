import { Minus, MoveHorizontal, Plus } from "lucide-react";

import {
  NumberInput,
  NumberInputDecrement,
  NumberInputField,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputScrubArea,
  NumberInputScrubAreaCursor,
} from "@/registry/default/ui/number-input";

import { Label } from "../ui/label";

export default function NumberInputDisabled() {
  return (
    <NumberInput defaultValue={23} disabled className="max-w-3xs">
      <NumberInputScrubArea>
        <Label className="cursor-ew-resize">Age</Label>
        <NumberInputScrubAreaCursor>
          <MoveHorizontal className="size-5" />
        </NumberInputScrubAreaCursor>
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
