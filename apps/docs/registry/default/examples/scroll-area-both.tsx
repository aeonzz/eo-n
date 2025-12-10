import { ScrollArea } from "@/registry/default/ui/scroll-area";

export default function ScrollAreaBoth() {
  return (
    <ScrollArea
      scrollbars="both"
      className="size-80 rounded-[12px] border"
    >
      <ul
        style={{
          margin: 0,
          padding: 0,
        }}
        className="grid list-none grid-cols-[repeat(10,6.25rem)] grid-rows-[repeat(10,6.25rem)] gap-2 p-0"
      >
        {Array.from({ length: 100 }, (_, i) => (
          <li
            style={{
              margin: 0,
              padding: 0,
            }}
            key={i}
            className="bg-muted text-muted-foreground flex items-center justify-center rounded-lg text-sm font-medium"
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
