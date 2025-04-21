import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export default function DropdownMenuCheckbox() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline">Preferences</Button>}
      />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuGroupLabel>Preferences</DropdownMenuGroupLabel>
          <DropdownMenuSeparator className="my-1" />
          <DropdownMenuCheckboxItem>
            Enable Notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem defaultChecked>
            Dark Mode
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Automatic Updates</DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
