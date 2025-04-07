import { components } from "@/registry/registry-components";
import { examples } from "@/registry/registry-examples";
import { lib } from "@/registry/registry-lib";
import { ui } from "@/registry/registry-ui";
import type { Registry } from "@/registry/schema";

export const registry: Registry = [...ui, ...lib, ...examples, ...components];
