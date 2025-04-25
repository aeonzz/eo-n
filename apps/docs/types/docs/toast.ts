import * as React from "react";
import { Toast as ToastPrimitive } from "@base-ui-components/react/toast";

export interface ProviderProps
  extends Omit<
    React.ComponentProps<typeof ToastPrimitive.Provider>,
    "children"
  > {
  /**
   * Sets the position where toasts will appear on the screen.
   *
   * @default bottom-right
   */
  position:
    | "top-center"
    | "top-right"
    | "top-left"
    | "bottom-center"
    | "bottom-right"
    | "bottom-left";

  /**
   * Enables rich color themes for toasts.
   *
   * @default false
   */
  richColors?: boolean;

  /**
   * Displays a close button on each toast for manual dismissal.
   *
   * @default false
   */
  closeButton?: boolean;
}
