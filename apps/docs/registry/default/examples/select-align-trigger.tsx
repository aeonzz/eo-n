import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { label: "System", value: "system" },
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];

export default function SelectAlignTrigger() {
  return (
    <Select items={items} defaultValue="system">
      <SelectTrigger className="w-40">
        <SelectValue />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger>
        {items.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
