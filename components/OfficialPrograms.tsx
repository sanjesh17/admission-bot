import React from "react";
import Link from "next/link";
import { GraduationCap, BookOpen, Atom, Globe2 } from "lucide-react";

const programs = [
  [
    "School of Computing",
    "School of Science & Humanities",
    "School of Electrical and Electronics",
    "School of Law",
  ],
  [
    "School of Mechanical",
    "School of Pharmacy",
    "School of Bio and Chemical Engineering",
    "School of Nursing",
  ],
  [
    "School of Building and Environment",
    "School of Physiotherapy",
    "School of Dental Sciences",
    "School of Management Studies",
    "School of Allied Health Sciences",
  ],
];

const icons = [<GraduationCap />, <Atom />, <BookOpen />, <Globe2 />];

const OfficialPrograms: React.FC = () => {
  return (
    <section
      className="bg-white py-20 px-4 sm:px-6 lg:px-8 text-gray-900"
      aria-labelledby="programs-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="programs-heading"
          className="text-5xl font-bold text-center mb-16 text-[#831238]"
        >
          Explore Our Academic Programs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {programs.flat().map((program, idx) => (
            <div
              key={idx}
              className="flex items-start p-5 bg-[#831238] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group hover:scale-[1.02] border border-gray-200 cursor-pointer"
            >
              <div className="text-white mr-4 mt-1">
                {icons[idx % icons.length]}
              </div>
              <div>
                <h3 className="text-md font-medium text-white transition-colors duration-200">
                  {program}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 border border-red-700 rounded-full text-red-700 font-medium hover:bg-[#831238] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
          >
            Search for Programs
          </Link>
          <span className="text-sm text-gray-500">or</span>
          <Link
            href="/apply"
            className="text-[#831238] font-semibold text-sm hover:underline focus:outline-none focus:underline transition-all duration-200"
          >
            Apply Now →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OfficialPrograms;
