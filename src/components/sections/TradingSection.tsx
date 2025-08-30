import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Button } from "../ui/button";

export const TradingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("buy");

  const handleSwap = () => {
    setActiveTab(activeTab === "buy" ? "sell" : "buy");
  };
  return (
    <section className="relative px-4 md:px-8 lg:px-16 xl:px-20 py-8">
      <Card className="max-w-5xl mx-auto bg-[#ffffff0d] rounded-2xl border-0 p-6 md:p-8">
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-transparent p-0 h-auto mb-8 flex justify-center">
              <TabsTrigger
                value="buy"
                className="font-semibold text-xl md:text-2xl bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-[#00ffa0] data-[state=active]:border-b-2 data-[state=active]:border-b-[#00ffa0] data-[state=inactive]:text-[#ffffffb2] data-[state=inactive]:border-b-0 data-[state=inactive]:bg-transparent rounded-none px-4 border-b-2 border-b-transparent shadow-none"
              >
                Buy
              </TabsTrigger>
              <TabsTrigger
                value="sell"
                className="font-semibold text-xl md:text-2xl bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-[#00ffa0] data-[state=active]:border-b-2 data-[state=active]:border-b-[#00ffa0] data-[state=inactive]:text-[#ffffffb2] data-[state=inactive]:border-b-0 data-[state=inactive]:bg-transparent rounded-none px-4 ml-8 border-b-2 border-b-transparent shadow-none"
              >
                Sell
              </TabsTrigger>
            </TabsList>

            <TabsContent value="buy">
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
                <div className="w-full lg:w-80 h-14 bg-[#ffffff1a] rounded-lg flex items-center px-4 cursor-pointer">
                  <div className="text-[#ffffffbf] text-sm mr-auto">I Will Spend</div>
                  <img className="w-4 h-4 mr-2" alt="Rupee" src="/rupee-indian-1.png" />
                  <span className="text-white text-base mr-2">Rupee</span>
                  <img className="w-3 h-3" alt="Arrow" src="/right-arrow-1.png" />
                </div>

                <button onClick={handleSwap} className="cursor-pointer">
                  <img className="w-5 h-6" alt="Exchange" src="/group-9.png" />
                </button>

                <div className="w-full lg:w-80 h-14 bg-[#ffffff1a] rounded-lg flex items-center px-4 cursor-pointer">
                  <div className="text-[#ffffffbf] text-sm mr-auto">I Will Receive</div>
                  <img className="w-5 h-5 mr-2" alt="Bitcoin" src="/rupee-indian-2.png" />
                  <span className="text-white text-base mr-2">BTC</span>
                  <img className="w-3 h-3" alt="Arrow" src="/right-arrow-1.png" />
                </div>

                <Button className="w-full lg:w-auto bg-[#00ffa0] text-black font-semibold px-8 py-7 rounded-lg text-lg hover:bg-[#00ffa0]/90">
                  Buy Crypto
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="sell">
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
                <div className="w-full lg:w-80 h-14 bg-[#ffffff1a] rounded-lg flex items-center px-4 cursor-pointer">
                  <div className="text-[#ffffffbf] text-sm mr-auto">I Will Spend</div>
                  <img className="w-5 h-5 mr-2" alt="Bitcoin" src="/rupee-indian-2.png" />
                  <span className="text-white text-base mr-2">BTC</span>
                  <img className="w-3 h-3" alt="Arrow" src="/right-arrow-1.png" />
                </div>

                <button onClick={handleSwap} className="cursor-pointer">
                  <img className="w-5 h-6" alt="Exchange" src="/group-9.png" />
                </button>

                <div className="w-full lg:w-80 h-14 bg-[#ffffff1a] rounded-lg flex items-center px-4 cursor-pointer">
                  <div className="text-[#ffffffbf] text-sm mr-auto">I Will Receive</div>
                  <img className="w-4 h-4 mr-2" alt="Rupee" src="/rupee-indian-1.png" />
                  <span className="text-white text-base mr-2">Rupee</span>
                  <img className="w-3 h-3" alt="Arrow" src="/right-arrow-1.png" />
                </div>

                <Button className="w-full lg:w-auto bg-[#00ffa0] text-black font-semibold px-8 py-7 rounded-lg text-lg hover:bg-[#00ffa0]/90">
                  Sell Crypto
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
};