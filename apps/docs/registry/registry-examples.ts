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
    ],
  },
  {
    name: "dialog-custom-close-button",
    type: "registry:example",
    registryDependencies: ["dialog"],
    files: [
      {
        path: "examples/dialog-custom-close-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dialog-with-no-x-button",
    type: "registry:example",
    registryDependencies: ["dialog"],
    files: [
      {
        path: "examples/dialog-with-no-x-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dialog-nested",
    type: "registry:example",
    registryDependencies: ["dialog"],
    files: [
      {
        path: "examples/dialog-nested.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-demo",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-with-label",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-with-label.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-with-floating-label",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-with-floating-label.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-secondary",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-secondary.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-disabled",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "kbd-demo",
    type: "registry:example",
    registryDependencies: ["kbd"],
    files: [
      {
        path: "examples/kbd-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "kbd-outline",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/kbd-outline.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "kbd-ghost",
    type: "registry:example",
    registryDependencies: ["kbd"],
    files: [
      {
        path: "examples/kbd-ghost.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "number-input-demo",
    type: "registry:example",
    registryDependencies: ["number-input"],
    files: [
      {
        path: "examples/number-input-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "number-input-min-max",
    type: "registry:example",
    registryDependencies: ["number-input"],
    files: [
      {
        path: "examples/number-input-min-max.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "number-input-disabled",
    type: "registry:example",
    registryDependencies: ["number-input"],
    files: [
      {
        path: "examples/number-input-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "number-input-scrub-direction",
    type: "registry:example",
    registryDependencies: ["number-input"],
    files: [
      {
        path: "examples/number-input-scrub-direction.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-demo",
    type: "registry:example",
    registryDependencies: ["dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-radio",
    type: "registry:example",
    registryDependencies: ["dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-radio.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-checkbox",
    type: "registry:example",
    registryDependencies: ["dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-checkbox.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-hover",
    type: "registry:example",
    registryDependencies: ["dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-hover.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "accordion-demo",
    type: "registry:example",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "examples/accordion-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "accordion-disabled",
    type: "registry:example",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "examples/accordion-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "accordion-multiple",
    type: "registry:example",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "examples/accordion-multiple.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-demo",
    type: "registry:example",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "examples/checkbox-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-disabled",
    type: "registry:example",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "examples/checkbox-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-demo",
    type: "registry:example",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "examples/tabs-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-vertical",
    type: "registry:example",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "examples/tabs-vertical.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-demo",
    type: "registry:example",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "examples/avatar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-demo",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "examples/select-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-with-group",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "examples/select-with-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-align-trigger",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "examples/select-align-trigger.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tooltip-demo",
    type: "registry:example",
    registryDependencies: ["tooltip"],
    files: [
      {
        path: "examples/tooltip-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-demo",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "examples/toggle-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-outline",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "examples/toggle-outline.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-disabled",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "examples/toggle-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-large",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "examples/toggle-large.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-small",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "examples/toggle-small.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "popover-demo",
    type: "registry:example",
    registryDependencies: ["popover"],
    files: [
      {
        path: "examples/popover-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "popover-hover",
    type: "registry:example",
    registryDependencies: ["popover"],
    files: [
      {
        path: "examples/popover-hover.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "separator-demo",
    type: "registry:example",
    registryDependencies: ["separator"],
    files: [
      {
        path: "examples/separator-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "separator-vertical",
    type: "registry:example",
    registryDependencies: ["separator"],
    files: [
      {
        path: "examples/separator-vertical.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toolbar-demo",
    type: "registry:example",
    registryDependencies: ["toolbar"],
    files: [
      {
        path: "examples/toolbar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toolbar-with-input",
    type: "registry:example",
    registryDependencies: ["toolbar"],
    files: [
      {
        path: "examples/toolbar-with-input.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "alert-dialog-demo",
    type: "registry:example",
    registryDependencies: ["alert-dialog"],
    files: [
      {
        path: "examples/alert-dialog-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-group-demo",
    type: "registry:example",
    registryDependencies: ["checkbox-group-demo"],
    files: [
      {
        path: "examples/checkbox-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "preview-card-demo",
    type: "registry:example",
    registryDependencies: ["preview-card-demo"],
    files: [
      {
        path: "examples/preview-card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "progress-demo",
    type: "registry:example",
    registryDependencies: ["progress"],
    files: [
      {
        path: "examples/progress-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "radio-group-demo",
    type: "registry:example",
    registryDependencies: ["radio-group"],
    files: [
      {
        path: "examples/radio-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "radio-group-disabled",
    type: "registry:example",
    registryDependencies: ["radio-group"],
    files: [
      {
        path: "examples/radio-group-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "collapsible-demo",
    type: "registry:example",
    registryDependencies: ["collapsible"],
    files: [
      {
        path: "examples/collapsible-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "scroll-area-demo",
    type: "registry:example",
    registryDependencies: ["scroll-area"],
    files: [
      {
        path: "examples/scroll-area-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "scroll-area-horizontal",
    type: "registry:example",
    registryDependencies: ["scroll-area"],
    files: [
      {
        path: "examples/scroll-area-horizontal.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-demo",
    type: "registry:example",
    registryDependencies: ["slider"],
    files: [
      {
        path: "examples/slider-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-disabled",
    type: "registry:example",
    registryDependencies: ["slider"],
    files: [
      {
        path: "examples/slider-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-with-value",
    type: "registry:example",
    registryDependencies: ["slider"],
    files: [
      {
        path: "examples/slider-with-value.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-demo",
    type: "registry:example",
    registryDependencies: ["switch"],
    files: [
      {
        path: "examples/switch-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-disabled",
    type: "registry:example",
    registryDependencies: ["switch"],
    files: [
      {
        path: "examples/switch-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-square",
    type: "registry:example",
    registryDependencies: ["switch"],
    files: [
      {
        path: "examples/switch-square.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-large",
    type: "registry:example",
    registryDependencies: ["switch"],
    files: [
      {
        path: "examples/switch-large.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-small",
    type: "registry:example",
    registryDependencies: ["switch"],
    files: [
      {
        path: "examples/switch-small.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "label-demo",
    type: "registry:example",
    registryDependencies: ["label"],
    files: [
      {
        path: "examples/label-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-demo",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "examples/toggle-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-disabled",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "examples/toggle-group-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-large",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "examples/toggle-group-large.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-multiple",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "examples/toggle-group-multiple.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-outline",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "examples/toggle-group-outline.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-small",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "examples/toggle-group-small.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-demo",
    type: "registry:example",
    registryDependencies: ["card"],
    files: [
      {
        path: "examples/card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-demo-1",
    type: "registry:example",
    registryDependencies: ["card"],
    files: [
      {
        path: "examples/card-demo-1.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-demo",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-secondary",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-secondary.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-outline",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-outline.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-destructive",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-destructive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "mode-toggle",
    type: "registry:example",
    files: [
      {
        path: "examples/mode-toggle.tsx",
        type: "registry:example",
      },
    ],
  },
];
