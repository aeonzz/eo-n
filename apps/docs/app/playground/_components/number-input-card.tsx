import React from "react";
import { Minus, Plus } from "lucide-react";

import { ComponentCard } from "@/components/component-card";
import { Label } from "@/registry/default/ui/label";
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputField,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputScrubArea,
} from "@/registry/default/ui/number-input";

export default function NumberInputCard() {
  return (
    <ComponentCard name="Number Input">
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
    </ComponentCard>
  );
}
