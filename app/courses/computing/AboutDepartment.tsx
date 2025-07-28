import React from "react";

const AboutDepartment = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About the Department
          </h2>
          <div className="w-20 h-1 bg-[#831238] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-8">
            Established in 1987, the School of Computing has been at the
            forefront of computer science education and research in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Vision</h3>
            <p className="text-gray-600">
              To be a globally recognized center of excellence in computing
              education, research, and innovation.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Mission
            </h3>
            <p className="text-gray-600">
              To nurture tech leaders through cutting-edge curriculum, industry
              collaboration, and research opportunities.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Highlights
            </h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>100% Placement Record</li>
              <li>IEEE Accredited Labs</li>
              <li>Industry Partnership Programs</li>
              <li>Research Publications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDepartment;
