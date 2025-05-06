import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Github } from "lucide-react";

import { source } from "@/lib/source";

import { siteConfig } from "./site";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H24V19H19V5H5V9H15V15H5V19H24V24H0V0Z"
            className="fill-foreground"
          />
        </svg>
        <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
          {siteConfig.name}
        </span>
      </>
    ),
  },
  links: [
    {
      text: "Docs",
      url: "/docs/ui",
    },
    {
      text: "Components",
      url: "/docs/ui/accordion",
    },
    {
      type: "icon",
      url: siteConfig.links.github,
      text: "Github",
      icon: <Github className="size-4" aria-hidden="true" />,
      external: true,
    },
  ],
};

export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  sidebar: {
    tabs: false,
    className: "[&_[data-radix-scroll-area-viewport]]:pt-[33px]"
  },
};
