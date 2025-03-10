import React from "react";

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

export default function DialogNested() {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="outline">Open Settings</Button>}
      />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Account Settings</DialogTitle>
          <DialogDescription>
            Manage your account preferences and settings.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Your changes will be automatically saved.</p>
          <div className="grid gap-2 py-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Email notifications</span>
              <span className="text-sm text-gray-500">Enabled</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Account status</span>
              <span className="text-sm text-gray-500">Active</span>
            </div>
          </div>
        </div>
        <DialogFooter className="flex justify-between">
          <Dialog>
            <DialogTrigger
              render={<Button variant="ghost">Advanced Options</Button>}
            />
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Advanced Settings</DialogTitle>
                <DialogDescription>
                  Configure advanced options for your account. These settings
                  are for experienced users.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Developer mode</span>
                    <span className="text-sm text-gray-500">Disabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">API access</span>
                    <span className="text-sm text-gray-500">Restricted</span>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button type="submit">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
