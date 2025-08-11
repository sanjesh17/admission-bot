import React from "react";
import Image from "next/image";
import TopRecruiters from "../../../components/TopRecruiters";

type CourseCardProps = {
  program: string;
  image: string;
};

const CourseCard = ({ program, image }: CourseCardProps) => {
  return (
    <div className="group w-fit cursor-pointer">
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={program}
          height={300}
          width={300}
          className="transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <h1 className="text-xl font-inter font-semibold mt-4 text-[#831238] relative inline-block">
        {program}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#831238] transition-all duration-300 group-hover:w-full"></span>
      </h1>
    </div>
  );
};

const CoursePageTemplate = () => {
  const topRecruiters = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex px-24 pt-24 pb-8 gap-40">
        <h1 className="text-5xl font-serif italic text-[#831238]">
          School of Building and Environment
        </h1>
        <p className="text-gray-500">
          The School of Building and Environment at Sathyabama, with 25 years of
          experience, offers undergraduate programs in Architecture, Civil
          Engineering, and Design, along with postgraduate and doctoral studies.
          The school emphasizes experiential learning, critical thinking, and
          innovation, supported by regular industry interaction. It fosters
          creativity through workshops, tours, and seminars, while encouraging
          students and faculty to engage in community activities and design
          solutions that serve societal needs.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-24 py-2">
        <hr />
      </div>
      {/* Hero Image Section */}
      <div className="max-w-7xl mx-auto px-24 py-8">
        <div
          className="h-[400px] bg-fixed bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://www.sathyabama.ac.in/sites/default/files/inline-images/Data%20Science%20Lab.jpg')",
          }}
        ></div>
      </div>
      {/* Program Information Section */}
      <div className="px-24 py-8">
        <h1 className="font-serif italic text-5xl pb-4 text-[#831238]">
          About the Program
        </h1>
        <p className="text-gray-500">
          The School of Building & Environment offers programs in Architecture,
          Civil Engineering, Interior Design, and Fashion Design. It also
          provides postgraduate and doctoral programs in specialized areas of
          design and engineering. Learning is enriched through workshops, site
          visits, seminars, and symposiums. Graduates work with leading firms
          such as L&T Construction and Jones Lang LaSalle.
        </p>
        <br />
        <p className="text-gray-500">
          The school fosters innovation through industry collaborations and
          consultancy projects. Exchange programs provide global exposure for
          students and faculty members. Events like the UN-Habitat Urban
          Thinkers Campus address sustainable development goals. Practical
          training prepares graduates for impactful careers in the built
          environment.
        </p>
      </div>
      {/* Official Programs Section */}
      <div className="px-24 py-8">
        <h1 className="font-serif italic text-5xl pb-4 text-[#831238]">
          Official Programs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          <CourseCard
            program="Computer Science Engineering"
            image="https://wallpaperaccess.com/full/3441817.jpg"
          />
        </div>
      </div>
      {/* Dean Information Section */}
      <div className="px-24 py-8 bg-[#831238] text-white">
        <h1 className="font-serif italic text-5xl pb-4 text-white">
          About the Dean
        </h1>
        <div className="flex items-center gap-8">
          <Image
            src="https://www.sathyabama.ac.in/sites/default/files/styles/large/public/2020-09/WhatsApp%20Image%202020-09-30%20at%206.36.23%20PM.jpeg?itok=gio57z36"
            alt="Dean"
            width={200}
            height={200}
          ></Image>
          <div>
            <h2 className="text-2xl font-bold text-white">
              Dr. Devyani Gangopadhyay
            </h2>
            <p className="text-gray-300">B.Arch., M.Plan, B.Arch., Ph.D.,</p>
            <p className="text-gray-300">Dean, Building Environment</p>
            <p className="text-gray-300 mt-5">
              Dr. Devyani Gangopadhyay joined Sathyabama Institute of Science
              and Technology in January 2018. She completed her Doctoral
              Research from CEPT University, Ahmedabad. She is a gold medalist
              in her Post graduation degree in planning from Anna University,
              Chennai. Her experience includes 9 years of a rich industrial
              experience in reputed Architectural organizations in addition to
              academic experience of 14 years. Her research interests include
              Urban Planning, Urban Design, Energy Efficient Architecture and
              Vernacular Architecture.
            </p>
          </div>
        </div>
      </div>
      {/* Top Recruiters Section */}
      <div className="px-24 py-8">
        <h1 className="font-serif italic text-5xl pb-4 text-[#831238]">
          Top Recruiters
        </h1>
        <p className="text-gray-500 mb-8">
          The School of Computing has established strong industry connections,
          leading to a consistent placement record above 92%. The top recruiters
          include global giants like Amazon, Google, Microsoft, and Oracle, as
          well as leading Indian firms such as TCS, Infosys, and Wipro. These
          partnerships not only enhance the employability of our students but
          also ensure that our curriculum remains aligned with industry
          standards and technological advancements.
        </p>
        <TopRecruiters logos={topRecruiters} />
      </div>
    </div>
  );
};

export default CoursePageTemplate;
