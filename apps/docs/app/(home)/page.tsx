import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex h-full flex-col">
      <div className="max-w-fd-container mx-auto flex h-full w-full items-center">
        <div className="flex h-full w-full flex-col items-center justify-center gap-6">
          <h1 className="from-foreground text-center text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl lg:leading-[1.1]">
            Build and Expand Your Component Library
          </h1>
          <div className="h-px w-full border-t border-dashed" />
          <p className="text-muted-foreground max-w-sm text-center text-sm font-medium tracking-tight sm:max-w-2xl sm:text-base md:max-w-3xl lg:max-w-4xl">
            Enhanced UI components built on shadcn’s robust foundation,
            integrated with Base UI and Tailwind CSS for a modern and
            customizable design system.
          </p>
          <div className="flex gap-3">
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
        </div>
      </div>
      <footer className="flex h-16 items-center justify-center border-t">
        <div className="max-w-fd-container w-full">
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
