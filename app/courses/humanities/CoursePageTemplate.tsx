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
    program: "B.B.A. - Bachelor of Business Administration",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "	B.Com. - Bachelor of Commerce",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.Sc. - Visual Communication",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.Sc. - Chemistry",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.Sc. - Computer Science",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.Sc. - Mathematics",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.Sc. - BioChemistry",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "	B.Sc. - Fashion Design",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.Sc. - BioTechnology",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.Sc. - MicroBiology",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.Sc. - Psychology",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.A. - English",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.Sc. - Bio Informatics and Data Science",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.Sc. - Clinical Nutrition and Dietetics ",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program:
      "B.Sc. - Computer Science specialization in  Artificial Intelligence",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.Sc. - Hotel Management and Catering",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "	B.Sc - Data Science",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "	B.Sc - Information Technology",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "	B.C.A - Bachelor of Computer Applications",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
]

const PGCourses = [
  {
    program: "M.A - English",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "M.Sc - Visual Communication",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "M.Sc - Physics",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "M.Sc - Mathematics",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "M.Sc - Chemistry",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "M.Sc - BioInformatics & Data Science",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "M.Sc - Computer Science",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "M.Sc - Medical Bio Technology and Clinical Research ",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "M.Com",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "MCA - Master of Computer Applications",
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
          School of Science & Humanities
        </h1>
        <p className="text-gray-500">
          The School of Science and Humanities, established in 1988, is
          dedicated to providing quality education in basic sciences and
          humanities for engineering, science, and arts students. Over time, its
          role has expanded significantly. It now offers undergraduate,
          postgraduate, and PhD programs in Physics, Chemistry, Mathematics,
          English, Psychology, and Visual Communication. The school actively
          promotes student research to meet societal and industrial needs and
          supports diverse study areas through institutional and industrial
          collaborations.
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
          The School of Science & Humanities was established in 1988 and is
          backed by a dedicated team of faculty committed to delivering
          high-quality education in foundational science and humanities
          disciplines, serving students across engineering, science, and arts
          streams.It brings together diverse departments such as Chemistry,
          Physics, Mathematics, English, Visual Communication, and Psychology,
          offering a broad academic umbrella under a unified school structure.
        </p>
        <br />
        <p className="text-gray-500">
          The school offers a wide spectrum of undergraduate and postgraduate
          programs—ranging from BA, BSc, MA, MSc to professional
          degrees—designed to cater to evolving academic and industry needs. It
          maintains an environment of interdisciplinary learning and research,
          enhancing the holistic development of students through modern
          curriculum and committed mentorship.
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
            src="https://www.sathyabama.ac.in/sites/default/files/styles/large/public/2022-09/Rekha.jpg?itok=lUVNTwNK"
            alt="Dean"
            width={200}
            height={200}
          ></Image>
          <div>
            <h2 className="text-2xl font-bold text-white">
              Dr.Rekha Chakravarthi
            </h2>
            <p className="text-gray-300">M.E.,Ph.D.,</p>
            <p className="text-gray-300">
              Dean, School of Science and humanities
            </p>
            <p className="text-gray-300 mt-5">
              Dr.Rekha Chakravarthi, Associate Professor & Dean, Science and
              humanities­, joined Sathyabama Institute of Science and Technology
              as Asst. Professor in the year 2001. She has completed her M.E. in
              Applied Electronics. She has completed her Ph.D in Development of
              Congestion Detection and Control Technique for Wireless Sensor
              Networks in the year 2014 in Sathyabama University. She has
              totally 21years of experience in Teaching and Research.
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
