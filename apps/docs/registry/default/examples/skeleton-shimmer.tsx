import { Skeleton } from "@/registry/default/ui/skeleton";

export default function SkeletonShimmer() {
  return (
    <div className="w-full max-w-xs space-y-3">
      <Skeleton className="h-36 w-full" variant="shimmer" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" variant="shimmer" />
        <Skeleton className="h-4 w-1/2" variant="shimmer" />
      </div>
    </div>
  );
}
