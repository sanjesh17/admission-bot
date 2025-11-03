"use client"
import Link from "next/link"
import { QUESTION_BANK, PLACEMENT_DATA } from "./data"
import type { PlacementData } from "./data"
import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import CourseQuiz from "@/components/CourseQuiz"
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
} from "lucide-react"
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

// --- NEW CONSTANTS FOR PIE CHART ---
const PIE_COLORS: string[] = ["#3B82F6", "#8B5CF6", "#10B981"] // blue, purple, green

// --- TYPES FOR HELPER FUNCTIONS ---
interface PieChartDataItem {
  name: string
  value: number
  color: string
}

interface StrengthsWeaknessesResult {
  strengths: string[]
  weaknesses: string[]
}

// --- NEW HELPER FUNCTIONS ---
const preparePieChartData = (quizResults: QuizResult[]): PieChartDataItem[] => {
  return quizResults.slice(0, 3).map((result, index) => ({
    name: result.category,
    value: result.averageScore,
    color: PIE_COLORS[index % PIE_COLORS.length],
  }))
}

const getStrengthsAndWeaknesses = (
  topMatch: QuizResult
): StrengthsWeaknessesResult => {
  // Mock data - replace with actual data from your backend
  const strengths: string[] = [
    "Strong Analytical Skills",
    "Technical Problem Solving",
    "Mathematical Aptitude",
  ]

  const weaknesses: string[] = [
    "Limited Creative Expression",
    "Less Interest in Theory",
    "Minimal Biology Exposure",
  ]

  return { strengths, weaknesses }
}

// --- INTERFACES (unchanged) ---
interface Question {
  id: number
  question: string
  category: string
}

interface QuizResult {
  category: string
  averageScore: number
  total: number
  placementInfo: PlacementData
}

// --- CONSTANTS (unchanged) ---
const LIKERT_OPTIONS: Array<{
  value: string
  label: string
  emoji: string
  color: string
}> = [
  { value: "1", label: "Strongly Disagree", emoji: "😞", color: "bg-red-400" },
  { value: "2", label: "Disagree", emoji: "😐", color: "bg-orange-400" },
  { value: "3", label: "Neutral", emoji: "😊", color: "bg-yellow-400" },
  { value: "4", label: "Agree", emoji: "😃", color: "bg-blue-400" },
  { value: "5", label: "Strongly Agree", emoji: "🤩", color: "bg-indigo-500" },
]

const StarRating = ({ rating }: { rating: number }): JSX.Element => {
  const fullStars = Math.floor(rating)
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
  )
}

