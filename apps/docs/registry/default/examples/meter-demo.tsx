import { Meter, MeterLabel, MeterValue } from "@/registry/default/ui/meter";

export default function MeterDemo() {
  return (
    <Meter value={34} className="max-w-xs">
      <MeterLabel>Battery Level</MeterLabel>
      <MeterValue />
    </Meter>
  );
}
