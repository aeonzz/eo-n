import React from "react";
import Link from "next/link.js";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIcon,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationSubMenuTrigger,
} from "@/registry/default/ui/navigation-menu";

const products = [
  {
    title: "Enterprise",
    href: "/docs/ui/navigation-menu/#",
    description: "Complete solution for large organizations and enterprises.",
  },
  {
    title: "Professional",
    href: "/docs/ui/navigation-menu/#",
    description: "Advanced features for growing businesses.",
  },
  {
    title: "Starter",
    href: "/docs/ui/navigation-menu/#",
    description: "Perfect for individuals and small teams.",
  },
  {
    title: "Free",
    href: "/docs/ui/navigation-menu/#",
    description: "Basic features to get started.",
  },
];

export default function NavigationMenuNested() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink
                  render={
                    <Link
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      href="/docs/ui/navigation-menu/#"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        Our Products
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Discover our range of solutions for your business needs.
                      </p>
                    </Link>
                  }
                />
              </li>
              {products.slice(0, 2).map((product) => (
                <ListItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                >
                  {product.description}
                </ListItem>
              ))}
              <NavigationMenu
                contentProps={{
                  side: "right",
                  align: "end",
                  sideOffset: 20,
                  alignOffset: -17,
                }}
              >
                <NavigationMenuItem>
                  <NavigationSubMenuTrigger
                    render={(props, state) => (
                      <ListItem
                        href="/docs/ui/navigation-menu/#"
                        title="Enterprise Solutions"
                        {...props}
                      >
                        Advanced features for large organizations
                        <NavigationMenuIcon
                          className={cn("-rotate-90", {
                            "rotate-90": state.open,
                          })}
                        />
                      </ListItem>
                    )}
                  />
                  <NavigationMenuContent>
                    <ul className="flex h-auto w-full max-w-[400px] min-w-[250px] flex-col gap-2 md:w-[250px]">
                      {products.slice(2).map((product) => (
                        <ListItem
                          key={product.title}
                          title={product.title}
                          href={product.href}
                        >
                          {product.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            </ul>
          </NavigationMenuContent>
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
