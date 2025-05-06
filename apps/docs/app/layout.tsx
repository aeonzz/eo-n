import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    "components",
    "design system",
    "tailwindcss",
    "nextjs",
    "typescript",
    "web development",
    "frontend",
    "ui components",
    "react components",
    "custom components",
    "responsive design",
    "modern ui",
    "component library",
  ],
  authors: [
    {
      name: "aeonz",
      url: "https://christian-aeonzz.vercel.app/",
    },
  ],
  creator: "aeonz",
  publisher: "aeonz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: "@ChristianCaneo5",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
