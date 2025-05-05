import React from "react";
import { Bold, HelpCircle, Italic, Redo2, Undo2 } from "lucide-react";

import { ComponentCard } from "@/components/component-card";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Toggle } from "@/registry/default/ui/toggle";
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarInput,
  ToolbarLink,
  ToolbarSeparator,
} from "@/registry/default/ui/toolbar";

export default function ToolbarCard() {
  return (
    <ComponentCard name="Toolbar" column>
      <Toolbar>
        <ToolbarButton render={<Button variant="default" />}>
          Save
        </ToolbarButton>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButton
            render={
              <Button variant="outline">
                <Undo2 />
                Undo
              </Button>
            }
          />
          <ToolbarButton
            render={
              <Button variant="outline">
                <Redo2 />
                Redo
              </Button>
            }
          />
        </ToolbarGroup>
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
        <Select defaultValue="left">
          <ToolbarButton
            render={
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Align items" />
              </SelectTrigger>
            }
          />
          <SelectContent>
            <SelectItem value="left">Left Align</SelectItem>
            <SelectItem value="center">Center Align</SelectItem>
            <SelectItem value="right">Right Align</SelectItem>
          </SelectContent>
        </Select>
        <ToolbarSeparator />
        <ToolbarLink href="#" className="ml-8">
          <HelpCircle />
          Learn More
        </ToolbarLink>
      </Toolbar>
      <Toolbar>
        <ToolbarButton render={<Button variant="default" />}>
          Save
        </ToolbarButton>
        <ToolbarSeparator />
        <ToolbarGroup disabled>
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
        <ToolbarInput render={<Input placeholder="Search and replace" />} />
      </Toolbar>
    </ComponentCard>
  );
}
