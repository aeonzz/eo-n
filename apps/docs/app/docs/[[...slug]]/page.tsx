import { notFound } from "next/navigation";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";

import { source } from "@/lib/source";
import DynamicLink from "fumadocs-core/dynamic-link";
import { Mdx } from "@/components/mdx-components";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  // const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
        <div className="flex items-center gap-2">
          {page.data.links?.doc ? (
            <DynamicLink href={page.data.links.doc}>Docs</DynamicLink>
          ) : null}
          {page.data.links?.api ? (
            <DynamicLink href={page.data.links.api}>API</DynamicLink>
          ) : null}
        </div>
      <DocsBody>
        <Mdx page={page} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
