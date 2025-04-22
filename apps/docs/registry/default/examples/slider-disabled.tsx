import { Slider } from "@/registry/default/ui/slider";

export default function SliderDisabled() {
  return <Slider defaultValue={25} className="w-full max-w-xs" disabled />;
}
