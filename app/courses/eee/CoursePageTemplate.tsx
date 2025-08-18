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
    program: "B.E - ECE",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.E - ECE with specialization in Data Science",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.E - EEE",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
]

const PGCourses = [
  {
    program: "M.E - Applied Electronics",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "M.E - Power Electronics and Industrial Drives",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "M.E - Embedded Systems and IoT",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
]

const PhDCourses = [
  {
    program: "Ph.D in all disciplines of EEE",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
]

const CoursePageTemplate = () => {
  const topRecruiters = [
    "https://www.sathyabama.ac.in/sites/default/files/2022-06/7_0.png",
    "https://www.sathyabama.ac.in/sites/default/files/2022-06/24_0.png",
    "https://www.sathyabama.ac.in/sites/default/files/2022-06/22_0.png",
    "https://www.sathyabama.ac.in/sites/default/files/2022-06/18_0.png",
    "https://www.sathyabama.ac.in/sites/default/files/2022-06/15_0.png",
    "https://www.sathyabama.ac.in/sites/default/files/2022-06/11_0.png",
    "https://www.sathyabama.ac.in/sites/default/files/2022-06/6_0.png",
    "https://www.sathyabama.ac.in/sites/default/files/2022-06/4_0.png",
    "https://www.sathyabama.ac.in/sites/default/files/2022-06/10_0.png",
    "https://www.sathyabama.ac.in/sites/default/files/2022-06/13_0.png",
  ]
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex px-24 pt-24 pb-8 gap-40">
        <h1 className="text-5xl font-serif italic text-[#831238]">
          School of Electronics and Electrical Engineering
        </h1>
        <p className="text-gray-500">
          The School of Electrical and Electronics Engineering advances
          excellence through its departments of Electronics and Communication,
          Electrical and Electronics, and Electronics and Instrumentation
          Engineering. Focusing on holistic student development, it enhances
          multidisciplinary skills via hands-on training, workshops, and
          research in cutting-edge areas such as Artificial Intelligence,
          Machine Learning, Signal/Image Processing, VLSI Design, Power
          Electronics, Electric Vehicles, Embedded Systems, Wireless
          Communication, Wind Energy, Nanotechnology, and 5G Communications.
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
          The School of Electrical & Electronics integrates the Departments of
          ECE, EEE, and EIE, focusing on quality education, research, and
          innovation. It offers hands-on learning through modern labs,
          simulation tools, and multidisciplinary training. Key research areas
          include AI, Machine Learning, VLSI, Power Electronics, Embedded
          Systems, and Wireless Communications. Notably, the school contributed
          to the design and launch of “SathyabamaSat” in collaboration with
          ISRO.
        </p>
        <br />
        <p className="text-gray-500">
          The school has secured around 30 sponsored projects from agencies like
          ISRO, DST, DRDO, and BRNS. It boasts a 95% annual placement rate in
          companies such as Samsung, Amazon, Bosch, and Infosys. Students and
          faculty actively contribute to patents, publications, and product
          development. Its infrastructure and expert mentorship prepare
          graduates for global industry and research roles.
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
            src="https://www.sathyabama.ac.in/sites/default/files/styles/large/public/2020-09/WhatsApp%20Image%202020-09-30%20at%204.27.42%20PM.jpeg?itok=2jIt6MJR"
            alt="Dean"
            width={200}
            height={200}
          ></Image>
          <div>
            <h2 className="text-2xl font-bold text-white">Dr.N.M.Nandhitha</h2>
            <p className="text-gray-300">M.E., Ph.D</p>
            <p className="text-gray-300">Dean, School of Electronics</p>
            <p className="text-gray-300 mt-5">
              Dr.N.M.Nandhitha, Professor & Dean, School of Electrical and
              Electronics, joined Sathyabama Institute of Science and Technology
              as Asst. Professor in June 2002. She has completed her Masters in
              Power Electronics and Industrial Drives with a Gold Medal. She has
              completed her doctoral research in Thermal Image Processing and
              Soft Computing Techniques in 2011. She has successfully completed
              research projects sponsored from DST, TNSCST, BRNS and BRFST. She
              is life member in Institution of Engineers, India.
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
