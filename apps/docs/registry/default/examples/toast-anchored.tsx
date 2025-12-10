"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import { anchoredToastManager } from "@/registry/default/ui/toast";

export default function ToastAnchored() {
  const [copied, setCopied] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  function handleCopy() {
    setCopied(true);

    anchoredToastManager.add({
      description: "Copied to clipboard!",
      positionerProps: {
        anchor: buttonRef.current,
        sideOffset: 8,
      },
      timeout: 1500,
      onClose() {
        setCopied(false);
      },
    });
  }

  return (
    <Button
      ref={buttonRef}
      variant="outline"
      size="icon"
      onClick={handleCopy}
      disabled={copied}
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
    </Button>
  );
}
