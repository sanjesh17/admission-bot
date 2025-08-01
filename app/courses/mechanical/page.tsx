import React from "react";
import Carousel from "../mechanical/Carousel";
import DeanInfo from "@/components/DeanInfo";
import CoursePageTemplate from "./CoursePageTemplate";

const page = () => {
  return (
    <div>
      <Carousel />
      <CoursePageTemplate />
    </div>
  );
};

export default page;
