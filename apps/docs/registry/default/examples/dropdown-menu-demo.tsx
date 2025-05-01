import {
  Bell,
  ChevronRight,
  Cloud,
  Download,
  FileText,
  HelpCircle,
  Home,
  LogOut,
  Settings,
  Share2,
  Upload,
  User,
} from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSubMenuTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Menu</Button>} />
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuGroupLabel>Preferences</DropdownMenuGroupLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Home />
            <span>Dashboard</span>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <User />
            <span>Profile</span>
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell />
            <span>Notifications</span>
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileText />
            <span>Documents</span>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenu>
            <DropdownMenuSubMenuTrigger
              render={
                <DropdownMenuItem closeOnClick={false}>
                  <Cloud />
                  <span>File Actions</span>
                  <ChevronRight className="ml-auto" />
                </DropdownMenuItem>
              }
            />
            <DropdownMenuContent className="w-40">
              <DropdownMenuItem>
                <Upload />
                <span>Upload Files</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download />
                <span>Download Files</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share2 />
                <span>Share Files</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem disabled>
            <Settings />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HelpCircle />
            <span>Help & Support</span>
            <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut />
          <span>Log out</span>
          <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
