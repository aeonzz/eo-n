import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

import { Button } from "../ui/button";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button>Hover</Button>} />
        <TooltipContent>
          <p>Send message</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
