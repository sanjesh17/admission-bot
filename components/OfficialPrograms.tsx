import React from "react";
import Link from "next/link";
import { GraduationCap, BookOpen, Atom, Globe2 } from "lucide-react";
import Image from "next/image";

// Updated programs array with slug information
const programs = [
  {
    name: "School of Computing",
    slug: "computing",
    image:
      "https://www.sathyabama.ac.in/sites/default/files/styles/image_size_175_175_/public/2020-09/school%20of%20computing%20sathyabama.jpg?itok=POzcSjXM",
  },
  {
    name: "School of Science & Humanities",
    slug: "science-humanities",
    image:
      "https://www.sathyabama.ac.in/sites/default/files/styles/image_size_175_175_/public/2020-09/imgonline-com-ua-CompressToSize-cBpBylj97v0QZT.jpg?itok=lJ1vQNBJ",
  },
  {
    name: "School of Electrical and Electronics",
    slug: "electrical-electronics",
    image:
      "https://www.sathyabama.ac.in/sites/default/files/styles/image_size_175_175_/public/2020-09/imgonline-com-ua-CompressToSize-JLeOm3aLCw.jpg?itok=sr1YHUdt",
  },
  {
    name: "School of Law",
    slug: "law",
    image:
      "https://www.sathyabama.ac.in/sites/default/files/styles/image_size_175_175_/public/2020-01/IMG-20180803-WA0027.jpg?itok=nhD0YXNe",
  },
  {
    name: "School of Mechanical",
    slug: "mechanical",
    image:
      "https://www.sathyabama.ac.in/sites/default/files/styles/image_size_175_175_/public/2020-09/imgonline-com-ua-CompressToSize-8ITX7akOfvnugD.jpg?itok=P03IeRsF",
  },
  {
    name: "School of Pharmacy",
    slug: "pharmacy",
    image:
      "https://www.sathyabama.ac.in/sites/default/files/styles/image_size_175_175_/public/2020-09/imgonline-com-ua-CompressToSize-7xKnwFF4Au.jpg?itok=L4qbPFhl",
  },
  {
    name: "School of Bio and Chemical Engineering",
    slug: "bio-chemical",
    image:
      "https://www.sathyabama.ac.in/sites/default/files/styles/image_size_175_175_/public/2020-09/imgonline-com-ua-CompressToSize-OSaXQvI3syjw4N.jpg?itok=9vQ9Xm28",
  },
  {
    name: "School of Nursing",
    slug: "nursing",
    image:
      "https://www.sathyabama.ac.in/sites/default/files/styles/image_size_175_175_/public/2020-01/12%20december-min_0.jpg?itok=-GtYbOYZ",
  },
  {
    name: "School of Building and Environment",
    slug: "building-environment",
    image:
      "https://www.sathyabama.ac.in/sites/default/files/styles/image_size_175_175_/public/2020-09/imgonline-com-ua-CompressToSize-xEGiBDif2ZoMf.jpg?itok=MvcG4HG7",
  },
  {
    name: "School of Physiotherapy",
    slug: "physiotherapy",
    image:
      "https://www.sathyabama.ac.in/sites/default/files/styles/image_size_175_175_/public/2023-12/sist%20day%2073787.jpg?itok=dGXOga8s",
  },
  {
    name: "School of Dental Sciences",
    slug: "dental",
    image:
      "https://www.sathyabama.ac.in/sites/default/files/styles/image_size_175_175_/public/2020-09/imgonline-com-ua-CompressToSize-PwXwHAs7Oz.jpg?itok=n617uCX5",
  },
  {
    name: "School of Management Studies",
    slug: "management",
    image:
      "https://www.sathyabama.ac.in/sites/default/files/styles/image_size_175_175_/public/2020-09/imgonline-com-ua-CompressToSize-HBnx02ifNM.jpg?itok=03r6RrQc",
  },
  {
    name: "School of Allied Health Sciences",
    slug: "allied-health",
    image:
      "https://www.sathyabama.ac.in/sites/default/files/styles/image_size_175_175_/public/2024-02/SU%20prospectus11338%20%281%29.jpg?itok=5IJUIQbl",
  },
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
          className="text-6xl font-serif italic text-center mb-16 text-[#831238]"
        >
          Explore Our Academic Programs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, idx) => (
            <Link href={`/courses/${program.slug}`} key={idx}>
              <div className="group w-fit">
                <div className="overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.name}
                    height={400}
                    width={400}
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <h1 className="text-xl font-inter font-semibold mt-4 text-[#831238] relative inline-block">
                  {program.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#831238] transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </div>
            </Link>
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
