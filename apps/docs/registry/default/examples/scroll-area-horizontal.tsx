import Link from "next/link.js";

import { ScrollArea } from "@/registry/default/ui/scroll-area";

const components = [
  {
    title: "Button",
    description: "A UI component for triggering actions or navigation.",
    href: "/docs/ui/button",
  },
  {
    title: "Accordion",
    description:
      "A UI component for showing and hiding content in collapsible sections.",
    href: "/docs/ui/accordion",
  },
  {
    title: "Dialog",
    description:
      "A UI component for displaying modal dialogs to capture user input or confirm actions.",
    href: "/docs/ui/dialog",
  },
  {
    title: "Tooltip",
    description: "A component that groups related actions and controls.",
    href: "/docs/ui/tooltip",
  },
];

export default function ScrollAreaHorizontal() {
  return (
    <ScrollArea
      className="h-fit w-[550px] rounded-md border"
      orientation="horizontal"
    >
      <div className="flex space-x-2 py-4">
        {components.map((comp, i) => (
          <Link
            key={i}
            href={comp.href}
            className="hover:bg-secondary flex w-48 cursor-pointer flex-col justify-between gap-2 rounded-md border bg-transparent p-3 no-underline shadow-sm"
          >
            <h4 className="text-lg leading-none font-medium">{comp.title}</h4>
            <p className="text-muted-foreground text-xs">{comp.description}</p>
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
}
