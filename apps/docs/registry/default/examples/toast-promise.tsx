import { Button } from "@/registry/default/ui/button";
import { useToastManager } from "@/registry/default/ui/toast";

export default function ToastPromise() {
  const toast = useToastManager();

  const handleClick = () => {
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => resolve("Done"), 3000);
      }),
      {
        loading: {
          title: "Loading...",
          type: "loading",
        },
        success: {
          title: "Success!",
        },
        error: {
          title: "Error",
          description: "The promise rejected.",
          actionProps: {
            children: "Contact support",
            onClick: () => {},
          },
        },
      }
    );
  };

  return <Button onClick={handleClick}>Send</Button>;
}
