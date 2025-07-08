import Image from "next/image";
import { ArrowRight, GraduationCap, BookOpen } from "lucide-react";
import AdmissionImage from "../public/images/admission.jpg";
export default function AdmissionsSection() {
  return (
    <div className="bg-red-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="w-full h-[500px] rounded-3xl overflow-hidden border border-red-200 shadow-md">
              <Image
                src={AdmissionImage}
                alt="Sathyabama Institute Campus and Students"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/80 p-2 rounded-full shadow">
                <GraduationCap className="w-5 h-5 text-red-700" />
              </div>
              <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-full shadow">
                <BookOpen className="w-5 h-5 text-red-700" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-red-800 bg-white border border-red-100 rounded-full px-4 py-2 w-fit shadow-sm">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Sathyabama Institute of Science and Technology
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Admissions
              </h1>
              <div className="w-20 h-1 bg-[#C10B4E] rounded"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-red-100 shadow-sm">
                <div className="text-2xl font-bold text-red-800">100+</div>
                <div className="text-sm text-gray-600">Programs</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-red-100 shadow-sm">
                <div className="text-2xl font-bold text-red-800">50k+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed bg-white rounded-lg p-4 border border-red-100">
              Sathyabama Institute of Science and Technology offers programs in{" "}
              <span className="font-semibold text-red-800">Engineering</span>,{" "}
              <span className="font-semibold text-red-800">Science</span>,{" "}
              <span className="font-semibold text-red-800">Management</span>,
              and <span className="font-semibold text-red-800">Research</span>,
              with state-of-the-art facilities and industry collaboration.
            </p>

            {/* Program Buttons */}
            <div className="flex flex-wrap gap-4">
              {["Undergraduate", "Postgraduate", "Research"].map((label) => (
                <button
                  key={label}
                  className="flex items-center space-x-3 bg-white border border-red-200 px-6 py-3 rounded-xl hover:bg-[#C10B4E] hover:text-white transition-all duration-200 shadow-sm"
                >
                  <div className="w-9 h-9 bg-red-100 rounded-full flex items-center justify-center text-red-700 group-hover:text-white">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>

            {/* CTA Box */}
            <div className="bg-[#C10B4E] text-white rounded-xl p-6 shadow">
              <p className="text-sm leading-relaxed">
                Join thousands of students who have chosen Sathyabama for their
                academic journey. Experience quality education and advanced
                research opportunities.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-[#C10B4E] hover:bg-[#C10B4E]/90 text-white px-8 py-4 rounded-xl font-medium flex items-center space-x-3 transition-all duration-300 shadow-md hover:shadow-lg">
                <span className="text-base">Explore Admissions</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
