import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { LineDecorator } from "@/components/line-decorator";

export default function HomePage() {
  return (
    <main className="flex h-full flex-col">
      <div className="max-w-fd-container mx-auto flex h-full w-full items-center px-3">
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 sm:gap-6">
          <LineDecorator
            orientation="vertical"
            className="absolute bottom-0 left-[15%] -z-20 mask-y-from-80% duration-1300"
          />
          <LineDecorator className="mr-auto mask-x-from-90% duration-1300" />
          <Badge variant="outline" className="py-1.5 px-3">
            <span>Meter and Toast components are now available. 🎉</span>
            <Link
              href="/docs/ui/toast"
              className="text-muted-foreground underline-offset-2 hover:underline"
            >
              Check it out.
            </Link>
          </Badge>
          <h1 className="from-foreground text-center text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl lg:leading-[1.1]">
            Craft Your Component Library
          </h1>
          <LineDecorator className="ml-auto mask-x-from-90% duration-1300" />
          <p className="text-muted-foreground max-w-sm text-center text-sm font-normal tracking-tight sm:max-w-2xl sm:text-lg md:max-w-3xl lg:max-w-4xl">
            {siteConfig.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
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
                buttonVariants({ variant: "outline" }),
                "w-full max-w-xs"
              )}
            >
              Explore Components
            </Link>
          </div>
          <LineDecorator
            orientation="vertical"
            className="absolute top-0 right-[15%] -z-20 mask-y-from-90% duration-1300"
          />
        </div>
      </div>
      <footer className="flex h-16 items-center justify-center">
        <div className="max-w-fd-container w-fit px-3">
          <p className="text-muted-foreground text-sm font-medium tracking-tight">
            Made with <span className="text-red-500">♥</span> by{" "}
            <Link
              href="https://github.com/aeonzz"
              target="_blank"
              className="text-foreground underline-offset-4 transition-colors hover:underline"
              prefetch
            >
              aeonzz.
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
