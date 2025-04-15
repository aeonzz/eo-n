import * as React from "react";

import { getRegistryItem } from "@/lib/registry";
import { BlockViewer } from "@/components/block-viewer";

export async function BlockDisplay({ name }: { name: string }) {
  const item = await getCachedRegistryItem(name);

  if (!item?.files) {
    return null;
  }

  return <BlockViewer item={item} />;
}

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name);
});
