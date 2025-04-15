"use client";

/**
 * @see https://github.com/shadcn-ui/ui/blob/main/apps/www/components/block-viewer.tsx
 */
import * as React from "react";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { Check, Terminal } from "lucide-react";
import { ImperativePanelHandle } from "react-resizable-panels";
import * as z from "zod";

import { useConfig } from "@/hooks/use-config";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/resizable";
import { Separator } from "@/registry/default/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";
import { ToggleGroup } from "@/registry/default/ui/toggle-group";
import { Style, styles } from "@/registry/registry-styles";
import { registryItemSchema } from "@/registry/schema";

import { ComponentSource } from "./component-source";
import { Button } from "./ui/button";

type BlockViewerContext = {
  item: z.infer<typeof registryItemSchema>;
  view: "code" | "preview";
  setView: (view: "code" | "preview") => void;
  style?: Style["name"];
  setStyle: (style: Style["name"]) => void;
  activeFile: string | null;
  setActiveFile: (file: string) => void;
  resizablePanelRef: React.RefObject<ImperativePanelHandle> | null;
};

const BlockViewerContext = React.createContext<BlockViewerContext | null>(null);

function useBlockViewer() {
  const context = React.useContext(BlockViewerContext);
  if (!context) {
    throw new Error(
      "useBlockViewer must be used within a BlockViewerProvider."
    );
  }
  return context;
}

function BlockViewerProvider({
  item,
  children,
}: Pick<BlockViewerContext, "item"> & {
  children: React.ReactNode;
}) {
  const [view, setView] = React.useState<BlockViewerContext["view"]>("preview");
  const [style, setStyle] =
    React.useState<BlockViewerContext["style"]>("default");
  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null);

  return (
    <BlockViewerContext.Provider
      value={{
        item,
        view,
        setView,
        style,
        setStyle,
        resizablePanelRef,
      }}
    >
      <div
        id={item.name}
        data-view={view}
        className="group/block-view-wrapper flex min-w-0 flex-col items-stretch gap-4"
        style={
          {
            "--height": item.meta?.iframeHeight ?? "930px",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </BlockViewerContext.Provider>
  );
}

function BlockViewerView() {
  const { item, style, resizablePanelRef } = useBlockViewer();

  return (
    <div className="group-data-[view=code]/block-view-wrapper:hidden md:h-[--height]">
      <div className="grid w-full gap-4">
        <ResizablePanelGroup direction="horizontal" className="relative z-10">
          <ResizablePanel
            ref={resizablePanelRef}
            className="bg-background relative aspect-[4/2.5] rounded-xl border md:aspect-auto"
            defaultSize={100}
            minSize={30}
          >
            <iframe
              src={`/view/styles/${style}/${item.name}`}
              height={item.meta?.iframeHeight ?? 930}
              className="bg-background relative z-20 hidden w-full md:block"
            />
          </ResizablePanel>
          <ResizableHandle className="after:bg-border relative hidden w-3 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[6px] after:translate-x-[-1px] after:-translate-y-1/2 after:rounded-full after:transition-all after:hover:h-10 md:block" />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

function BlockViewerToolbar() {
  const { setView, item, resizablePanelRef, style } = useBlockViewer();
  //   const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <div className="flex w-full items-center gap-2 md:pr-[14px]">
      <Tabs
        defaultValue="preview"
        onValueChange={(value) => setView(value as "preview" | "code")}
        className="hidden lg:flex"
      >
        <TabsList className="h-7 items-center rounded-md p-0 px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)]">
          <TabsTrigger
            value="preview"
            className="h-[1.45rem] rounded-sm px-2 text-xs"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="h-[1.45rem] rounded-sm px-2 text-xs"
          >
            Code
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Separator orientation="vertical" className="mx-2 hidden h-4 lg:flex" />
      <a
        href={`#${item.name}`}
        className="text-sm font-medium underline-offset-2 hover:underline"
      >
        {item.description}
      </a>
      <div className="ml-auto hidden items-center gap-2 md:flex">
        <Separator orientation="vertical" className="mx-1 hidden h-4 md:flex" />
        <Separator orientation="vertical" className="mx-1 hidden h-4 xl:flex" />
      </div>
    </div>
  );
}

function BlockViewerCode() {
  const { item } = useBlockViewer();
  const code = item.files?.map((file) => file.content).join("\n");

  return (
    <CodeBlock>
      <Pre>{code}</Pre>
    </CodeBlock>
  );
}

function BlockViewer({ item, ...props }: Pick<BlockViewerContext, "item">) {
  return (
    <BlockViewerProvider item={item} {...props}>
      <BlockViewerToolbar />
      <BlockViewerView />
      <BlockViewerCode />
    </BlockViewerProvider>
  );
}

export { BlockViewer };
