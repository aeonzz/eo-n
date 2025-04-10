import { ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible";

import { Button } from "../ui/button";

export default function CollapsibleDemo() {
  return (
    <Collapsible className="flex w-[320px] flex-col">
      <CollapsibleTrigger
        render={
          <Button variant="outline" className="justify-between">
            Product Information
            <ChevronDown className="size-3 transition-all ease-out group-data-[panel-open]:rotate-180" />
          </Button>
        }
      />
      <CollapsibleContent>
        <div className="mt-2 rounded-md border px-3.5 py-2.5">
          <p className="text-sm">
            This product features high-quality materials and expert
            craftsmanship. It&apos;s designed to last for years with proper care
            and maintenance.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
