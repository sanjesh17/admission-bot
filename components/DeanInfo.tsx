import React from "react";
import Image from "next/image";

interface DeanInfoProps {
  deanImage?: string;
  deanName: string;
  department: string;
  qual: string;
  description: string;
  email: string;
}

const DeanInfo: React.FC<DeanInfoProps> = ({
  deanImage,
  deanName,
  department,
  qual,
  description,
  email,
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About the Dean
          </h2>
          <div className="w-20 h-1 bg-[#831238] mx-auto mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
          <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-xl">
            <Image
              src={deanImage ?? "/default-dean.png"}
              alt={`Dean ${deanName}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {deanName}
            </h3>
            <p className="text-[#831238] font-medium mb-6">
              Dean, {department}
            </p>
            <p className="text-gray-600 mb-4">{qual}</p>
            <blockquote className="text-gray-700 italic border-l-4 border-[#831238] pl-4 my-6">
              "{description}"
            </blockquote>
            <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <svg
                  className="w-5 h-5 text-[#831238]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeanInfo;
