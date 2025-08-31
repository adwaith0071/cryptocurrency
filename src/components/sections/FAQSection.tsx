import React from "react";
import { Badge } from "../ui/badge";
import { FAQ } from "../../types";

interface FAQSectionProps {
  faqData: FAQ[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqData }) => {
  return (
    <section className="relative px-4 md:px-8 lg:px-16 xl:px-20 py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1420] via-transparent to-transparent opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f3a] via-transparent to-transparent opacity-25"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-[#0f1a3a] via-transparent to-transparent opacity-25"></div>
      <div className="max-w-6xl mx-auto">
        <Badge className="block w-fit mx-auto bg-[#00ffa00d] rounded-full border-0 text-[#00ffa0] text-xl md:text-2xl font-medium px-8 py-4 mb-12">
          FAQs
        </Badge>

        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white text-center mb-8">
          Frequently Asked Questions
        </h2>

        <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#ffffffbf] text-center max-w-3xl mx-auto mb-16">
          Follow design trends and continually update your skills by learning
          new tools and techniques.
        </p>

 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {faqData.map((faq, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-medium text-white text-xl md:text-2xl text-center lg:text-left">
                {faq.question}
              </h3>
              <p className="font-medium text-[#ffffffbf] text-lg md:text-xl leading-relaxed">
                {faq.answer}
              </p>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#ffffff20] to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};