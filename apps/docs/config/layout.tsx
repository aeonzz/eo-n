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
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 6H10V10H4V6Z" className="fill-foreground" />
          <path d="M4 0H12V4H4V0Z" className="fill-foreground" />
          <path d="M4 12H12V16H4V12Z" className="fill-foreground" />
          <path d="M4 0V16H0V0H4Z" className="fill-foreground" />
          <path d="M16 0V16H12V0H16Z" className="fill-foreground" />
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
};
