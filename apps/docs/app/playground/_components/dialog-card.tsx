import React from "react";

import { ComponentCard } from "@/components/component-card";
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";

export default function DialogCard() {
  return (
    <ComponentCard name="Dialog">
      <Dialog>
        <DialogTrigger
          render={<Button variant="outline">Open dialog</Button>}
        />
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogDescription>Dialog description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </ComponentCard>
  );
}
