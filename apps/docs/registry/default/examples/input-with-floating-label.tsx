import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function InputWithFloatingLabel() {
  return (
    <div className="relative w-full max-w-xs">
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="off"
        className="peer placeholder:text-transparent"
      />
      <div className="bg-background peer-placeholder-shown:text-muted-foreground peer-focus:bg-background peer-focus:text-foreground absolute -top-2.5 left-1.5 grid place-items-center px-1.5 transition-all ease-out peer-placeholder-shown:top-[0.6875rem] peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-focus:-top-2.5 peer-focus:left-1.5 peer-focus:px-1.5">
        <Label htmlFor="email" className="cursor-text">
          Email
        </Label>
      </div>
    </div>
  );
}
