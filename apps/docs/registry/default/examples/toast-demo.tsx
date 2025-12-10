import { Button } from "@/registry/default/ui/button";
import { toastManager } from "@/registry/default/ui/toast";

export default function ToastDemo() {
  return (
    <Button
      onClick={() => {
        toastManager.add({
          title: "Profile Updated",
          description: "Your information has been saved.",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
