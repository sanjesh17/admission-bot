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
          School of Law
        </h1>
        <p className="text-gray-500">
          Sathyabama School of Law is evolving to meet societal needs by
          integrating community spirit into its curriculum. Since its inception,
          it has focused on strong legal education and interdisciplinary
          approaches, emphasizing practical skills for real-world practice. The
          school invests in students' intellectual and personal growth through
          dynamic leadership programs, events, and initiatives that foster
          leadership qualities. Known for its discipline, exposure, and
          dedicated faculty, the School of Law prepares students to become
          engaged leaders both on campus and beyond.
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
          The School of Law, established in 2018, offers integrated five-year BA
          LLB, BBA LLB, B.Com LLB, and a three-year LLB program approved by the
          Bar Council of India. It focuses on quality legal education with a
          blend of theory, research, and practical training. Students gain
          hands-on exposure through moot courts, internships, legal aid clinics,
          and seminars. Active centres like Centre Lex Environer and the Moot
          Court Society enhance specialized skills.
        </p>
        <br />
        <p className="text-gray-500">
          The school hosts vibrant clubs such as the Debate Club, ADR Society,
          IPR Cell, and Legal Aid Committee. It organizes events including moot
          court competitions, workshops, and awareness programs. Placement
          support and internships connect students with leading law firms and
          organizations. Its infrastructure and dynamic environment prepare
          graduates for diverse legal careers.
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
            src="https://www.sathyabama.ac.in/sites/default/files/styles/large/public/2020-10/WhatsApp%20Image%202020-09-30%20at%207.42.53%20PM.jpeg?itok=WeLRpoiP"
            alt="Dean"
            width={200}
            height={200}
          ></Image>
          <div>
            <h2 className="text-2xl font-bold text-white">Dr. Dilshad Shaik</h2>
            <p className="text-gray-300">M.L., Ph.D</p>
            <p className="text-gray-300">Dean, School of Law</p>
            <p className="text-gray-300 mt-5">
              Dr.Dilshad Shaik joined Sathyabama Institute of Science and
              Technology(Deemed to be university) as Founder Dean for School of
              Law in 2018. She is a Gold Medalist in M.L from Sri Venkateswara
              University. She has completed her Ph.D in Cyber Laws from Sri
              Padmavathi Mahila Visvavidyalayam, Tirupati, A.P. She has
              organized many Moot Court Competitions, National and International
              Conferences, Seminars, Wrokshops, Symposiums and Faculty
              Development Programs. She is editorial board member for many
              Journals and life member in many professional bodies.
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
