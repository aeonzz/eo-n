import { Label } from "@/registry/default/ui/label";
import {
  NumberInput,
  NumberInputField,
  NumberInputGroup,
  NumberInputScrubArea,
} from "@/registry/default/ui/number-input";

export default function NumberInputScrubDirection() {
  return (
    <NumberInput
      defaultValue={0}
      min={0}
      max={1000}
      className="max-w-32 flex-row items-center gap-2"
    >
      <NumberInputScrubArea direction="vertical">
        <Label className="cursor-ns-resize">Height</Label>
      </NumberInputScrubArea>
      <div className="bg-border h-7 w-px" />
      <NumberInputGroup>
        <NumberInputField className="rounded-md" />
      </NumberInputGroup>
    </NumberInput>
  );
}
