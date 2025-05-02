import React from "react";

import AccordionCard from "./_components/accordion-card";
import AlertDialogCard from "./_components/alert-dialog-card";
import CollapsibleCard from "./_components/collapsible-card";
import DialogCard from "./_components/dialog-card";
import DropdownMenuCard from "./_components/dropdown-menu-card";
import InputCard from "./_components/input-card";
import MeterCard from "./_components/meter-card";
import NumberInputCard from "./_components/number-input-card";
import PopoverCard from "./_components/popover-card";

export default function page() {
  return (
    <main className="flex flex-col gap-3 p-4">
      <AccordionCard />
      <AlertDialogCard />
      <CollapsibleCard />
      <DialogCard />
      <DropdownMenuCard />
      <InputCard />
      <MeterCard />
      <NumberInputCard />
      <PopoverCard />
    </main>
  );
}
