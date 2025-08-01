import React from 'react'
import Carousel from '../pharmacy/Carousel';
import CoursePageTemplate from "./CoursePageTemplate";
import withScrollFadeIn from '@/components/withScrollFadeIn';

const page = () => {
  return (
    <div>
      <Carousel />
      <CoursePageTemplate />
    </div>
  )
}

export default page
