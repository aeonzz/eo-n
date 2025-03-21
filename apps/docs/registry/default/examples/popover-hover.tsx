import { Dot } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

export default function PopoverHover() {
  return (
    <Popover openOnHover>
      <PopoverTrigger
        render={<Button variant="outline">Event Details</Button>}
      />
      <PopoverContent className="max-w-[325px]">
        <PopoverTitle className="mb-2">React Summit 2025</PopoverTitle>
        <PopoverDescription className="mb-3">
          Join us for the biggest React conference of the year featuring
          workshops, keynotes, and networking opportunities.
        </PopoverDescription>
        <div className="mb-3 space-y-2">
          <div className="flex items-start">
            <Dot className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <p className="ml-2 text-sm">20+ speakers from top tech companies</p>
          </div>
          <div className="flex items-start">
            <Dot className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <p className="ml-2 text-sm">Hands-on workshops on React 20</p>
          </div>
          <div className="flex items-start">
            <Dot className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <p className="ml-2 text-sm">
              Early bird pricing available until Feb 15
            </p>
          </div>
        </div>
        <Button className="w-full">View Full Schedule</Button>
      </PopoverContent>
    </Popover>
  );
}
