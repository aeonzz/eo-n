import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxIcon,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/registry/default/ui/combobox";

interface Label {
  value: string;
  label: string;
  group: "Type" | "Priority" | "Status" | "Area";
}

interface LabelGroup {
  value: string;
  items: Label[];
}

const labelGroups: Label[] = [
  { value: "t-feature", label: "feature", group: "Type" },
  { value: "t-bug", label: "bug", group: "Type" },
  { value: "t-docs", label: "documentation", group: "Type" },
  { value: "t-refactor", label: "refactor", group: "Type" },
  { value: "t-test", label: "test", group: "Type" },
  { value: "t-chore", label: "chore", group: "Type" },
  { value: "p-low", label: "low", group: "Priority" },
  { value: "p-medium", label: "medium", group: "Priority" },
  { value: "p-high", label: "high", group: "Priority" },
  { value: "p-critical", label: "critical", group: "Priority" },
  { value: "s-open", label: "open", group: "Status" },
  { value: "s-in-progress", label: "in progress", group: "Status" },
  { value: "s-review", label: "in review", group: "Status" },
  { value: "s-closed", label: "closed", group: "Status" },
  { value: "a-frontend", label: "frontend", group: "Area" },
  { value: "a-backend", label: "backend", group: "Area" },
  { value: "a-api", label: "api", group: "Area" },
  { value: "a-infra", label: "infrastructure", group: "Area" },
  { value: "a-mobile", label: "mobile", group: "Area" },
];

function groupLabels(labels: Label[]): LabelGroup[] {
  const groups: { [key: string]: Label[] } = {};
  labels.forEach((t) => {
    (groups[t.group] ??= []).push(t);
  });
  const order = ["Type", "Priority", "Status", "Area"];
  return order.map((value) => ({ value, items: groups[value] ?? [] }));
}

const groupedLabels: LabelGroup[] = groupLabels(labelGroups);

export default function ComboboxGrouped() {
  return (
    <Combobox items={groupedLabels} defaultValue={labelGroups[0]}>
      <ComboboxTrigger
        render={(props) => (
          <Button
            variant="outline"
            className="w-[200px] justify-between"
            {...props}
          >
            <ComboboxValue />
            <ComboboxIcon render={<ChevronsUpDown />} />
          </Button>
        )}
      />
      <ComboboxContent>
        <ComboboxInput placeholder="Change label..." />
        <ComboboxEmpty>No label found.</ComboboxEmpty>
        <ComboboxList className="max-h-[min(calc(23rem-var(--input-container-height)),calc(var(--available-height)-var(--input-container-height)))]">
          {(group: LabelGroup) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxGroupLabel>{group.value}</ComboboxGroupLabel>
              <ComboboxCollection>
                {(label: Label) => (
                  <ComboboxItem key={label.value} value={label}>
                    {label.label}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
