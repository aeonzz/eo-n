"use client";

/**
 * @see https://github.com/shadcn-ui/ui/blob/main/apps/www/components/block-viewer.tsx
 */
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { File, Fullscreen, Monitor, Smartphone, Tablet } from "lucide-react";
import { ImperativePanelHandle } from "react-resizable-panels";
import { z } from "zod";

// import { trackEvent } from "@/lib/events";
// import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/resizable";
import { Separator } from "@/registry/default/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group";
import { Style } from "@/registry/registry-styles";
import { registryItemFileSchema, registryItemSchema } from "@/registry/schema";

import { buttonVariants } from "./ui/button";
import { ComponentTabs } from "./component-tabs";

type BlockViewerContext = {
  item: z.infer<typeof registryItemSchema>;
  view: "code" | "preview";
  setView: (view: "code" | "preview") => void;
  style?: Style["name"];
  setStyle: (style: Style["name"]) => void;
  activeFile: string | null;
  setActiveFile: (file: string) => void;
  resizablePanelRef: React.RefObject<ImperativePanelHandle> | null;
  highlightedFiles:
    | (z.infer<typeof registryItemFileSchema> & {
        highlightedContent: string;
      })[]
    | null;
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
  highlightedFiles,
  children,
}: Pick<BlockViewerContext, "item" | "highlightedFiles"> & {
  children: React.ReactNode;
}) {
  const [view, setView] = React.useState<BlockViewerContext["view"]>("preview");
  const [style, setStyle] =
    React.useState<BlockViewerContext["style"]>("default");
  const [activeFile, setActiveFile] = React.useState<
    BlockViewerContext["activeFile"]
  >(highlightedFiles?.[0].target ?? null);
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
        activeFile,
        setActiveFile,
        highlightedFiles,
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

function BlockViewerToolbar() {
  const { setView, item, resizablePanelRef, style } = useBlockViewer();
  // const { copyToClipboard, isCopied } = useCopyToClipboard();

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
        <div className="hidden h-7 items-center gap-1.5 rounded-md border p-[2px] shadow-none lg:flex">
          <ToggleGroup
            onValueChange={(value) => {
              if (resizablePanelRef?.current) {
                resizablePanelRef.current.resize(parseInt(value));
              }
            }}
          >
            <ToggleGroupItem
              value="100"
              className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
              title="Desktop"
            >
              <Monitor className="h-3.5 w-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="60"
              className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
              title="Tablet"
            >
              <Tablet className="h-3.5 w-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="30"
              className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
              title="Mobile"
            >
              <Smartphone className="h-3.5 w-3.5" />
            </ToggleGroupItem>
            <Separator orientation="vertical" className="h-4" />
            <Link
              href={`/view/styles/${style}/${item.name}`}
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
                className: "h-[22px] w-[22px] rounded-sm p-0",
              })}
              title="Open in New Tab"
            >
              <span className="sr-only">Open in New Tab</span>
              <Fullscreen className="h-3.5 w-3.5" />
            </Link>
          </ToggleGroup>
        </div>
        <Separator orientation="vertical" className="mx-1 hidden h-4 md:flex" />
        <div className="flex h-7 items-center gap-1 rounded-md border p-[2px]">
          {/* <Button
            variant="ghost"
            className="hidden h-[22px] w-auto gap-1 rounded-sm px-2 md:flex lg:w-auto"
            size="sm"
            onClick={() => {
              copyToClipboard(`npx shadcn@latest add ${item.name}`);
            }}
          >
            {isCopied ? <Check /> : <Terminal />}
            <span className="hidden lg:inline">npx shadcn add {item.name}</span>
          </Button> */}
        </div>
        <Separator orientation="vertical" className="mx-1 hidden h-4 xl:flex" />
      </div>
    </div>
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
            <Image
              src={`/r/styles/${style}/${item.name}-light.png`}
              alt={item.name}
              data-block={item.name}
              width={1440}
              height={900}
              className="object-cover md:hidden dark:hidden md:dark:hidden"
            />
            <Image
              src={`/r/styles/${style}/${item.name}-dark.png`}
              alt={item.name}
              data-block={item.name}
              width={1440}
              height={900}
              className="hidden object-cover md:hidden dark:block md:dark:hidden"
            />
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

function BlockViewerCode() {
  const { activeFile, highlightedFiles } = useBlockViewer();

  const file = React.useMemo(() => {
    return highlightedFiles?.find((file) => file.target === activeFile);
  }, [highlightedFiles, activeFile]);

  if (!file) {
    return null;
  }

  return (
    <div className="mr-[14px] flex overflow-hidden rounded-xl bg-zinc-950 text-white group-data-[view=preview]/block-view-wrapper:hidden md:h-[--height]">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 items-center gap-2 border-b border-zinc-700 bg-zinc-900 px-4 text-sm font-medium">
          <File className="size-4" />
          {file.target}
          <div className="ml-auto flex items-center gap-2">
            {/* <BlockCopyCodeButton /> */}
          </div>
        </div>
        <div
          key={file?.path}
          data-rehype-pretty-code-fragment
          dangerouslySetInnerHTML={{ __html: file?.highlightedContent ?? "" }}
          className="relative flex-1 overflow-hidden after:absolute after:inset-y-0 after:left-0 after:w-10 after:bg-zinc-950 [&_.line:before]:sticky [&_.line:before]:left-2 [&_.line:before]:z-10 [&_.line:before]:translate-y-[-1px] [&_.line:before]:pr-1 [&_pre]:h-[--height] [&_pre]:overflow-auto [&_pre]:!bg-transparent [&_pre]:pt-4 [&_pre]:pb-20 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed"
        />
      </div>
    </div>
  );
}

// function BlockCopyCodeButton() {
//   const { activeFile, item } = useBlockViewer();
//   const { copyToClipboard, isCopied } = useCopyToClipboard();

//   const file = React.useMemo(() => {
//     return item.files?.find((file) => file.target === activeFile);
//   }, [activeFile, item.files]);

//   const content = file?.content;

//   if (!content) {
//     return null;
//   }

//   return (
//     <Button
//       onClick={() => {
//         copyToClipboard(content);
//         // trackEvent({
//         //   name: "copy_block_code",
//         //   properties: {
//         //     name: item.name,
//         //     file: file.path,
//         //   },
//         // });
//       }}
//       className="h-7 w-7 shrink-0 rounded-lg p-0 hover:bg-zinc-700 hover:text-white focus:bg-zinc-700 focus:text-white focus-visible:bg-zinc-700 focus-visible:text-white active:bg-zinc-700 active:text-white data-[active=true]:bg-zinc-700 data-[active=true]:text-white [&>svg]:size-3"
//       variant="ghost"
//     >
//       {isCopied ? <Check /> : <Clipboard />}
//     </Button>
//   );
// }

function BlockViewer({
  item,
  highlightedFiles,
  ...props
}: Pick<BlockViewerContext, "item" | "highlightedFiles">) {
  return (
    <BlockViewerProvider
      item={item}
      highlightedFiles={highlightedFiles}
      {...props}
    >
      <BlockViewerToolbar />
      <ComponentTabs name={item.name}>
        {/* Assuming highlightedFiles contains the blocks you want to display */}
        {highlightedFiles?.map((file) => (
          <div key={file.target}>
            {/* Render your block content here, e.g., code or preview */}
            <h3>{file.target}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: file.highlightedContent }}
            />
          </div>
        ))}
      </ComponentTabs>
      <BlockViewerCode />
    </BlockViewerProvider>
  );
}

export { BlockViewer };
