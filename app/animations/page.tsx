"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GraduationCap, Stethoscope, Wrench, FlaskRound, Briefcase, Calculator, Microscope, Building } from 'lucide-react'

interface Course {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  description: string
}

const courses: Course[] = [
  {
    id: 'doctor',
    name: 'Medical Doctor',
    icon: <Stethoscope className="w-6 h-6" />,
    color: '#10B981',
    description: 'Healthcare & Medical Sciences'
  },
  {
    id: 'engineer',
    name: 'Engineer',
    icon: <Wrench className="w-6 h-6" />,
    color: '#3B82F6',
    description: 'Engineering & Technology'
  },
  {
    id: 'scientist',
    name: 'Scientist',
    icon: <FlaskRound className="w-6 h-6" />,
    color: '#8B5CF6',
    description: 'Research & Science'
  },
  {
    id: 'business',
    name: 'Business Professional',
    icon: <Briefcase className="w-6 h-6" />,
    color: '#F59E0B',
    description: 'Business & Management'
  },
  {
    id: 'mathematician',
    name: 'Mathematician',
    icon: <Calculator className="w-6 h-6" />,
    color: '#EF4444',
    description: 'Mathematics & Analytics'
  },
  {
    id: 'researcher',
    name: 'Researcher',
    icon: <Microscope className="w-6 h-6" />,
    color: '#06B6D4',
    description: 'Academic Research'
  },
  {
    id: 'architect',
    name: 'Architect',
    icon: <Building className="w-6 h-6" />,
    color: '#84CC16',
    description: 'Architecture & Design'
  }
]

export default function Animations() {
  const [selectedCourse, setSelectedCourse] = useState<string>('default')
  const [isAnimating, setIsAnimating] = useState(false)

  const handleCourseSelect = (courseId: string) => {
    if (courseId === selectedCourse) return
    
    setIsAnimating(true)
    setTimeout(() => {
      setSelectedCourse(courseId)
      setIsAnimating(false)
    }, 500)
  }

  const getMascotStyle = () => {
    const baseStyle = "transition-all duration-500 ease-in-out transform"
    
    if (isAnimating) {
      return `${baseStyle} scale-110 rotate-12`
    }

    switch (selectedCourse) {
      case 'doctor':
        return `${baseStyle} text-green-500`
      case 'engineer':
        return `${baseStyle} text-blue-500`
      case 'scientist':
        return `${baseStyle} text-purple-500`
      case 'business':
        return `${baseStyle} text-yellow-500`
      case 'mathematician':
        return `${baseStyle} text-red-500`
      case 'researcher':
        return `${baseStyle} text-cyan-500`
      case 'architect':
        return `${baseStyle} text-lime-500`
      default:
        return `${baseStyle} text-gray-600`
    }
  }

  const getMascotContent = () => {
    const selectedCourseData = courses.find(course => course.id === selectedCourse)
    
    return (
      <div className="text-center">
        <div className={`text-8xl mb-4 ${getMascotStyle()}`}>
          {selectedCourse === 'doctor' && '👨‍⚕️'}
          {selectedCourse === 'engineer' && '👨‍🔧'}
          {selectedCourse === 'scientist' && '👨‍🔬'}
          {selectedCourse === 'business' && '👨‍💼'}
          {selectedCourse === 'mathematician' && '👨‍🏫'}
          {selectedCourse === 'researcher' && '👨‍💻'}
          {selectedCourse === 'architect' && '👨‍🎨'}
          {selectedCourse === 'default' && '🎓'}
        </div>
        <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <h3 className="text-2xl font-bold mb-2">
            {selectedCourseData ? selectedCourseData.name : 'Choose Your Path'}
          </h3>
          <p className="text-gray-600">
            {selectedCourseData ? selectedCourseData.description : 'Select a course to see the mascot transform!'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Interactive Career Mascot
          </h1>
          <p className="text-xl text-gray-600">
            Watch our mascot transform as you explore different career paths!
          </p>
        </div>

        {/* Mascot Display Area */}
        <div className="mb-16">
          <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm shadow-2xl border-0">
            <CardContent className="p-12">
              {getMascotContent()}
            </CardContent>
          </Card>
        </div>

        {/* Course Selection Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">Choose Your Career Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card 
                key={course.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  selectedCourse === course.id 
                    ? 'ring-2 ring-offset-2 shadow-lg' 
                    : 'hover:shadow-md'
                }`}
                style={{
                  borderColor: selectedCourse === course.id ? course.color : 'transparent',
                  ['--tw-ring-color' as string]: selectedCourse === course.id ? course.color : 'transparent'
                }}
                onClick={() => handleCourseSelect(course.id)}
              >
                <CardHeader className="text-center pb-2">
                  <div 
                    className="mx-auto p-3 rounded-full w-16 h-16 flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${course.color}20`, color: course.color }}
                  >
                    {course.icon}
                  </div>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-sm text-gray-600">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        <div className="text-center">
          <Button 
            onClick={() => handleCourseSelect('default')}
            variant="outline"
            size="lg"
            className="bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            Reset Mascot
          </Button>
        </div>

        {/* Animation Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="font-semibold mb-2">Select a Career</h4>
                  <p className="text-sm text-gray-600">Click on any career card to see the transformation</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">✨</div>
                  <h4 className="font-semibold mb-2">Watch the Magic</h4>
                  <p className="text-sm text-gray-600">Our mascot transforms with smooth animations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎓</div>
                  <h4 className="font-semibold mb-2">Explore Paths</h4>
                  <p className="text-sm text-gray-600">Discover different career opportunities</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}