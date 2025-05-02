"use client";

import React from "react";

import { ComponentCard } from "@/components/component-card";
import { Meter, MeterLabel, MeterValue } from "@/registry/default/ui/meter";

export default function MeterCard() {
  return (
    <ComponentCard name="Meter">
      <Meter value={24} className="w-full max-w-xs">
        <MeterLabel>Battery Level</MeterLabel>
        <MeterValue />
      </Meter>
    </ComponentCard>
  );
}
