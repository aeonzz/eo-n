import { Input } from "@/registry/default/ui/input";

export default function InputDemo() {
  return (
    <Input
      id="username"
      name="username"
      type="text"
      placeholder="Username"
      autoComplete="off"
      className="max-w-xs"
    />
  );
}
