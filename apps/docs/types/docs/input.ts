import type { EmptyProps } from "@/types";

import { InputVariants } from "@/registry/default/ui/input";

export interface RootProps extends EmptyProps<"input"> {

  /**
   * 
   * @default "default"
   */
  variant?: InputVariants["variant"];

  /**
   * 
   * Hides the spin buttons for number inputs when set to `true`.
   * @default false
   */
  hideSpinButtons?: boolean 
}
