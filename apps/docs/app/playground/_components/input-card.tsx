import React from "react";

import { ComponentCard } from "@/components/component-card";
import { Input } from "@/registry/default/ui/input";

export default function InputCard() {
  return (
    <ComponentCard name="input">
      <Input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        autoComplete="off"
        className="max-w-xs"
      />
    </ComponentCard>
  );
}
