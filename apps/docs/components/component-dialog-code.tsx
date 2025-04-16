"use client";

import * as React from "react";
import { Code } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

interface ComponentDialogCodeProps
  extends React.ComponentPropsWithoutRef<"div"> {
  description: string;
}

export function ComponentDialogCode({
  children,
  description,
  ...props
}: ComponentDialogCodeProps) {
  return (
    <div className="flex items-center justify-between" {...props}>
      <p className="!m-0 text-sm leading-none font-semibold tracking-tight">
        {description}
      </p>
      <Dialog>
        <Tooltip delay={0}>
          <TooltipTrigger
            render={
              <DialogTrigger
                render={
                  <Button variant="outline" size="sm">
                    Code
                    <Code />
                  </Button>
                }
              />
            }
          />
          <TooltipContent>
            <p>View code</p>
          </TooltipContent>
        </Tooltip>
        <DialogContent className="max-h-[95vh] min-w-xl gap-0 overflow-y-auto [&_code]:first:!text-[10px] [&_p]:mb-4 [&_p]:text-lg [&_p]:leading-none [&_p]:font-semibold">
          <DialogHeader>
            <DialogTitle>Installation</DialogTitle>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}
