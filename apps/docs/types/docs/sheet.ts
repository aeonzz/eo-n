import type { EmptyProps } from "@/types";

export interface ContentProps extends EmptyProps<"button"> {
  /**
   *  Determines whether the close button should be hidden.
   * When set to `true`, the close button will not be displayed.
   *
   * @default false
   */
  hideCloseIcon?: boolean;

  /**
   * Sets the side where the sheet will appear on the screen.
   *
   * @default right
   */
  side: "top" | "right" | "bottom" | "left";
}
