import React from "react";
import { Button } from "../ui/button";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative px-4 md:px-8 lg:px-16 xl:px-20 py-12 md:py-20 overflow-hidden">
  
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full opacity-15">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 via-violet-400 to-transparent blur-3xl"></div>
        </div>

 
        <div className="absolute top-32 -right-20 w-64 h-64 rounded-full opacity-15">
          <div className="w-full h-full rounded-full bg-gradient-to-l from-green-400 via-emerald-500 to-transparent blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00ffa0]  leading-tight">
          Secure & Intuitive
        </h1>
        <br />
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00ffa0] mb-8 leading-tight">
        Crypto Trading
        </h1>

       
        <p className="text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-[#00ffa0] text-black font-semibold px-8 py-8 rounded-full text-xl hover:bg-[#00ffa0]/90">
            Get Started
          </Button>
          <Button className="bg-transparent border-2 border-[#00ffa0] text-[#00ffa0] font-semibold px-8 py-8 rounded-full text-xl hover:bg-[#00ffa0]/10">
            Start Trading
          </Button>
        </div>
      </div>


      <div className="hidden lg:block absolute top-32 left-32 w-16 h-16 bg-[#fee71533] rounded-full flex items-center justify-center">
        <div className="flex items-center justify-center w-full h-full">
          <img className="w-8 h-8 object-contain" alt="Bitcoin" src="/coins-2--5.png" />
        </div>
      </div>
      <div className="hidden lg:block absolute top-28 right-28 w-20 h-20 bg-[#cc313d33] rounded-full flex items-center justify-center rotate-12">
        <div className="flex items-center justify-center w-full h-full">
          <img className="w-10 h-10 object-contain" alt="Doge" src="/coins-2--5-3.png" />
        </div>
      </div>
      <div className="hidden xl:block absolute bottom-40 left-40 w-14 h-14 bg-[#5928af33] rounded-full flex items-center justify-center -rotate-12">
        <div className="flex items-center justify-center w-full h-full">
          <img className="w-7 h-7 object-contain" alt="Ethereum" src="/coins-2--5-1.png" />
        </div>
      </div>
      <div className="hidden xl:block absolute bottom-32 right-40 w-12 h-12 bg-[#33875a33] rounded-full flex items-center justify-center rotate-45">
        <div className="flex items-center justify-center w-full h-full">
          <img className="w-6 h-6 object-contain" alt="Solana" src="/coins-2--5-2.png" />
        </div>
      </div>
    </section>
  );
};