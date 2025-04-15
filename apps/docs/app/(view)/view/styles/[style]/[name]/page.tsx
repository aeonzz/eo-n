/**
 * @see https://github.com/shadcn-ui/ui/blob/main/apps/www/app/(view)/view/styles/%5Bstyle%5D/%5Bname%5D/page.tsx
 */
import * as React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { getAllBlockIds } from "@/lib/blocks";
import { getRegistryComponent, getRegistryItem } from "@/lib/registry";
import { absoluteUrl, cn } from "@/lib/utils";
import { Style, styles } from "@/registry/registry-styles";

const getCachedRegistryItem = React.cache(
  async (name: string, style: Style["name"]) => {
    return await getRegistryItem(name, style);
  }
);

export const dynamicParams = false;

type Params = Promise<{
  style: Style["name"];
  name: string;
}>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { name, style } = await params;
  const item = await getCachedRegistryItem(name, style);

  if (!item) {
    return {};
  }

  const title = item.name;
  const description = item.description;

  return {
    title: `${item.name}${item.description ? ` - ${item.description}` : ""}`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(`/blocks/${style}/${item.name}`),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: "@aeonzz",
    },
  };
}

export async function generateStaticParams() {
  const blockIds = await getAllBlockIds();
  return styles
    .map((style) =>
      blockIds.map((name) => ({
        style: style.name,
        name,
      }))
    )
    .flat();
}

export default async function BlockPage({ params }: { params: Params }) {
  const { name, style } = await params;
  const item = await getCachedRegistryItem(name, style);
  const Component = getRegistryComponent(name, style);

  if (!item || !Component) {
    return notFound();
  }

  return (
    <>
      <div className={cn("themes-wrapper bg-background", item.meta?.container)}>
        <Component />
      </div>
    </>
  );
}
