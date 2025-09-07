import * as React from "react";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@/registry/default/ui/combobox";
import { Label } from "@/registry/default/ui/label";

interface Language {
  value: string;
  label: string;
}

const languages: Language[] = [
  {
    value: "javascript",
    label: "JavaScript",
  },
  {
    value: "typescript",
    label: "TypeScript",
  },
  {
    value: "python",
    label: "Python",
  },
  {
    value: "java",
    label: "Java",
  },
  {
    value: "csharp",
    label: "C#",
  },
  {
    value: "cpp",
    label: "C++",
  },
  {
    value: "go",
    label: "Go",
  },
  {
    value: "rust",
    label: "Rust",
  },
  {
    value: "php",
    label: "PHP",
  },
  {
    value: "ruby",
    label: "Ruby",
  },
  {
    value: "swift",
    label: "Swift",
  },
  {
    value: "kotlin",
    label: "Kotlin",
  },
  {
    value: "scala",
    label: "Scala",
  },
  {
    value: "dart",
    label: "Dart",
  },
  {
    value: "r",
    label: "R",
  },
];

export default function ComboboxMultiSelect() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <Combobox items={languages} multiple>
      <div className="flex w-full max-w-sm flex-col gap-2">
        <Label htmlFor="language">Programming languages</Label>
        <ComboboxChips ref={containerRef}>
          <ComboboxValue>
            {(value: Language[]) => (
              <React.Fragment>
                {value.map((language) => (
                  <ComboboxChip
                    key={language.value}
                    aria-label={language.label}
                  >
                    {language.label}
                  </ComboboxChip>
                ))}
                <ComboboxInput
                  id="language"
                  placeholder={value.length > 0 ? "" : "e.g. TypeScript"}
                />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
      </div>
      <ComboboxContent anchor={containerRef} sideOffset={6}>
        <ComboboxEmpty>No language found.</ComboboxEmpty>
        <ComboboxList>
          {(item: Language) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
