import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const ContactSection: React.FC = () => {
  return (
    <section className="relative bg-[#1a1f36] px-4 md:px-8 lg:px-16 xl:px-20 py-16 md:py-24 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-3/5 bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent"></div>
        <div className="absolute left-0 top-0 bottom-0 w-2/5 bg-gradient-to-r from-blue-500/[0.02] via-blue-400/[0.01] to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
              Get It On The Crypto Action
            </h2>
            <p className="text-lg md:text-xl font-medium text-[#ffffffbf] mb-8 leading-relaxed">
              Provide easy access to customer support through chatbots or live
              chat features.
            </p>
            
            <div className="flex space-x-4">
              <img className="w-11 h-11 object-cover" alt="Facebook" src="/facebook.png" />
              <img className="w-12 h-12 object-cover" alt="Instagram" src="/instagram.png" />
              <img className="w-11 h-11 object-cover" alt="Send" src="/send-1-.png" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-white text-xl md:text-2xl font-normal mb-4">
                Email Address
              </label>
              <Input
                className="w-full h-16 bg-[#ffffff1a] rounded-xl border-0 text-[#ffffffbf] text-xl placeholder:text-[#ffffffbf] px-6"
                placeholder="Enter Email Address"
              />
            </div>

            <div>
              <label className="block text-white text-xl md:text-2xl font-normal mb-4">
                Your Topic
              </label>
              <Input
                className="w-full h-16 bg-[#ffffff1a] rounded-xl border-0 text-[#ffffffbf] text-xl placeholder:text-[#ffffffbf] px-6"
                placeholder="Enter Your Topic"
              />
            </div>

            <Button className="w-full md:w-auto bg-[#00ffa0] text-black font-semibold px-12 py-7 rounded-full text-xl hover:bg-[#00ffa0]/90">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};