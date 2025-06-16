"use client";

import * as React from "react";
import {
  EmojiPicker as EmojiPickerPrimitive,
  type EmojiPickerListCategoryHeaderProps,
  type EmojiPickerListEmojiProps,
  type EmojiPickerListProps,
  type EmojiPickerListRowProps,
  type EmojiPickerRootProps,
  type EmojiPickerSearchProps,
  type EmojiPickerSkinToneProps,
  type EmojiPickerSkinToneSelectorProps,
  type EmojiPickerViewportProps,
} from "frimousse";
import { LoaderIcon, SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/registry/default/ui/button";

function EmojiPicker({
  className,
  style,
  columns,
  ...props
}: EmojiPickerRootProps) {
  return (
    <EmojiPickerPrimitive.Root
      data-slot="emoji-picker"
      columns={columns}
      className={cn(
        "bg-card text-card-foreground isolate flex h-[368px] w-fit flex-col gap-1 overflow-hidden rounded-lg border p-2 group-[[data-slot=popover-content]]:border-none group-[[data-slot=popover-content]]:bg-transparent",
        className
      )}
      style={
        {
          "--columns": `${columns}`,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

function EmojiPickerSearch({ className, ...props }: EmojiPickerSearchProps) {
  return (
    <div
      data-slot="emoji-picker-search-wrapper"
      className="dark:bg-input/30 border-input relative z-10 flex h-9 w-full min-w-0 flex-none items-center gap-2 rounded-md border bg-transparent py-1 pr-2.5 pl-7.5 transition-[color,box-shadow]"
    >
      <SearchIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-2 size-4 shrink-0 -translate-y-1/2" />
      <EmojiPickerPrimitive.Search
        data-slot="emoji-picker-search"
        className={cn(
          "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground focusable size-full appearance-none text-base outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        {...props}
      />
    </div>
  );
}

function EmojiPickerContent({
  className,
  children,
  ...props
}: EmojiPickerViewportProps) {
  return (
    <EmojiPickerPrimitive.Viewport
      data-slot="emoji-picker-content"
      className={cn("relative flex-1 outline-hidden", className)}
      {...props}
    >
      <EmojiPickerPrimitive.Loading
        data-slot="emoji-picker-loading"
        className="text-muted-foreground absolute inset-0 flex items-center justify-center"
      >
        <LoaderIcon className="pointer-events-none size-4 shrink-0 animate-spin" />
      </EmojiPickerPrimitive.Loading>
      <EmojiPickerPrimitive.Empty
        data-slot="emoji-picker-empty"
        className="text-muted-foreground absolute inset-0 flex items-center justify-center text-sm"
      >
        No emojis found
      </EmojiPickerPrimitive.Empty>
      {children}
      <EmojiPickerList />
    </EmojiPickerPrimitive.Viewport>
  );
}

function EmojiPickerList({
  className,
  children,
  ...props
}: EmojiPickerListProps) {
  return (
    <EmojiPickerPrimitive.List
      data-slot="emoji-picker-list"
      className={cn("w-fit pb-1.5 select-none", className)}
      components={{
        CategoryHeader: EmojiPickerCategoryHeader,
        Row: EmojiPickerRow,
        Emoji: EmojiPickerEmoji,
      }}
      {...props}
    >
      {children}
    </EmojiPickerPrimitive.List>
  );
}

function EmojiPickerSkinToneSelector({
  className,
  emoji = "👋",
  ...props
}: EmojiPickerSkinToneSelectorProps) {
  return (
    <EmojiPickerPrimitive.SkinToneSelector
      data-slot="emoji-picker-skin-tone-selector"
      className={cn(
        buttonVariants({
          variant: "outline",
          size: "icon",
          className: "text-lg",
        }),
        className
      )}
      title="Change skin tone"
      emoji={emoji}
      {...props}
    />
  );
}

function EmojiPickerCategoryHeader({
  category,
  className,
  ...props
}: EmojiPickerListCategoryHeaderProps) {
  return (
    <div
      data-slot="emoji-picker-category-header"
      className={cn(
        "bg-card text-muted-foreground p-1 text-xs font-medium",
        className
      )}
      {...props}
    >
      {category.label}
    </div>
  );
}

function EmojiPickerRow({
  children,
  className,
  ...props
}: EmojiPickerListRowProps) {
  return (
    <div
      data-slot="emoji-picker-row"
      className={cn("scroll-my-[2vw] sm:scroll-my-1.5", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function EmojiPickerEmoji({
  emoji,
  className,
  ...props
}: EmojiPickerListEmojiProps) {
  return (
    <button
      data-slot="emoji-picker-emoji"
      className={cn(
        "data-[active]:bg-muted/80 data-[active]:border-border relative flex aspect-square max-w-[calc(100%/var(--frimousse-list-columns))] min-w-8 flex-1 items-center justify-center overflow-hidden rounded-md text-base whitespace-nowrap transition-colors duration-200 ease-out data-[active]:border sm:flex-none sm:text-lg",
        className
      )}
      {...props}
    >
      {emoji.emoji}
    </button>
  );
}

function EmojiPickerFooter({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="emoji-picker-footer"
      className={cn(
        "before:bg-border relative z-10 hidden min-h-11 w-full min-w-0 flex-none items-center gap-1 py-2 pb-0 before:absolute before:-inset-x-2 before:top-0 before:h-px before:w-[calc(100%_+_16px)] before:content-[''] sm:flex",
        className
      )}
      {...props}
    >
      <EmojiPickerPrimitive.ActiveEmoji>
        {({ emoji }) =>
          emoji ? (
            <>
              <div className="flex size-8 flex-none items-center justify-center text-xl">
                {emoji.emoji}
              </div>
              <span className="text-card-foreground truncate text-xs font-medium">
                {emoji.label}
              </span>
            </>
          ) : (
            <span className="text-muted-foreground ml-2 truncate text-xs font-medium">
              Select an emoji…
            </span>
          )
        }
      </EmojiPickerPrimitive.ActiveEmoji>
      <div className="ml-auto flex gap-1">{children}</div>
    </div>
  );
}

function EmojiPickerSkinTone({
  emoji = "👋",
  className,
  children,
  ...props
}: Omit<EmojiPickerSkinToneProps, "children"> & React.ComponentProps<"div">) {
  return (
    <div
      data-slot="emoji-picker-skin-tone"
      className={cn("bg-card flex items-center rounded-md", className)}
    >
      <EmojiPickerPrimitive.SkinTone emoji={emoji} {...props}>
        {({ setSkinTone, skinToneVariations, skinTone: activeSkinTone }) =>
          skinToneVariations.map(({ skinTone, emoji }) => (
            <button
              key={skinTone}
              onClick={() => setSkinTone(skinTone)}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "icon",
                  className: "text-lg",
                }),
                skinTone === activeSkinTone && "bg-accent border"
              )}
            >
              {emoji}
            </button>
          ))
        }
      </EmojiPickerPrimitive.SkinTone>
      {children}
    </div>
  );
}

export {
  EmojiPicker,
  EmojiPickerSearch,
  EmojiPickerContent,
  EmojiPickerList,
  EmojiPickerSkinToneSelector,
  EmojiPickerFooter,
  EmojiPickerSkinTone,
};
