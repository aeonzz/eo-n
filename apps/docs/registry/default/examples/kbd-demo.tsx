import { Kbd, KbdKey, KbdSeparator } from "@/registry/default/ui/kbd";

export default function Kbddemo() {
  return (
    <Kbd>
      <KbdKey>⌘</KbdKey>
      <KbdSeparator />
      <KbdKey title="Search">K</KbdKey>
    </Kbd>
  );
}
