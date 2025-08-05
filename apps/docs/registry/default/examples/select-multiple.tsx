import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const items = {
  apple: "Apple",
  banana: "Banana",
  orange: "Orange",
  grape: "Grape",
  mango: "Mango",
  pineapple: "Pineapple",
  strawberry: "Strawberry",
  watermelon: "Watermelon",
  peach: "Peach",
  cherry: "Cherry",
};

type Item = keyof typeof items;

const values = Object.keys(items) as Item[];

function renderValue(value: Item[]) {
  if (value.length === 0) {
    return "Select items...";
  }

  const firstItem = items[value[0]];
  const additionalItems =
    value.length > 1 ? ` (+${value.length - 1} more)` : "";
  return firstItem + additionalItems;
}

export default function SelectMultiple() {
  return (
    <Select multiple>
      <SelectTrigger className="w-44">
        <SelectValue>{renderValue}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {values.map((value) => (
          <SelectItem key={value} value={value}>
            {items[value]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
