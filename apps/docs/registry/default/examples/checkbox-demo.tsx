import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";

export default function CheckboxDemo() {
  return (
    <Label className="flex items-center gap-2 text-base">
      <Checkbox />
      Remember me
    </Label>
  );
}
