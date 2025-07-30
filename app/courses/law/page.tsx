import React from 'react'
import Carousel from "../law/Carousel";
import CoursePageTemplate from "@/components/CoursePageTemplate";
import withScrollFadeIn from "@/components/withScrollFadeIn";
const page = () => {
  return (
    <div>
      <Carousel />
      <CoursePageTemplate />
    </div>
  )
}

export default page
