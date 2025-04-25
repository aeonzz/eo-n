import type { EmptyProps } from "@/types";
import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip";

export interface ContentProps
  extends EmptyProps<typeof TooltipPrimitive.Popup> {
  /**
   * Optional configuration props for the ```Tooltip``` popup element. [Learn more](https://base-ui.com/react/components/tooltip#positioner)
   *
   * @default undefined
   */
  positionerProps?: TooltipPrimitive.Positioner.Props;

  /**
   * Allows you to replace the component’s HTML element with a different tag, or compose it with another component.
   *
   * Accepts a ```ReactElement``` or a function that returns the element to render.
   *
   * @default undefined
   */
  render?: Element;
}
