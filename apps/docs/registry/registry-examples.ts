import type { Registry } from "@/registry/schema";

export const examples: Registry = [
  {
    name: "button-demo",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-as-child",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-as-child.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-destructive",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-destructive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-ghost",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-ghost.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-icon",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-link",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-link.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-loading",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-loading.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-outline",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-outline.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-secondary",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-secondary.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dialog-demo",
    type: "registry:example",
    registryDependencies: ["dialog"],
    files: [
      {
        path: "examples/dialog-demo.tsx",
        type: "registry:example",
      },
    ]
  }
];