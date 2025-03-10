import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";

export default function DialogNested() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Settings</Button>} />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Account Settings</DialogTitle>
          <DialogDescription>
            Manage your account preferences.
          </DialogDescription>
        </DialogHeader>
        <div className="py-2">
          <div className="flex items-center justify-between">
            <span>Email notifications</span>
            <span>Enabled</span>
          </div>
        </div>
        <DialogFooter>
          <Dialog>
            <DialogTrigger render={<Button variant="ghost">Advanced</Button>} />
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Advanced Settings</DialogTitle>
                <DialogDescription>
                  Configure advanced options.
                </DialogDescription>
              </DialogHeader>
              <div className="py-2">
                <div className="flex items-center justify-between">
                  <span>Developer mode</span>
                  <span>Disabled</span>
                </div>
              </div>
              <DialogFooter>
                <DialogClose render={<Button>Save</Button>} />
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <DialogClose render={<Button>Save</Button>} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
