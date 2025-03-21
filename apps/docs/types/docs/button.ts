import type { EmptyProps } from "@/types";

import type { ButtonVariants } from "@/registry/default/ui/button";

export interface RootProps extends EmptyProps<"button"> {
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
}
