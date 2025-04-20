import * as React from "react";

import { Checkbox } from "@/registry/default/ui/checkbox";
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group";
import { Label } from "@/registry/default/ui/label";

const apples = ["fuji", "gala", "granny-smith"];

export default function CheckboxGroupDemo() {
  const [value, setValue] = React.useState<string[]>(["fuji"]);

  return (
    <CheckboxGroup
      aria-labelledby="apples"
      value={value}
      onValueChange={setValue}
      allValues={apples}
    >
      <Label id="apples" className="flex items-center space-x-2">
        <Checkbox name="apples" parent />
        Apples
      </Label>
      {apples.map((apple, i) => (
        <Label
          key={i}
          id={apple}
          className="flex items-center space-x-2 capitalize"
        >
          <Checkbox name={apple} />
          {apple}
        </Label>
      ))}
    </CheckboxGroup>
  );
}
