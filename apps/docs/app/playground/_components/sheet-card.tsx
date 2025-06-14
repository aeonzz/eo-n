"use client";

import React from "react";
import Image from "next/image";

import { ComponentCard } from "@/components/component-card";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/default/ui/sheet";

export default function SheetCard() {
  return (
    <ComponentCard name="Sheet">
      <Sheet>
        <SheetTrigger render={<Button variant="outline">Open</Button>} />
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Update the details below and click save to apply changes.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 px-4">
            <div className="relative aspect-video w-full overflow-hidden group-data-[side=bottom]:aspect-auto group-data-[side=bottom]:h-44 group-data-[side=top]:aspect-auto group-data-[side=top]:h-44">
              <Image
                src="/images/dialog-demo-image.jpg"
                alt="dialog-placeholder"
                priority
                className="rounded-md"
                objectFit="cover"
                fill
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <Label htmlFor="title">Title</Label>
                <Input id="title" value="Sample Title" className="col-span-3" />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value="Sample Description"
                  className="col-span-3"
                />
              </div>
            </div>
          </div>
          <SheetFooter className="group-data-[side=bottom]:flex-row-reverse group-data-[side=top]:flex-row-reverse">
            <Button type="submit">Save changes</Button>
            <SheetClose render={<Button variant="outline">Close</Button>} />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </ComponentCard>
  );
}
