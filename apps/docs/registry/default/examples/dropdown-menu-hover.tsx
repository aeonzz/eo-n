import { Bell, Home, User } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPositioner,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export default function DropdownMenuHover() {
  return (
    <DropdownMenu openOnHover>
      <DropdownMenuTrigger render={<Button variant="outline">Menu</Button>} />
      <DropdownMenuPositioner>
        <DropdownMenuContent className="w-44">
          <DropdownMenuItem>
            <Home />
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem>
            <User />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPositioner>
    </DropdownMenu>
  );
}
