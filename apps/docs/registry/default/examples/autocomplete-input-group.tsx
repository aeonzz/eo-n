import * as React from "react";
import { SearchIcon } from "lucide-react";

import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/registry/default/ui/autocomplete";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/default/ui/input-group";

interface Department {
  id: string;
  value: string;
}

const departments: Department[] = [
  { id: "eng", value: "Engineering" },
  { id: "educ", value: "Education" },
  { id: "nursing", value: "Nursing" },
  { id: "bus", value: "Business Administration" },
  { id: "acct", value: "Accountancy" },
  { id: "arch", value: "Architecture" },
  { id: "agri", value: "Agriculture" },
  { id: "math", value: "Mathematics" },
  { id: "sci", value: "Science" },
  { id: "arts", value: "Arts and Humanities" },
  { id: "soc", value: "Social Sciences" },
];

export default function AutocompleteInputGroup() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <Autocomplete items={departments} mode="both">
      <InputGroup ref={containerRef} className="max-w-xs">
        <AutocompleteInput
          render={<InputGroupInput placeholder="Search department..." />}
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <AutocompleteContent anchor={containerRef}>
        <AutocompleteEmpty>No departments found.</AutocompleteEmpty>
        <AutocompleteList>
          {(department: Department) => (
            <AutocompleteItem key={department.id} value={department}>
              {department.value}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  );
}
