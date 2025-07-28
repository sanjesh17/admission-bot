import React from "react";
import DeanInfo from "@/components/DeanInfo";

const page = () => {
  return (
    <div>
      <DeanInfo
        deanName="Dr. Varsha"
        deanImage="https://www.sathyabama.ac.in/sites/default/files/styles/large/public/2020-10/L.LAKSHMANAN.JPG?itok=-YbJRGDs"
        department="School of Computing"
        qual="M.E., Ph.D"
        description="The dignified computer science engineering professor with more than 25 years of experience in teaching at the University level and 2 years in industry. Established the thorough discipline in the practise of information and technology curriculum, have been involved in the development and launch of pioneering research and interdisciplinary programmes. Strong philosophy of teaching, and knowledge of many different methods to motivate students to develop their expertise in specific areas."
        email="dean.computing@sathyabama.ac.in"
      />
    </div>
  );
};

export default page;
