import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";

export default function AccordionMultiple() {
  return (
    <Accordion multiple>
      <AccordionItem>
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes! With the multiple prop, you can expand as many accordion items as
          you want simultaneously. Try opening all three sections at once to see
          how it works.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>How is this different from default?</AccordionTrigger>
        <AccordionContent>
          The default accordion only allows one item to be open at a time. When
          you open a new item, the previously opened one automatically closes.
          This multiple variant keeps all opened items expanded.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>When should I use this?</AccordionTrigger>
        <AccordionContent>
          Use the multiple variant when users might need to compare content
          across different sections, or when the information in each section is
          independent and doesn't require exclusive focus.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
