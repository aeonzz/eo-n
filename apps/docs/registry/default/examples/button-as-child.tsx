import Link from "next/link.js";

import { Button } from "@/registry/default/ui/button";

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/" className="no-underline">Home</Link>
    </Button>
  );
}
