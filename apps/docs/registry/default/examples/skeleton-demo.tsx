import { Skeleton } from "@/registry/default/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <div className="w-full max-w-xs space-y-3">
      <Skeleton className="h-36 w-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
