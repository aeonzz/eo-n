import Link from "next/link.js";

import { Button } from "@/registry/default/ui/button";

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/">Home</Link>
    </Button>
  );
}
