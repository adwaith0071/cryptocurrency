import React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { CryptoData } from "../../types";

interface MarketSectionProps {
  cryptoData: CryptoData[];
}

export const MarketSection: React.FC<MarketSectionProps> = ({ cryptoData }) => {
  return (
    <section className="relative px-4 md:px-8 lg:px-16 xl:px-20 py-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full opacity-10">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 via-violet-400 to-transparent blur-3xl"></div>
        </div>
        <div className="absolute top-32 -right-20 w-64 h-64 rounded-full opacity-10">
          <div className="w-full h-full rounded-full bg-gradient-to-l from-green-400 via-emerald-500 to-transparent blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Badge className="block w-fit mx-auto bg-[#00ffa00d] rounded-full border-0 text-[#00ffa0] text-xl md:text-2xl font-medium px-8 py-4 mb-12">
          Trade Crypto
        </Badge>

        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white text-center mb-16">
          Crypto Market Trade And Metrics
        </h2>

        <div className="space-y-6 md:space-y-8 mb-12">
          {cryptoData.map((crypto, index) => (
            <Card key={index} className="backdrop-blur-xl border-0 rounded-2xl p-4 md:p-6">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  <div className={`w-16 h-16 md:w-20 md:h-20 ${crypto.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <img className="w-8 h-8 md:w-10 md:h-10 object-cover" alt={crypto.name} src={crypto.icon} />
                  </div>

                  <div className="text-center md:text-left flex-grow">
                    <div className="font-semibold text-white text-xl md:text-2xl">{crypto.name}</div>
                    <div className="font-semibold text-[#ffffffbf] text-lg md:text-xl">{crypto.symbol}</div>
                  </div>

                  <div className="text-center md:text-left">
                    <div className="font-medium text-[#ffffffbf] text-lg md:text-xl">Change</div>
                    <div className={`font-semibold ${crypto.changeColor} text-lg md:text-xl`}>
                      {crypto.change}
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <div className="font-medium text-[#ffffffbf] text-lg md:text-xl">Price</div>
                    <div className="font-semibold text-white text-lg md:text-xl">{crypto.price}</div>
                  </div>

                  <div className="hidden lg:block text-center">
                    <div className="font-medium text-[#ffffffbf] text-xl mb-2">Chart</div>
                    <img className="w-24 h-12 mx-auto" alt="Chart" src={crypto.chart} />
                  </div>

                  <Button className="bg-[#00ffa01a]  border-[#00ffa0] text-[#00ffa0] font-semibold px-7 py-7 rounded-full text-lg hover:bg-[#00ffa026] flex-shrink-0">
                    Trade
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
        <Button className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 bg-[#00ffa026] border border-[#00ffa0] text-[#00ffa0] font-semibold px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 md:py-6 lg:p-7 rounded-full text-lg sm:text-xl hover:bg-[#00ffa033]">
            View Other Crypto
          </Button>
        </div>
      </div>
    </section>
  );
};