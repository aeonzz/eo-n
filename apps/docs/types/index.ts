export type EmptyProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  keyof React.ComponentPropsWithoutRef<T>
>;
export interface CompositionProps {
  /**
   * Whether to merge props with the immediate child.
   * @default false
   */
  asChild?: boolean;
}
