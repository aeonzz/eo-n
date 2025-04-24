"use client";

import * as React from "react";
import { Toast as ToastPrimitive } from "@base-ui-components/react/toast";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";

type Position =
  | "top-center"
  | "top-right"
  | "top-left"
  | "bottom-center"
  | "bottom-right"
  | "bottom-left";

const toastManager = ToastPrimitive.createToastManager();

function useToastManager() {
  return ToastPrimitive.useToastManager();
}

interface ToastProviderProps
  extends React.ComponentProps<typeof ToastPrimitive.Provider> {
  position?: Position;
  closeButton?: boolean;
}

function ToastProvider({
  position = "bottom-right",
  closeButton = false,
  children,
  ...props
}: ToastProviderProps) {
  return (
    <ToastPrimitive.Provider data-slot="toast-provider" {...props}>
      {children}
      <ToastPrimitive.Viewport
        data-slot="toast-viewport"
        data-position={position}
        className="fixed z-50 w-full max-w-[370px] data-[position=bottom-center]:bottom-8 data-[position=bottom-center]:left-1/2 data-[position=bottom-center]:-translate-x-1/2 data-[position=bottom-left]:top-auto data-[position=bottom-left]:bottom-8 data-[position=bottom-left]:left-8 data-[position=bottom-right]:top-auto data-[position=bottom-right]:right-8 data-[position=bottom-right]:bottom-8 data-[position=top-center]:top-8 data-[position=top-center]:left-1/2 data-[position=top-center]:-translate-x-1/2 data-[position=top-left]:top-8 data-[position=top-left]:right-auto data-[position=top-left]:left-8 data-[position=top-right]:top-8 data-[position=top-right]:right-8 data-[position=top-right]:left-auto"
      >
        <ToastLists position={position} closeButton={closeButton} />
      </ToastPrimitive.Viewport>
    </ToastPrimitive.Provider>
  );
}

interface ToastListsProps {
  position: Position;
  closeButton?: boolean;
}

function ToastLists({ position, closeButton }: ToastListsProps) {
  const { toasts } = useToastManager();

  const swipeDirectionMap: Record<
    Position,
    NonNullable<ToastPrimitive.Root.Props["swipeDirection"]>
  > = {
    "bottom-center": "down",
    "bottom-left": ["down", "left"],
    "bottom-right": ["down", "right"],
    "top-center": "up",
    "top-left": ["up", "left"],
    "top-right": ["up", "right"],
  };

  const swipeDirection = swipeDirectionMap[position] ?? ["down", "right"];

  return toasts.map((toast, i) => (
    <ToastPrimitive.Root
      key={toast.id}
      data-slot="toast"
      toast={toast}
      swipeDirection={swipeDirection}
      className={cn(
        "group bg-background absolute z-[calc(1000-var(--toast-index))] mr-0 grid w-[370px] grid-cols-1 rounded-lg border p-4 shadow-lg transition-[transform,opacity,bottom,top] duration-450 ease-out select-none after:absolute after:bottom-full after:left-0 after:h-[calc(1rem+1px)] after:w-full after:content-[''] has-data-[slot=toast-action]:grid-cols-[1fr_auto] data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-offset-y)*var(--invert)+calc(var(--toast-index)*1rem*var(--invert))+var(--toast-swipe-movement-y)))]",
        "[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+calc(var(--toast-index)*var(--translate-y))))_scale(calc(1-(var(--toast-index)*0.07)))]",
        "data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
        "data-[ending-style]:opacity-0 data-[starting-style]:[transform:translateY(var(--starting-style))] data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[ending-style]:[&:not([data-limited])]:[transform:translateY(150%)]",
        position.startsWith("bottom")
          ? "bottom-0 data-[expanded]:bottom-2.5"
          : "top-0 data-[expanded]:top-2.5"
      )}
      style={{
        ["--gap" as string]: "1rem",
        ["--translate-y" as string]: position.startsWith("bottom")
          ? "-15px"
          : "15px",
        ["--starting-style" as string]: position.startsWith("bottom")
          ? "150%"
          : "-150%",
        ["--invert" as string]: position.startsWith("bottom") ? "-1" : "1",
        ["--offset-y" as string]:
          "calc(var(--toast-offset-y) * -1 + (var(--toast-index) * 1rem * -1) + var(--toast-swipe-movement-y))",
      }}
    >
      {closeButton && (
        <ToastPrimitive.Close
          data-slot="toast-close"
          className={cn(
            "ring-offset-background focus:ring-ring bg-background absolute -top-2 -left-2 rounded-full border p-[2px] opacity-70 transition-opacity hover:opacity-100 focus:ring-1 focus:ring-offset-1 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[14px]",
            {
              "opacity-0 transition-opacity duration-300 ease-out group-data-[expanded]:opacity-100":
                i > 0,
            }
          )}
          aria-label="Close"
        >
          <XIcon />
          <span className="sr-only">Close</span>
        </ToastPrimitive.Close>
      )}
      <div>
        <ToastPrimitive.Title
          data-slot="toast-title"
          className="text-sm font-semibold tracking-tight"
        />
        <ToastPrimitive.Description
          data-slot="toast-description"
          className="text-muted-foreground text-sm font-normal"
        />
      </div>
      <div className="flex items-center justify-between">
        <ToastPrimitive.Action
          data-slot="toast-action"
          render={<Button size="sm" />}
        />
      </div>
    </ToastPrimitive.Root>
  ));
}

export { ToastProvider, useToastManager, toastManager };
