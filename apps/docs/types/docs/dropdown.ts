import type { EmptyProps } from "@/types";
import { Menu as DropdownMenuPrimitive } from "@base-ui-components/react/menu";

export interface ContentProps
  extends EmptyProps<typeof DropdownMenuPrimitive.Popup> {
  /**
   * Optional configuration props for the ```DropdownMenu``` popup element. [Learn more](https://base-ui.com/react/components/menu#positioner)
   *
   * @default undefined
   */
  positionerProps?: DropdownMenuPrimitive.Positioner.Props;

  /**
   * Allows you to replace the component’s HTML element with a different tag, or compose it with another component.
   *
   * Accepts a ```ReactElement``` or a function that returns the element to render.
   *
   * @default undefined
   */
  render?: Element;
}
