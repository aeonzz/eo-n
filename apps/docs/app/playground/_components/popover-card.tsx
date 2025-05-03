import React from "react";

import { ComponentCard } from "@/components/component-card";
import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

export default function PopoverCard() {
  return (
    <ComponentCard name="Popover">
      <Popover>
        <PopoverTrigger render={<Button variant="outline">Open</Button>} />
        <PopoverContent side="right" align="start">
          <PopoverHeader>
            <PopoverTitle>Event Details</PopoverTitle>
            <PopoverDescription>
              Join us for an exclusive workshop on modern web development. Click
              below to register or learn more.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </ComponentCard>
  );
}
