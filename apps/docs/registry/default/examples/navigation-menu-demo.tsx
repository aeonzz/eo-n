import React from "react";
import Link from "next/link.js";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/default/ui/navigation-menu";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/ui/alert-dialog",
    description: "Prompts the user for a response before continuing.",
  },
  {
    title: "Preview Card",
    href: "/docs/ui/preview-card",
    description: "Displays a compact, visually appealing preview of content.",
  },
  {
    title: "Toast",
    href: "/docs/ui/progress",
    description: "Briefly displays transient messages or notifications.",
  },
  {
    title: "Context Menu",
    href: "/docs/ui/context-menu",
    description:
      "A contextual menu that appears on right-click, showing a list of actions and options in a collapsible panel.",
  },
  {
    title: "Tabs",
    href: "/docs/ui/tabs",
    description: "Organizes content into switchable panels under tab labels.",
  },
  {
    title: "Menubar",
    href: "/docs/ui/menubar",
    description:
      "A horizontal navigation bar that displays a list of menu items and dropdown menus.",
  },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink
                  render={
                    <Link
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        eo-n/ui
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Accessible and customizable components built with
                        Tailwind and Shadcn.
                      </p>
                    </Link>
                  }
                />
              </li>
              <ListItem href="/docs" title="Introduction">
                Collection of accessible and customizable UI primitives to build
                your own components with ease.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                Learn how to set up dependencies and organize your application
                structure.
              </ListItem>
              <ListItem href="/docs/dark-mode" title="Dark mode">
                Learn how to implement and customize dark mode in your
                application.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={
              <Link className={navigationMenuTriggerStyle()} href="/docs">
                Docs
              </Link>
            }
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href} className="flex flex-col gap-2 no-underline">
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 flex text-sm leading-snug">
              {children}
            </p>
          </Link>
        }
      />
    </li>
  );
}
