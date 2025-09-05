import { ChevronDown } from "lucide-react";

import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteIcon,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteTrigger,
} from "@/registry/default/ui/autocomplete";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

interface Language {
  id: string;
  value: string;
}

const languages = [
  { id: "js", value: "JavaScript" },
  { id: "ts", value: "TypeScript" },
  { id: "py", value: "Python" },
  { id: "rb", value: "Ruby" },
  { id: "go", value: "Go" },
  { id: "rs", value: "Rust" },
  { id: "c", value: "C" },
  { id: "cpp", value: "C++" },
  { id: "cs", value: "C#" },
  { id: "java", value: "Java" },
  { id: "kt", value: "Kotlin" },
  { id: "swift", value: "Swift" },
  { id: "php", value: "PHP" },
  { id: "dart", value: "Dart" },
  { id: "scala", value: "Scala" },
  { id: "elixir", value: "Elixir" },
  { id: "clj", value: "Clojure" },
  { id: "erl", value: "Erlang" },
  { id: "haskell", value: "Haskell" },
  { id: "lua", value: "Lua" },
  { id: "perl", value: "Perl" },
  { id: "r", value: "R" },
  { id: "matlab", value: "MATLAB" },
  { id: "fortran", value: "Fortran" },
  { id: "vb", value: "Visual Basic" },
];

export default function AccordionDemo() {
  return (
    <Autocomplete items={languages} mode="both" openOnInputClick>
      <AutocompleteInput
        render={(props) => (
          <Label className="flex w-full max-w-3xs flex-col gap-2">
            Search languages
            <div className="relative">
              <Input placeholder="e.g. Typescript" {...props} />
              <AutocompleteTrigger className="absolute top-[50%] left-[93%] translate-x-[-50%] translate-y-[-50%]">
                <AutocompleteIcon render={<ChevronDown />} />
              </AutocompleteTrigger>
            </div>
          </Label>
        )}
      />
      <AutocompleteContent>
        <AutocompleteEmpty>No languages found.</AutocompleteEmpty>
        <AutocompleteList>
          {(language: Language) => (
            <AutocompleteItem key={language.id} value={language}>
              {language.value}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  );
}
