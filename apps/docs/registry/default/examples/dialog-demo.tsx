import Image from "next/image.js";

import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Open dialog</Button>} />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Content</DialogTitle>
          <DialogDescription>
            Update the details below and click save to apply changes.
          </DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video w-full overflow-hidden">
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
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
