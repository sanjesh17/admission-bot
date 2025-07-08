import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between py-2 px-32 bg-[#C10B4E] text-white text-[12px]">
        <div className="flex gap-4 items-center font-base">
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
        <div className="px-5 py-1 bg-[#FFD92A] cursor-pointer hover:bg-[#E6C024] text-black font-bold rounded-xl transition-all duration-200">
          ADMISSIONS
        </div>
      </div>
    </div>
  );
};

export default Header;
