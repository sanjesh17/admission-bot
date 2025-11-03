export interface CourseQuestion {
  question: string
  category: string
}

export interface TechnicalQuestion {
  question: string
  options: string[]
  correctIndex: number
  category: string
}

export interface CourseData {
  courseName: string
  description: string
  questions: CourseQuestion[]
  technicalQuestions?: TechnicalQuestion[]
}

export interface ProgramCourses {
  [key: string]: {
    courses: string[]
    questionsData: { [course: string]: CourseData }
  }
}

export const PROGRAM_COURSES: ProgramCourses = {
  "School of Computing": {
    courses: [
      "B.E-CSE",
      "B.E-CSE with AI",
      "B.E-CSE with DS",
      "B.E-CSE with IoT",
      "B.E-CSE with AI & Robotics",
      "B.E-CSE with AI & ML",
      "B.E-CSE with Blockchain",
      "B.E-CSE with Cyber Security",
      "B.Tech-IT",
      "M.E-CSE",
      "B.Sc-CS",
      "M.Sc-CS",
      "Ph.D-CSE",
    ],
    questionsData: {
      "B.E-CSE": {
        courseName: "B.E Computer Science and Engineering",
        description:
          "Core computer science program focusing on software development, algorithms, and system design",
        questions: [
          {
            question:
              "I enjoy developing software applications from scratch and learning different programming languages",
            category: "B.E-CSE",
          },
          {
            question:
              "I am interested in understanding how computer systems and networks work at a fundamental level",
            category: "B.E-CSE",
          },
          {
            question:
              "I like solving complex algorithmic problems and optimizing code performance",
            category: "B.E-CSE",
          },
        ],
        technicalQuestions: [
          {
            question: "Who created ChatGPT?",
            options: ["LLaMA", "OpenAI", "Google", "Meta"],
            correctIndex: 1,
            category: "B.E-CSE",
          },
          {
            question:
              "Which language is commonly used for web front-end development?",
            options: ["Python", "JavaScript", "C", "Rust"],
            correctIndex: 1,
            category: "B.E-CSE",
          },
        ],
      },
      "B.E-CSE with AI": {
        courseName: "B.E CSE with Artificial Intelligence",
        description:
          "Specialized program combining core CSE with focus on AI, machine learning, and intelligent systems",
        questions: [
          {
            question:
              "I am fascinated by how machines can learn and make decisions like humans",
            category: "B.E-CSE with AI",
          },
          {
            question:
              "I enjoy working with neural networks and deep learning algorithms",
            category: "B.E-CSE with AI",
          },
          {
            question:
              "I want to build intelligent systems that can process and understand natural language",
            category: "B.E-CSE with AI",
          },
        ],
        technicalQuestions: [
          {
            question: "Which of these is a machine learning library?",
            options: ["NumPy", "Pandas", "TensorFlow", "Flask"],
            correctIndex: 2,
            category: "B.E-CSE with AI",
          },
          {
            question: "What does 'AI' stand for?",
            options: [
              "Automated Internet",
              "Artificial Intelligence",
              "Applied Informatics",
              "Advanced Integration",
            ],
            correctIndex: 1,
            category: "B.E-CSE with AI",
          },
        ],
      },
      "B.E-CSE with DS": {
        courseName: "B.E CSE with Data Science",
        description:
          "Program focusing on data analysis, statistics, and machine learning",
        questions: [
          {
            question:
              "I enjoy analyzing large datasets to uncover patterns and insights",
            category: "B.E-CSE with DS",
          },
          {
            question:
              "I am interested in statistical analysis and data visualization",
            category: "B.E-CSE with DS",
          },
          {
            question:
              "I want to learn how to use data to solve real-world business problems",
            category: "B.E-CSE with DS",
          },
        ],
        technicalQuestions: [
          {
            question: "Which file format is commonly used for tabular data?",
            options: [".jpg", ".csv", ".mp4", ".exe"],
            correctIndex: 1,
            category: "B.E-CSE with DS",
          },
          {
            question: "Which language is widely used for data analysis?",
            options: ["Java", "C#", "Python", "Assembly"],
            correctIndex: 2,
            category: "B.E-CSE with DS",
          },
        ],
      },
      "B.E-CSE with IoT": {
        courseName: "B.E CSE with Internet of Things",
        description:
          "Program specializing in connected devices, sensors, and embedded systems",
        questions: [
          {
            question:
              "I am interested in working with physical computing devices and sensors",
            category: "B.E-CSE with IoT",
          },
          {
            question:
              "I enjoy building systems that connect the physical world with the digital world",
            category: "B.E-CSE with IoT",
          },
          {
            question:
              "I want to develop applications for smart homes and connected devices",
            category: "B.E-CSE with IoT",
          },
        ],
        technicalQuestions: [
          {
            question:
              "Which device is commonly used to sense temperature in IoT?",
            options: ["Thermistor", "GPU", "SSD", "Router"],
            correctIndex: 0,
            category: "B.E-CSE with IoT",
          },
          {
            question:
              "Which protocol is popular for lightweight IoT messaging?",
            options: ["HTTP", "FTP", "MQTT", "SMTP"],
            correctIndex: 2,
            category: "B.E-CSE with IoT",
          },
        ],
      },
      "B.E-CSE with AI & Robotics": {
        courseName: "B.E CSE with AI and Robotics",
        description:
          "Program combining AI with robotics engineering and control systems",
        questions: [
          {
            question: "I am passionate about building and programming robots",
            category: "B.E-CSE with AI & Robotics",
          },
          {
            question:
              "I enjoy working with physical mechanisms and control systems",
            category: "B.E-CSE with AI & Robotics",
          },
          {
            question:
              "I want to develop intelligent robots that can interact with their environment",
            category: "B.E-CSE with AI & Robotics",
          },
        ],
        technicalQuestions: [
          {
            question: "Which component is essential for robot movement?",
            options: ["Actuator", "DNS", "HTTP Server", "Compiler"],
            correctIndex: 0,
            category: "B.E-CSE with AI & Robotics",
          },
          {
            question: "Which field combines AI with physical machines?",
            options: ["Robotics", "Networking", "Databases", "UI Design"],
            correctIndex: 0,
            category: "B.E-CSE with AI & Robotics",
          },
        ],
      },
      "B.E-CSE with AI & ML": {
        courseName: "B.E CSE with AI and Machine Learning",
        description:
          "Advanced program focusing on machine learning algorithms and AI applications",
        questions: [
          {
            question:
              "I am interested in developing algorithms that can learn from data",
            category: "B.E-CSE with AI & ML",
          },
          {
            question:
              "I enjoy working on predictive modeling and pattern recognition",
            category: "B.E-CSE with AI & ML",
          },
          {
            question:
              "I want to build systems that can make intelligent decisions based on data",
            category: "B.E-CSE with AI & ML",
          },
        ],
        technicalQuestions: [
          {
            question: "What is a common evaluation metric for classification?",
            options: ["Accuracy", "Latency", "Throughput", "Resolution"],
            correctIndex: 0,
            category: "B.E-CSE with AI & ML",
          },
          {
            question: "Which algorithm is used for clustering?",
            options: ["K-Means", "QuickSort", "Dijkstra", "RSA"],
            correctIndex: 0,
            category: "B.E-CSE with AI & ML",
          },
        ],
      },
      "B.E-CSE with Blockchain": {
        courseName: "B.E CSE with Blockchain Technology",
        description:
          "Specialized program in blockchain, cryptography, and distributed systems",
        questions: [
          {
            question:
              "I am fascinated by cryptocurrency and blockchain technology",
            category: "B.E-CSE with Blockchain",
          },
          {
            question: "I enjoy studying cryptography and secure systems",
            category: "B.E-CSE with Blockchain",
          },
          {
            question:
              "I want to develop decentralized applications and smart contracts",
            category: "B.E-CSE with Blockchain",
          },
        ],
        technicalQuestions: [
          {
            question:
              "Which term refers to a unique digital identifier for transactions?",
            options: ["Hash", "Cookie", "IP", "Port"],
            correctIndex: 0,
            category: "B.E-CSE with Blockchain",
          },
          {
            question: "Smart contracts primarily run on which technology?",
            options: ["Blockchain", "FTP", "SMTP", "DNS"],
            correctIndex: 0,
            category: "B.E-CSE with Blockchain",
          },
        ],
      },
      "B.E-CSE with Cyber Security": {
        courseName: "B.E CSE with Cyber Security",
        description:
          "Program focusing on network security, ethical hacking, and security systems",
        questions: [
          {
            question:
              "I am passionate about protecting computer systems and networks from attacks",
            category: "B.E-CSE with Cyber Security",
          },
          {
            question:
              "I enjoy learning about different types of cyber threats and how to prevent them",
            category: "B.E-CSE with Cyber Security",
          },
          {
            question:
              "I want to develop secure systems and conduct security audits",
            category: "B.E-CSE with Cyber Security",
          },
        ],
        technicalQuestions: [
          {
            question: "What does 'VPN' stand for?",
            options: [
              "Virtual Private Network",
              "Visual Programming Node",
              "Verified Public Name",
              "Variable Protected Number",
            ],
            correctIndex: 0,
            category: "B.E-CSE with Cyber Security",
          },
          {
            question:
              "Which practice involves finding vulnerabilities in systems?",
            options: [
              "Penetration Testing",
              "Load Testing",
              "Unit Testing",
              "Design Testing",
            ],
            correctIndex: 0,
            category: "B.E-CSE with Cyber Security",
          },
        ],
      },
      "B.Tech-IT": {
        courseName: "Bachelor of Technology in Information Technology",
        description:
          "Program focusing on practical IT applications and business technology",
        questions: [
          {
            question:
              "I enjoy working with business applications and enterprise systems",
            category: "B.Tech-IT",
          },
          {
            question:
              "I am interested in IT infrastructure and system administration",
            category: "B.Tech-IT",
          },
          {
            question:
              "I want to bridge the gap between business needs and technology solutions",
            category: "B.Tech-IT",
          },
        ],
        technicalQuestions: [
          {
            question: "Which is a common operating system used on servers?",
            options: ["Windows Server", "Android", "iOS", "Tizen"],
            correctIndex: 0,
            category: "B.Tech-IT",
          },
          {
            question: "What does 'IT' stand for?",
            options: [
              "Internet Technology",
              "Information Technology",
              "Integrated Tools",
              "Internal Transfer",
            ],
            correctIndex: 1,
            category: "B.Tech-IT",
          },
        ],
      },
      "M.E-CSE": {
        courseName: "Master of Engineering in Computer Science",
        description:
          "Advanced degree focusing on research and specialized computer science topics",
        questions: [
          {
            question: "I want to pursue advanced research in computer science",
            category: "M.E-CSE",
          },
          {
            question:
              "I enjoy studying theoretical aspects of computer science",
            category: "M.E-CSE",
          },
          {
            question:
              "I am interested in becoming an expert in specific areas of computer science",
            category: "M.E-CSE",
          },
        ],
        technicalQuestions: [
          {
            question: "Which activity is common in graduate research?",
            options: [
              "Lab experiments",
              "Graphic design",
              "Retail sales",
              "Field trips",
            ],
            correctIndex: 0,
            category: "M.E-CSE",
          },
          {
            question: "A thesis is typically required for which degree?",
            options: ["Bachelor", "Master", "Diploma", "Certificate"],
            correctIndex: 1,
            category: "M.E-CSE",
          },
        ],
      },
      "B.Sc-CS": {
        courseName: "Bachelor of Science in Computer Science",
        description:
          "Three-year program covering fundamental computer science concepts",
        questions: [
          {
            question:
              "I prefer a shorter duration program focusing on core computer science concepts",
            category: "B.Sc-CS",
          },
          {
            question:
              "I am interested in the theoretical foundations of computing",
            category: "B.Sc-CS",
          },
          {
            question:
              "I want to learn programming and basic software development",
            category: "B.Sc-CS",
          },
        ],
        technicalQuestions: [
          {
            question: "Which syntax is used to print in many languages?",
            options: ["print()", "show()", "display()", "echo()"],
            correctIndex: 0,
            category: "B.Sc-CS",
          },
          {
            question: "Which is NOT a programming paradigm?",
            options: [
              "Procedural",
              "Object-Oriented",
              "Declarative",
              "Culinary",
            ],
            correctIndex: 3,
            category: "B.Sc-CS",
          },
        ],
      },
      "M.Sc-CS": {
        courseName: "Master of Science in Computer Science",
        description:
          "Advanced program with focus on research and specialized topics",
        questions: [
          {
            question:
              "I want to pursue advanced studies after my bachelor's degree",
            category: "M.Sc-CS",
          },
          {
            question: "I enjoy conducting research and writing academic papers",
            category: "M.Sc-CS",
          },
          {
            question:
              "I am interested in teaching or pursuing a career in academia",
            category: "M.Sc-CS",
          },
        ],
        technicalQuestions: [
          {
            question: "Which is a common output of research work?",
            options: [
              "Research paper",
              "App store listing",
              "Resume",
              "Advertisement",
            ],
            correctIndex: 0,
            category: "M.Sc-CS",
          },
          {
            question: "Which method is common for evaluating models?",
            options: [
              "Cross-validation",
              "Color grading",
              "Compression",
              "Indexing",
            ],
            correctIndex: 0,
            category: "M.Sc-CS",
          },
        ],
      },
      "Ph.D-CSE": {
        courseName: "Doctor of Philosophy in Computer Science",
        description: "Research-focused doctoral program in computer science",
        questions: [
          {
            question:
              "I want to contribute new knowledge to the field of computer science",
            category: "Ph.D-CSE",
          },
          {
            question:
              "I enjoy conducting independent research and publishing papers",
            category: "Ph.D-CSE",
          },
          {
            question: "I am interested in becoming a researcher or professor",
            category: "Ph.D-CSE",
          },
        ],
        technicalQuestions: [
          {
            question: "A Ph.D. primarily focuses on which activity?",
            options: [
              "Research",
              "Internships",
              "Coursework only",
              "Short projects",
            ],
            correctIndex: 0,
            category: "Ph.D-CSE",
          },
          {
            question: "Which metric indicates original contribution?",
            options: ["Novelty", "Popularity", "Price", "Size"],
            correctIndex: 0,
            category: "Ph.D-CSE",
          },
        ],
      },
    },
  },
}
