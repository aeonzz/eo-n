import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";

import { docsOptions } from "@/config/layout";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="[&_header]:bg-background [&_#nd-toc]:pt-6 [&_header]:shadow-none [&_header]:backdrop-blur-none">
      <DocsLayout {...docsOptions}>{children}</DocsLayout>
    </div>
  );
}
