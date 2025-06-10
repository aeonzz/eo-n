import { ChevronRight } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSubMenuTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Menubar } from "@/registry/default/ui/menubar";

export default function MenubarDemo() {
  return (
    <Menubar>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="sm">
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
          <DropdownMenu>
            <DropdownMenuSubMenuTrigger
              render={
                <DropdownMenuItem closeOnClick={false}>
                  <span>Export</span>
                  <ChevronRight className="ml-auto" />
                </DropdownMenuItem>
              }
            />
            <DropdownMenuContent>
              <DropdownMenuItem>As PDF</DropdownMenuItem>
              <DropdownMenuItem>As HTML</DropdownMenuItem>
              <DropdownMenuItem>As Markdown</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Save <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="sm">
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
          <DropdownMenu>
            <DropdownMenuSubMenuTrigger
              render={
                <DropdownMenuItem closeOnClick={false}>
                  <span>Development</span>
                  <ChevronRight className="ml-auto" />
                </DropdownMenuItem>
              }
            />
            <DropdownMenuContent>
              <DropdownMenuItem>Debug Console</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Terminal</DropdownMenuItem>
              <DropdownMenuItem>Git</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Command Palette</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="sm">
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
            <Button variant="ghost" size="sm">
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
  );
}
