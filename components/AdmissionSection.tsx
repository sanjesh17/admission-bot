import React from "react"
import AdmissionBg from "../assets/Placement.png"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const AdmissionSection = () => {
  return (
    <div className="flex items-center justify-center px-40 py-20 gap-20">
      <Image
        src={AdmissionBg}
        alt="Placement Image"
        className="h-[600px] w-[600px]"
      ></Image>
      <div>
        <h1 className="text-7xl font-serif font-base italic text-[#831238] mb-4">
          Admissions
        </h1>
        <p className="text-base font-inter text-black/60">
          Sathyabama Institute of Science and Technology is a premier
          institution offering world-class education across Engineering,
          Technology, Science, Management, Law, Pharmacy, Dental Science,
          Nursing, and Arts. Admissions are conducted through the Sathyabama All
          India Online Entrance Examination (SAEEE) and merit-based selection
          for eligible programs.
        </p>
        <br />
        <p className="text-base font-inter text-black/60">
          Sathyabama Institute of Science and Technology offers a robust
          academic framework with over 65 undergraduate, 35 postgraduate, and a
          wide range of doctoral programs across 18 dedicated departments. The
          curriculum spans diverse fields including Engineering, Technology,
          Architecture, Management, Law, Science, and Health Sciences, providing
          students with ample opportunities to pursue their academic and
          professional goals.
        </p>
        <br />
        <div className="flex gap-12">
          <div className="py-3 px-12 border border-[#831238]/60 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-serif italic text-[#831238]">3000+</h1>
            <p className="font-serif italic text-xl">Offers</p>
          </div>
          <div className="py-3 px-12 border border-[#831238]/60 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-serif italic text-[#831238]">
              5.7 LPA
            </h1>
            <p className="font-serif italic text-xl">Average CTC</p>
          </div>
        </div>
        <br />
        <Link href="https://www.sathyabama.ac.in/admissions/programs-offered">
          <button className="px-12 py-4 bg-[#831238] text-white flex items-center justify-center hover:bg-black transition-colors duration-300">
            View Our Programs
            <ArrowUpRight className="inline ml-1 stroke-1" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AdmissionSection
