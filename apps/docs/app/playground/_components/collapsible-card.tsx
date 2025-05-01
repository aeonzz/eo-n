import React from "react";
import { ChevronDown } from "lucide-react";

import { ComponentCard } from "@/components/component-card";
import { Button } from "@/registry/default/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible";

export default function CollapsibleCard() {
  return (
    <ComponentCard name="Collapsible">
      <Collapsible className="flex w-[320px] flex-col space-y-2">
        <CollapsibleTrigger
          render={
            <Button variant="outline" className="justify-between">
              Product Information
              <ChevronDown className="size-3 transition-all ease-out group-data-[panel-open]:rotate-180" />
            </Button>
          }
        />
        <CollapsibleContent className="rounded-md border">
          <div className="px-3.5 py-2.5">
            <p>
              This product features high-quality materials and expert
              craftsmanship. It&apos;s designed to last for years with proper
              care and maintenance.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </ComponentCard>
  );
}
