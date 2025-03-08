import {
  NumberInput,
  NumberInputField,
  NumberInputGroup,
  NumberInputScrubArea,
} from "@/registry/default/ui/number-input";

import { Label } from "../ui/label";

export default function NumberInputScrubDirection() {
  return (
    <NumberInput
      defaultValue={0}
      min={0}
      max={1000}
      className="max-w-42 flex-row items-center gap-2"
    >
      <NumberInputScrubArea direction="vertical">
        <Label className="cursor-ns-resize">Height</Label>
      </NumberInputScrubArea>
      <div className="bg-border h-7 w-px" />
      <NumberInputGroup>
        <NumberInputField className="rounded-md border-x-0" />
      </NumberInputGroup>
    </NumberInput>
  );
}
