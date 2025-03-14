import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

export default function SelectDemo() {
  return (
    <Select alignItemToTrigger={false}>
      <SelectTrigger className="max-w-40">
        <SelectValue placeholder="Select a job" />
      </SelectTrigger>
      <SelectContent></SelectContent>
    </Select>
  );
}
