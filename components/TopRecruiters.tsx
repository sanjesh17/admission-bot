import React from "react";
import Image from "next/image";

interface TopRecruitersProps {
  logos: string[];
}

const TopRecruiters: React.FC<TopRecruitersProps> = ({ logos }) => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top Recruiters
          </h2>
          <div className="w-20 h-1 bg-[#831238] mx-auto mb-8"></div>
        </div>

        <div className="relative">
          {/* Logo Slider */}
          <div className="flex overflow-hidden">
            <div className="flex animate-infinite-scroll">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="mx-8 w-32 h-20 flex items-center justify-center"
                >
                  <div className="relative w-full h-16">
                    <Image
                      src={logo}
                      alt={`Recruiter ${index + 1}`}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 
                        transition-all duration-300 transform hover:scale-110"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="mx-8 w-32 h-20 flex items-center justify-center"
                >
                  <div className="relative w-full h-16">
                    <Image
                      src={logo}
                      alt={`Recruiter ${index + 1}`}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 
                        transition-all duration-300 transform hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;
