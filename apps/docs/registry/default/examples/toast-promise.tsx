import { Button } from "@/registry/default/ui/button";
import { toastManager } from "@/registry/default/ui/toast";

export default function ToastPromise() {
  const handleClick = () => {
    toastManager.promise(
      new Promise((resolve) => {
        setTimeout(() => resolve("Done"), 3000);
      }),
      {
        loading: {
          title: "Loading...",
        },
        success: {
          title: "Success!",
        },
        error: {
          title: "Error",
        },
      }
    );
  };

  return <Button onClick={handleClick}>Show Toast</Button>;
}
