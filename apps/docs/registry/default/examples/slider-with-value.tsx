import { Slider, SliderValue } from "@/registry/default/ui/slider";

export default function SliderWithValue() {
  return (
    <Slider defaultValue={32} className="w-full max-w-xs">
      <SliderValue />
    </Slider>
  );
}
