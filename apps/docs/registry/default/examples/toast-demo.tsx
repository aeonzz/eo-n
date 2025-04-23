import {
  useToastManager,
} from "@/registry/default/ui/toast";

import { Button } from "../ui/button";

export default function ToastDemo() {
  const toast = useToastManager();
  return (
    <Button
      onClick={() => {
        toast.add({
          title: "Hello",
          description: "This is a toast message",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
