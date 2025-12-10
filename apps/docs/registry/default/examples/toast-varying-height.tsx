import { Button } from "@/registry/default/ui/button";
import { toastManager } from "@/registry/default/ui/toast";

export default function ToastVaryingHeight() {
  return (
    <Button
      onClick={() => {
        const description = TEXTS[Math.floor(Math.random() * TEXTS.length)];
        toastManager.add({
          title: "Varying Height",
          description,
        });
      }}
    >
      Show Toast
    </Button>
  );
}

const TEXTS = [
  "Short message.",
  "A bit longer message that spans two lines.",
  "This is a longer description that intentionally takes more vertical space to demonstrate stacking with varying heights.",
  "An even longer description that should span multiple lines so we can verify the clamped collapsed height and smooth expansion animation when hovering or focusing the viewport.",
];
