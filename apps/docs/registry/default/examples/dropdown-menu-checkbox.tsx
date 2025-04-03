import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
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
          <DropdownMenuGroupLabel className="-mt-1 mb-1">
            Preferences
          </DropdownMenuGroupLabel>
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
