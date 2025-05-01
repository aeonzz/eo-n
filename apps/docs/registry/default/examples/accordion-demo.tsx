import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion className="">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and is fully keyboard
          navigable. The component is built with proper focus management and
          ARIA attributes for screen reader compatibility.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. The component comes with default styling using Tailwind CSS
          classes, but you can easily customize it to match your design system.
          The animation is handled through CSS transitions for smooth open/close
          interactions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it responsive?</AccordionTrigger>
        <AccordionContent>
          Absolutely. The accordion adapts to different screen sizes and works
          well on both desktop and mobile devices. The content area smoothly
          expands and collapses regardless of the amount of content inside.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
