import React from "react";

import { ComponentCard } from "@/components/component-card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

interface Product {
  id: string;
  name: string;
  category: string;
}

export const products: Product[] = [
  { id: "p001", name: "Wireless Mouse", category: "Electronics" },
  { id: "p002", name: "Mechanical Keyboard", category: "Electronics" },
  { id: "p003", name: "LED Desk Lamp", category: "Home & Office" },
  { id: "p004", name: "Water Bottle", category: "Fitness" },
  { id: "p005", name: "Noise Cancelling Headphones", category: "Electronics" },
  { id: "p006", name: "Running Shoes", category: "Apparel" },
  { id: "p007", name: "Yoga Mat", category: "Fitness" },
  { id: "p008", name: "Smartphone Stand", category: "Accessories" },
  { id: "p009", name: "Bluetooth Speaker", category: "Electronics" },
  { id: "p010", name: "Ergonomic Chair", category: "Home & Office" },
  { id: "p011", name: "Coffee Grinder", category: "Kitchen" },
  { id: "p012", name: "Electric Toothbrush", category: "Personal Care" },
  { id: "p013", name: "Backpack", category: "Apparel" },
  { id: "p014", name: "Desk Organizer", category: "Home & Office" },
  { id: "p015", name: "Gaming Monitor", category: "Electronics" },
  { id: "p016", name: "Portable Power Bank", category: "Electronics" },
  { id: "p017", name: "Insulated Lunch Bag", category: "Home & Office" },
  { id: "p018", name: "Foam Roller", category: "Fitness" },
  { id: "p019", name: "Screen Cleaning Kit", category: "Accessories" },
  { id: "p020", name: "Laptop Sleeve", category: "Accessories" },
  { id: "p021", name: "Hair Dryer", category: "Personal Care" },
  { id: "p022", name: "Non-stick Frying Pan", category: "Kitchen" },
  { id: "p023", name: "Standing Desk Converter", category: "Home & Office" },
  { id: "p024", name: "Compression Socks", category: "Apparel" },
  { id: "p025", name: "Wireless Charger", category: "Electronics" },
  { id: "p026", name: "Electric Kettle", category: "Kitchen" },
  { id: "p027", name: "Face Moisturizer", category: "Personal Care" },
  { id: "p028", name: "Resistance Bands", category: "Fitness" },
  { id: "p029", name: "Cable Organizer", category: "Accessories" },
  { id: "p030", name: "Desktop Whiteboard", category: "Home & Office" },
  { id: "p031", name: "Travel Pillow", category: "Accessories" },
  { id: "p032", name: "Fitness Tracker", category: "Fitness" },
  { id: "p033", name: "Scented Candles", category: "Home & Office" },
  { id: "p034", name: "Slim Wallet", category: "Apparel" },
  { id: "p035", name: "Gaming Controller", category: "Electronics" },
  { id: "p036", name: "USB-C Hub", category: "Electronics" },
  { id: "p037", name: "Massage Gun", category: "Personal Care" },
  { id: "p038", name: "Laptop Cooling Pad", category: "Electronics" },
  { id: "p039", name: "Notebook Set", category: "Home & Office" },
  { id: "p040", name: "Smart Light Bulb", category: "Electronics" },
];

export default function SelectCard() {
  return (
    <ComponentCard name="Select">
      <Select alignItemToTrigger>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Select a product" />
        </SelectTrigger>
        <SelectContent>
          {products.map((product) => (
            <SelectItem key={product.id} value={product.id}>
              {product.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Select a job" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectGroupLabel>Technology</SelectGroupLabel>
            <SelectItem value="software-engineer">Software Engineer</SelectItem>
            <SelectItem value="data-scientist">Data Scientist</SelectItem>
            <SelectItem value="ux-designer">UX Designer</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Business</SelectGroupLabel>
            <SelectItem value="marketing-manager">Marketing Manager</SelectItem>
            <SelectItem value="financial-analyst">Financial Analyst</SelectItem>
            <SelectItem value="hr-specialist">HR Specialist</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </ComponentCard>
  );
}
