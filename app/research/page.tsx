"use client";
import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
// Added Gavel, Pill, HardHat, and new icons for dynamic display
import {
  CheckCircle,
  Clock,
  BookOpen,
  Award,
  ArrowRight,
  RotateCcw,
  TrendingUp,
  Star,
  Target,
  GraduationCap,
  Trophy,
  Gavel,
  Pill,
  HardHat,
  Home,
  HeartPulse,
  PersonStanding,
  Stethoscope,
  Palette,
} from "lucide-react";

// --- INTERFACES ---

interface Recruiter {
  name: string;
  logoUrl: string;
}

interface PlacementData {
  description: string;
  duration: string;
  eligibility: string;
  averageSalary: string;
  specializations: string[];
  careerOptions: string[];
  recruiters: Recruiter[];
  totalQuestions: number;
}

interface Question {
  id: number;
  question: string;
  category: string;
}

interface QuizResult {
  category: string;
  averageScore: number;
  total: number;
  placementInfo: PlacementData;
}

// --- CONSTANTS ---


const QUESTION_BANK = {
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
};


const PLACEMENT_DATA: Record<string, PlacementData> = {
  "School of Computing": {
    description:
      "Build the future with a comprehensive engineering education, covering everything from software to hardware.",
    duration: "4 Years (B.E / B.Tech)",
    eligibility: "10+2 with Physics, Chemistry, Maths",
    averageSalary: "₹4.5-12 LPA",
    specializations: [
      "Computer Science",
      "AI & Data Science",
      "Cybersecurity",
      "Cloud Computing",
    ],
    careerOptions: [
      "Software Developer",
      "System Architect",
      "Data Scientist",
      "DevOps Engineer",
      "AI/ML Engineer",
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
      "Urban Design",
      "Landscape Architecture",
      "Sustainable Architecture",
      "Interior Design",
    ],
    careerOptions: [
      "Architect",
      "Urban Planner",
      "Interior Designer",
      "Project Manager",
      "Design Consultant",
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
      "Pharmaceutics",
      "Pharmacology",
      "Pharmaceutical Chemistry",
      "Clinical Pharmacy",
    ],
    careerOptions: [
      "Community Pharmacist",
      "Hospital Pharmacist",
      "Drug Inspector",
      "Medical Writer",
      "Research Scientist",
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
      "Medical-Surgical",
      "Pediatric Nursing",
      "Psychiatric Nursing",
      "Community Health",
    ],
    careerOptions: [
      "Staff Nurse",
      "Nurse Educator",
      "Clinical Nurse Specialist",
      "Nursing Administrator",
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
      "Orthopedic",
      "Neurological",
      "Cardiopulmonary",
      "Sports Physiotherapy",
    ],
    careerOptions: [
      "Physiotherapist",
      "Rehabilitation Specialist",
      "Sports Physio",
      "Ergonomics Consultant",
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
      { name: "Fortis Healthcare", logoUrl: "https://logo.clearbit.com/fortishealthcare.com" },
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
      "Orthodontics",
      "Endodontics",
      "Prosthodontics",
      "Oral Surgery",
    ],
    careerOptions: [
      "Dentist",
      "Orthodontist",
      "Dental Surgeon",
      "Public Health Specialist",
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
      "Corporate Law",
      "Criminal Law",
      "Constitutional Law",
      "Intellectual Property",
      "Cyber Law",
    ],
    careerOptions: [
      "Advocate",
      "Legal Advisor",
      "Judge",
      "Legal Consultant",
      "Corporate Lawyer",
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
      { name: "Cyril Amarchand Mangaldas", logoUrl: "https://logo.clearbit.com/cyrilshroff.com" },
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
      "English Literature",
      "Psychology",
      "Economics",
      "Physics",
      "Visual Communication",
      "Fashion Design",
    ],
    careerOptions: [
      "Content Writer",
      "Journalist",
      "Researcher",
      "Analyst",
      "Designer",
      "Psychologist",
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
    description: "Develop leadership skills and business acumen to excel in the corporate world with our dynamic management programs.",
    duration: "3 Years (BBA) / 2 Years (MBA)",
    eligibility: "10+2 for BBA / Graduation for MBA",
    averageSalary: "₹6-15 LPA",
    specializations: ["Marketing", "Finance", "Human Resources", "Operations", "Business Analytics"],
    careerOptions: ["Management Consultant", "Brand Manager", "Financial Analyst", "HR Manager", "Supply Chain Manager"],
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
    description: "Train in critical healthcare support roles, from diagnostics to therapeutic care, in a state-of-the-art learning environment.",
    duration: "3-4 Years (B.Sc.)",
    eligibility: "10+2 with PCB",
    averageSalary: "₹3-6 LPA",
    specializations: ["Medical Lab Technology", "Radiography & Imaging", "Optometry", "Anesthesia Technology", "Cardiac Care"],
    careerOptions: ["Lab Technologist", "Radiographer", "Optometrist", "Physician Assistant", "Cardiac Care Technician"],
    recruiters: [
        { name: "Dr. Lal PathLabs", logoUrl: "https://logo.clearbit.com/lalpathlabs.com" },
        { name: "Thyrocare", logoUrl: "https://logo.clearbit.com/thyrocare.com" },
        { name: "Lenskart", logoUrl: "https://logo.clearbit.com/lenskart.com" },
        { name: "Apollo Hospitals", logoUrl: "https://logo.clearbit.com/apollohospitals.com" },
        { name: "Fortis Healthcare", logoUrl: "https://logo.clearbit.com/fortishealthcare.com" },
    ],
    totalQuestions: 6,
  },
  "School of Bio and Chemical Engineering": {
    description: "Integrate principles of biology and chemistry with engineering to design innovative solutions in pharma, energy, and materials.",
    duration: "4 Years (B.Tech)",
    eligibility: "10+2 with PCM/B",
    averageSalary: "₹4-9 LPA",
    specializations: ["Bioprocess Engineering", "Biomaterials", "Chemical Process Technology", "Environmental Engineering", "Food Technology"],
    careerOptions: ["Bioprocess Engineer", "R&D Scientist", "Chemical Engineer", "Environmental Consultant", "Food Technologist"],
    recruiters: [
        { name: "Biocon", logoUrl: "https://logo.clearbit.com/biocon.com" },
        { name: "Reliance Industries", logoUrl: "https://logo.clearbit.com/ril.com" },
        { name: "BASF", logoUrl: "https://logo.clearbit.com/basf.com" },
        { name: "Nestle", logoUrl: "https://logo.clearbit.com/nestle.com" },
        { name: "Dr. Reddy's", logoUrl: "https://logo.clearbit.com/drreddys.com" },
    ],
    totalQuestions: 6,
  },
  "School of Mechanical": {
    description: "Master the design, analysis, and manufacturing of mechanical systems, from heavy machinery to advanced robotics.",
    duration: "4 Years (B.E / B.Tech)",
    eligibility: "10+2 with Physics, Chemistry, Maths",
    averageSalary: "₹4-10 LPA",
    specializations: ["Automobile Engineering", "Robotics & Automation", "Thermodynamics", "Industrial Production", "Mechatronics"],
    careerOptions: ["Mechanical Engineer", "Automotive Engineer", "Design Engineer", "Production Manager", "Robotics Engineer"],
    recruiters: [
        { name: "Tata Motors", logoUrl: "https://logo.clearbit.com/tatamotors.com" },
        { name: "Mahindra & Mahindra", logoUrl: "https://logo.clearbit.com/mahindra.com" },
        { name: "Larsen & Toubro", logoUrl: "https://logo.clearbit.com/larsentoubro.com" },
        { name: "Siemens", logoUrl: "https://logo.clearbit.com/siemens.com" },
        { name: "Maruti Suzuki", logoUrl: "https://logo.clearbit.com/marutisuzuki.com" },
    ],
    totalQuestions: 6,
  },
  "School of Electrical and Electronics": {
    description: "Dive into the world of circuits, power systems, and electronics to power the future of technology and communication.",
    duration: "4 Years (B.E / B.Tech)",
    eligibility: "10+2 with Physics, Chemistry, Maths",
    averageSalary: "₹4-11 LPA",
    specializations: ["Power Systems", "VLSI Design", "Embedded Systems", "Telecommunications", "Signal Processing"],
    careerOptions: ["Electrical Engineer", "Electronics Engineer", "Control Systems Engineer", "Telecom Engineer", "Hardware Engineer"],
    recruiters: [
        { name: "Intel", logoUrl: "https://logo.clearbit.com/intel.com" },
        { name: "Qualcomm", logoUrl: "https://logo.clearbit.com/qualcomm.com" },
        { name: "Bosch", logoUrl: "https://logo.clearbit.com/bosch.com" },
        { name: "NTPC Limited", logoUrl: "https://logo.clearbit.com/ntpc.co.in" },
        { name: "Schneider Electric", logoUrl: "https://logo.clearbit.com/se.com" },
    ],
    totalQuestions: 6,
  },
};

const LIKERT_OPTIONS = [
  { value: "1", label: "Strongly Disagree", emoji: "😞", color: "bg-red-400" },
  { value: "2", label: "Disagree", emoji: "😐", color: "bg-orange-400" },
  { value: "3", label: "Neutral", emoji: "😊", color: "bg-yellow-400" },
  { value: "4", label: "Agree", emoji: "😃", color: "bg-blue-400" },
  { value: "5", label: "Strongly Agree", emoji: "🤩", color: "bg-indigo-500" },
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-6 w-6 transition-colors ${
            i < fullStars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

// --- MAIN COMPONENT ---

export default function CourseInterestAssessment() {
  const [currentStep, setCurrentStep] = useState<"start" | "quiz" | "results">(
    "start"
  );
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [totalQuestionCount, setTotalQuestionCount] = useState(0);

  const generateQuestions = useCallback(() => {
    const allQuestions: Question[] = [];
    let questionId = 1;

    const storedCoursesRaw =
      typeof window !== "undefined" ? localStorage.getItem("courses") : null;
    let activeCategories: string[] = [];

    if (storedCoursesRaw) {
      try {
        const parsedCourses: string[] = JSON.parse(storedCoursesRaw);
        if (Array.isArray(parsedCourses) && parsedCourses.length > 0) {
          const allProgramKeys = Object.keys(QUESTION_BANK);
          parsedCourses.forEach((courseName) => {
            const matchingKey = allProgramKeys.find((key) =>
              courseName.includes(key)
            );
            if (matchingKey && !activeCategories.includes(matchingKey)) {
              activeCategories.push(matchingKey);
            }
          });
        }
      } catch (e) {
        console.error("Error parsing courses from localStorage", e);
      }
    }

    if (activeCategories.length === 0) {
      console.log(
        "No courses found in localStorage or failed to parse. Using all question categories as a fallback."
      );
      activeCategories = Object.keys(QUESTION_BANK);
    }

    activeCategories.forEach((category) => {
      const categoryQuestions = QUESTION_BANK[
        category as keyof typeof QUESTION_BANK
      ].map((q) => ({
        id: questionId++,
        question: q.question,
        category: category,
      }));
      allQuestions.push(...categoryQuestions);
    });

    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setTotalQuestionCount(shuffled.length);
  }, []);

  const startQuiz = () => {
    generateQuestions();
    setCurrentStep("quiz");
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedAnswer("");
  };

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) return;
    setIsTransitioning(true);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = parseInt(selectedAnswer);
    setUserAnswers(newAnswers);
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer("");
        setIsTransitioning(false);
      } else {
        handleQuizComplete(newAnswers);
      }
    }, 300);
  };

  // --- TASK START: Modified the result calculation logic ---
  const handleQuizComplete = (answers: number[]) => {
    const categoryScores: { [key: string]: { total: number; count: number } } =
      {};

    // First, determine which categories were actually part of the quiz
    const activeCategories = [...new Set(questions.map((q) => q.category))];

    // Initialize scores only for these active categories
    activeCategories.forEach((category) => {
      categoryScores[category] = { total: 0, count: 0 };
    });

    // Populate the scores from user answers
    questions.forEach((question, index) => {
      if (categoryScores[question.category]) {
        categoryScores[question.category].total += answers[index];
        categoryScores[question.category].count++;
      }
    });

    // Map the calculated scores to the final results array
    const results: QuizResult[] = Object.entries(categoryScores).map(
      ([category, data]) => {
        const averageScore =
          data.count > 0 ? (data.total / (data.count * 5)) * 100 : 0;
        return {
          category,
          averageScore,
          total: data.count,
          placementInfo: PLACEMENT_DATA[category],
        };
      }
    );

    // Sort and set the final, filtered results
    results.sort((a, b) => b.averageScore - a.averageScore);
    setQuizResults(results);
    setCurrentStep("results");
    setIsTransitioning(false);
  };
  // --- TASK END ---

  const restartQuiz = () => {
    setCurrentStep("start");
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setUserAnswers([]);
    setQuestions([]);
    setQuizResults([]);
    setIsTransitioning(false);
  };

  useEffect(() => {
    const storedCoursesRaw = localStorage.getItem("courses");
    let activeCategories: string[] = [];

    if (storedCoursesRaw) {
      try {
        const parsedCourses: string[] = JSON.parse(storedCoursesRaw);
        if (Array.isArray(parsedCourses) && parsedCourses.length > 0) {
          const allProgramKeys = Object.keys(QUESTION_BANK);
          parsedCourses.forEach((courseName) => {
            const matchingKey = allProgramKeys.find((key) =>
              courseName.includes(key)
            );
            if (matchingKey && !activeCategories.includes(matchingKey)) {
              activeCategories.push(matchingKey);
            }
          });
        }
      } catch (e) {
        console.error("Error parsing courses from localStorage", e);
      }
    }

    if (activeCategories.length === 0) {
      activeCategories = Object.keys(QUESTION_BANK);
    }

    let count = 0;
    activeCategories.forEach((category) => {
      count += QUESTION_BANK[category as keyof typeof QUESTION_BANK].length;
    });
    setTotalQuestionCount(count);
  }, []);

  const formatPercentage = (score: number) => {
    return `${Math.round(score)}%`;
  };

  // --- START PAGE ---
  if (currentStep === "start") {
    return (
      <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-purple-50/20 via-white to-blue-50/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#8B0000] rounded-full mb-6 shadow-lg">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Course Interest Assessment
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover your ideal academic path through our comprehensive
              interest assessment designed to match your passions with the
              perfect course.
            </p>
          </div>

          <Card className="max-w-3xl mx-auto shadow-xl border-0 bg-white">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl font-bold text-gray-800">
                <Target className="h-7 w-7 text-[#8B0000]" />
                Assessment Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 px-6 sm:px-8 pb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#8B0000] rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Duration</div>
                    <div className="text-sm text-gray-600">~15 minutes</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#8B0000] rounded-full flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Questions</div>
                    <div className="text-sm text-gray-600">
                      {totalQuestionCount} statements
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#8B0000] rounded-full flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Analysis</div>
                    <div className="text-sm text-gray-600">
                      Interest-based matching
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#8B0000] rounded-full flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Results</div>
                    <div className="text-sm text-gray-600">
                      Personalized recommendations
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-800 mb-2">
                  How it works:
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Rate each statement based on how much you agree with it. Your
                  responses will be analyzed to determine your interest levels
                  across different course categories, helping us recommend the
                  most suitable academic paths for you.
                </p>
              </div>

              <Button
                onClick={startQuiz}
                className="w-full py-4 text-lg font-semibold bg-[#8B0000] hover:bg-[#700000] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Begin Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // --- QUIZ PAGE ---
  if (currentStep === "quiz") {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    const questionVariants = {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -50 },
    };

    return (
      <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-purple-50/20 via-white to-blue-50/20 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-8">
            <div className="flex justify-center items-end gap-2 mb-2">
              <span className="text-4xl font-bold text-gray-800">
                {currentQuestionIndex + 1}
              </span>
              <span className="text-2xl text-gray-400">/</span>
              <span className="text-2xl text-gray-600">{questions.length}</span>
            </div>
            <div className="max-w-md mx-auto">
              <Progress
                value={progress}
                className="h-2 bg-gray-200 [&>div]:bg-[#8B0000]"
              />
              <div className="text-sm text-gray-600 mt-2">
                {formatPercentage(progress)} Complete
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              variants={questionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Card className="shadow-2xl border-0 bg-white overflow-hidden">
                <div className="h-1.5 bg-[#8B0000]" />
                <CardContent className="p-6 sm:p-10">
                  <div className="text-center mb-8 min-h-[120px] flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                      {questions[currentQuestionIndex]?.question}
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                      Category: {questions[currentQuestionIndex]?.category}
                    </p>
                  </div>
                  <RadioGroup
                    value={selectedAnswer}
                    onValueChange={handleAnswerSelect}
                    className="grid grid-cols-2 md:grid-cols-5 gap-4"
                  >
                    {LIKERT_OPTIONS.map((option) => (
                      <Label
                        key={option.value}
                        htmlFor={`option-${option.value}`}
                        className={`group flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer h-40 ${
                          selectedAnswer === option.value
                            ? "bg-blue-50 border-[#8B0000] shadow-lg"
                            : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={`option-${option.value}`}
                          className="sr-only"
                        />
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2 transition-transform duration-300 ${
                            option.color
                          } ${
                            selectedAnswer === option.value ? "scale-110" : ""
                          }`}
                        >
                          {option.value}
                        </div>
                        <div className="text-center">
                          <span
                            className={`text-base font-medium transition-colors duration-200 ${
                              selectedAnswer === option.value
                                ? "text-gray-800"
                                : "text-gray-700"
                            }`}
                          >
                            {option.label}
                          </span>
                        </div>
                        <div className="text-2xl mt-1">{option.emoji}</div>
                      </Label>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8">
            <div className="text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <Button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer || isTransitioning}
              className={`px-8 py-3 font-semibold transition-all duration-300 rounded-lg text-white ${
                selectedAnswer && !isTransitioning
                  ? "bg-[#8B0000] hover:bg-[#700000] shadow-md hover:shadow-lg"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Next Question
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // --- RESULTS PAGE ---
  if (currentStep === "results") {
    if (!quizResults.length) return null; // Prevent rendering if results are not ready
    const topMatch = quizResults[0];
    const CourseIcons: { [key: string]: React.ReactNode } = {
      "Law Programmes": <Gavel className="h-7 w-7 text-[#8B0000]" />,
      "Pharmacy Programmes": <Pill className="h-7 w-7 text-[#8B0000]" />,
      "Engineering Programmes": <HardHat className="h-7 w-7 text-[#8B0000]" />,
      "Architecture Programmes": <Home className="h-7 w-7 text-[#8B0000]" />,
      "Nursing Programmes": <HeartPulse className="h-7 w-7 text-[#8B0000]" />,
      "Physiotherapy Programmes": (
        <PersonStanding className="h-7 w-7 text-[#8B0000]" />
      ),
      "Dental Programmes": <Stethoscope className="h-7 w-7 text-[#8B0000]" />, // Using Stethoscope as a proxy for dental
      "Arts, Science and Humanities Programmes": (
        <Palette className="h-7 w-7 text-[#8B0000]" />
      ),
    };

    return (
      <div
        className="min-h-screen py-12 px-4"
        style={{ backgroundColor: "#f0f7f7" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Assessment Results
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Based on your responses, here are your personalized results and
              recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {quizResults.map((result) => {
              if (!result.placementInfo) return null; // Safety check
              const isTopMatch = result.category === topMatch.category;
              const scoreOutOf5 = (result.averageScore / 100) * 5;
              return (
                <Card
                  key={result.category}
                  className={`relative bg-white text-center p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                    isTopMatch ? "border-2 border-[#8B0000]" : "border"
                  }`}
                >
                  {isTopMatch && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8B0000] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Trophy className="h-4 w-4" /> Top Match
                    </div>
                  )}
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {result.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex flex-col items-center gap-4">
                    <div className="font-extrabold text-5xl text-gray-800">
                      {scoreOutOf5.toFixed(2)}
                      <span className="text-3xl text-gray-500">/5.0</span>
                    </div>
                    <StarRating rating={scoreOutOf5} />
                    <div className="w-full text-left">
                      <p className="text-sm font-medium text-gray-600">
                        Overall Score: {formatPercentage(result.averageScore)}
                      </p>
                      <Progress
                        value={result.averageScore}
                        className="h-2 mt-1 [&>div]:bg-[#8B0000]"
                      />
                    </div>
                    <p className="text-sm text-gray-500">
                      {result.total} questions answered
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-200/80"
          >
            <h2 className="text-3xl font-bold text-[#8B0000] flex items-center gap-3 mb-2">
              {CourseIcons[topMatch.category] || (
                <GraduationCap className="h-7 w-7 text-[#8B0000]" />
              )}
              Recommended Course: {topMatch.category}
            </h2>
            <p className="text-gray-600 mb-10 max-w-4xl text-base">
              {topMatch.placementInfo.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Course Details
                  </h3>
                  <div className="space-y-3 text-base">
                    <p className="text-gray-700">
                      <span className="font-bold text-gray-900">Duration:</span>{" "}
                      {topMatch.placementInfo.duration}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-bold text-gray-900">
                        Eligibility:
                      </span>{" "}
                      {topMatch.placementInfo.eligibility}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-bold text-gray-900">
                        Average Salary:
                      </span>{" "}
                      {topMatch.placementInfo.averageSalary}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Specializations
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {topMatch.placementInfo.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Career Prospects
                  </h3>
                  <ul className="space-y-3">
                    {topMatch.placementInfo.careerOptions.map((prospect) => (
                      <li
                        key={prospect}
                        className="flex items-center gap-3 text-base text-gray-700"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        {prospect}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Top Recruiters
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {topMatch.placementInfo.recruiters.map((rec) => (
                      <span
                        key={rec.name}
                        className="flex items-center gap-2 bg-green-100 text-green-900 text-sm font-semibold pl-2 pr-4 py-1.5 rounded-full"
                      >
                        <img
                          src={rec.logoUrl}
                          alt={`${rec.name} logo`}
                          className="h-6 w-6 rounded-full bg-white object-contain"
                        />
                        {rec.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <Button
              onClick={restartQuiz}
              variant="outline"
              className="px-8 py-3 w-full sm:w-auto text-base font-semibold border-2 border-gray-400 text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-lg"
            >
              <RotateCcw className="mr-2 h-4 w-4" /> Retake Assessment
            </Button>
            <Button className="px-10 py-3 w-full sm:w-auto text-base font-semibold bg-[#8B0000] hover:bg-[#700000] text-white shadow-lg hover:shadow-xl transition-all rounded-lg">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}