export interface Recruiter {
  name: string
  logoUrl: string
}

export interface PlacementData {
  description: string
  duration: string
  eligibility: string
  averageSalary: string
  specializations: string[]
  careerOptions: string[]
  recruiters: Recruiter[]
  totalQuestions: number
}

export const QUESTION_BANK = {
  "School of Computing": [
    {
      question:
        "I like solving coding problems and understanding how software algorithms work.",
    },
    {
      question:
        "I enjoy providing technical support to users and training others on IT systems.",
    },
    {
      question:
        "I'm fascinated by how machines can learn and mimic human intelligence.",
    },
    {
      question:
        "I like analyzing large datasets to discover hidden patterns and insights.",
    },
    {
      question:
        "I aspire to develop my own software applications or start a tech company.",
    },
    {
      question:
        "I'm interested in conducting deep research in computer science and exploring new technologies.",
    },
  ],
  "School of Building and Environment": [
    {
      question:
        "I enjoy working with architectural models, drafting tools, and design software like AutoCAD.",
    },
    {
      question:
        "I am interested in researching historical building styles and how structural engineering principles apply to design.",
    },
    {
      question:
        "I am passionate about sketching building concepts and creating visually innovative and functional spaces.",
    },
    {
      question:
        "I enjoy collaborating with clients to understand their vision and working with construction teams to bring a design to life.",
    },
    {
      question:
        "I aspire to lead an architectural firm or manage large-scale urban development projects.",
    },
    {
      question:
        "I understand the importance of following building codes, zoning laws, and precise project specifications.",
    },
  ],
  "School of Pharmacy": [
    {
      question:
        "I'm interested in understanding how drugs work in the body and their therapeutic effects.",
    },
    {
      question:
        "I aspire to work in pharmaceutical companies or start my own pharmacy business.",
    },
    {
      question:
        "I'm fascinated by clinical research and understanding complex drug interactions.",
    },
    {
      question:
        "I want to serve my community by providing accessible pharmaceutical services.",
    },
    {
      question:
        "I want to work directly with patients as part of healthcare teams to optimize medication therapy.",
    },
    {
      question:
        "I aspire to own a community pharmacy or advance in pharmaceutical retail management.",
    },
  ],
  "School of Nursing": [
    {
      question:
        "I enjoy working with medical equipment and providing hands-on patient care.",
    },
    {
      question:
        "I like understanding disease processes and how different treatments affect patient outcomes.",
    },
    {
      question:
        "I find the holistic approach to patient care and creative problem-solving in nursing appealing.",
    },
    {
      question:
        "I'm passionate about caring for patients and supporting them through their health challenges.",
    },
    {
      question:
        "I aspire to advance to nursing leadership roles or specialize in advanced nursing practice.",
    },
    {
      question:
        "I appreciate following medical protocols and maintaining accurate patient care documentation.",
    },
  ],
  "School of Physiotherapy": [
    {
      question:
        "I enjoy working with therapeutic equipment and providing hands-on physical rehabilitation.",
    },
    {
      question:
        "I'm interested in understanding how the human body moves and recovers from injuries.",
    },
    {
      question:
        "I'm passionate about helping patients regain their mobility and improve their quality of life.",
    },
    {
      question:
        "I find developing creative exercise programs and treatment plans engaging.",
    },
    {
      question:
        "I aspire to specialize in sports physiotherapy or start my own rehabilitation clinic.",
    },
    {
      question:
        "I appreciate following treatment protocols and maintaining detailed patient progress records.",
    },
  ],
  "School of Dental Sciences": [
    {
      question:
        "I am comfortable working with dental tools, impression materials, and other hands-on equipment.",
    },
    {
      question:
        "I am fascinated by the anatomy of the head and neck and diagnosing oral diseases from X-rays and exams.",
    },
    {
      question:
        "I find satisfaction in the craftsmanship of restorative dental work, like creating perfectly shaped crowns or fillings.",
    },
    {
      question:
        "I feel motivated to help patients overcome their fear of dental procedures and educate them on proper oral hygiene.",
    },
    {
      question:
        "I aspire to own and manage my own private dental practice and lead a team of dental professionals.",
    },
    {
      question:
        "I appreciate the need to follow strict infection control protocols and maintain precise, detailed patient records.",
    },
  ],
  "School of Law": [
    { question: "I enjoy debating, arguing a point, and public speaking." },
    { question: "I have a strong interest in justice, rights, and ethics." },
    {
      question:
        "I am good at reading and interpreting complex texts and rules.",
    },
    { question: "I like to structure logical arguments to persuade others." },
    { question: "I am interested in how society is regulated by laws." },
    {
      question: "I pay close attention to detail and can spot inconsistencies.",
    },
  ],
  "School of Science & Humanities": [
    {
      question:
        "I feel passionate about creative writing, poetry, and expressing ideas through language.",
    },
    {
      question:
        "I'm fascinated by understanding the fundamental laws that govern the universe.",
    },
    {
      question:
        "I'm passionate about creating original clothing designs and expressing creativity through fashion.",
    },
    {
      question:
        "I feel fulfilled helping individuals and families overcome personal and social challenges.",
    },
    {
      question:
        "I'm passionate about creating visually compelling graphics, videos, and multimedia content.",
    },
    {
      question:
        "I'm fascinated by understanding human behavior and mental processes.",
    },
  ],
  "School of Management Studies": [
    {
      question:
        "I enjoy analyzing business case studies and developing strategic solutions to organizational challenges.",
    },
    {
      question:
        "I am interested in understanding market trends, consumer behavior, and financial principles.",
    },
    {
      question:
        "I am passionate about leading teams, motivating individuals, and fostering a collaborative work environment.",
    },
    {
      question:
        "I find developing innovative business models and marketing campaigns to be engaging.",
    },
    {
      question:
        "I aspire to manage a major corporation, start my own business, or become a consultant for top firms.",
    },
    {
      question:
        "I appreciate the importance of ethical decision-making, corporate governance, and data-driven management.",
    },
  ],
  "School of Allied Health Sciences": [
    {
      question:
        "I enjoy working with diagnostic equipment and assisting in various medical procedures.",
    },
    {
      question:
        "I am fascinated by human anatomy, physiology, and the diagnosis of diseases.",
    },
    {
      question:
        "I am passionate about providing compassionate support to patients and collaborating with healthcare professionals.",
    },
    {
      question:
        "I find satisfaction in conducting laboratory tests and ensuring the accuracy of medical results.",
    },
    {
      question:
        "I aspire to specialize in a specific area of allied health, such as medical imaging, therapy, or laboratory sciences.",
    },
    {
      question:
        "I understand the importance of following strict health and safety protocols and maintaining precise patient records.",
    },
  ],
  "School of Bio and Chemical Engineering": [
    {
      question:
        "I enjoy conducting laboratory experiments and working with bioreactors and chemical processing equipment.",
    },
    {
      question:
        "I am interested in molecular biology, chemical reactions, and how to scale these processes for industrial applications.",
    },
    {
      question:
        "I am passionate about developing sustainable solutions and innovative products in areas like pharmaceuticals, biofuels, or new materials.",
    },
    {
      question:
        "I find designing and optimizing bioprocesses and chemical production systems to be a creative challenge.",
    },
    {
      question:
        "I aspire to work in research and development for a biotechnology or chemical company or pursue advanced studies in the field.",
    },
    {
      question:
        "I appreciate the need for rigorous safety standards, process control, and detailed documentation in engineering.",
    },
  ],
  "School of Mechanical": [
    {
      question:
        "I enjoy working with machinery, using design software like CAD, and building mechanical prototypes.",
    },
    {
      question:
        "I am fascinated by thermodynamics, fluid mechanics, and the principles of motion and energy.",
    },
    {
      question:
        "I am passionate about designing and building machines that solve real-world problems.",
    },
    {
      question:
        "I find satisfaction in troubleshooting mechanical failures and improving the efficiency of existing systems.",
    },
    {
      question:
        "I aspire to lead engineering projects, work in the automotive or aerospace industry, or start my own engineering firm.",
    },
    {
      question:
        "I understand the importance of precision, material strength, and adhering to engineering codes and standards.",
    },
  ],
  "School of Electrical and Electronics": [
    {
      question:
        "I enjoy building circuits, working with microcontrollers, and using tools to test electronic devices.",
    },
    {
      question:
        "I am interested in understanding electromagnetism, circuit theory, and signal processing.",
    },
    {
      question:
        "I am passionate about designing innovative electronic gadgets and power systems.",
    },
    {
      question:
        "I find creating and debugging code for hardware applications to be an engaging challenge.",
    },
    {
      question:
        "I aspire to work in fields like telecommunications, renewable energy, or consumer electronics development.",
    },
    {
      question:
        "I appreciate the importance of following technical specifications, safety protocols, and maintaining accurate design schematics.",
    },
  ],
}

