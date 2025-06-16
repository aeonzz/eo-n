import {
  EmojiPicker,
  EmojiPickerContent,
  EmojiPickerSearch,
} from "@/registry/default/ui/emoji-picker";
import { useToastManager } from "@/registry/default/ui/toast";

export default function EmojiPickerDemo() {
  const toast = useToastManager();
  return (
    <EmojiPicker
      onEmojiSelect={({ emoji, label }) => {
        toast.add({
          title: `${emoji} ${label}`,
        });
      }}
    >
      <EmojiPickerSearch />
      <EmojiPickerContent />
    </EmojiPicker>
  );
}
