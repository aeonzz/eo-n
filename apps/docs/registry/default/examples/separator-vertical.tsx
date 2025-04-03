import { Separator } from "@/registry/default/ui/separator";

export default function SeparatorVertical() {
  return (
    <div className="p-4">
      <div className="flex h-10 items-center">
        <span className="font-medium">Home</span>
        <Separator orientation="vertical" className="mx-3 h-6" />
        <span className="font-medium">Products</span>
        <Separator orientation="vertical" className="mx-3 h-6" />
        <span className="font-medium">About</span>
        <Separator orientation="vertical" className="mx-3 h-6" />
        <span className="font-medium">Contact</span>
      </div>
    </div>
  );
}
