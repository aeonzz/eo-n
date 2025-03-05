import { Kbd, KbdKey, KbdSeparator } from "@/registry/default/ui/kbd";

export default function KbdGhost() {
  return (
    <Kbd variant="ghost">
      <KbdKey>⇧</KbdKey>
      <KbdSeparator />
      <KbdKey>⌥</KbdKey>
      <KbdSeparator />
      <KbdKey title="Format">F</KbdKey>
    </Kbd>
  );
}
