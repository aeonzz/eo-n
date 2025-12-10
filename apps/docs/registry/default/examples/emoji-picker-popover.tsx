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
import { toastManager } from "@/registry/default/ui/toast";

export default function EmojiPickerDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button>Open emoji picker</Button>} />
      <PopoverContent className="w-fit p-0">
        <EmojiPicker
          onEmojiSelect={({ emoji, label }) => {
            toastManager.add({
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
  );
}
