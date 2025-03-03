import { ChevronDown } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function DialogWithNoXButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Sign in</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[359px] [&_svg]:hidden">
        <DialogHeader className="items-center p-2">
          <DialogTitle>Welcome back</DialogTitle>
          <DialogDescription className="text-center">
            Enter your credentials to login to your account.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Sample Username"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="*******" className="col-span-3" />
          </div>
        </div>
        <DialogFooter className="gap-3 sm:flex-col">
          <Button variant="default" className="w-full">
            Sign in
          </Button>
          <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
            <span className="text-muted-foreground text-xs">Or</span>
          </div>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
