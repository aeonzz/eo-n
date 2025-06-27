"use client";

import React from "react";
import { Mosaic, MosaicWindow } from "react-mosaic-component";

import { ComponentCard } from "@/components/component-card";

export type ViewId = "a" | "b" | "c" | "new";

const TITLE_MAP: Record<ViewId, string> = {
  a: "Left Window",
  b: "Top Right Window",
  c: "Bottom Right Window",
  new: "New Window",
};

export default function MosaicCard() {
  return (
    <ComponentCard name="Mosaic">
      <div>
        <Mosaic<ViewId>
          renderTile={(id, path) => (
            <MosaicWindow<ViewId>
              path={path}
              createNode={() => "new"}
              title={TITLE_MAP[id]}
            >
              <h1>{TITLE_MAP[id]}</h1>
            </MosaicWindow>
          )}
          initialValue={{
            direction: "row",
            first: "a",
            second: {
              direction: "column",
              first: "b",
              second: "c",
            },
          }}
        />
      </div>
    </ComponentCard>
  );
}
