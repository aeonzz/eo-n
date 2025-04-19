import * as React from "react";

import { Checkbox } from "@/registry/default/ui/checkbox";
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group";
import { Label } from "@/registry/default/ui/label";

const diets = [
  {
    label: "Vegetarian",
    value: "vegetarian",
  },
  {
    label: "Vegan",
    value: "vegan",
  },
  {
    label: "Gluten-free",
    value: "gluten-free",
  },
] as const;

export default function CheckboxGroupDemo() {
  const [value, setValue] = React.useState<string[]>([]);

  return (
    <CheckboxGroup
      aria-labelledby="diets"
      value={value}
      onValueChange={setValue}
      allValues={diets.map((diet) => diet.value)}
      className="space-y-3 p-4"
    >
      <div className="flex items-center space-x-2">
        <Checkbox id="diets" name="diets" value="diets" parent />
        <Label htmlFor="diets">Diets</Label>
      </div>

      {diets.map((diet, i) => (
        <div key={i} className="flex items-center space-x-2">
          <Checkbox id={diet.value} name={diet.value} value={diet.value} />
          <Label htmlFor={diet.value}>{diet.label}</Label>
        </div>
      ))}
    </CheckboxGroup>
  );
}
