"use client";

import * as React from "react";
import { Toast as ToastPrimitive } from "@base-ui-components/react/toast";
import { cva, type VariantProps } from "class-variance-authority";
import {
  CircleAlert,
  CircleCheck,
  CircleHelp,
  Loader,
  TriangleAlert,
  XIcon,
} from "lucide-react";

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
const anchoredToastManager = ToastPrimitive.createToastManager();

const useToastManager = ToastPrimitive.useToastManager;

function ToastProvider({
  position = "bottom-right",
  closeButton = false,
  richColors = false,
  children,
  ...props
}: ToastPrimitive.Provider.Props & {
  position?: Position;
  richColors?: boolean;
  closeButton?: boolean;
}) {
  return (
    <ToastPrimitive.Provider toastManager={toastManager} {...props}>
      {children}
      <ToastPrimitive.Portal data-slot="toast-portal">
        <ToastPrimitive.Viewport
          data-slot="toast-viewport"
          data-position={position}
          className="fixed z-50 w-[calc(100%-2rem)] data-[position=bottom-center]:bottom-4 data-[position=bottom-center]:left-1/2 data-[position=bottom-center]:-translate-x-1/2 data-[position=bottom-left]:bottom-4 data-[position=bottom-left]:left-4 data-[position=bottom-right]:right-4 data-[position=bottom-right]:bottom-4 data-[position=top-center]:top-4 data-[position=top-center]:left-1/2 data-[position=top-center]:-translate-x-1/2 data-[position=top-left]:top-4 data-[position=top-left]:left-4 data-[position=top-right]:top-4 data-[position=top-right]:right-4 sm:w-full sm:max-w-[370px] sm:data-[position=bottom-center]:bottom-8 sm:data-[position=bottom-left]:bottom-8 sm:data-[position=bottom-left]:left-8 sm:data-[position=bottom-right]:right-8 sm:data-[position=bottom-right]:bottom-8 sm:data-[position=top-center]:top-8 sm:data-[position=top-left]:top-8 sm:data-[position=top-left]:left-8 sm:data-[position=top-right]:top-8 sm:data-[position=top-right]:right-8"
        >
          <ToastLists
            position={position}
            closeButton={closeButton}
            richColors={richColors}
          />
        </ToastPrimitive.Viewport>
      </ToastPrimitive.Portal>
    </ToastPrimitive.Provider>
  );
}

function AnchoredToastProvider({
  children,
  ...props
}: ToastPrimitive.Provider.Props) {
  return (
    <ToastPrimitive.Provider toastManager={anchoredToastManager} {...props}>
      {children}
      <AnchoredToasts />
    </ToastPrimitive.Provider>
  );
}

function AnchoredToasts() {
  const { toasts } = ToastPrimitive.useToastManager();
  return (
    <ToastPrimitive.Portal data-slot="anchored-toast-portal">
      <ToastPrimitive.Viewport data-slot="anchored-toast-viewport">
        {toasts.map((toast) => (
          <ToastPrimitive.Positioner
            key={toast.id}
            toast={toast}
            className="z-[calc(1000-var(--toast-index))]"
          >
            <ToastPrimitive.Root
              data-slot="anchored-toast"
              toast={toast}
              className="bg-popover text-popover-foreground group flex w-max origin-(--transform-origin) flex-col rounded-md border px-2 py-1 text-xs text-balance transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0"
            >
              <ToastPrimitive.Content>
                <ToastPrimitive.Description />
              </ToastPrimitive.Content>
            </ToastPrimitive.Root>
          </ToastPrimitive.Positioner>
        ))}
      </ToastPrimitive.Viewport>
    </ToastPrimitive.Portal>
  );
}

