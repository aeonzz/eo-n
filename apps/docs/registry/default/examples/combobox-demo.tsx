import { XIcon } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import {
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxIcon,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/registry/default/ui/combobox";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

interface Framework {
  value: string;
  label: string;
}

const frameworks: Framework[] = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function ComboboxDemo() {
  return (
    <Combobox items={frameworks} itemToStringLabel={(item) => item.label}>
      <ComboboxInput
        render={(props) => (
          <Label className="flex w-full max-w-[229px] flex-col gap-2">
            Search framework
            <div className="relative">
              <Input placeholder="e.g. apple" {...props} />
              <div className="absolute top-0 right-2 flex h-full items-center gap-1">
                <ComboboxClear
                  render={
                    <Button
                      size="icon"
                      variant="ghost"
                      className="[&]:size-5"
                    >
                      <XIcon className="size-3.5" />
                    </Button>
                  }
                />
                <ComboboxTrigger>
                  <ComboboxIcon />
                </ComboboxTrigger>
              </div>
            </div>
          </Label>
        )}
      />
      <ComboboxContent sideOffset={6}>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {(item: Framework) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
