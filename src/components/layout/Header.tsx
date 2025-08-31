import React, { useState } from "react";
import { Button } from "../ui/button";
import { NavigationItem } from "../../types";

interface HeaderProps {
  navigationItems: NavigationItem[];
}

export const Header: React.FC<HeaderProps> = ({ navigationItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative w-full px-4 md:px-8 lg:px-16 xl:px-20 py-8">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl md:text-3xl font-extrabold">
          <span className="text-[#00ffa0]">Crypto</span>
          <span className="text-white">Dive</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="font-medium text-white text-xl hover:text-[#00ffa0] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <Button className="bg-[#00ffa0] text-black font-semibold px-6 py-5 rounded-full hover:bg-[#00ffa0]/90">
            Sign Up
          </Button>
          
          <div className="relative">
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col space-y-1 cursor-pointer p-2"
              aria-label="Toggle mobile menu"
            >
              <div className="w-1 h-1 bg-white rounded-full" />
              <div className="w-1 h-1 bg-white rounded-full" />
              <div className="w-1 h-1 bg-white rounded-full" />
            </button>

            {isMobileMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-[#0f0f0f] border border-[#ffffff20] rounded-lg shadow-2xl z-50">
                <div className="py-4">
                  <div className="flex flex-col space-y-2">
                    {navigationItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="font-medium text-white text-lg hover:text-[#00ffa0] transition-colors px-4 py-3 hover:bg-[#ffffff10] rounded-md mx-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};