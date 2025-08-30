import React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { FeatureCard, LearningCard } from "../../types";

interface LearnSectionProps {
  featureCards: FeatureCard[];
  learningCards: LearningCard[];
}

export const LearnSection: React.FC<LearnSectionProps> = ({ featureCards, learningCards }) => {
  return (
    <section className="relative bg-[#000625] px-4 md:px-8 lg:px-16 xl:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <Badge className="block w-fit mx-auto bg-[#00ffa00d] rounded-full border-0 text-[#00ffa0] text-xl md:text-2xl font-medium px-8 py-4 mb-12">
          Learn Crypto
        </Badge>

        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white text-center mb-8">
          Let's Know How Crypto Works
        </h2>

        <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#ffffffbf] text-center max-w-4xl mx-auto mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className={`bg-[#00ffa01a] rounded-[2rem] ${card.hasBorder ? "border border-[#00ffa0]" : "border-0"} p-6`}
            >
              <CardContent className="p-0 text-center">
                <div className="w-20 h-20 bg-[#00ffa026] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <img className="w-12 h-12 object-cover" alt="Learn" src={card.icon} />
                </div>
                <h3 className="font-semibold text-[#00ffa0] text-xl md:text-2xl">
                  {card.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {learningCards.map((card, index) => (
            <Card key={index} className="bg-[#00ffa01a] rounded-3xl border-0 p-6">
              <CardContent className="p-0 text-center">
                <h3 className="font-semibold text-white text-xl md:text-2xl mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="font-normal text-white text-lg md:text-xl mb-6 leading-relaxed">
                  {card.description}
                </p>
                <Button className="bg-[#00ffa01a] border border-[#00ffa0] text-[#00ffa0] font-semibold px-8 py-3 rounded-full text-lg hover:bg-[#00ffa026]">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};