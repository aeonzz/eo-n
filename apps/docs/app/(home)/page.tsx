import Link from "next/link";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ComponentSource } from "@/components/component-source";

export default function HomePage() {
  return (
    <main className="relative flex h-full flex-col justify-center overflow-hidden">
      <div className="bg-background absolute inset-0 -z-10 h-full w-full">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>
      </div>
      <div className="max-w-fd-container mx-auto flex h-full w-full flex-col items-center justify-center px-4 py-24 sm:px-24">
        <div className="relative flex w-full max-w-4xl flex-col items-center justify-center gap-6 text-center">
          <h1 className="tracking-lose text-center text-4xl leading-[1.1] font-semibold sm:text-6xl md:text-7xl">
            <span className="from-foreground to-muted-foreground/70 bg-gradient-to-b bg-clip-text text-transparent">
              Craft Your Component
            </span>{" "}
            <br />
            <span className="from-foreground to-muted-foreground/70 bg-gradient-to-b bg-clip-text text-transparent">
              Library
            </span>
          </h1>
          <p className="text-muted-foreground tracking-lose max-w-2xl text-center text-lg leading-[1.3] font-normal sm:text-xl">
            {siteConfig.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/docs/ui"
              prefetch
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "min-w-[160px] rounded-full"
              )}
            >
              Get Started
            </Link>
            <Link
              href="/docs/ui/accordion"
              prefetch
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "min-w-[160px] rounded-full"
              )}
            >
              Explore Components
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
