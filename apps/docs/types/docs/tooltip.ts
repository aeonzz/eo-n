import type { EmptyProps } from "@/types";
import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip";

export interface ContentProps extends EmptyProps<"div"> {
  /**
   * Optional configuration props for the ```Tooltip``` popup element. [Learn more](https://base-ui.com/react/components/tooltip#positioner)
   *
   * @default undefined
   */
  positionerProps?: Omit<TooltipPrimitive.Popup.Props, never>;
}
