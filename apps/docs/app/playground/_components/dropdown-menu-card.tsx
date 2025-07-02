import React from "react";

import { ComponentCard } from "@/components/component-card";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export default function DropdownMenuCard() {
  return (
    <ComponentCard name="Dropdown menu">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline">Menu</Button>} />
        <DropdownMenuContent className="w-52">
          <DropdownMenuGroup>
            <DropdownMenuGroupLabel>Preferences</DropdownMenuGroupLabel>
            <DropdownMenuItem>
              Dashboard
              <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Notifications
              <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Documents
              <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>File Actions</DropdownMenuSubTrigger>
              <DropdownMenuContent className="w-32">
                <DropdownMenuItem>Upload Files</DropdownMenuItem>
                <DropdownMenuItem>Download Files</DropdownMenuItem>
                <DropdownMenuItem>Share Files</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem disabled>
              Settings
              <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Help & Support
              <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            Log out
            <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ComponentCard>
  );
}
