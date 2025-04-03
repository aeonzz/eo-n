import { Separator } from "@/registry/default/ui/separator";

export default function SeparatorDemo() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold">Profile</h2>
        <Separator className="mt-1.5 mb-1.5" />
        <p className="text-muted-foreground text-sm">
          Account settings and preferences
        </p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Billing</h2>
        <Separator className="mt-1.5 mb-1.5" />
        <p className="text-muted-foreground text-sm">
          Manage billing information and view receipts
        </p>
      </div>
    </div>
  );
}
