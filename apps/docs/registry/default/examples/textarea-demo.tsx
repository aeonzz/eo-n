import { Textarea } from "@/registry/default/ui/textarea";

export default function TextareaDemo() {
  return (
    <Textarea
      id="feedback"
      name="feedback"
      placeholder="Enter your feedback..."
      autoComplete="off"
      className="w-full max-w-md"
    />
  );
}
