import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";

import { source } from "@/lib/source";
import { DynamicLink } from "@/components/dynamic-link";
import { Mdx } from "@/components/mdx-components";

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

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{
        style: "clerk",
        single: false,
      }}
      full={page.data.full}
      breadcrumb={{
        enabled: page.data.breadcrumb,
        includeRoot: true,
        includePage: true,
        includeSeparator: true,
      }}
      article={{ className: "md:pt-6 pt-6" }}
    >
      <div className="flex flex-col gap-2">
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription className="mb-2.5">
          {page.data.description}
        </DocsDescription>
        <div className="flex items-center gap-2">
          {page.data.links?.doc ? (
            <DynamicLink href={page.data.links.doc}>Docs</DynamicLink>
          ) : null}
          {page.data.links?.api ? (
            <DynamicLink href={page.data.links.api}>API</DynamicLink>
          ) : null}
        </div>
      </div>
      <DocsBody>
        <Mdx page={page} />
      </DocsBody>
    </DocsPage>
  );
}
