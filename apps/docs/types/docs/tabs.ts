import type { EmptyProps } from "@/types";

export interface RootProps extends EmptyProps<"input"> {
  /**
   *
   * @default "default"
   */
  variant?: "default" | "underline";
}
