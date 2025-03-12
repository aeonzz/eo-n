import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";

export default function CheckboxDisabled() {
  return (
    <Label className="flex items-center gap-2 text-base">
      <Checkbox disabled />
      <span className="peer-data-[disabled]:text-muted-foreground peer-data-[disabled]:cursor-not-allowed">
        Accept terms and conditions
      </span>
    </Label>
  );
}
