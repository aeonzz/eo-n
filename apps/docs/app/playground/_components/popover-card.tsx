import React from "react";

import { ComponentCard } from "@/components/component-card";
import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

export default function PopoverCard() {
  return (
    <ComponentCard name="Popover">
      <Popover>
        <PopoverTrigger render={<Button variant="outline">Open</Button>} />
        <PopoverContent className="max-w-72" side="right" align="start">
          <PopoverTitle>Event Details</PopoverTitle>
          <PopoverDescription>
            Join us for an exclusive workshop on modern web development. Click
            below to register or learn more.
          </PopoverDescription>
        </PopoverContent>
      </Popover>
    </ComponentCard>
  );
}
