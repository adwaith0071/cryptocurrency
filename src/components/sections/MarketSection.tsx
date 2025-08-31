// import React from "react";
// import { Badge } from "../ui/badge";
// import { Button } from "../ui/button";
// import { CryptoData } from "../../types";

// interface MarketSectionProps {
//   cryptoData: CryptoData[];
// }

// export const MarketSection: React.FC<MarketSectionProps> = ({ cryptoData }) => {
//   return (
//     <section className="relative px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16">
//       {/* Background blur effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 -left-20 w-72 h-72 rounded-full opacity-10">
//           <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 via-violet-400 to-transparent blur-3xl"></div>
//         </div>
//         <div className="absolute top-32 -right-20 w-64 h-64 rounded-full opacity-10">
//           <div className="w-full h-full rounded-full bg-gradient-to-l from-green-400 via-emerald-500 to-transparent blur-3xl"></div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <Badge className="block w-fit mx-auto bg-[#00ffa00d] rounded-full border-0 text-[#00ffa0] text-lg sm:text-xl md:text-2xl font-medium px-6 sm:px-8 py-3 sm:py-4 mb-8 sm:mb-12">
//           Trade Crypto
//         </Badge>

//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white text-center mb-8 sm:mb-12 md:mb-16">
//           Crypto Market Trade And Metrics
//         </h2>

//         <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
//           {cryptoData.map((crypto, index) => (
//             <div key={index} className="backdrop-blur-xl border-white/10 rounded-2xl p-4 sm:p-6 transition-all duration-300">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 items-center gap-4 sm:gap-6 lg:gap-8">
//                 {/* Icon and Name Column */}
//                 <div className="flex items-center gap-3 sm:gap-4 col-span-1 sm:col-span-2 lg:col-span-2">
//                   <div className={`w-12 h-12 sm:w-16 sm:h-16 ${crypto.bgColor} rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm`}>
//                     <img className="w-6 h-6 sm:w-8 sm:h-8 object-cover" alt={crypto.name} src={crypto.icon} />
//                   </div>
//                   <div className="text-left">
//                     <div className="font-semibold text-white text-lg sm:text-xl">{crypto.name}</div>
//                     <div className="font-semibold text-[#ffffffbf] text-base sm:text-lg">{crypto.symbol}</div>
//                   </div>
//                 </div>

//                 {/* Change Column */}
//                 <div className="text-center sm:text-left">
//                   <div className="font-medium text-[#ffffffbf] text-base sm:text-lg mb-1">Change</div>
//                   <div className={`font-semibold ${crypto.changeColor} text-base sm:text-lg`}>
//                     {crypto.change}
//                   </div>
//                 </div>

//                 {/* Price Column */}
//                 <div className="text-center sm:text-left">
//                   <div className="font-medium text-[#ffffffbf] text-base sm:text-lg mb-1">Price</div>
//                   <div className="font-semibold text-white text-base sm:text-lg">{crypto.price}</div>
//                 </div>

//                 {/* Chart Column */}
//                 <div className="hidden lg:block text-center">
//                   <div className="font-medium text-[#ffffffbf] text-lg mb-2">Chart</div>
//                   <img className="w-24 h-12 mx-auto" alt="Chart" src={crypto.chart} />
//                 </div>

//                 {/* Trade Button Column */}
//                 <div className="text-center sm:text-right col-span-1 sm:col-span-2 lg:col-span-1">
//                   <Button className="w-full sm:w-auto bg-[#00ffa01a] border-[#00ffa0] text-[#00ffa0] font-semibold px-4 sm:px-6 lg:px-7 py-3 sm:py-5 lg:py-7 rounded-full text-base sm:text-lg hover:bg-[#00ffa026] flex-shrink-0">
//                     Trade
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center">
//           <Button className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 bg-[#00ffa026] border border-[#00ffa0] text-[#00ffa0] font-semibold px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 md:py-6 lg:p-7 rounded-full text-lg sm:text-xl hover:bg-[#00ffa033]">
//             View Other Crypto
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CryptoData } from "../../types";

interface MarketSectionProps {
  cryptoData: CryptoData[];
}

