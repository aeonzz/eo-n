import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export default function DropdownMenuRadio() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Gender</Button>} />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuGroupLabel>Gender</DropdownMenuGroupLabel>
          <DropdownMenuSeparator className="my-1" />
          <DropdownMenuRadioGroup defaultValue="male">
            <DropdownMenuRadioItem value="male">Male</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="female">Female</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="others">Others</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
