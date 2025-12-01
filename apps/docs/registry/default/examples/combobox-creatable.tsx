import * as React from "react";
import { Plus } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/default/ui/dialog";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

interface TagItem {
  creatable?: string;
  value: string;
  label: string;
}

const initialTags: TagItem[] = [
  { value: "work", label: "work" },
  { value: "personal", label: "personal" },
  { value: "ideas", label: "ideas" },
  { value: "important", label: "important" },
  { value: "later", label: "read later" },
];

export default function ComboboxMultiSelect() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const createInputRef = React.useRef<HTMLInputElement | null>(null);
  const comboboxInputRef = React.useRef<HTMLInputElement | null>(null);
  const pendingQueryRef = React.useRef("");

  const [tags, setTags] = React.useState<TagItem[]>(initialTags);
  const [selected, setSelected] = React.useState<TagItem[]>([]);
  const [query, setQuery] = React.useState("");
  const [openDialog, setOpenDialog] = React.useState(false);

  function handleCreate() {
    const input = createInputRef.current || comboboxInputRef.current;
    const value = input ? input.value.trim() : "";
    if (!value) {
      return;
    }

    const normalized = value.toLocaleLowerCase();
    const baseValue = normalized.replace(/\s+/g, "-");
    const existing = tags.find(
      (l) => l.value.trim().toLocaleLowerCase() === normalized
    );

    if (existing) {
      setSelected((prev) =>
        prev.some((i) => i.value === existing.value)
          ? prev
          : [...prev, existing]
      );
      setOpenDialog(false);
      setQuery("");
      return;
    }

    // Ensure we don't collide with an existing value (e.g., value "docs" vs. existing value "docs")
    const existingIds = new Set(tags.map((l) => l.value));
    let uniqueValue = baseValue;
    if (existingIds.has(uniqueValue)) {
      let i = 2;
      while (existingIds.has(`${baseValue}-${i}`)) {
        i += 1;
      }
      uniqueValue = `${baseValue}-${i}`;
    }

    const newItem: TagItem = { value: uniqueValue, label: value };

    if (!selected.find((item) => item.value === newItem.value)) {
      setTags((prev) => [...prev, newItem]);
      setSelected((prev) => [...prev, newItem]);
    }

    setOpenDialog(false);
    setQuery("");
  }

  function handleCreateSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleCreate();
  }

  const trimmed = query.trim();
  const lowered = trimmed.toLocaleLowerCase();
  const exactExists = tags.some(
    (l) => l.value.trim().toLocaleLowerCase() === lowered
  );
  // Show the creatable item alongside matches if there's no exact match
  const itemsForView: Array<TagItem> =
    trimmed !== "" && !exactExists
      ? [
          ...tags,
          {
            creatable: trimmed,
            value: `create:${lowered}`,
            label: `Create "${trimmed}"`,
          },
        ]
      : tags;

  return (
    <React.Fragment>
      <Combobox
        items={itemsForView}
        multiple
        onValueChange={(next) => {
          const last = next[next.length - 1];
          if (last && last.creatable) {
            pendingQueryRef.current = last.creatable;
            setOpenDialog(true);
            return;
          }
          const clean = next.filter((i) => !i.creatable);
          setSelected(clean);
          setQuery("");
        }}
        value={selected}
        inputValue={query}
        onInputValueChange={setQuery}
        onOpenChange={(open, details) => {
          if ("key" in details.event && details.event.key === "Enter") {
            // When pressing Enter:
            // - If the typed value exactly matches an existing item, add that item to the selected chips
            // - Otherwise, create a new item
            if (trimmed === "") {
              return;
            }

            const existing = tags.find(
              (l) => l.value.trim().toLocaleLowerCase() === lowered
            );

            if (existing) {
              setSelected((prev) =>
                prev.some((i) => i.value === existing.value)
                  ? prev
                  : [...prev, existing]
              );
              setQuery("");
              return;
            }

            pendingQueryRef.current = trimmed;
            setOpenDialog(true);
          }
        }}
        autoHighlight
      >
        <div className="flex w-full max-w-sm flex-col gap-2">
          <Label htmlFor="tags">Tags</Label>
          <ComboboxChips ref={containerRef}>
            <ComboboxValue>
              {(value: TagItem[]) => (
                <React.Fragment>
                  {value.map((item) => (
                    <ComboboxChip key={item.value} aria-label={item.label}>
                      {item.label}
                    </ComboboxChip>
                  ))}
                  <ComboboxInput
                    ref={comboboxInputRef}
                    id="tags"
                    placeholder={value.length > 0 ? "" : "e.g. work"}
                  />
                </React.Fragment>
              )}
            </ComboboxValue>
          </ComboboxChips>
        </div>
        <ComboboxContent anchor={containerRef} sideOffset={6}>
          <ComboboxEmpty>No language found.</ComboboxEmpty>
          <ComboboxList>
            {(item: TagItem) =>
              item.creatable ? (
                <ComboboxItem key={item.value} value={item}>
                  {item.label}
                  <Plus className="absolute right-2" />
                </ComboboxItem>
              ) : (
                <ComboboxItem key={item.value} value={item}>
                  {item.label}
                </ComboboxItem>
              )
            }
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent
          initialFocus={createInputRef}
          className="sm:max-w-[425px]"
        >
          <DialogHeader>
            <DialogTitle>Create new tag</DialogTitle>
            <DialogDescription>Add a new tag to select.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCreateSubmit} className="flex flex-col gap-4">
            <Input
              ref={createInputRef}
              placeholder="Tag name"
              defaultValue={pendingQueryRef.current}
            />
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Cancel</Button>} />
              <Button type="submit">Create</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
