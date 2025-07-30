import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between py-2 px-32 bg-[#831238] text-white text-[12px]">
        <div className="flex gap-4 items-center font-base font-inter">
          <p className="hover:text-white/80 cursor-pointer transition-all duration-200">
            ABOUT
          </p>
          <p className="hover:text-white/80 cursor-pointer transition-all duration-200">
            PLACEMENT
          </p>
          <p className="hover:text-white/80 cursor-pointer transition-all duration-200">
            CAMPUS TOUR
          </p>
          <p className="hover:text-white/80 cursor-pointer transition-all duration-200">
            SAEEE 2026
          </p>
        </div>
        <div className="px-5 py-1 bg-[#ff7a00] cursor-pointer hover:bg-[#ff7a00]/80 text-white font-bold rounded-xl transition-all duration-200">
          ADMISSIONS
        </div>
      </div>
    </div>
  );
};

export default Header;
