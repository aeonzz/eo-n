import * as React from "react";
import { Bell, Mail, Settings2 } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";
import {
  Tooltip,
  TooltipContent,
  TooltipCreateHandle,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

const demoTooltip = TooltipCreateHandle<React.ComponentType>();

function NotificationTooltip() {
  return <span>Notifications</span>;
}

function SettingsTooltip() {
  return <span>Settings</span>;
}

function MarkAsReadTooltip() {
  return <span>Mark as read</span>;
}

export default function TooltipAnimated() {
  return (
    <TooltipProvider>
      <ButtonGroup>
        <TooltipTrigger
          handle={demoTooltip}
          payload={NotificationTooltip}
          render={(props, state) => (
            <Button
              variant="outline"
              size="icon"
              active={state.open}
              {...props}
            >
              <Bell />
              <span className="sr-only">Notifications</span>
            </Button>
          )}
        />
        <TooltipTrigger
          handle={demoTooltip}
          payload={SettingsTooltip}
          render={(props, state) => (
            <Button
              variant="outline"
              active={state.open}
              size="icon"
              {...props}
            >
              <Settings2 />
              <span className="sr-only">Settings</span>
            </Button>
          )}
        />
        <TooltipTrigger
          handle={demoTooltip}
          payload={MarkAsReadTooltip}
          render={(props, state) => (
            <Button
              variant="outline"
              active={state.open}
              size="icon"
              {...props}
            >
              <Mail />
              <span className="sr-only">Mark as read</span>
            </Button>
          )}
        />
      </ButtonGroup>
      <Tooltip handle={demoTooltip}>
        {({ payload: Payload }) => (
          <TooltipContent>
            {Payload !== undefined && <Payload />}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
