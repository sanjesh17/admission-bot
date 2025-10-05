"use client"
import React from "react"
import Carousel from "./Carousel"
import AboutDepartment from "./AboutDepartment"
import DeanInfo from "../../../components/DeanInfo"
import ProgramsOffered from "./ProgramsOffered"
import TopRecruiters from "@/components/TopRecruiters"
import CoursePageTemplate from "./CoursePageTemplate"
import withScrollFadeIn from "@/components/withScrollFadeIn"

const page = () => {
  return (
    <div>
      <Carousel />
      <CoursePageTemplate />
    </div>
  )
}

export default withScrollFadeIn(page)
