import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";

import { docsOptions } from "@/config/layout";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="[&_header>div]:border-none [&_#nd-toc]:pt-9">
      <DocsLayout {...docsOptions}>{children}</DocsLayout>
    </div>
  );
}
