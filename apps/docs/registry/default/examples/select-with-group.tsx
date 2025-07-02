import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = [
  { label: "Select a job", value: null },
  { label: "Software Engineer", value: "software-engineer" },
  { label: "Software Engineer 2", value: "software-engineer-2" },
  { label: "Software Engineer 3", value: "software-engineer-3" },
  { label: "Marketing Manager", value: "marketing-manager" },
  { label: "Marketing Manager 2", value: "marketing-manager-2" }, 
  { label: "Marketing Manager 3", value: "marketing-manager-3" },
];

export default function SelectWithGroup() {
  return (
    <Select items={items}>
      <SelectTrigger className="w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectGroupLabel>Technology</SelectGroupLabel>
          {items.filter((item) => item.value?.startsWith("software")).map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectGroupLabel>Business</SelectGroupLabel>
          {items.filter((item) => item.value?.startsWith("marketing")).map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
