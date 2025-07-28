import React from "react";
import Image from "next/image";
import TopRecruiters from "./TopRecruiters";

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
          School of Computing
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
          salary packages reaching ₹41 LPA. Students are guided from their first
          year and encouraged to participate in innovation, research, and
          development activities resulting in 30 patents, 4 copyrights, and ₹2
          crore worth of sponsored projects. Notable achievements include
          contributing to the Sathyabama SAT and representing the institution at
          global platforms such as NASA, Google, and IBM. International
          internships and exchange programs further enhance students' global
          exposure and career readiness.
        </p>
      </div>
      {/* Official Programs Section */}
      <div className="px-24 py-8">
        <h1 className="font-serif italic text-5xl pb-4 text-[#831238]">
          Official Programs
        </h1>
        <div className="border border-gray-300 w-fit">
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F5%2Ff%2F0%2F11925.jpg&f=1&nofb=1&ipt=694d1a50f9fbe91c2bd6e9d0cd9ac791d24eaebabf6a3df00583848e24a360ef"
            alt="computing"
            width={300}
            height={300}
          ></Image>
          <h1 className="text-base font-bold font-inter py-4 pl-2">
            Computer Science and Engineering
          </h1>
        </div>
      </div>
      {/* Dean Information Section */}
      <div className="px-24 py-8 bg-[#831238] text-white">
        <h1 className="font-serif italic text-5xl pb-4 text-white">
          About the Dean
        </h1>
        <div className="flex items-center gap-8">
          <Image
            src="https://www.sathyabama.ac.in/sites/default/files/styles/large/public/2020-10/L.LAKSHMANAN.JPG?itok=-YbJRGDs"
            alt="Dean"
            width={200}
            height={200}
          ></Image>
          <div>
            <h2 className="text-2xl font-bold text-white">Dr. L. Lakshmanan</h2>
            <p className="text-gray-300">M.E., Ph.D</p>
            <p className="text-gray-300">Dean, School of Computing</p>
            <p className="text-gray-300 mt-5">
              Dr. L. Lakshmanan is a distinguished academic leader with over 25
              years of experience in computer science education and research.
              His expertise spans artificial intelligence, data science, and
              software engineering, and he has been instrumental in shaping the
              curriculum and research initiatives at the School of Computing.
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
