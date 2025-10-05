import React from "react"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <div>
      <div className="flex justify-between py-2 px-32 bg-[#831238] text-white text-[12px]">
        <div className="flex gap-4 items-center font-base font-inter">
          <a
            href="https://www.sathyabama.ac.in/about-us"
            rel="noopener noreferrer"
            className="hover:text-white/80 cursor-pointer transition-all duration-200"
          >
            ABOUT
          </a>

          <a
            href="https://www.sathyabama.ac.in/placements/recruitments"
            rel="noopener noreferrer"
            className="hover:text-white/80 cursor-pointer transition-all duration-200"
          >
            PLACEMENTS
          </a>

          <a
            href="https://www.sathyabama.ac.in/campus-life/academic-blocks"
            rel="noopener noreferrer"
            className="hover:text-white/80 cursor-pointer transition-all duration-200"
          >
            CAMPUS LIFE
          </a>

          <a
            href="https://www.sathyabama.ac.in/Careers"
            rel="noopener noreferrer"
            className="hover:text-white/80 cursor-pointer transition-all duration-200"
          >
            CAREERS
          </a>
        </div>

        <a
          href="https://www.sathyabama.ac.in/admissions"
          rel="noopener noreferrer"
          className="px-5 py-1 bg-[#ff7a00] cursor-pointer hover:bg-[#ff7a00]/80 text-white font-bold rounded-xl transition-all duration-200"
        >
          ADMISSIONS
        </a>
      </div>
    </div>
  )
}

export default Header