export const PLACEMENT_DATA: Record<string, PlacementData> = {
  "School of Computing": {
    description:
      "Build the future with a comprehensive engineering education, covering everything from software to hardware.",
    duration: "4 Years (B.E / B.Tech)",
    eligibility: "10+2 with Physics, Chemistry, Maths",
    averageSalary: "₹4.5-12 LPA",
    specializations: [
      "BE-CSE",
      "BE-CSE(AI)",
      "BE-CSE(DS)",
      "BE-CSE(IoT)",
      "BE-CSE(AI&Robotics)",
      "BE-CSE(AI&ML)",
      "BE-CSE(CyberSec)",
      "BE-CSBS",
      "BTech-IT",
      "BTech-AI&DS",
      "ME-CSE",
    ],

    careerOptions: [
      "Software Developer",
      "AI/ML Engineer",
      "Data Scientist",
      "Cybersecurity Analyst",
      "DevOps Engineer",
      "IoT Solutions Architect",
      "Full Stack Developer",
      "System Architect",
    ],

    recruiters: [
      { name: "Microsoft", logoUrl: "https://logo.clearbit.com/microsoft.com" },
      { name: "Google", logoUrl: "https://logo.clearbit.com/google.com" },
      { name: "Amazon", logoUrl: "https://logo.clearbit.com/amazon.com" },
      { name: "TCS", logoUrl: "https://logo.clearbit.com/tcs.com" },
      { name: "Infosys", logoUrl: "https://logo.clearbit.com/infosys.com" },
    ],
    totalQuestions: 6,
  },
  "School of Building and Environment": {
    description:
      "Design and shape the built environment through a blend of art, science, and technology in our comprehensive architecture program.",
    duration: "5 Years (B.Arch)",
    eligibility: "10+2 with PCM and NATA score",
    averageSalary: "₹4-8 LPA",
    specializations: [
      "B.E. - Civil Engineering",
      "B.Arch. - Bachelor of Architecture",
      "B.Des. - Bachelor of Design (Interior Design)",
      "M.Arch. - Sustainable Architecture",
      "M.Arch. - Building Management",
      "M.E. - Structural Engineering",
    ],
    careerOptions: [
      "Civil Engineer (B.E.)",
      "Architect (B.Arch.)",
      "Interior Designer (B.Des.)",
      "Structural Engineer (M.E.)",
      "Construction Manager",
      "Urban Planner",
      "Building Project Manager",
      "Sustainable Design Consultant",
    ],
    recruiters: [
      {
        name: "Hafeez Contractor",
        logoUrl: "https://logo.clearbit.com/hafeezcontractor.com",
      },
      {
        name: "C.P. Kukreja",
        logoUrl: "https://logo.clearbit.com/cpkukreja.com",
      },
      {
        name: "Morphogenesis",
        logoUrl: "https://logo.clearbit.com/morphogenesis.org",
      },
      { name: "DLF", logoUrl: "https://logo.clearbit.com/dlf.in" },
      {
        name: "Larsen & Toubro",
        logoUrl: "https://logo.clearbit.com/larsentoubro.com",
      },
    ],
    totalQuestions: 6,
  },
  "School of Pharmacy": {
    description:
      "Comprehensive education in pharmaceutical sciences, preparing students for various roles in the healthcare industry and research.",
    duration: "4 Years (B.Pharm) / 2 Years (M.Pharm)",
    eligibility: "10+2 with PCB/PCM for B.Pharm",
    averageSalary: "₹2.5-6 LPA",
    specializations: [
      "B.Pharm - Bachelor of Pharmacy (4 Years)",
      "D.Pharm - Diploma in Pharmacy (2 Years)",
      "Pharm.D - Doctor of Pharmacy (6 Years)",
      "M.Pharm - Pharmaceutics (2 Years)",
    ],
    careerOptions: [
      "Community Pharmacist",
      "Hospital Pharmacist",
      "Clinical Pharmacist",
      "Drug Inspector",
      "Pharmaceutical R&D Scientist",
      "Quality Control / Quality Assurance Officer",
      "Medical Representative (MR)",
      "Production Pharmacist (Pharmaceutical Industry)",
    ],
    recruiters: [
      { name: "Cipla", logoUrl: "https://logo.clearbit.com/cipla.com" },
      {
        name: "Sun Pharma",
        logoUrl: "https://logo.clearbit.com/sunpharma.com",
      },
      {
        name: "Dr. Reddy's",
        logoUrl: "https://logo.clearbit.com/drreddys.com",
      },
      {
        name: "Apollo Pharmacy",
        logoUrl: "https://logo.clearbit.com/apollopharmacy.in",
      },
      { name: "Novartis", logoUrl: "https://logo.clearbit.com/novartis.com" },
    ],
    totalQuestions: 6,
  },
  "School of Nursing": {
    description:
      "Develop the skills and compassion to provide high-quality patient care in a variety of healthcare settings.",
    duration: "4 Years (B.Sc. Nursing)",
    eligibility: "10+2 with PCB and English",
    averageSalary: "₹2.5-5 LPA",
    specializations: [
      "B.Sc. NURSING - Bachelor of Science in Nursing (4 Years)"
    ],
    careerOptions: [
      "Staff Nurse",
      "Critical Care (ICU) Nurse",
      "Pediatric Nurse",
      "Surgical (OT) Nurse",
      "Community Health Nurse",
      "Nurse Educator / Tutor",
      "Nurse Manager / Supervisor",
      "Home Health Nurse",
    ],
    recruiters: [
      {
        name: "Apollo Hospitals",
        logoUrl: "https://logo.clearbit.com/apollohospitals.com",
      },
      {
        name: "Fortis Healthcare",
        logoUrl: "https://logo.clearbit.com/fortishealthcare.com",
      },
      {
        name: "Max Healthcare",
        logoUrl: "https://logo.clearbit.com/maxhealthcare.in",
      },
      { name: "AIIMS", logoUrl: "https://logo.clearbit.com/aiims.edu" },
      {
        name: "Manipal Hospitals",
        logoUrl: "https://logo.clearbit.com/manipalhospitals.com",
      },
    ],
    totalQuestions: 6,
  },
  "School of Physiotherapy": {
    description:
      "Learn to restore movement and function in patients affected by injury, illness, or disability.",
    duration: "4.5 Years (BPT)",
    eligibility: "10+2 with PCB",
    averageSalary: "₹2-6 LPA",
    specializations: [
      "B.P.T - Bachelor of Physiotherapy (4.5 Years)"
    ],
    careerOptions: [
      "Orthopedic Physiotherapist",
      "Sports Physiotherapist",
      "Neurological Physiotherapist",
      "Cardio-respiratory Physiotherapist",
      "Pediatric Physiotherapist",
      "Geriatric Physiotherapist",
      "Private Practitioner",
      "Lecturer / Academician",
    ],
    recruiters: [
      {
        name: "Talwalkers",
        logoUrl: "https://logo.clearbit.com/talwalkers.net",
      },
      {
        name: "HelpAge India",
        logoUrl: "https://logo.clearbit.com/helpageindia.org",
      },
      {
        name: "Apollo Hospitals",
        logoUrl: "https://logo.clearbit.com/apollohospitals.com",
      },
      {
        name: "Fortis Healthcare",
        logoUrl: "https://logo.clearbit.com/fortishealthcare.com",
      },
    ],
    totalQuestions: 6,
  },
  "School of Dental Sciences": {
    description:
      "Gain expertise in oral health care, from diagnosis and treatment to prevention of dental diseases.",
    duration: "5 Years (BDS)",
    eligibility: "10+2 with PCB and NEET score",
    averageSalary: "₹3-7 LPA",
    specializations: [
      "B.D.S - Bachelor of Dental Surgery",
      "M.D.S - Paedodontics and Preventive Dentistry",
      "M.D.S - Conservative Dentistry and Endodontics",
      "M.D.S - Orthodontics and Dentofacial Orthopedics",
    ],
    careerOptions: [
      "Dental Surgeon (B.D.S)",
      "Pedodontist (M.D.S - Paedodontics and Preventive Dentistry)",
      "Endodontist (M.D.S - Conservative Dentistry and Endodontics)",
      "Orthodontist (M.D.S - Orthodontics and Dentofacial Orthopedics)",
      "Oral Health Consultant",
      "Dental Academician",
      "Clinical Researcher (Dentistry)",
      "Dental Public Health Specialist",
    ],
    recruiters: [
      {
        name: "Clove Dental",
        logoUrl: "https://logo.clearbit.com/clovedental.in",
      },
      {
        name: "Axiss Dental",
        logoUrl: "https://logo.clearbit.com/axissdental.com",
      },
      {
        name: "Private Clinics",
        logoUrl: "https://logo.clearbit.com/health.com",
      },
      {
        name: "Government Hospitals",
        logoUrl: "https://logo.clearbit.com/aiims.edu",
      },
    ],
    totalQuestions: 6,
  },
  "School of Law": {
    description:
      "Comprehensive legal education covering various aspects of law, jurisprudence, and legal practice.",
    duration: "5 Years (Integrated) / 3 Years (LLB)",
    eligibility: "10+2 for 5-year course / Graduation for 3-year course",
    averageSalary: "₹3-10 LPA",
    specializations: [
      "L.L.B. - Bachelor of Law (3 Years)",
      "B.Com. L.L.B. (Hons) (5 Years)",
      "B.A. L.L.B. (Hons) (5 Years)",
      "B.B.A. L.L.B. (Hons) (5 Years)",
      "L.L.M - Intellectual Property Laws",
      "L.L.M - Constitutional Law and Legal Order",
      "L.L.M - Criminal Law",
    ],
    careerOptions: [
      "Advocate / Litigator",
      "Corporate Lawyer (In-House Counsel)",
      "Law Firm Associate",
      "Public Prosecutor",
      "Intellectual Property (IP) Lawyer",
      "Judicial Services (Judge / Magistrate)",
      "Legal Advisor (Government / PSU)",
      "Arbitrator / Mediator",
    ],
    recruiters: [
      {
        name: "AZB & Partners",
        logoUrl: "https://logo.clearbit.com/azbpartners.com",
      },
      {
        name: "Khaitan & Co",
        logoUrl: "https://logo.clearbit.com/khaitanco.com",
      },
      { name: "Trilegal", logoUrl: "https://logo.clearbit.com/trilegal.com" },
      {
        name: "J Sagar Associates",
        logoUrl: "https://logo.clearbit.com/jsalaw.com",
      },
      {
        name: "Cyril Amarchand Mangaldas",
        logoUrl: "https://logo.clearbit.com/cyrilshroff.com",
      },
    ],
    totalQuestions: 6,
  },
  "School of Science & Humanities": {
    description:
      "Explore the depths of human creativity, society, and scientific inquiry with a diverse range of programs.",
    duration: "3 Years (BA / B.Sc)",
    eligibility: "10+2 in relevant stream",
    averageSalary: "₹2.5-7 LPA (Varies widely by field)",
    specializations: [
      "B.A. - English*",
      "B.S.W. - Bachelor of Social Work",
      "B.Sc. - Physics*",
      "B.Sc. - Chemistry*",
      "B.Sc. - Mathematics*",
      "B.Sc. - Computer Science",
      "B.Sc. - Computer Science with Specialization in AI",
      "B.Sc. - Visual Communication",
      "B.Sc. - Psychology",
      "B.Sc. - Fashion Design",
      "B.Sc. - Data Science",
      "B.Sc. - Information Technology",
      "B.Sc. - Biotechnology*",
      "B.Sc. - Microbiology",
      "B.Sc. - Biochemistry",
      "B.Sc. - Bioinformatics and Data Science",
      "B.Sc. - Forensic Sciences",
      "BCA - Bachelor of Computer Applications",
    ],
    careerOptions: [
      "Data Analyst (Entry-Level)",
      "Management Consultant (Analyst Role)",
      "Business Analyst",
      "Business Development & Sales",
      "Marketing Executive",
      "Project Coordinator / Associate Project Manager",
      "Content Writer / Technical Writer",
      "Human Resources (HR) / Recruiter",
    ],
    recruiters: [
      { name: "Deloitte", logoUrl: "https://logo.clearbit.com/deloitte.com" },
      { name: "Accenture", logoUrl: "https://logo.clearbit.com/accenture.com" },
      { name: "Myntra", logoUrl: "https://logo.clearbit.com/myntra.com" },
      {
        name: "The Times Group",
        logoUrl: "https://logo.clearbit.com/timesgroup.com",
      },
      { name: "NielsenIQ", logoUrl: "https://logo.clearbit.com/nielseniq.com" },
    ],
    totalQuestions: 6,
  },
  "School of Management Studies": {
    description:
      "Develop leadership skills and business acumen to excel in the corporate world with our dynamic management programs.",
    duration: "3 Years (BBA) / 2 Years (MBA)",
    eligibility: "10+2 for BBA / Graduation for MBA",
    averageSalary: "₹6-15 LPA",
    specializations: [
      "B.Com. - Bachelor of Commerce (General)",
      "B.Com. - Financial Accounting",
      "B.B.A. - Bachelor of Business Administration",
      "M.B.A. - Master of Business Administration",
      "M.Com. - Master of Commerce",
    ],
    careerOptions: [
      "Financial Analyst",
      "Accountant",
      "Management Consultant",
      "Marketing Manager",
      "Human Resources (HR) Manager",
      "Investment Banker",
      "Operations Manager",
      "Auditor",
    ],
    recruiters: [
      { name: "Deloitte", logoUrl: "https://logo.clearbit.com/deloitte.com" },
      { name: "KPMG", logoUrl: "https://logo.clearbit.com/kpmg.com" },
      { name: "Procter & Gamble", logoUrl: "https://logo.clearbit.com/pg.com" },
      { name: "HDFC Bank", logoUrl: "https://logo.clearbit.com/hdfcbank.com" },
      { name: "Amazon", logoUrl: "https://logo.clearbit.com/amazon.com" },
    ],
    totalQuestions: 6,
  },
  "School of Allied Health Sciences": {
    description:
      "Train in critical healthcare support roles, from diagnostics to therapeutic care, in a state-of-the-art learning environment.",
    duration: "3-4 Years (B.Sc.)",
    eligibility: "10+2 with PCB",
    averageSalary: "₹3-6 LPA",
    specializations: [
      "B.Sc. - Clinical Nutrition and Dietetics",
      "B.Sc. - Medical Lab Technology",
      "B.Sc. - Radiology",
    ],
    careerOptions: [
      "Clinical Nutritionist (B.Sc.)",
      "Dietician (B.Sc.)",
      "Medical Laboratory Technologist (B.Sc.)",
      "Radiology Technician (B.Sc.)",
      "Lab Supervisor (B.Sc.)",
      "Quality Control Analyst (B.Sc.)",
      "Healthcare Administrator (B.Sc.)",
      "Diagnostic Imaging Specialist (B.Sc.)",
    ],
    recruiters: [
      {
        name: "Dr. Lal PathLabs",
        logoUrl: "https://logo.clearbit.com/lalpathlabs.com",
      },
      { name: "Thyrocare", logoUrl: "https://logo.clearbit.com/thyrocare.com" },
      { name: "Lenskart", logoUrl: "https://logo.clearbit.com/lenskart.com" },
      {
        name: "Apollo Hospitals",
        logoUrl: "https://logo.clearbit.com/apollohospitals.com",
      },
      {
        name: "Fortis Healthcare",
        logoUrl: "https://logo.clearbit.com/fortishealthcare.com",
      },
    ],
    totalQuestions: 6,
  },
  "School of Bio and Chemical Engineering": {
    description:
      "Integrate principles of biology and chemistry with engineering to design innovative solutions in pharma, energy, and materials.",
    duration: "4 Years (B.Tech)",
    eligibility: "10+2 with PCM/B",
    averageSalary: "₹4-9 LPA",
    specializations: [
      "B.Tech. - Biomedical Engineering",
      "B.Tech. - Biotechnology",
      "B.Tech. - Chemical Engineering",
      "M.Tech. - Biotechnology",
      "M.Tech. - Medical Instrumentation",
      "Bioprocess Engineering",
      "Biomaterials",
      "Chemical Process Technology",
      "Environmental Engineering",
      "Food Technology",
    ],
    careerOptions: [
      "Bioprocess Engineer",
      "R&D Scientist",
      "Chemical Engineer (B.Tech.)",
      "Environmental Consultant",
      "Food Technologist",
      "Biomedical Engineer (B.Tech.)",
      "Biotech Product Developer (B.Tech./M.Tech.)",
      "Medical Instrumentation Specialist (M.Tech.)",
    ],
    recruiters: [
      { name: "Biocon", logoUrl: "https://logo.clearbit.com/biocon.com" },
      {
        name: "Reliance Industries",
        logoUrl: "https://logo.clearbit.com/ril.com",
      },
      { name: "BASF", logoUrl: "https://logo.clearbit.com/basf.com" },
      { name: "Nestle", logoUrl: "https://logo.clearbit.com/nestle.com" },
      {
        name: "Dr. Reddy's",
        logoUrl: "https://logo.clearbit.com/drreddys.com",
      },
    ],
    totalQuestions: 6,
  },
  "School of Mechanical": {
    description:
      "Master the design, analysis, and manufacturing of mechanical systems, from heavy machinery to advanced robotics.",
    duration: "4 Years (B.E / B.Tech)",
    eligibility: "10+2 with Physics, Chemistry, Maths",
    averageSalary: "₹4-10 LPA",
    specializations: ["BE-Aero", "BE-Mech", "BE-Mechatronics", "ME-CAD"],

    careerOptions: [
      "Design Engineer",
      "Aeronautical Engineer",
      "Mechanical Engineer",
      "CAD Specialist",
      "Mechatronics Engineer",
      "Manufacturing Engineer",
      "Maintenance Engineer",
      "Automation Engineer",
    ],

    recruiters: [
      {
        name: "Tata Motors",
        logoUrl: "https://logo.clearbit.com/tatamotors.com",
      },
      {
        name: "Mahindra & Mahindra",
        logoUrl: "https://logo.clearbit.com/mahindra.com",
      },
      {
        name: "Larsen & Toubro",
        logoUrl: "https://logo.clearbit.com/larsentoubro.com",
      },
      { name: "Siemens", logoUrl: "https://logo.clearbit.com/siemens.com" },
      {
        name: "Maruti Suzuki",
        logoUrl: "https://logo.clearbit.com/marutisuzuki.com",
      },
    ],
    totalQuestions: 6,
  },
  "School of Electrical and Electronics": {
    description:
      "Dive into the world of circuits, power systems, and electronics to power the future of technology and communication.",
    duration: "4 Years (B.E / B.Tech)",
    eligibility: "10+2 with Physics, Chemistry, Maths",
    averageSalary: "₹4-11 LPA",
    specializations: [
      "BE-EEE",
      "BE-ECE",
      "BE-ECE(DS)",
      "ME-AppliedElec",
      "ME-PowerElec",
      "ME-Embedded&IoT",
    ],

    careerOptions: [
      "Embedded Systems Engineer",
      "Power Electronics Engineer",
      "Electronics Design Engineer",
      "IoT Solutions Developer",
      "Control Systems Engineer",
      "Industrial Automation Engineer",
      "Communication Systems Engineer",
      "Data Science Engineer (ECE)",
    ],

    recruiters: [
      { name: "Intel", logoUrl: "https://logo.clearbit.com/intel.com" },
      { name: "Qualcomm", logoUrl: "https://logo.clearbit.com/qualcomm.com" },
      { name: "Bosch", logoUrl: "https://logo.clearbit.com/bosch.com" },
      { name: "NTPC Limited", logoUrl: "https://logo.clearbit.com/ntpc.co.in" },
      {
        name: "Schneider Electric",
        logoUrl: "https://logo.clearbit.com/se.com",
      },
    ],
    totalQuestions: 6,
  },
}
