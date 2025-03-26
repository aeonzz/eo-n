import { Bold, Italic } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import { Toggle } from "@/registry/default/ui/toggle";
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarInput,
  ToolbarSeparator,
} from "@/registry/default/ui/toolbar";

import { Input } from "../ui/input";

export default function ToggleWithInput() {
  return (
    <Toolbar>
      <ToolbarButton render={<Button variant="default" />}>Save</ToolbarButton>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarButton
          render={
            <Toggle variant="outline">
              <Bold />
            </Toggle>
          }
        />
        <ToolbarButton
          render={
            <Toggle variant="outline">
              <Italic />
            </Toggle>
          }
        />
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarInput render={<Input placeholder="Search and replace" />} />
      </ToolbarGroup>
    </Toolbar>
  );
}
