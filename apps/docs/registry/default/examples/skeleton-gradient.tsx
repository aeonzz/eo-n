import { Skeleton } from "@/registry/default/ui/skeleton";

export default function SkeletonGradient() {
  return (
    <div className="w-full max-w-xs space-y-3">
      <Skeleton className="h-36 w-full" variant="gradient" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" variant="gradient" />
        <Skeleton className="h-4 w-1/2" variant="gradient" />
      </div>
    </div>
  );
}
