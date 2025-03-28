import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";

export default function RadioGroupDisabled() {
  return (
    <RadioGroup>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="apple" id="apple" disabled />
        <Label htmlFor="apple">Apple</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="orange" id="orange" />
        <Label htmlFor="orange">Orange</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="mango" id="mango" />
        <Label htmlFor="mango">Mango</Label>
      </div>
    </RadioGroup>
  );
}
