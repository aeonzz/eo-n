import React from "react";

import { ComponentCard } from "@/components/component-card";
import { Button } from "@/registry/default/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function TooltipCard() {
  return (
    <ComponentCard name="Tooltip" className="mb-10">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Hover</Button>} />
          <TooltipContent>
            <p>Send message</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Right</Button>} />
          <TooltipContent side="right">
            <p>Send message</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Bottom</Button>} />
          <TooltipContent side="bottom">
            <p>Send message</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Left</Button>} />
          <TooltipContent side="left">
            <p>Send message</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </ComponentCard>
  );
}
