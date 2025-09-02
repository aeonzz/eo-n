import Link from "next/link";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ComponentSource } from "@/components/component-source";

export default function HomePage() {
  return (
    <main className="flex h-full flex-col">
      <div className="max-w-fd-container mx-auto flex h-full w-full items-center px-3 sm:px-24">
        <div className="flex h-auto w-full flex-col justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:gap-24 sm:py-0">
          <div className="relative flex h-full w-fit flex-col items-start justify-center gap-4 sm:gap-6">
            <h1 className="from-foreground tracking-lose text-left text-5xl leading-[1.1] font-semibold sm:text-7xl">
              Craft Your Component <br /> Library
            </h1>
            <p className="text-muted-foreground tracking-lose max-w-sm text-left text-sm leading-[1.1] font-normal sm:max-w-2xl sm:text-lg md:max-w-3xl lg:max-w-4xl">
              {siteConfig.description}
            </p>
            <div className="flex gap-1.5 sm:gap-3">
              <Link
                href="/docs/ui"
                prefetch
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full max-w-xs"
                )}
              >
                Get Started
              </Link>
              <Link
                href="/docs/ui/accordion"
                prefetch
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full max-w-xs"
                )}
              >
                Explore Components
              </Link>
            </div>
          </div>
          <div className="flex-1 px-0 sm:px-6">
            <h3 className="tracking-lose text-base font-medium">
              Setup Registry
            </h3>
            <p className="text-muted-foreground text-sm font-normal">
              Use the code below to configure the @eo-n registry for your
              project.
            </p>
            <CodeBlock title="components.json">
              <Pre>
                <code>
                  <span className="line">
                    {`{
  "registries": {
    "@eo-n": "https://https://eo-n.vercel.app/r/{name}.json"
  }
}`}
                  </span>
                </code>
              </Pre>
            </CodeBlock>
            <ComponentSource src="accordion" />
          </div>
        </div>
      </div>
    </main>
  );
}
