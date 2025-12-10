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
   * Whether to remove the default padding and gap from the dialog content.
   * Useful for edge-to-edge content like scroll areas.
   * @default false
   */
  flush?: boolean;
}
