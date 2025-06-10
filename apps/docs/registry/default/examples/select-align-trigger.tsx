import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

export default function SelectAlignTrigger() {
  return (
    <Select defaultValue="light">
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}
