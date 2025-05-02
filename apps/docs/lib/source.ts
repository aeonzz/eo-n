import { createElement } from "react";
import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { icons } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  pageTree: {
    attachFile(node, file) {
      const additionalElement = (file?.data.data as { new?: boolean }).new
        ? createElement(
            Badge,
            { className: "ml-auto font-base text-xs", variant: "outline" },
            "New"
          )
        : null;

      node.name = createElement(
        "span",
        { className: "flex w-full gap-2" },
        createElement("span", null, node.name),
        additionalElement
      );
      return node;
    },
  },
});
