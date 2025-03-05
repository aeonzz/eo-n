import { Kbd, KbdKey, KbdSeparator } from "@/registry/default/ui/kbd";

export default function KbdOutline() {
  return (
    <Kbd variant="outline">
      <KbdKey>⌥</KbdKey>
      <KbdSeparator />
      <KbdKey>⇥</KbdKey>
    </Kbd>
  );
}
