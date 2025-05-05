import type { ReactNode } from "react";
import Link from "next/link";
import { HomeLayout } from "fumadocs-ui/layouts/home";

import { baseOptions } from "@/config/layout";
import { Banner } from "@/components/banner";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Banner
        variant="rainbow"
        height="1.5rem"
        className="flex items-center justify-center gap-2 text-xs"
      >
        <span>Meter and Toast components are now available.</span>
        <Link
          href="/docs/ui/toast"
          className="underline-offset-4 hover:underline"
        >
          Check it out.
        </Link>
      </Banner>
      <HomeLayout
        {...baseOptions}
        className="[&_header]:bg-background h-[calc(100vh_-_1.5rem)] [&_header]:shadow-none [&_header]:backdrop-blur-none"
      >
        {children}
      </HomeLayout>
    </>
  );
}
