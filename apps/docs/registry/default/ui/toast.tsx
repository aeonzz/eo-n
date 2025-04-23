"use client";

import * as React from "react";
import { Toast as ToastPrimitive } from "@base-ui-components/react/toast";

import { cn } from "@/lib/utils";

const toastManager = ToastPrimitive.createToastManager();

function useToastManager() {
  return ToastPrimitive.useToastManager();
}

interface ToastProviderProps
  extends React.ComponentProps<typeof ToastPrimitive.Provider>,
    Pick<React.ComponentProps<typeof ToastPrimitive.Root>, "swipeDirection"> {
  position?:
    | "top-center"
    | "top-right"
    | "top-left"
    | "bottom-center"
    | "bottom-right"
    | "bottom-left";
}

function ToastProvider({
  position = "bottom-right",
  swipeDirection,
  children,
  ...props
}: ToastProviderProps) {
  return (
    <ToastPrimitive.Provider data-slot="toast-provider" {...props}>
      {children}
      <ToastPrimitive.Viewport
        data-slot="toast-viewport"
        data-position={position}
        className="group fixed z-50 w-full max-w-[345px] border border-white data-[position=bottom-center]:bottom-4 data-[position=bottom-center]:left-1/2 data-[position=bottom-center]:-translate-x-1/2 data-[position=bottom-left]:top-auto data-[position=bottom-left]:bottom-4 data-[position=bottom-left]:left-4 data-[position=bottom-right]:top-auto data-[position=bottom-right]:right-4 data-[position=bottom-right]:bottom-4"
      >
        <ToastLists swipeDirection={swipeDirection} />
      </ToastPrimitive.Viewport>
    </ToastPrimitive.Provider>
  );
}

function ToastLists({
  swipeDirection,
}: Pick<React.ComponentProps<typeof ToastPrimitive.Root>, "swipeDirection">) {
  const { toasts } = useToastManager();

  return toasts.map((toast) => (
    <ToastPrimitive.Root
      key={toast.id}
      data-slot="toast"
      toast={toast}
      swipeDirection={swipeDirection}
      className={cn(
        "bg-background absolute z-[calc(1000-var(--toast-index))] mr-0 w-[345px] [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+calc(var(--toast-index)*-15px)))_scale(calc(1-(var(--toast-index)*0.1)))] rounded-lg border p-4 shadow-lg duration-450 ease-out select-none after:absolute after:bottom-full after:left-0 after:h-[calc(1rem+1px)] after:w-full after:content-[''] data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*1rem*-1)+var(--toast-swipe-movement-y)))] data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
        "data-[ending-style]:opacity-0 data-[starting-style]:[transform:translateY(150%)] data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[ending-style]:[&:not([data-limited])]:[transform:translateY(150%)]",
        "group-data-[position=bottom-center]:right-auto group-data-[position=bottom-center]:bottom-0 group-data-[position=bottom-center]:left-auto group-data-[position=bottom-left]:right-auto group-data-[position=bottom-left]:bottom-0 group-data-[position=bottom-left]:left-0 group-data-[position=bottom-right]:right-0 group-data-[position=bottom-right]:bottom-0 group-data-[position=bottom-right]:left-auto"
      )}
      style={{
        ["--gap" as string]: "1rem",
        ["--offset-y" as string]:
          "calc(var(--toast-offset-y) * -1 + (var(--toast-index) * 1rem * -1) + var(--toast-swipe-movement-y))",
      }}
    >
      <ToastPrimitive.Title
        data-slot="toast-title"
        className="text-base font-semibold"
      />
      <ToastPrimitive.Description
        data-slot="toast-description"
        className="text-sm opacity-90"
      />
    </ToastPrimitive.Root>
  ));
}

export { ToastProvider, useToastManager, toastManager };
