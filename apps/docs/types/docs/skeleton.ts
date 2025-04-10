import type { EmptyProps } from "@/types";

import { SkeletonVariants } from "@/registry/default/ui/skeleton";

export interface RootProps extends EmptyProps<"input"> {
  /**
   *
   * @default "default"
   */
  variant?: SkeletonVariants["variant"];
}
