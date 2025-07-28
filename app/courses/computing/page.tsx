import React from "react";
import Carousel from "./Carousel";
import AboutDepartment from "./AboutDepartment";
import DeanInfo from "../../../components/DeanInfo";
import ProgramsOffered from "./ProgramsOffered";
import TopRecruiters from "@/components/TopRecruiters";

const page = () => {
  const topRecruiters = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLC2F8yYFFhCTFw51p7XrPq53vb4ageMyq2g&s", // TCS
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Infosys_logo.svg", // Infosys
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Wipro_Logo.svg", // Wipro
    "https://upload.wikimedia.org/wikipedia/commons/8/8f/Accenture.svg", // Accenture
    "https://upload.wikimedia.org/wikipedia/commons/f/fb/HCL_Technologies_Logo.svg", // HCL Technologies
    "https://upload.wikimedia.org/wikipedia/commons/6/67/IBM_logo.svg", // IBM India
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Capgemini_logo.svg", // Capgemini
    "https://upload.wikimedia.org/wikipedia/commons/7/7f/Tech_Mahindra_logo.svg", // Tech Mahindra
    "https://upload.wikimedia.org/wikipedia/commons/e/e3/Google_2015_logo.svg", // Google India
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Microsoft India
  ];

  return (
    <div>
      <Carousel />
      <AboutDepartment />
      <DeanInfo
        deanName="Dr. L. Lakshmanan"
        deanImage="https://www.sathyabama.ac.in/sites/default/files/styles/large/public/2020-10/L.LAKSHMANAN.JPG?itok=-YbJRGDs"
        department="School of Computing"
        qual="M.E., Ph.D"
        description="The dignified computer science engineering professor with more than 25 years of experience in teaching at the University level and 2 years in industry. Established the thorough discipline in the practise of information and technology curriculum, have been involved in the development and launch of pioneering research and interdisciplinary programmes. Strong philosophy of teaching, and knowledge of many different methods to motivate students to develop their expertise in specific areas."
        email="dean.computing@sathyabama.ac.in"
      />
      <ProgramsOffered />
      <TopRecruiters logos={topRecruiters} />
    </div>
  );
};

export default page;
