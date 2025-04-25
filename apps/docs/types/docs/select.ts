import type { EmptyProps } from "@/types";
import { Select as SelectPrimitive } from "@base-ui-components/react/select";

export interface ContentProps extends EmptyProps<typeof SelectPrimitive.Popup> {
  /**
   * Optional configuration props for the ```Select``` popup element. [Learn more](https://base-ui.com/react/components/select#positioner)
   *
   * @default undefined
   */
  positionerProps?: SelectPrimitive.Positioner.Props;

  /**
   * Allows you to replace the component’s HTML element with a different tag, or compose it with another component.
   *
   * Accepts a ```ReactElement``` or a function that returns the element to render.
   *
   * @default undefined
   */
  render?: Element;
}