const toastVariants = cva(
  "group absolute z-[calc(1000-var(--toast-index))] mr-0 h-[var(--height)] w-full rounded-lg border px-3.5 py-4 shadow-lg select-none [--gap:0.75rem] [transition:transform_0.3s_cubic-bezier(0,0,0.2,1),opacity_0.3s,height_0.15s]",
  {
    variants: {
      variant: {
        default: "bg-popover text-popover-foreground border-border",
        loading: "bg-popover text-popover-foreground border-border",
        success:
          "data-[rich-colors=true]:border-green-200 data-[rich-colors=true]:bg-green-100 data-[rich-colors=true]:text-green-800 dark:data-[rich-colors=true]:border-green-900/40 dark:data-[rich-colors=true]:bg-green-950 dark:data-[rich-colors=true]:text-green-300 data-[rich-colors=true]:[&_[data-slot=toast-close]]:bg-green-100 dark:data-[rich-colors=true]:[&_[data-slot=toast-close]]:bg-green-950",
        error:
          "data-[rich-colors=true]:border-red-200 data-[rich-colors=true]:bg-red-100 data-[rich-colors=true]:text-red-800 dark:data-[rich-colors=true]:border-red-900/40 dark:data-[rich-colors=true]:bg-red-950 dark:data-[rich-colors=true]:text-red-300 data-[rich-colors=true]:[&_[data-slot=toast-close]]:bg-red-100 dark:data-[rich-colors=true]:[&_[data-slot=toast-close]]:bg-red-950",
        warning:
          "data-[rich-colors=true]:border-amber-200 data-[rich-colors=true]:bg-amber-100 data-[rich-colors=true]:text-amber-800 dark:data-[rich-colors=true]:border-amber-900/40 dark:data-[rich-colors=true]:bg-amber-950 dark:data-[rich-colors=true]:text-amber-300 data-[rich-colors=true]:[&_[data-slot=toast-close]]:bg-amber-100 dark:data-[rich-colors=true]:[&_[data-slot=toast-close]]:bg-amber-950",
        info: "data-[rich-colors=true]:border-blue-200 data-[rich-colors=true]:bg-blue-100 data-[rich-colors=true]:text-blue-800 dark:data-[rich-colors=true]:border-blue-900/40 dark:data-[rich-colors=true]:bg-blue-950 dark:data-[rich-colors=true]:text-blue-300 data-[rich-colors=true]:[&_[data-slot=toast-close]]:bg-blue-100 dark:data-[rich-colors=true]:[&_[data-slot=toast-close]]:bg-blue-950",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type ToastVariants = VariantProps<typeof toastVariants>;

export type ToastType = "loading" | "success" | "error" | "warning" | "info";

const TOAST_ICON_MAP: Record<
  ToastType,
  React.ComponentType<{ className?: string }>
> = {
  loading: Loader,
  success: CircleCheck,
  error: CircleAlert,
  warning: TriangleAlert,
  info: CircleHelp,
};

function ToastIcon({
  type,
  className,
}: {
  type?: ToastType;
  className?: string;
}) {
  if (!type) return null;
  const Icon = TOAST_ICON_MAP[type];
  return (
    <Icon className={cn(type === "loading" && "animate-spin", className)} />
  );
}

interface ToastListsProps {
  position: Position;
  richColors: boolean;
  closeButton?: boolean;
}

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

function ToastLists({ position, richColors, closeButton }: ToastListsProps) {
  const { toasts } = useToastManager();

  const swipeDirection = swipeDirectionMap[position] ?? ["down", "right"];

  return toasts.map((toast, i) => (
    <ToastPrimitive.Root
      key={toast.id}
      data-slot="toast"
      data-rich-colors={richColors}
      toast={toast}
      swipeDirection={swipeDirection}
      data-position={position}
      className={cn(
        toastVariants({ variant: toast.type as ToastVariants["variant"] }),
        "[--scale:calc(max(0,1-(var(--toast-index)*0.1)))]",
        "[--shrink:calc(1-var(--scale))]",
        "[--height:var(--toast-frontmost-height,var(--toast-height))]",
        "[--offset-y:calc(var(--toast-offset-y)*var(--invert)+calc(var(--toast-index)*var(--gap)*var(--invert))+var(--toast-swipe-movement-y))]",
        "data-[position^=bottom]:[--peek:-0.75rem] data-[position^=top]:[--peek:0.75rem]",
        "data-[position^=bottom]:[--starting-style:150%] data-[position^=top]:[--starting-style:-150%]",
        "data-[position^=bottom]:[--invert:-1] data-[position^=top]:[--invert:1]",
        "data-[position^=bottom]:origin-bottom data-[position^=top]:origin-top",
        "data-[position^=bottom]:right-0 data-[position^=bottom]:bottom-0 data-[position^=bottom]:left-auto",
        "data-[position^=top]:top-0 data-[position^=top]:right-0 data-[position^=top]:left-auto",
        "",
        "[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+calc(var(--toast-index)*var(--peek))+calc(var(--shrink)*var(--height)*var(--invert))))_scale(var(--scale))]",
        "data-[ending-style]:opacity-0 data-[expanded]:h-[var(--toast-height)] data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--offset-y)))] data-[limited]:opacity-0 data-[starting-style]:[transform:translateY(var(--starting-style))] data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(var(--starting-style))]",
        "after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']"
      )}
    >
      {closeButton && toast.type !== "loading" && (
        <ToastPrimitive.Close
          data-slot="toast-close"
          className={cn(
            "ring-offset-background focus:ring-ring bg-background absolute -top-2 -left-2 rounded-full border p-[2px] opacity-70 transition-opacity hover:opacity-100 focus:ring-1 focus:ring-offset-1 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[14px]",
            i > 0 &&
              "pointer-events-none opacity-0 group-data-[expanded]:pointer-events-auto group-data-[expanded]:opacity-70"
          )}
          aria-label="Close"
        >
          <XIcon />
          <span className="sr-only">Close</span>
        </ToastPrimitive.Close>
      )}
      <ToastPrimitive.Content className="flex items-center space-x-2.5 overflow-hidden transition-opacity duration-300 ease-out data-[behind]:pointer-events-none data-[behind]:opacity-0 data-[expanded]:pointer-events-auto data-[expanded]:opacity-100 [&>svg]:size-4.5 [&>svg]:shrink-0">
        <ToastIcon type={toast.type as ToastType} />
        <div className="flex flex-col">
          <ToastPrimitive.Title
            data-slot="toast-title"
            className="text-sm font-medium tracking-tight"
          />
          <ToastPrimitive.Description
            data-slot="toast-description"
            className="text-muted-foreground text-sm font-normal"
          />
        </div>
      </ToastPrimitive.Content>
      <div className="flex items-center justify-between">
        <ToastPrimitive.Action
          data-slot="toast-action"
          render={<Button size="sm" />}
        />
      </div>
    </ToastPrimitive.Root>
  ));
}

export {
  ToastProvider,
  AnchoredToastProvider,
  toastManager,
  anchoredToastManager,
};
