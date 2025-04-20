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
  return (
    <CheckboxGroup defaultValue={["vegetarian"]}>
      {diets.map((diet, i) => (
        <Label key={i} id={diet.value} className="flex items-center space-x-2">
          <Checkbox name={diet.value} />
          {diet.label}
        </Label>
      ))}
    </CheckboxGroup>
  );
}
