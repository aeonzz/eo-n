import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

export default function SwitchDisabled() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="allow-tracking" disabled />
      <Label htmlFor="allow-tracking">Allow Tracking</Label>
    </div>
  );
}
