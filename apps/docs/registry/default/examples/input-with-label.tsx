import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function InputWithLabel() {
  return (
    <div className="w-full max-w-xs">
      <Label>Username</Label>
      <Input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        autoComplete="off"
      />
    </div>
  );
}
