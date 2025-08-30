import React from "react";
import { FooterSection } from "../../types";

interface FooterProps {
  sections: FooterSection[];
}

export const Footer: React.FC<FooterProps> = ({ sections }) => {
  return (
    <footer className="relative px-4 md:px-8 lg:px-16 xl:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="font-semibold text-white text-xl md:text-2xl mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="font-normal text-white text-lg md:text-xl hover:text-[#00ffa0] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-white text-xl md:text-2xl mb-6">
              Download App
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-4 flex items-center">
                <img className="w-12 h-12 object-cover mr-4" alt="Google Play" src="/google-play-1.png" />
                <div>
                  <div className="font-semibold text-black text-sm">Get it On</div>
                  <div className="font-semibold text-black text-xl">Google Play</div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 flex items-center">
                <img className="w-12 h-12 object-cover mr-4" alt="App Store" src="/google-play-1-1.png" />
                <div>
                  <div className="font-semibold text-black text-sm">Download On The</div>
                  <div className="font-semibold text-black text-xl">App Store</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#ffffff20] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-semibold text-[#ffffff80] text-sm">
              © Copyright 2024, all right reserve by cryptodive
            </div>
            <div className="flex space-x-4">
              <img className="w-6 h-6 object-cover" alt="Shopping" src="/shopping-1-.png" />
              <img className="w-6 h-6 object-cover" alt="Microsoft" src="/microsoft.png" />
              <img className="w-6 h-6 object-cover" alt="Twitter" src="/twitter-3-.png" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};