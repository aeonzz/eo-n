import type { Page } from "fumadocs-core/source";
import { createGenerator } from "fumadocs-typescript";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { Heading } from "fumadocs-ui/components/heading";
import { Step, Steps } from "fumadocs-ui/components/steps";
import defaultComponents from "fumadocs-ui/mdx";
import { HomeIcon } from "lucide-react";
import type { MDXComponents } from "mdx/types";

import { cn } from "@/lib/utils";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { CodeTabs } from "@/components/code-tabs";
import { ComponentCollectionWrapper } from "@/components/component-collection-wrapper";
import { ComponentDialogCode } from "@/components/component-dialog-code";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import { ComponentTabs } from "@/components/component-tabs";
import { CSSVariablesTable } from "@/components/css-variables-table";
import { DataAttributesTable } from "@/components/data-attributes-table";
import { GithubInfo } from "@/components/github-info";
import { Kbd } from "@/components/kbd";
import { KeyboardShortcutsTable } from "@/components/keyboard-shortcuts-table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";

const generator = createGenerator();

export function useMdxComponents(
  components: Partial<MDXComponents>
): MDXComponents {
  const { Callout, Card, ...restDefaultComponents } = defaultComponents;
  const headings = Object.fromEntries(
    ["h1", "h2", "h3", "h4", "h5", "h6"].map((level) => [
      level,
      (props: React.ComponentProps<typeof Heading>) => (
        <Heading
          as={level as React.ComponentProps<typeof Heading>["as"]}
          {...props}
        />
      ),
    ])
  );

  return {
    ...restDefaultComponents,
    ...components,
    ...headings,
    Card: ({ className, ...props }) => (
      <Card className={cn("shadow-none", className)} {...props} />
    ),
    Callout: ({ className, ...props }) => (
      <Callout className={cn("shadow-none", className)} {...props} />
    ),
    table: ({ className, ...props }) => (
      <Table className={cn(className)} mdx {...props} />
    ),
    tr: TableRow,
    th: TableHead,
    td: TableCell,
    pre: ({ children, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{children}</Pre>
      </CodeBlock>
    ),
    kbd: (props) => <Kbd variant="outline" {...props} />,
    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => {
      return (
        <Tabs variant="underline" className={cn("relative mt-6 w-full", className)} {...props} />
      );
    },
    TabsList: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsList>) => (
      <TabsList
        className={cn(
          "w-fit justify-start gap-4 rounded-none px-2 group-data-[variant=default]:bg-transparent md:px-0 [&_[data-slot=tabs-indicator]]:hidden",
          className
        )}
        {...props}
      />
    ),
    TabsTrigger: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsTrigger>) => (
      <TabsTrigger
        className={cn(
          "bg-transparent text-base shadow-none data-[orientation=horizontal]:px-0",
          className
        )}
        {...props}
      />
    ),
    TabsContent,
    Tab: ({ className, ...props }: React.ComponentProps<"div">) => (
      <div className={cn(className)} {...props} />
    ),
    ComponentTabs,
    ComponentSource,
    ComponentDialogCode,
    ComponentPreview,
    ComponentCollectionWrapper,
    Steps,
    Step,
    AutoTypeTable: (props) => (
      <div className="auto-type-table">
        <AutoTypeTable {...props} generator={generator} />
      </div>
    ),
    CSSVariablesTable,
    DataAttributesTable,
    KeyboardShortcutsTable,
    GithubInfo,
    HomeIcon,
    CodeTabs,
  };
}

interface MdxProps {
  page: Page & {
    data: { body: React.ComponentType<{ components: MDXComponents }> };
  };
  components?: Partial<MDXComponents>;
}

export function Mdx({ page, components = {} }: MdxProps) {
  const Comp = page.data.body;
  const mdxComponents = useMdxComponents(components);

  return <Comp components={mdxComponents} />;
}
