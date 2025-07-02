import React from "react";

import { ComponentCard } from "@/components/component-card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

export const products = [
  { label: "Wireless Mouse", value: "p001" },
  { label: "Mechanical Keyboard", value: "p002" },
  { label: "LED Desk Lamp", value: "p003" },
  { label: "Water Bottle", value: "p004" },
  { label: "Noise Cancelling Headphones", value: "p005" },
  { label: "Running Shoes", value: "p006" },
  { label: "Yoga Mat", value: "p007" },
  { label: "Smartphone Stand", value: "p008" },
  { label: "Bluetooth Speaker", value: "p009" },
  { label: "Ergonomic Chair", value: "p010" },
  { label: "Coffee Grinder", value: "p011" },
  { label: "Electric Toothbrush", value: "p012" },
  { label: "Backpack", value: "p013" },
  { label: "Desk Organizer", value: "p014" },
  { label: "Gaming Monitor", value: "p015" },
  { label: "Portable Power Bank", value: "p016" },
  { label: "Insulated Lunch Bag", value: "p017" },
  { label: "Foam Roller", value: "p018" },
  { label: "Screen Cleaning Kit", value: "p019" },
  { label: "Laptop Sleeve", value: "p020" },
  { label: "Hair Dryer", value: "p021" },
  { label: "Non-stick Frying Pan", value: "p022" },
  { label: "Standing Desk Converter", value: "p023" },
  { label: "Compression Socks", value: "p024" },
  { label: "Wireless Charger", value: "p025" },
  { label: "Electric Kettle", value: "p026" },
  { label: "Face Moisturizer", value: "p027" },
  { label: "Resistance Bands", value: "p028" },
  { label: "Cable Organizer", value: "p029" },
  { label: "Desktop Whiteboard", value: "p030" },
  { label: "Travel Pillow", value: "p031" },
  { label: "Fitness Tracker", value: "p032" },
  { label: "Scented Candles", value: "p033" },
  { label: "Slim Wallet", value: "p034" },
  { label: "Gaming Controller", value: "p035" },
  { label: "USB-C Hub", value: "p036" },
  { label: "Massage Gun", value: "p037" },
  { label: "Laptop Cooling Pad", value: "p038" },
  { label: "Notebook Set", value: "p039" },
  { label: "Smart Light Bulb", value: "p040" },
];

export default function SelectCard() {
  return (
    <ComponentCard name="Select">
      <Select items={products} defaultValue="p001">
        <SelectTrigger className="w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger>
          <SelectGroup>
            <SelectGroupLabel>Products</SelectGroupLabel>
            {products.map((product) => (
              <SelectItem key={product.value} value={product.value}>
                {product.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </ComponentCard>
  );
}
