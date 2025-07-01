import React from "react";
import { notFound } from "next/navigation";

import ModeToggle from "@/registry/default/examples/mode-toggle";

import AccordionCard from "./_components/accordion-card";
import AlertDialogCard from "./_components/alert-dialog-card";
import CollapsibleCard from "./_components/collapsible-card";
import ContextMenuCard from "./_components/context-menu-card";
import DialogCard from "./_components/dialog-card";
import DropdownMenuCard from "./_components/dropdown-menu-card";
import EmojiPickerCard from "./_components/emoji-picker-card";
import InputCard from "./_components/input-card";
import MenubarCard from "./_components/menubar-card";
import MeterCard from "./_components/meter-card";
import NavigationMenuCard from "./_components/navigation-menu-card";
import NumberInputCard from "./_components/number-input-card";
import PopoverCard from "./_components/popover-card";
import PreviewCardCard from "./_components/preview-card-card";
import ScrollAreaCard from "./_components/scroll-area-card";
import SelectCard from "./_components/select-card";
import SheetCard from "./_components/sheet-card";
import TabsCard from "./_components/tabs-card";
import ToolbarCard from "./_components/toolbar-card";
import TooltipCard from "./_components/tooltip-card";

export default function page() {
  if (process.env.NODE_ENV !== "development") return notFound();

  return (
    <main className="relative space-y-3">
      <header className="bg-background sticky top-0 z-50 flex w-full justify-end border-b px-4 py-2">
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
        <ToolbarCard />
        <TooltipCard />
        <ContextMenuCard />
        <MenubarCard />
        <NavigationMenuCard />
        <EmojiPickerCard />
        <SheetCard />
      </div>
    </main>
  );
}
