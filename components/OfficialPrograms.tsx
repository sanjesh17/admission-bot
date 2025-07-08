import React from "react";
import Link from "next/link";
import { GraduationCap, BookOpen, Atom, Globe2 } from "lucide-react"; // Optional icons

const programs = [
  [
    "Agriculture",
    "Arts, Humanities & Commerce",
    "Architecture",
    "Artificial Intelligence",
    "Artificial Intelligence and Data Science",
    "Allied Health Sciences",
    "Ayurveda",
    "Biotechnology",
  ],
  [
    "Business",
    "Computing",
    "Dentistry",
    "Engineering",
    "Law",
    "Media & Communications",
    "Medicine",
    "Nursing",
  ],
  [
    "Pharmacy",
    "Physical Sciences",
    "Sculpting",
    "Spiritual & Cultural Studies",
    "Social and Behavioural Sciences",
    "Nano Sciences",
    "Sustainable Development",
    "Online Degree",
  ],
];

// A few example icons to cycle through (you can map more if needed)
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
          className="text-5xl font-bold text-center mb-16 text-[#C10B4E]"
        >
          Explore Our Academic Programs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {programs.flat().map((program, idx) => (
            <div
              key={idx}
              className="flex items-start p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-[1.02] border border-gray-100 cursor-pointer"
            >
              <div className="text-red-600 mr-4 mt-1">
                {icons[idx % icons.length]}
              </div>
              <div>
                <h3 className="text-md font-medium text-gray-800 group-hover:text-[#C10B4E] transition-colors duration-300">
                  {program}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 border border-red-700 rounded-full text-red-700 font-medium hover:bg-[#C10B4E] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
          >
            Search for Programs
          </Link>
          <span className="text-sm text-gray-500">or</span>
          <Link
            href="/apply"
            className="text-red-700 font-semibold text-sm hover:underline focus:outline-none focus:underline transition-all duration-200"
          >
            Apply Now →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OfficialPrograms;
