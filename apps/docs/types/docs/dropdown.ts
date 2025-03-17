import type { EmptyProps } from "@/types";
import { Menu as DropdownMenuPrimitive } from "@base-ui-components/react/menu";

export interface ContentProps extends EmptyProps<"div"> {
  /**
   * Optional configuration props for the Dropdown popup element.
   *
   * @default undefined
   */
  popupProps?: Omit<DropdownMenuPrimitive.Popup.Props, never>;
}

export interface PopupProps
  extends EmptyProps<typeof DropdownMenuPrimitive.Popup> {
  /**
   * Allows you to replace the component’s HTML element with a different tag, or compose it with another component.
   *
   * Accepts a ```ReactElement``` or a function that returns the element to render.
   *
   * @default undefined
   */
  render?: Element;
}
