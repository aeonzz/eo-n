import * as React from "react";
import { Bell, Settings2 } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverCreateHandle,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover";

const demoPopover = PopoverCreateHandle<React.ComponentType>();

function NotificationsContent() {
  return (
    <div className="w-60">
      <PopoverHeader>
        <PopoverTitle>Notifications</PopoverTitle>
        <PopoverDescription>You have no new notifications.</PopoverDescription>
      </PopoverHeader>
      <div className="text-muted-foreground mt-4 grid place-items-center rounded-md border border-dashed py-12 text-sm">
        No new notifications
      </div>
    </div>
  );
}

function SettingsContent() {
  return (
    <div className="w-80">
      <PopoverHeader>
        <PopoverTitle>Settings</PopoverTitle>
        <PopoverDescription>Manage your account settings.</PopoverDescription>
      </PopoverHeader>
      <div className="mt-4 grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            autoFocus
            defaultValue="@aeonzz"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="domain">Domain</Label>
          <Input
            id="domain"
            defaultValue="aeonz.dev"
            className="col-span-2 h-8"
          />
        </div>
      </div>
    </div>
  );
}

export default function PopoverAnimated() {
  return (
    <div className="flex gap-2">
      <PopoverTrigger
        handle={demoPopover}
        payload={NotificationsContent}
        render={(props, state) => (
          <Button variant="outline" size="icon" active={state.open} {...props}>
            <Bell />
            <span className="sr-only">Notifications</span>
          </Button>
        )}
      />
      <PopoverTrigger
        handle={demoPopover}
        payload={SettingsContent}
        render={(props, state) => (
          <Button variant="outline" active={state.open} size="icon" {...props}>
            <Settings2 />
            <span className="sr-only">Settings</span>
          </Button>
        )}
      />
      <Popover handle={demoPopover}>
        {({ payload: Payload }) => (
          <PopoverContent>
            {Payload !== undefined && <Payload />}
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
}
