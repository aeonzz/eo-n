import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findNeighbour } from "fumadocs-core/server";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { source } from "@/lib/source";
import { absoluteUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DynamicLink } from "@/components/dynamic-link";
import { Mdx } from "@/components/mdx-components";
import OpenDocs from "@/components/open-docs";

interface CustomPageData {
  new?: boolean;
  preview?: boolean;
  full?: boolean;
  links?: {
    doc?: string;
    api?: string;
  };
}

interface DocPageParams {
  params: Promise<{
    slug?: string[];
  }>;
}

export async function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export async function generateMetadata(
  props: DocPageParams
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) return {};

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export default async function DocPage(props: DocPageParams) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const customData = page.data as typeof page.data & CustomPageData;

  const neighbours = findNeighbour(source.pageTree, page.url);

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{
        single: false,
      }}
      full={customData.full}
      footer={{
        className: "!border !border-white !bg-white",
      }}
    >
      <div className="mb-2.5">
        <div className="flex items-start justify-between">
          <DocsTitle>{page.data.title}</DocsTitle>
          <div className="bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
            <OpenDocs url={absoluteUrl(page.url)} />
            {neighbours.previous && (
              <Button
                variant="secondary"
                size="icon"
                className="ml-auto size-8 shadow-none md:size-7 [&_svg]:size-4"
                asChild
              >
                <Link href={neighbours.previous.url}>
                  <ArrowLeft />
                  <span className="sr-only">Previous</span>
                </Link>
              </Button>
            )}
            {neighbours.next && (
              <Button
                variant="secondary"
                size="icon"
                className="size-8 shadow-none md:size-7 [&_svg]:size-4"
                asChild
              >
                <Link href={neighbours.next.url}>
                  <span className="sr-only">Next</span>
                  <ArrowRight />
                </Link>
              </Button>
            )}
          </div>
        </div>
        <DocsDescription>{page.data.description}</DocsDescription>
        <div className="flex items-center gap-2">
          {customData.links?.doc ? (
            <DynamicLink href={customData.links?.doc}>Docs</DynamicLink>
          ) : null}
          {customData.links?.api ? (
            <DynamicLink href={customData.links?.api}>API</DynamicLink>
          ) : null}
        </div>
      </div>
      <DocsBody>
        <Mdx page={page} />
      </DocsBody>
    </DocsPage>
  );
}
