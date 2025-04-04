import Link from "next/link";

import { cn } from "@/lib/utils";
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
          <LineDecorator className="mask-x-from-90% duration-1300 mr-auto" />
          <h1 className="from-foreground text-center text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl lg:leading-[1.1]">
            Build and Expand Your Component Library
          </h1>
          <LineDecorator className="mask-x-from-90% duration-1300 ml-auto" />
          <p className="text-muted-foreground max-w-sm text-center text-sm font-medium tracking-tight sm:max-w-2xl sm:text-base md:max-w-3xl lg:max-w-4xl">
            Enhanced UI components built on shadcn’s robust foundation,
            integrated with Base UI and Tailwind CSS for a modern and
            customizable design system.
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
      <footer className="flex h-16 items-center justify-center border-t">
        <div className="max-w-fd-container w-full px-3">
          <p className="text-muted-foreground text-sm font-medium tracking-tight">
            Built by{" "}
            <Link
              href="https://github.com/aeonzz"
              target="_blank"
              className="hover:text-foreground/80 underline underline-offset-4 transition-colors"
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
