import { Skeleton } from "@/registry/default/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <div className="flex w-full max-w-md justify-center space-x-3">
      <Skeleton className="size-10 shrink-0 rounded-full" />
      <div className="flex w-[320px] flex-col justify-between">
        <Skeleton className="h-4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
