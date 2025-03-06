import { Minus, Plus } from "lucide-react";

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

export default function NumberInputDemo() {
  return (
    <NumberInput>
      <NumberInputScrubArea>
        <Label>Age</Label>
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
