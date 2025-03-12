import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";

export default function AccordionDisabled() {
  return (
    <Accordion className="mx-auto w-full max-w-md" disabled>
      <AccordionItem value="item-1">
        <AccordionTrigger>User-friendly?</AccordionTrigger>
        <AccordionContent>
          Yes, easy to use with clear controls.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Customizable?</AccordionTrigger>
        <AccordionContent>Yes, change it with CSS classes.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Fast?</AccordionTrigger>
        <AccordionContent>Yes, works smoothly everywhere.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
