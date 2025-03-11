import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuPositioner,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuSubMenuTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export default function DropdownMenuRadio() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Open</Button>} />
      <DropdownMenuPositioner>
        <DropdownMenuContent className="w-44">
          <DropdownMenuRadioGroup>
            <DropdownMenuItem>Top</DropdownMenuItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenuPositioner>
    </DropdownMenu>
  );
}
