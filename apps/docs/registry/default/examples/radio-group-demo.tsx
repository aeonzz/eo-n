import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="bus">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="bus" id="bus" />
        <Label htmlFor="bus">Bus</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="van" id="van" />
        <Label htmlFor="van">Van</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="car" id="car" />
        <Label htmlFor="car">Car</Label>
      </div>
    </RadioGroup>
  );
}
