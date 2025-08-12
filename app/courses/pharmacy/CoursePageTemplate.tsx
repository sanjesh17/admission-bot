import React from "react"
import Image from "next/image"
import TopRecruiters from "../../../components/TopRecruiters"

type CourseCardProps = {
  program: string
  image: string
}

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
  )
}
const Courses = [
  {
    program: "B.Pharm. - Pharmacy",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "	D.Pharm. - Pharmacy",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "Pharm.D - Doctor of Pharmacy",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
]

const PGCourses = [
  {
    program: "M.Pharm with Specialization in Pharmaceutics",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
]
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
  ]
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex px-24 pt-24 pb-8 gap-40">
        <h1 className="text-5xl font-serif italic text-[#831238]">
          School of Pharmacy
        </h1>
        <p className="text-gray-500">
          The School of Pharmacy is been approved by the Pharmacy Council of
          India, All India Council of Technical Education and University Grants
          Commission. The school started its first batch in the academic year of
          2019-20. The school has 6 modern classrooms, 13 modular laboratories
          with sophisticated instruments. The school is attached to the general
          hospital which is situated in the campus of Sathyabama Institute of
          Science and Technology. Pharmacy School has well-qualified,
          foreign-trained skilful professional teaching professors with a
          doctorate or post-graduation degrees. School of Pharmacy motivates and
          encourages the faculty members to actively participate in research
          activities.
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
          The School of Pharmacy, established in 2019-20, is approved by PCI,
          AICTE, and UGC. It offers B.Pharm, D.Pharm, Pharm.D, and M.Pharm
          (Pharmaceutics) programs. Modern infrastructure includes six
          classrooms, thirteen laboratories, and advanced instruments. An
          attached general hospital provides practical training in dispensing
          and drug management.
        </p>
        <br />
        <p className="text-gray-500">
          The curriculum combines innovative teaching with hands-on learning
          experiences. Industry links, such as with ICON Life Sciences, enhance
          career readiness. Workshops, conferences, and events like World
          Pharmacist Day enrich student exposure. Faculty-led research spans
          pharmacology, pharmaceutical chemistry, and pharmacy practice.
        </p>
      </div>
      {/* Official Programs Section */}
      <div className="px-24 py-8">
        <h1 className="font-serif italic text-5xl pb-4 text-[#831238]">
          Programmes Offered
        </h1>
        <h1 className="font-serif italic text-3xl pb-4 text-[#831238] underline">
          UG Programmes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {Courses.map((course, index) => (
            <CourseCard
              key={index}
              program={course.program}
              image={course.image}
            />
          ))}
        </div>
        <h1 className="font-serif italic text-3xl pb-4 text-[#831238] underline">
          PG And Ph.D Programmes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {PGCourses.map((course, index) => (
            <CourseCard
              key={index}
              program={course.program}
              image={course.image}
            />
          ))}
        </div>
      </div>
      {/* Dean Information Section */}
      <div className="px-24 py-8 bg-[#831238] text-white">
        <h1 className="font-serif italic text-5xl pb-4 text-white">
          About the Dean
        </h1>
        <div className="flex items-center gap-8">
          <Image
            src="https://www.sathyabama.ac.in/sites/default/files/styles/large/public/2020-09/Dr.PANDIYAN.JPG?itok=RZuw7n4o"
            alt="Dean"
            width={200}
            height={200}
          ></Image>
          <div>
            <h2 className="text-2xl font-bold text-white">
              Dr.P.Shanmugapandiyan
            </h2>
            <p className="text-gray-300">M.Pharm., Ph.D</p>
            <p className="text-gray-300">Dean, School of Pharmacy</p>
            <p className="text-gray-300 mt-5">
              Dr.P.Shanmugapandiyan joined Sathyabama Institute of Science and
              Technology as Professor and Dean in 2018. He got his graduation,
              post-graduation and doctorate degree from The Tamilnadu Dr.MGR
              Medical University, Chennai. His research interests are to
              synthesis biologically active compounds and Phytochemical works.
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
  )
}

export default CoursePageTemplate
