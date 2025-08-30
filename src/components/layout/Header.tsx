import React from "react";
import { Button } from "../ui/button";
import { NavigationItem } from "../../types";

interface HeaderProps {
  navigationItems: NavigationItem[];
}

export const Header: React.FC<HeaderProps> = ({ navigationItems }) => {
  return (
    <header className="relative w-full px-4 md:px-8 lg:px-16 xl:px-20 py-8">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl md:text-3xl font-extrabold">
          <span className="text-[#00ffa0]">Crypto</span>
          <span className="text-white">Dive</span>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
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
          <div className="flex flex-col space-y-1 cursor-pointer">
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="w-1 h-1 bg-white rounded-full" />
          </div>
        </div>
      </nav>
    </header>
  );
};