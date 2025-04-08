import React from 'react';

import { FAQData } from '@/app/types/types';
import { questionsData } from '@/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shadcn/ui/accordion';
import { Separator } from '@/shadcn/ui/separator';

const faqData: FAQData = questionsData;

export const Support = () => {
  return (
    <div>
      <h1 className="font-medium text-[30px] pb-3">Вопросы и ответы</h1>
      <Separator className="mb-6" />
      {faqData.faq.map((category) => (
        <div key={category.category} className="pb-5">
          <h3 className="font-medium text-[16px] pb-3">{category.category}</h3>
          <Accordion type="single" collapsible className="w-full">
            {category.questions.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
};
