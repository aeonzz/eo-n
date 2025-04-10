import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function DisabledInput() {
  return (
    <div className="w-full max-w-xs">
      <Label>Username</Label>
      <Input
        id="username"
        name="username"
        type="text"
        disabled
        placeholder="Username"
        autoComplete="off"
      />
    </div>
  );
}
