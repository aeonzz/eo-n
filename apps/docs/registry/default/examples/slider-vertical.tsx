import { Slider } from "@/registry/default/ui/slider";

export default function SliderVertical() {
  return (
    <Slider
      defaultValue={25}
      className="h-full max-h-[260px]"
      orientation="vertical"
    />
  );
}
