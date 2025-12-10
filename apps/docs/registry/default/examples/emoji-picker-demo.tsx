import {
  EmojiPicker,
  EmojiPickerContent,
  EmojiPickerSearch,
} from "@/registry/default/ui/emoji-picker";
import { toastManager } from "@/registry/default/ui/toast";

export default function EmojiPickerDemo() {
  return (
    <EmojiPicker
      onEmojiSelect={({ emoji, label }) => {
        toastManager.add({
          title: `${emoji} ${label}`,
        });
      }}
    >
      <EmojiPickerSearch />
      <EmojiPickerContent />
    </EmojiPicker>
  );
}
