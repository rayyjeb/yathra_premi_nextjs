import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-80%">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-950 text-center mb-10">
            Frequently Asked Questions</h2>        <AccordionItem value="item-1">
          <AccordionTrigger>Does Yathra Premi offers refund?</AccordionTrigger>
          <AccordionContent>
            Yes, We do provide refund upon cancellation before 48 hours
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Question 2</AccordionTrigger>
          <AccordionContent>
            Answer 2
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Question 3</AccordionTrigger>
          <AccordionContent>
            Answer3
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  