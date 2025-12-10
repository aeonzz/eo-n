import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";

export default function AccordionDisabled() {
  return (
    <Accordion className="mx-auto w-full max-w-md" disabled>
      <AccordionItem>
        <AccordionTrigger>User-friendly?</AccordionTrigger>
        <AccordionContent>
          Yes, easy to use with clear controls.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Customizable?</AccordionTrigger>
        <AccordionContent>Yes, change it with CSS classes.</AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Fast?</AccordionTrigger>
        <AccordionContent>Yes, works smoothly everywhere.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
