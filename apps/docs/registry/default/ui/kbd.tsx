import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const kbdVariants = cva(
  "inline-flex items-center justify-center text-center text-xs font-medium tracking-tight shadow-sm gap-1.5 text-muted-foreground",
  {
    variants: {
      variant: {
        default: "bg-accent",
        outline: "bg-background outline outline-border",
        ghost: "bg-transparent shadow-none",
      },
      size: {
        default: "h-6 rounded px-1.5",
        sm: "h-5 rounded-sm px-1",
        lg: "h-7 rounded-md px-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const KEY_DESCRIPTIONS: Record<string, string> = {
  "⌘": "Command",
  "⇧": "Shift",
  "⌥": "Option",
  "⌃": "Control",
  Ctrl: "Control",
  "⌫": "Backspace",
  "⎋": "Escape",
  "↩": "Return",
  "⇥": "Tab",
  "⌤": "Enter",
  "↑": "Arrow Up",
  "↓": "Arrow Down",
  "←": "Arrow Left",
  "→": "Arrow Right",
  "⇪": "Caps Lock",
  fn: "Function",
  "⌦": "Delete",
  "⇞": "Page Up",
  "⇟": "Page Down",
  "↖": "Home",
  "↘": "End",
  "↕": "Page Up/Down",
  "↔": "Left/Right",
} as const;

export type KbdVariants = VariantProps<typeof kbdVariants>;

interface KbdProps extends React.ComponentProps<"div">, KbdVariants {
  asChild?: boolean;
}

function Kbd({ className, variant, size, asChild, ...props }: KbdProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="kbd"
      className={cn(kbdVariants({ className, size, variant }))}
      {...props}
    />
  );
}

interface KbdKeyProps extends React.ComponentProps<"span"> {
  asChild?: boolean;
}

function KbdKey({
  className,
  asChild,
  title: titleProp,
  children,
  ...props
}: KbdKeyProps) {
  const Comp = asChild ? Slot : "span";
  const keyText = children?.toString() ?? "";
  const title = titleProp ?? KEY_DESCRIPTIONS[keyText] ?? keyText;
  return (
    <abbr title={title} className="no-underline">
      <Comp data-slot="kbd-key" className={cn(className)} {...props}>
        {children}
      </Comp>
    </abbr>
  );
}

interface KbdSeparatorProps extends React.ComponentProps<"span"> {
  asChild?: boolean;
}

function KbdSeparator({
  className,
  children = "+",
  asChild,
  ...props
}: KbdSeparatorProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      data-slot="kbd-separtor"
      className={cn("text-muted-foreground", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Kbd, KbdKey, KbdSeparator };
