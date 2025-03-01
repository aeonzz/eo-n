import type { CompositionProps, EmptyProps } from "@/types";

import type { ButtonVariants } from "@/registry/default/ui/button";

export interface RootProps extends EmptyProps<"button">, CompositionProps {
  /**
   *
   * @default "default"
   */
  size?: ButtonVariants["size"];

  /**
   *
   * @default "default"
   */
  variant?: ButtonVariants["variant"];

  /**
   *
   * @default undefined
   */
  icon?: React.ReactElement<SVGElement>;

  /**
   * Sets the icon position relative to the button text.
   * @default "left"
   */
  iconPlacement?: "left" | "right";
}
