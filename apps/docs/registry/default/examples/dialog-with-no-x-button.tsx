import Link from "next/link.js";
import { Radius } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
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

export default function DialogWithNoXButton() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="default">Sign in</Button>} />
      <DialogContent hideCloseIcon className="sm:max-w-[415px]">
        <DialogHeader className="items-center px-10">
          <div className="mb-2 grid place-items-center rounded-full border-2 p-3">
            <Radius />
          </div>
          <DialogTitle>Welcome back</DialogTitle>
          <DialogDescription className="text-center">
            Enter your credentials to login to your account.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              autoComplete="off"
              placeholder="eo-n@gmail.com"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              autoComplete="off"
              placeholder="*********"
              className="col-span-3"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember-me" />
              <label
                htmlFor="remember-me"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Link
              prefetch
              href="/"
              className="text-sm text-blue-400 underline underline-offset-4"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <DialogFooter className="gap-3 sm:flex-col">
          <Button variant="default" className="w-full">
            Sign in
          </Button>
          <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
            <span className="text-muted-foreground text-xs">Or</span>
          </div>
          <Button variant="outline" className="w-full [&_svg]:size-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-2"
            >
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Login with Google
          </Button>
          <div className="text-muted-foreground text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              prefetch
              href="/"
              className="text-blue-400 underline underline-offset-4"
            >
              Sign up
            </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
