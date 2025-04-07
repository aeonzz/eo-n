import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

export default function SwitchSmall() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" variant="square" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
