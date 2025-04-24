import { Button } from "@/registry/default/ui/button";
import { useToastManager } from "@/registry/default/ui/toast";

export default function ToastDemo() {
  const toast = useToastManager();
  return (
    <Button
      onClick={() => {
        toast.add({
          title: "Profile Updated",
          description: "Your information has been saved.",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
