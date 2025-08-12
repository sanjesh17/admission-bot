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
    program: "B.P.T. Physiotherapy",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.E CSE with AI",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.E CSE with DS",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.E CSE with IoT",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.E CSE with Cyber Security",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.E CSE with AI and ML",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.E CSE with AI and Robotics",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.E CSE with Block Chain Technology",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.E CSE and Business Systems",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.Tech AI and DS",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "B.Tech Information Technology",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
]

const PGCourses = [
  {
    program: "M.E Computer Science and Engineering",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "M.Sc Computer Science",
    image: "https://wallpaperaccess.com/full/3441817.jpg",
  },
  {
    program: "Ph.D Computer Science and Engineering",
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
          School of Physiotherapy
        </h1>
        <p className="text-gray-500">
          Sathyabama College of Physiotherapy, established in 2022, offers a
          four-and-a-half-year undergraduate program aimed at training skilled
          physiotherapists with strong scientific knowledge and a commitment to
          service. Affiliated with a general hospital on campus, the school
          features qualified faculty with advanced degrees and actively promotes
          research involvement among both staff and students.
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
          The School of Physiotherapy offers a 4-year full-time Bachelor of
          Physiotherapy (BPT) program. Eligibility requires 10+2 with Physics,
          Chemistry, and Biology with at least 50% marks. An on-campus general
          hospital houses a dedicated physiotherapy department for training.
          Facilities include radiology, diagnostic labs, and emergency care for
          clinical exposure.
        </p>
        <br />
        <p className="text-gray-500">
          The program prioritizes hands-on learning through extensive
          hospital-based practice. Qualified faculty mentor students in core
          physiotherapy skills and evidence-based care. Internships help refine
          clinical expertise in real healthcare environments. Graduates are
          prepared for impactful careers in rehabilitation and patient care.
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
            src="https://www.sathyabama.ac.in/sites/default/files/styles/large/public/2022-09/WhatsApp%20Image%202022-09-21%20at%203.51.17%20PM.jpeg?itok=_9KY5GWB"
            alt="Dean"
            width={200}
            height={200}
          ></Image>
          <div>
            <h2 className="text-2xl font-bold text-white">Dr.Bharathi B</h2>
            <p className="text-gray-300">M.E.,Ph.D.,</p>
            <p className="text-gray-300">Dean, School of Physiotherapy</p>
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
  )
}

export default CoursePageTemplate
