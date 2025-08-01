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
          School of Bio and Chemical Engineering
        </h1>
        <p className="text-gray-500">
          The School of Computing at Sathyabama Institute of Science and
          Technology boasts strong industry tie-ups and a consistent placement
          record above 92%, with offers up to ₹41 LPA. Students have contributed
          to projects like the Sathyabama SAT and secured global opportunities
          through international programs. The school actively supports
          innovation, research, and skill development through clubs and
          sponsored projects.
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
          The School of Computing at Sathyabama Institute of Science and
          Technology comprises the Departments of Computer Science and
          Engineering and Information Technology, offering diverse academic
          programs from undergraduate to doctoral levels. With NBA accreditation
          and specializations in cutting-edge technologies, the school is
          committed to academic excellence and industry relevance. Strategic
          MoUs with top companies like IBM, Oracle, Capgemini, and others enable
          students to gain hands-on experience and stay aligned with industry
          demands.
        </p>
        <br />
        <p className="text-gray-500">
          The school consistently records over 92% placement rates, with top
          salary packages reaching ₹ 41 LPA. Students are guided from their
          first year and encouraged to participate in innovation, research, and
          development activities resulting in 30 patents, 4 copyrights, and ₹2
          crore worth of sponsored projects. Notable achievements include
          contributing to the Sathyabama SAT and representing the institution at
          global platforms such as NASA, Google, and IBM. International
          internships and exchange programs further enhance students global
          exposure and career readiness.
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
            src="https://www.sathyabama.ac.in/sites/default/files/styles/large/public/2022-09/Anima%20Nanda.jpeg?itok=RC3CinXA"
            alt="Dean"
            width={200}
            height={200}
          ></Image>
          <div>
            <h2 className="text-2xl font-bold text-white">Dr. Anima Nanda </h2>
            <p className="text-gray-300">M.Sc.,Ph.D.,</p>
            <p className="text-gray-300">
              Dean, School of Bio and Chemical Engineering
            </p>
            <p className="text-gray-300 mt-5">
              Dr. Anima Nanda is the Dean – IQAC at Sathyabama Institute of
              Science and Technology, Chennai, and has led four departments
              under the School of Bio & Chemical Engineering. With expertise in
              nanotechnology’s role in combating drug-resistant pathogens, she
              has secured over ₹2.26 crore in government-funded research,
              published 187+ papers, guided 12 Ph.D. scholars, and holds a
              patent for a stair-climbing wheelchair. She is a fellow of
              multiple scientific societies, a reviewer for top journals, and an
              assessor for NAAC and NABL.
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
