import type { EmptyProps } from "@/types";
import { PreviewCard as DropdownPreviewCardPrimitive } from "@base-ui-components/react/preview-card";

export interface ContentProps extends EmptyProps<"div"> {
  /**
   * Optional configuration props for the ```PreviewCard``` popup element. [Learn more](https://base-ui.com/react/components/preview-card#positioner)
   *
   * @default undefined
   */
  positionerProps?: Omit<DropdownPreviewCardPrimitive.Popup.Props, never>;
}

export interface PopupProps
  extends EmptyProps<typeof DropdownPreviewCardPrimitive.Popup> {
  /**
   * Allows you to replace the component’s HTML element with a different tag, or compose it with another component.
   *
   * Accepts a ```ReactElement``` or a function that returns the element to render.
   *
   * @default undefined
   */
  render?: Element;
}
