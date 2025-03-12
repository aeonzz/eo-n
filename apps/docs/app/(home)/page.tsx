import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      {/* <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs/introduction"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{" "}
        and see the documentation.
      </p> */}
    <Accordion>
      <AccordionItem>
        <AccordionTrigger>wew</AccordionTrigger>
        <AccordionContent>wtf</AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>wetan</AccordionTrigger>
        <AccordionContent>asdfasdfg</AccordionContent>
      </AccordionItem>
    </Accordion>
    </main>
  );
}
