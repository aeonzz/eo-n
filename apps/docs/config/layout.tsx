import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Component, Github } from "lucide-react";

import { source } from "@/lib/source";

import { siteConfig } from "./site";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Component className="size-4" aria-hidden="true" />
        <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
          {siteConfig.name}
        </span>
      </>
    ),
  },
  links: [
    {
      text: "Docs",
      url: "/docs",
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
