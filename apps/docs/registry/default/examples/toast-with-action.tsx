import { Button } from "@/registry/default/ui/button";
import { useToastManager } from "@/registry/default/ui/toast";

export default function ToastWithAction() {
  const toast = useToastManager();

  return (
    <Button
      variant="destructive"
      onClick={() => {
        const id = toast.add({
          title: "Item deleted",
          description: "The file has been moved to trash.",
          actionProps: {
            children: "Undo",
            onClick: () => {
              toast.close(id);
              toast.add({ title: "Item restored" });
            },
          },
        });
      }}
    >
      Delete Item
    </Button>
  );
}
