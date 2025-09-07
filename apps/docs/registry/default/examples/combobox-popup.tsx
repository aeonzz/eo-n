import * as React from "react";
import {
  CheckCircle,
  ChevronsUpDown,
  Circle,
  Clock,
  Loader,
  Search,
  XCircle,
} from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxIcon,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/registry/default/ui/combobox";

interface Status {
  value: string | null;
  label: string;
  icon: React.ReactNode;
}

const statuses: Status[] = [
  {
    value: null,
    label: "Set status",
    icon: <Circle />,
  },
  {
    value: "pending",
    label: "Pending",
    icon: <Clock />,
  },
  {
    value: "in_progress",
    label: "In Progress",
    icon: <Loader />,
  },
  {
    value: "completed",
    label: "Completed",
    icon: <CheckCircle />,
  },
  {
    value: "cancelled",
    label: "Cancelled",
    icon: <XCircle />,
  },
];

export default function ComboboxPopup() {
  return (
    <Combobox items={statuses} defaultValue={statuses[0]}>
      <ComboboxTrigger
        render={(props) => (
          <Button
            variant="outline"
            className="w-[200px] justify-between"
            {...props}
          >
            <ComboboxValue>
              {(value: Status) => (
                <span className="inline-flex items-center gap-2">
                  {value.icon}
                  {value.label}
                </span>
              )}
            </ComboboxValue>
            <ComboboxIcon render={<ChevronsUpDown />} />
          </Button>
        )}
      />
      <ComboboxContent>
        <div className="relative">
          <div className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3">
            <Search className="size-4" />
          </div>
          <ComboboxInput placeholder="Change status..." className="pl-9" />
        </div>
        <ComboboxEmpty>No status found.</ComboboxEmpty>
        <ComboboxList>
          {(item: Status) => (
            <ComboboxItem key={item.value} value={item}>
              {item.icon}
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
