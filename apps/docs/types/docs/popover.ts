import type { EmptyProps } from "@/types";
import { Popover as DropdownPopoverPrimitive } from "@base-ui-components/react/popover";

export interface ContentProps extends EmptyProps<"div"> {
  /**
   * Optional configuration props for the ```Popover``` popup element. [Learn more](https://base-ui.com/react/components/popover#positioner)
   *
   * @default undefined
   */
  positionerProps?: Omit<DropdownPopoverPrimitive.Popup.Props, never>;
}

export interface PopupProps
  extends EmptyProps<typeof DropdownPopoverPrimitive.Popup> {
  /**
   * Allows you to replace the component’s HTML element with a different tag, or compose it with another component.
   *
   * Accepts a ```ReactElement``` or a function that returns the element to render.
   *
   * @default undefined
   */
  render?: Element;
}
