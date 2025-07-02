import React from "react";

import { Button } from "@/components/ui/button";
import { ComponentCard } from "@/components/component-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Menubar } from "@/registry/default/ui/menubar";

export default function MenubarCard() {
  return (
    <ComponentCard name="menubar">
      <Menubar>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                className="data-[popup-open]:bg-accent dark:data-[popup-open]:bg-accent/50 data-[popup-open]:text-accent-foreground"
              >
                Project
              </Button>
            }
          />
          <DropdownMenuContent className="min-w-48" sideOffset={10}>
            <DropdownMenuItem>
              New Project <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Open Project <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>Import Project</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Export</DropdownMenuSubTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>As PDF</DropdownMenuItem>
                <DropdownMenuItem>As HTML</DropdownMenuItem>
                <DropdownMenuItem>As Markdown</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Save <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                className="data-[popup-open]:bg-accent dark:data-[popup-open]:bg-accent/50 data-[popup-open]:text-accent-foreground"
              >
                Tools
              </Button>
            }
          />
          <DropdownMenuContent className="min-w-48" sideOffset={10}>
            <DropdownMenuItem>
              Settings <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Extensions <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Development</DropdownMenuSubTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Debug Console</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Terminal</DropdownMenuItem>
                <DropdownMenuItem>Git</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Command Palette</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                className="data-[popup-open]:bg-accent dark:data-[popup-open]:bg-accent/50 data-[popup-open]:text-accent-foreground"
              >
                Help
              </Button>
            }
          />
          <DropdownMenuContent className="min-w-48" sideOffset={10}>
            <DropdownMenuItem>Documentation</DropdownMenuItem>
            <DropdownMenuItem>Keyboard Shortcuts</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Check for Updates <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              Report Issue <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>About</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                className="data-[popup-open]:bg-accent dark:data-[popup-open]:bg-accent/50 data-[popup-open]:text-accent-foreground"
              >
                Account
              </Button>
            }
          />
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile Settings</DropdownMenuItem>
              <DropdownMenuItem>Notifications</DropdownMenuItem>
              <DropdownMenuItem>Security</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Menubar>
    </ComponentCard>
  );
}
