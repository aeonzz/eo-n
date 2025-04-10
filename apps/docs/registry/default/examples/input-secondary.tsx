import { Input } from "@/registry/default/ui/input";

export default function InputSecondary() {
  return (
    <Input
      id="username"
      name="username"
      type="text"
      placeholder="Username"
      autoComplete="off"
      className="w-full max-w-xs"
      variant="secondary"
    />
  );
}
