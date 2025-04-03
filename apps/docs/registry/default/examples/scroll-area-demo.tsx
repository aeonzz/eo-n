import { ScrollArea } from "@/registry/default/ui/scroll-area";

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-40 max-w-[450px] rounded-md border">
      <div className="flex flex-col gap-2 py-3">
        <h4 className="text-sm font-medium">Recent Updates</h4>
        <div className="text-sm">
          <p className="py-1">✅ Task 1: Updated inventory system.</p>
          <p className="py-1">🚀 Task 2: Deployed new version to production.</p>
          <p className="py-1">📅 Task 3: Scheduled maintenance for 9/15.</p>
          <p className="py-1">📢 Task 4: Announced new policy changes.</p>
          <p className="py-1">📦 Task 5: Received new supply items.</p>
          <p className="py-1">📊 Task 6: Generated monthly reports.</p>
          <p className="py-1">🔧 Task 7: Fixed bugs in request system.</p>
          <p className="py-1">📄 Task 8: Reviewed pending approvals.</p>
        </div>
      </div>
    </ScrollArea>
  );
}
