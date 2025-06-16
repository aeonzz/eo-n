"use client";

import React from "react";

import { ComponentCard } from "@/components/component-card";
import { Button } from "@/registry/default/ui/button";
import {
  EmojiPicker,
  EmojiPickerContent,
  EmojiPickerFooter,
  EmojiPickerSearch,
  EmojiPickerSkinToneSelector,
} from "@/registry/default/ui/emoji-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";
import { useToastManager } from "@/registry/default/ui/toast";

export default function EmojiPickerCard() {
  const toast = useToastManager();

  return (
    <ComponentCard name="Emoji Picker">
      <EmojiPicker
        onEmojiSelect={({ emoji, label }) => {
          toast.add({
            title: `${emoji} ${label}`,
          });
        }}
      >
        <EmojiPickerSearch />
        <EmojiPickerContent />
        <EmojiPickerFooter>
          <EmojiPickerSkinToneSelector />
        </EmojiPickerFooter>
      </EmojiPicker>

      <Popover>
        <PopoverTrigger render={<Button>Open emoji picker</Button>} />
        <PopoverContent side="bottom" align="start" className="w-fit p-0">
          <EmojiPicker
            onEmojiSelect={({ emoji, label }) => {
              toast.add({
                title: `${emoji} ${label}`,
              });
            }}
          >
            <EmojiPickerSearch />
            <EmojiPickerContent />
            <EmojiPickerFooter>
              <EmojiPickerSkinToneSelector />
            </EmojiPickerFooter>
          </EmojiPicker>
        </PopoverContent>
      </Popover>
    </ComponentCard>
  );
}
