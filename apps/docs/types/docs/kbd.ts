import type { CompositionProps, EmptyProps } from "@/types";

import { KbdVariants } from "@/registry/default/ui/kbd";

export interface RootProps extends EmptyProps<"kbd">, CompositionProps {
  /**
   *
   * @default "default"
   */
  variant?: KbdVariants["variant"];

  /**
   *
   * Controls the size of the keyboard key.
   * @default "default"
   */
  size?: KbdVariants["size"];
}

export interface KeyProps extends EmptyProps<"span">, CompositionProps {
  /**
   *
   * Provides an accessible title or tooltip for the key.
   * @default
   */
  title?: string;
}

export interface SeparatorProps extends EmptyProps<"span">, CompositionProps {}
