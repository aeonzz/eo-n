import { ChevronDown } from "lucide-react";

import { Button } from "@/registry/default/ui/button";

export default function ButtonDemo() {
  return (
    <Button icon={<ChevronDown />} iconPlacement="right">
      Add
    </Button>
  );
}
