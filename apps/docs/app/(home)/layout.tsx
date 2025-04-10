import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";

import { baseOptions } from "@/config/layout";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions} className="h-screen [&_header]:shadow-none [&_header]:backdrop-blur-none [&_header]:bg-transparent">
      {children}
    </HomeLayout>
  );
}
