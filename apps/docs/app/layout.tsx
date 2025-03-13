import { siteConfig } from "@/config/site";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";

import "@/styles/global.css";

import type * as React from "react";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "react",
    "ui",
    "ui-library",
    "shadcn-ui",
    "accessibility",
    "wai-aria",
  ],
  authors: [
    {
      name: "aeonz",
      url: "https://christian-aeonzz.vercel.app/",
    },
  ],
  creator: "aeonz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@ChristianCaneo5",
  },
  icons: {
    icon: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "isolate min-h-screen font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <TailwindIndicator />
        {/* <Toaster /> */}
        <Providers
          theme={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            disableTransitionOnChange: true,
          }}
          search={{
            links: [
              ["Introduction", "/docs/ui"],
              ["Installtion", "/docs/ui/installation"],
              ["Components", "/docs/ui/accordion"],
            ],
          }}
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
