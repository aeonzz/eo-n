import React from "react";

import ModeToggle from "@/registry/default/examples/mode-toggle";

import AccordionCard from "./_components/accordion-card";
import AlertDialogCard from "./_components/alert-dialog-card";
import CollapsibleCard from "./_components/collapsible-card";
import DialogCard from "./_components/dialog-card";
import DropdownMenuCard from "./_components/dropdown-menu-card";
import InputCard from "./_components/input-card";
import MeterCard from "./_components/meter-card";
import NumberInputCard from "./_components/number-input-card";
import PopoverCard from "./_components/popover-card";
import PreviewCardCard from "./_components/preview-card-card";
import ScrollAreaCard from "./_components/scroll-area-card";
import SelectCard from "./_components/select-card";
import TabsCard from "./_components/tabs-card";

export default function page() {
  return (
    <main className="space-y-3">
      <header className="flex w-full justify-end border-b px-4 py-2">
        <ModeToggle />
      </header>
      <div className="flex flex-col gap-3 p-4">
        <AccordionCard />
        <AlertDialogCard />
        <CollapsibleCard />
        <DialogCard />
        <DropdownMenuCard />
        <InputCard />
        <MeterCard />
        <NumberInputCard />
        <PopoverCard />
        <PreviewCardCard />
        <ScrollAreaCard />
        <SelectCard />
        <TabsCard />
      </div>
    </main>
  );
}
