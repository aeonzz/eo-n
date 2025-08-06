import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import type { BaseColor } from "@/registry/registry-base-colors";
import type { Style } from "@/registry/registry-styles";

interface Config {
  style: Style["name"];
  theme: BaseColor["name"];
  radius: number;
  installationType: "cli" | "manual";
}

const configAtom = atomWithStorage<Config>("config", {
  style: "default",
  theme: "zinc",
  radius: 0.5,
  installationType: "cli",
});

export function useConfig() {
  return useAtom(configAtom);
}