export const MarketSection: React.FC<MarketSectionProps> = ({ cryptoData }) => {
  return (
    <section className="relative px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 xs:py-8 sm:py-12 md:py-14 lg:py-16">
      {/* Background blur effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 xs:top-16 sm:top-20 -left-10 xs:-left-16 sm:-left-20 w-40 xs:w-56 sm:w-72 h-40 xs:h-56 sm:h-72 rounded-full opacity-8 xs:opacity-10">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 via-violet-400 to-transparent blur-2xl xs:blur-3xl"></div>
        </div>
        <div className="absolute top-16 xs:top-24 sm:top-32 -right-10 xs:-right-16 sm:-right-20 w-32 xs:w-48 sm:w-64 h-32 xs:h-48 sm:h-64 rounded-full opacity-8 xs:opacity-10">
          <div className="w-full h-full rounded-full bg-gradient-to-l from-green-400 via-emerald-500 to-transparent blur-2xl xs:blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Badge className="block w-fit mx-auto bg-[#00ffa00d] rounded-full border-0 text-[#00ffa0] text-base xs:text-lg sm:text-xl md:text-2xl font-medium px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 mb-6 xs:mb-8 sm:mb-12">
          Trade Crypto
        </Badge>

        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16 leading-tight">
          Crypto Market Trade And Metrics
        </h2>

        <div className="space-y-3 xs:space-y-4 sm:space-y-6 mb-6 xs:mb-8 sm:mb-12">
          {cryptoData.map((crypto, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
              {/* Mobile Layout (xs to sm) */}
              <div className="block sm:hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 xs:w-12 xs:h-12 ${crypto.bgColor} rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm`}>
                      <img className="w-5 h-5 xs:w-6 xs:h-6 object-cover" alt={crypto.name} src={crypto.icon} />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm xs:text-base">{crypto.name}</div>
                      <div className="font-medium text-[#ffffffbf] text-xs xs:text-sm">{crypto.symbol}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-white text-sm xs:text-base">{crypto.price}</div>
                    <div className={`font-medium ${crypto.changeColor} text-xs xs:text-sm`}>
                      {crypto.change}
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-[#00ffa01a] border border-[#00ffa0] text-[#00ffa0] font-semibold px-4 py-3 rounded-full text-sm xs:text-base hover:bg-[#00ffa026] transition-all duration-300">
                  Trade
                </Button>
              </div>

              {/* Tablet Layout (sm to lg) */}
              <div className="hidden sm:grid lg:hidden grid-cols-4 items-center gap-4 md:gap-6">
                {/* Icon and Name */}
                <div className="flex items-center gap-3 col-span-2">
                  <div className={`w-12 h-12 md:w-14 md:h-14 ${crypto.bgColor} rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm`}>
                    <img className="w-6 h-6 md:w-7 md:h-7 object-cover" alt={crypto.name} src={crypto.icon} />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-base md:text-lg">{crypto.name}</div>
                    <div className="font-medium text-[#ffffffbf] text-sm md:text-base">{crypto.symbol}</div>
                  </div>
                </div>

                {/* Price and Change */}
                <div className="text-center">
                  <div className="font-medium text-[#ffffffbf] text-sm mb-1">Price</div>
                  <div className="font-semibold text-white text-base md:text-lg">{crypto.price}</div>
                  <div className={`font-medium ${crypto.changeColor} text-sm md:text-base mt-1`}>
                    {crypto.change}
                  </div>
                </div>

                {/* Trade Button */}
                <div className="text-center">
                  <Button className="w-full bg-[#00ffa01a] border border-[#00ffa0] text-[#00ffa0] font-semibold px-4 md:px-6 py-3 md:py-4 rounded-full text-sm md:text-base hover:bg-[#00ffa026] transition-all duration-300">
                    Trade
                  </Button>
                </div>
              </div>

              {/* Desktop Layout (lg and above) */}
              <div className="hidden lg:grid grid-cols-6 items-center gap-6 xl:gap-8">
                {/* Icon and Name Column */}
                <div className="flex items-center gap-4 col-span-2">
                  <div className={`w-14 h-14 xl:w-16 xl:h-16 ${crypto.bgColor} rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm`}>
                    <img className="w-7 h-7 xl:w-8 xl:h-8 object-cover" alt={crypto.name} src={crypto.icon} />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white text-lg xl:text-xl">{crypto.name}</div>
                    <div className="font-semibold text-[#ffffffbf] text-base xl:text-lg">{crypto.symbol}</div>
                  </div>
                </div>

                {/* Change Column */}
                <div className="text-center">
                  <div className="font-medium text-[#ffffffbf] text-base xl:text-lg mb-1">Change</div>
                  <div className={`font-semibold ${crypto.changeColor} text-base xl:text-lg`}>
                    {crypto.change}
                  </div>
                </div>

                {/* Price Column */}
                <div className="text-center">
                  <div className="font-medium text-[#ffffffbf] text-base xl:text-lg mb-1">Price</div>
                  <div className="font-semibold text-white text-base xl:text-lg">{crypto.price}</div>
                </div>

                {/* Chart Column */}
                <div className="text-center">
                  <div className="font-medium text-[#ffffffbf] text-lg mb-2">Chart</div>
                  <img className="w-20 h-10 xl:w-24 xl:h-12 mx-auto" alt="Chart" src={crypto.chart} />
                </div>

                {/* Trade Button Column */}
                <div className="text-center">
                  <Button className="w-full bg-[#00ffa01a] border border-[#00ffa0] text-[#00ffa0] font-semibold px-6 xl:px-7 py-4 xl:py-5 2xl:py-7 rounded-full text-base xl:text-lg hover:bg-[#00ffa026] transition-all duration-300">
                    Trade
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="w-full xs:w-5/6 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-[#00ffa026] border border-[#00ffa0] text-[#00ffa0] font-semibold px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 py-3 xs:py-4 sm:py-5 md:py-6 lg:py-7 rounded-full text-base xs:text-lg sm:text-xl hover:bg-[#00ffa033] transition-all duration-300">
            View Other Crypto
          </Button>
        </div>
      </div>
    </section>
  );
};