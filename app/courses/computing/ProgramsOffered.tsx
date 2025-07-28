import React from "react";
import { Clock, ArrowRight } from "lucide-react";

const programs = [
  {
    id: 1,
    name: "B.E - Computer Science and Engineering",
    duration: "4 years",
  },
  {
    id: 2,
    name: "B.E - Computer Science and Engineering with specialization in Artificial Intelligence",
    duration: "4 years",
  },
  {
    id: 3,
    name: "B.E - Computer Science and Engineering with specialization in Data Science",
    duration: "4 years",
  },
  {
    id: 4,
    name: "B.E - Computer Science and Engineering with specialization in Internet of Things",
    duration: "4 years",
  },
  {
    id: 5,
    name: "B.E - Computer Science and Engineering with specialization in Artificial Intelligence and Robotics",
    duration: "4 years",
  },
  {
    id: 6,
    name: "B.E - Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning",
    duration: "4 years",
  },
  {
    id: 7,
    name: "B.E - Computer Science and Engineering with specialization in Block Chain Technology",
    duration: "4 years",
  },
  {
    id: 8,
    name: "B.E - Computer Science and Engineering with specialization in Cyber Security",
    duration: "4 years",
  },
];

const ProgramsOffered = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-[#831238] transition-colors duration-300">
            Programs Offered
          </h2>
          <div className="w-20 h-1 bg-[#831238] mx-auto mb-8 transform transition-transform duration-300 hover:scale-x-150"></div>
          <p className="text-lg text-gray-600">
            Explore our diverse range of Computer Science programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl 
                transition-all duration-300 ease-in-out transform hover:-translate-y-1 
                border border-gray-100 hover:border-[#831238]/20 relative 
                overflow-hidden cursor-pointer"
            >
              {/* Program Content */}
              <div className="relative z-10">
                <h3
                  className="text-xl font-semibold text-gray-900 group-hover:text-[#831238] 
                  transition-colors duration-300 mb-3"
                >
                  {program.name}
                </h3>

                <div className="flex items-center mb-4">
                  <Clock className="w-4 h-4 mr-2 text-[#831238]" />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800">
                    {program.duration}
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <button
                    className="px-4 py-2 text-sm font-medium text-[#831238] 
                    border border-[#831238] rounded-lg
                    transition-all duration-300 ease-in-out
                    hover:bg-[#831238] hover:text-white
                    transform hover:scale-105"
                  >
                    Learn More
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white 
                    bg-[#831238] rounded-lg flex items-center gap-2
                    transition-all duration-300 ease-in-out
                    hover:bg-[#831238]/90 transform hover:scale-105"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Decorative Background */}
              <div
                className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 
                bg-[#831238]/5 rounded-full transform scale-0 group-hover:scale-100 
                transition-transform duration-500 ease-out"
              ></div>
              <div
                className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 
                bg-[#831238]/5 rounded-full transform scale-0 group-hover:scale-100 
                transition-transform duration-500 ease-out delay-100"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsOffered;
