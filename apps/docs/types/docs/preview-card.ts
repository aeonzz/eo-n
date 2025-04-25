import type { EmptyProps } from "@/types";
import { PreviewCard as PreviewCardPrimitive } from "@base-ui-components/react/preview-card";

export interface ContentProps
  extends EmptyProps<typeof PreviewCardPrimitive.Popup> {
  /**
   * Optional configuration props for the ```PreviewCard``` popup element. [Learn more](https://base-ui.com/react/components/preview-card#positioner)
   *
   * @default undefined
   */
  positionerProps?: PreviewCardPrimitive.Positioner.Props;

  /**
   * Allows you to replace the component’s HTML element with a different tag, or compose it with another component.
   *
   * Accepts a ```ReactElement``` or a function that returns the element to render.
   *
   * @default undefined
   */
  render?: Element;
}
