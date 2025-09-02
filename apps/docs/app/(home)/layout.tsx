import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";

import { baseOptions } from "@/config/layout";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HomeLayout
        {...baseOptions}
        className="[&_header]:bg-background h-screen [&_header]:border-none [&_header]:shadow-none [&_header]:backdrop-blur-none [&_header]:lg:rounded-md [&_header>div>nav]:sm:px-6 [&_header>div>nav]:h-16"
      >
        {children}
      </HomeLayout>
    </>
  );
}
