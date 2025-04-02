import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { cn, getIsExternalLink } from "@/lib/utils";
import { buttonVariants } from "@/registry/default/ui/button";

interface DynamicLinkProps
  extends React.ComponentPropsWithoutRef<typeof Link> {}

export function DynamicLink({ href, children, ...props }: DynamicLinkProps) {
  const isExternal = getIsExternalLink(href.toString());

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      className={cn(
        buttonVariants({
          variant: "outline",
          size: "sm",
          className: "h-6 rounded-sm px-2 py-0.5 [&_svg]:size-3.5",
        })
      )}
      {...props}
    >
      {children}
      {isExternal ? (
        <ExternalLink aria-hidden="true" />
      ) : (
        <ArrowRight aria-hidden="true" />
      )}
    </Link>
  );
}
