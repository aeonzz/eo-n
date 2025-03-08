import type { EmptyProps } from "@/types";

import { InputVariants } from "@/registry/default/ui/input";

export interface RootProps extends EmptyProps<"input"> {

  /**
   * 
   * @default "default"
   */
  variant?: InputVariants["variant"];
}
