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
          School of Mechanical Engineering
        </h1>
        <p className="text-gray-500">
          The School of Mechanical Engineering at Sathyabama, celebrating 30
          years of achievements, comprises four core departments: Mechanical,
          Mechatronics, Aeronautical, and Automobile Engineering. Equipped with
          advanced laboratories and research facilities, the school supports
          outstanding research and aims to provide high-quality education
          aligned with industry needs. It strives to establish research centers
          and collaborate with national and international institutions. The
          school values the contributions of its qualified faculty and students
          and is committed to creating a supportive environment for the overall
          development of students in both curricular and co-curricular
          activities to serve society.
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
          The School of Mechanical Engineering offers programs in Mechanical,
          Mechatronics, Automobile, and Aeronautical Engineering, along with
          CAD-focused M.E. and Ph.D. research. It emphasizes practical learning
          through advanced laboratories, design tools, and real-world projects.
          Active student clubs and competitions like SAE BAJA and Supra foster
          innovation and teamwork. Strong industry links with TVS and ARAI
          enhance training and career readiness.
        </p>
        <br />
        <p className="text-gray-500">
          Specialized labs cover fuels, automotive systems, engine testing, and
          manufacturing technologies. Students gain exposure through industrial
          visits, guest lectures, and technical workshops. Faculty and students
          engage in funded research, patents, and scholarly publications. The
          school's infrastructure and industry partnerships prepare graduates
          for global opportunities.
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
            src="https://media.licdn.com/dms/image/v2/D5603AQGOd1MHcf2mqQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728098426355?e=1756944000&v=beta&t=4dbVzpriJgHYKU7OwIYNw4VsTPYzV0eZW_GQYfz_CAM"
            alt="Dean"
            width={200}
            height={200}
          ></Image>
          <div>
            <h2 className="text-2xl font-bold text-white">
              Dr. Prakash Subramaniam
            </h2>
            <p className="text-gray-300">
              M.E. (CAD), Ph.D. (Mechanical Engineering)
            </p>
            <p className="text-gray-300">
              Dean, School of Mechanical Engineering
            </p>
            <p className="text-gray-300 mt-5">
              A visionary academic leader with over 30 years of experience in
              engineering education, research, and administration. Expertise
              spans accreditation (NAAC A++, NBA, ABET), strategic planning, and
              industry collaboration. As Dean and Program Coordinator, led
              institutional initiatives securing top accreditations. With 100+
              publications, 27 patents, and ₹3 crore in funded projects (AICTE,
              DST), contributed to innovations like Digital Twin Technology.
              Actively mentored Ph.D. scholars, enabled technology transfers,
              and partnered with industries to drive curriculum modernization
              and professional upskilling.
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
