import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/registry/default/ui/autocomplete";

interface Fruit {
  id: string;
  value: string;
}

const fruits: Fruit[] = [
  { id: "1", value: "Apple" },
  { id: "2", value: "Banana" },
  { id: "3", value: "Orange" },
  { id: "4", value: "Grapes" },
  { id: "5", value: "Mango" },
  { id: "6", value: "Strawberry" },
  { id: "7", value: "Blueberry" },
  { id: "8", value: "Watermelon" },
  { id: "9", value: "Pineapple" },
  { id: "10", value: "Kiwi" },
];

export default function AutocompleteDisabled() {
  return (
    <Autocomplete items={fruits}>
      <AutocompleteInput
        disabled
        placeholder="e.g. Apple"
        className="max-w-2xs"
      />
      <AutocompleteContent>
        <AutocompleteEmpty>No fruits found.</AutocompleteEmpty>
        <AutocompleteList>
          {(fruit: Fruit) => (
            <AutocompleteItem key={fruit.id} value={fruit}>
              {fruit.value}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  );
}