// --- MAIN COMPONENT (start and quiz sections unchanged) ---
export default function CourseInterestAssessment(): JSX.Element | null {
  const [currentStep, setCurrentStep] = useState<"start" | "quiz" | "results">(
    "start"
  )
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [quizResults, setQuizResults] = useState<QuizResult[]>([])
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)
  const [totalQuestionCount, setTotalQuestionCount] = useState<number>(0)
  const [courseQuizOpen, setCourseQuizOpen] = useState<boolean>(false)
  const generateQuestions = useCallback((): void => {
    const allQuestions: Question[] = []
    let questionId = 1

    const storedCoursesRaw =
      typeof window !== "undefined" ? localStorage.getItem("courses") : null
    let activeCategories: string[] = []

    if (storedCoursesRaw) {
      try {
        const parsedCourses: string[] = JSON.parse(storedCoursesRaw)
        if (Array.isArray(parsedCourses) && parsedCourses.length > 0) {
          const allProgramKeys = Object.keys(QUESTION_BANK)
          parsedCourses.forEach((courseName) => {
            const matchingKey = allProgramKeys.find((key) =>
              courseName.includes(key)
            )
            if (matchingKey && !activeCategories.includes(matchingKey)) {
              activeCategories.push(matchingKey)
            }
          })
        }
      } catch (e) {
        console.error("Error parsing courses from localStorage", e)
      }
    }

    if (activeCategories.length === 0) {
      console.log(
        "No courses found in localStorage or failed to parse. Using all question categories as a fallback."
      )
      activeCategories = Object.keys(QUESTION_BANK)
    }

    activeCategories.forEach((category) => {
      const categoryQuestions = QUESTION_BANK[
        category as keyof typeof QUESTION_BANK
      ].map((q) => ({
        id: questionId++,
        question: q.question,
        category: category,
      }))
      allQuestions.push(...categoryQuestions)
    })

    const shuffled = allQuestions.sort(() => Math.random() - 0.5)
    setQuestions(shuffled)
    setTotalQuestionCount(shuffled.length)
  }, [])

  const startQuiz = (): void => {
    generateQuestions()
    setCurrentStep("quiz")
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setSelectedAnswer("")
  }

  const handleAnswerSelect = (value: string): void => {
    setSelectedAnswer(value)
  }

  const handleNextQuestion = (): void => {
    if (!selectedAnswer) return
    setIsTransitioning(true)
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestionIndex] = parseInt(selectedAnswer)
    setUserAnswers(newAnswers)
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedAnswer("")
        setIsTransitioning(false)
      } else {
        handleQuizComplete(newAnswers)
      }
    }, 300)
  }

  const handleQuizComplete = (answers: number[]): void => {
    const categoryScores: { [key: string]: { total: number; count: number } } =
      {}

    const activeCategories = [...new Set(questions.map((q) => q.category))]

    activeCategories.forEach((category) => {
      categoryScores[category] = { total: 0, count: 0 }
    })

    questions.forEach((question, index) => {
      if (categoryScores[question.category]) {
        categoryScores[question.category].total += answers[index]
        categoryScores[question.category].count++
      }
    })

    const results: QuizResult[] = Object.entries(categoryScores).map(
      ([category, data]) => {
        const placementInfo =
          PLACEMENT_DATA[category as keyof typeof PLACEMENT_DATA]
        const averageScore =
          data.count > 0 ? (data.total / (data.count * 5)) * 100 : 0
        return {
          category,
          averageScore,
          total: data.count,
          placementInfo,
        }
      }
    )

    results.sort((a, b) => b.averageScore - a.averageScore)
    setQuizResults(results)
    setCurrentStep("results")
    setIsTransitioning(false)
  }

  const restartQuiz = (): void => {
    setCurrentStep("start")
    setCurrentQuestionIndex(0)
    setSelectedAnswer("")
    setUserAnswers([])
    setQuestions([])
    setQuizResults([])
    setIsTransitioning(false)
  }

  useEffect(() => {
    const storedCoursesRaw = localStorage.getItem("courses")
    let activeCategories: string[] = []

    if (storedCoursesRaw) {
      try {
        const parsedCourses: string[] = JSON.parse(storedCoursesRaw)
        if (Array.isArray(parsedCourses) && parsedCourses.length > 0) {
          const allProgramKeys = Object.keys(QUESTION_BANK)
          parsedCourses.forEach((courseName) => {
            const matchingKey = allProgramKeys.find((key) =>
              courseName.includes(key)
            )
            if (matchingKey && !activeCategories.includes(matchingKey)) {
              activeCategories.push(matchingKey)
            }
          })
        }
      } catch (e) {
        console.error("Error parsing courses from localStorage", e)
      }
    }

    if (activeCategories.length === 0) {
      activeCategories = Object.keys(QUESTION_BANK)
    }

    let count = 0
    activeCategories.forEach((category) => {
      count += QUESTION_BANK[category as keyof typeof QUESTION_BANK].length
    })
    setTotalQuestionCount(count)
  }, [])

  const formatPercentage = (score: number): string => {
    return `${Math.round(score)}%`
  }

  // --- START PAGE (unchanged) ---
  if (currentStep === "start") {
    return (
      <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-purple-50/20 via-white to-blue-50/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#831238] rounded-full mb-6 shadow-lg">
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
                <Target className="h-7 w-7 text-[#831238]" />
                Assessment Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 px-6 sm:px-8 pb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#831238] rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Duration</div>
                    <div className="text-sm text-gray-600">~15 minutes</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#831238] rounded-full flex-shrink-0">
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
                  <div className="flex items-center justify-center w-12 h-12 bg-[#831238] rounded-full flex-shrink-0">
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
                  <div className="flex items-center justify-center w-12 h-12 bg-[#831238] rounded-full flex-shrink-0">
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
                className="w-full py-4 text-lg font-semibold bg-[#831238] hover:bg-[#831238] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Begin Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // --- QUIZ PAGE (unchanged) ---
  if (currentStep === "quiz") {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100
    const questionVariants = {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -50 },
    }

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
                className="h-2 bg-gray-200 [&>div]:bg-[#831238]"
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
                <div className="h-1.5 bg-[#831238]" />
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
                            ? "bg-blue-50 border-[#831238] shadow-lg"
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
                  ? "bg-[#831238] hover:bg-[#831238] shadow-md hover:shadow-lg"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Next Question
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // --- RESULTS PAGE (COMPLETELY REDESIGNED) ---
  if (currentStep === "results") {
    if (!quizResults.length) return null

    const topMatch = quizResults[0]
    const pieChartData = preparePieChartData(quizResults)
    const { strengths, weaknesses } = getStrengthsAndWeaknesses(topMatch)

    const CourseIcons: { [key: string]: React.ReactNode } = {
      "Law Programmes": <Gavel className="h-7 w-7 text-[#831238]" />,
      "Pharmacy Programmes": <Pill className="h-7 w-7 text-[#831238]" />,
      "Engineering Programmes": <HardHat className="h-7 w-7 text-[#831238]" />,
      "Architecture Programmes": <Home className="h-7 w-7 text-[#831238]" />,
      "Nursing Programmes": <HeartPulse className="h-7 w-7 text-[#831238]" />,
      "Physiotherapy Programmes": (
        <PersonStanding className="h-7 w-7 text-[#831238]" />
      ),
      "Dental Programmes": <Stethoscope className="h-7 w-7 text-[#831238]" />,
      "Arts, Science and Humanities Programmes": (
        <Palette className="h-7 w-7 text-[#831238]" />
      ),
    }

    return (
      <div className="min-h-screen py-12 px-4 relative">
        {/* Background Pattern with low opacity */}
        <div
          className="absolute inset-0 opacity-25 bg-repeat"
          style={{
            backgroundImage: `url('https://i.pinimg.com/736x/fd/0f/f3/fd0ff3e83e3404141be7667288d0f995.jpg')`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Congratulations! You have successfully completed the Quiz 🎉
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Here are your{" "}
              <span className="font-bold text-[#831238]">
                Personalized course recommendations
              </span>
            </p>
          </motion.div>

          {/* Scores Visualization Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left side: Pie Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Your Scores by Program
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }: { name: string; value: number }) =>
                      `${Math.round(value)}%`
                    }
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => [
                      `${Math.round(value)}%`,
                      "Score",
                    ]}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Right side: Vertical Clickable Tiles */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {quizResults.slice(0, 3).map((result, index) => {
                const scoreOutOf5 = (result.averageScore / 100) * 5
                const isTopMatch = index === 0

                return (
                  <Link
                    key={result.category}
                    href={`/course/${encodeURIComponent(result.category)}`}
                    className={`block p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${
                      isTopMatch
                        ? "bg-blue-50 border-blue-300 shadow-md"
                        : "bg-white border-gray-200 hover:bg-blue-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-800">
                        {result.category}
                      </h3>
                      {isTopMatch && (
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <Trophy className="h-4 w-4" />
                          Top Match
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-bold text-[#831238]">
                        {scoreOutOf5.toFixed(2)}
                        <span className="text-lg text-gray-500">/5.0</span>
                      </span>
                      <StarRating rating={scoreOutOf5} />
                    </div>
                  </Link>
                )
              })}
            </motion.div>
          </div>

          {/* Strengths & Weaknesses Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {/* Strengths */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6" />
                Strengths
              </h3>
              <div className="space-y-3">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <div className="flex-1 bg-green-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-green-500 h-full transition-all duration-1000"
                        style={{ width: `${90 - index * 10}%` }}
                      />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weaknesses */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Weaknesses
              </h3>
              <div className="space-y-3">
                {weaknesses.map((weakness, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <div className="flex-1 bg-red-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-red-500 h-full transition-all duration-1000"
                        style={{ width: `${70 - index * 15}%` }}
                      />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {weakness}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recommended Course Section - 4 Column Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-100 rounded-2xl p-8 mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              {CourseIcons[topMatch.category] || (
                <GraduationCap className="h-7 w-7 text-[#831238]" />
              )}
              <h2 className="text-3xl font-bold text-[#831238]">
                Recommended Course: {topMatch.category}
              </h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              {topMatch.placementInfo.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Column 1: Course Details */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Course Details
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">Duration:</span>
                    <br />
                    {topMatch.placementInfo.duration}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Eligibility:</span>
                    <br />
                    {topMatch.placementInfo.eligibility}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Average Salary:</span>
                    <br />
                    {topMatch.placementInfo.averageSalary}
                  </p>
                </div>
              </div>

              {/* Column 2: Specializations */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {topMatch.placementInfo.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Column 3: Career Prospects */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Career Prospects
                </h3>
                <ol className="space-y-2">
                  {topMatch.placementInfo.careerOptions
                    .slice(0, 8)
                    .map((career, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        {career}
                      </li>
                    ))}
                </ol>
              </div>

              {/* Column 4: Top Recruiters */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Top Recruiters
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {topMatch.placementInfo.recruiters
                    .slice(0, 6)
                    .map((recruiter: { name: string; logoUrl: string }) => (
                      <div key={recruiter.name} className="text-center">
                        <div className="w-12 h-12 mx-auto mb-1 rounded-full overflow-hidden bg-white border-2 border-gray-200 flex items-center justify-center">
                          <img
                            src={recruiter.logoUrl}
                            alt={recruiter.name}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <span className="text-xs text-gray-600 font-medium">
                          {recruiter.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Course Quiz Dialog */}
          {topMatch.category === "School of Computing" && (
            <AlertDialog open={courseQuizOpen} onOpenChange={setCourseQuizOpen}>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  onClick={() => setCourseQuizOpen(true)}
                  className="w-full sm:w-auto px-8 py-3 text-base font-semibold bg-blue-100 text-blue-800 border-2 border-blue-300 hover:bg-blue-200 rounded-lg mb-8"
                >
                  🎯 Find Your Perfect Computing Course
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    School of Computing Course Quiz
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Let&apos;s help you find the perfect computing course that
                    matches your interests and aspirations.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <CourseQuiz
                  program={topMatch.category}
                  onCloseAction={() => setCourseQuizOpen(false)}
                />
              </AlertDialogContent>
            </AlertDialog>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              onClick={restartQuiz}
              variant="outline"
              className="px-8 py-3 w-full sm:w-auto text-base font-semibold border-2 border-gray-400 text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-lg"
            >
              <RotateCcw className="mr-2 h-4 w-4" /> Retake Assessment
            </Button>
            <a
              href="https://feeportal.sathyabama.ac.in/account/ug-admission"
              rel="noopener noreferrer"
            >
              <Button className="px-10 py-3 w-full sm:w-auto text-base font-semibold bg-[#831238] hover:bg-[#831238] text-white shadow-lg hover:shadow-xl transition-all rounded-lg">
                Apply Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    )
  }

  return null
}
