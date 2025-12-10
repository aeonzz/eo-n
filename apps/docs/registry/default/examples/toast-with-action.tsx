import { Button } from "@/registry/default/ui/button";
import { toastManager } from "@/registry/default/ui/toast";

export default function ToastWithAction() {
  return (
    <Button
      variant="destructive"
      onClick={() => {
        const id = toastManager.add({
          title: "Item deleted",
          description: "The file has been moved to trash.",
          actionProps: {
            children: "Undo",
            onClick: () => {
              toastManager.close(id);
              toastManager.add({ title: "Item restored" });
            },
          },
        });
      }}
    >
      Delete Item
    </Button>
  );
}
