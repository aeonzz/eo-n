import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";

export default function AccordionMultiple() {
  return (
    <Accordion openMultiple>
      <AccordionItem value="item-1">
        <AccordionTrigger>Explore the Galaxy</AccordionTrigger>
        <AccordionContent>
          Journey through the stars and uncover the mysteries of distant
          planets, nebulae, and black holes. A cosmic adventure awaits!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Unravel History</AccordionTrigger>
        <AccordionContent>
          Dive into the past with tales of ancient civilizations, legendary
          battles, and forgotten heroes that shaped our world.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Master New Skills</AccordionTrigger>
        <AccordionContent>
          Unlock your potential with tips on coding, art, or cooking—practical
          knowledge to inspire creativity and growth.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
