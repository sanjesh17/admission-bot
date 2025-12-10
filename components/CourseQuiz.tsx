"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, RotateCcw } from "lucide-react"
import { PROGRAM_COURSES } from "@/app/research/courseQuizData"

interface Question {
  question: string
  category: string
  type?: "behavioral" | "technical"
  // technical fields
  options?: string[]
  correctIndex?: number
}

interface QuizResult {
  category: string
  averageScore: number
  total: number
  technicalCorrect?: number
  technicalTotal?: number
}

const LIKERT_OPTIONS = [
  { value: "1", label: "Strongly Disagree", emoji: "😞", color: "bg-red-400" },
  { value: "2", label: "Disagree", emoji: "😐", color: "bg-orange-400" },
  { value: "3", label: "Neutral", emoji: "😊", color: "bg-yellow-400" },
  { value: "4", label: "Agree", emoji: "😃", color: "bg-blue-400" },
  { value: "5", label: "Strongly Agree", emoji: "🌟", color: "bg-green-400" },
]

export default function CourseQuiz({
  program,
  onCloseAction,
}: {
  program: string
  onCloseAction: () => void
}): JSX.Element | null {
  const [currentStep, setCurrentStep] = useState<
    "start" | "courseSelect" | "quiz" | "results"
  >("start")
  const [selectedCourses, setSelectedCourses] = useState<string[]>([])
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [quizResults, setQuizResults] = useState<QuizResult[]>([])
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)

  const availableCourses = PROGRAM_COURSES[program]?.courses || []
  const courseQuestions = PROGRAM_COURSES[program]?.questionsData || {}

  const handleCourseSelect = (course: string) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course))
    } else if (selectedCourses.length < 3) {
      setSelectedCourses([...selectedCourses, course])
    }
  }

  const generateQuestions = useCallback((): void => {
    const allQuestions: Question[] = []
    selectedCourses.forEach((course) => {
      const courseData = courseQuestions[course]
      if (courseData) {
        // push behavioral questions
        allQuestions.push(
          ...courseData.questions.map((q) => ({
            question: q.question,
            category: q.category,
            type: "behavioral" as const,
          }))
        )
        // push technical multiple-choice questions (if provided)
        if (Array.isArray(courseData.technicalQuestions)) {
          allQuestions.push(
            ...courseData.technicalQuestions.map((tq) => ({
              question: tq.question,
              category: tq.category,
              type: "technical" as const,
              options: tq.options,
              correctIndex: tq.correctIndex,
            }))
          )
        }
      }
    })

    const shuffled = allQuestions.sort(() => Math.random() - 0.5)
    setQuestions(shuffled)
  }, [selectedCourses, courseQuestions])

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
    if (selectedAnswer === "") return
    setIsTransitioning(true)
    const newAnswers = [...userAnswers]
    // store numeric values:
    // - behavioral answers: 1..5
    // - technical answers: store selected option index (0..)
    newAnswers[currentQuestionIndex] = parseInt(selectedAnswer)
    setUserAnswers(newAnswers)

    if (currentQuestionIndex === questions.length - 1) {
      calculateResults(newAnswers)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer("")
    }
    setIsTransitioning(false)
  }

  const calculateResults = (answers: number[]): void => {
    const categoryScores: {
      [key: string]: { total: number; count: number }
    } = {}
    const categoryTechnical: {
      [key: string]: { correct: number; total: number }
    } = {}

    questions.forEach((q, index) => {
      const raw = answers[index]
      // determine numeric score 1..5 for both types
      let scoreValue = 0
      if (q.type === "technical") {
        // raw is selected option index; compare to correctIndex
        const correct = q.correctIndex ?? -1
        const isCorrect = raw === correct
        scoreValue = isCorrect ? 5 : 1
        if (!categoryTechnical[q.category]) {
          categoryTechnical[q.category] = { correct: 0, total: 0 }
        }
        categoryTechnical[q.category].total += 1
        if (isCorrect) categoryTechnical[q.category].correct += 1
      } else {
        // behavioral (1..5)
        scoreValue = raw || 0
      }

      if (!categoryScores[q.category]) {
        categoryScores[q.category] = { total: 0, count: 0 }
      }
      categoryScores[q.category].total += scoreValue
      categoryScores[q.category].count += 1
    })

    const results: QuizResult[] = Object.entries(categoryScores).map(
      ([category, data]) => {
        const averageScore =
          data.count > 0 ? (data.total / (data.count * 5)) * 100 : 0
        const tech = categoryTechnical[category] || { correct: 0, total: 0 }
        return {
          category,
          averageScore,
          total: data.count,
          technicalCorrect: tech.correct,
          technicalTotal: tech.total,
        }
      }
    )

    results.sort((a, b) => b.averageScore - a.averageScore)
    setQuizResults(results)
    setCurrentStep("results")
  }

  const restartQuiz = (): void => {
    setCurrentStep("start")
    setSelectedCourses([])
    setCurrentQuestionIndex(0)
    setSelectedAnswer("")
    setUserAnswers([])
    setQuestions([])
    setQuizResults([])
  }

  if (currentStep === "start") {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-6"
              >
                <h1 className="text-3xl font-bold text-gray-900">
                  Discover Your Ideal Course in {program}
                </h1>
                <p className="text-gray-600">
                  Let's find the perfect course that matches your interests and
                  aspirations.
                </p>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    How it works:
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    1. Select up to 3 courses you're interested in
                    <br />
                    2. Answer questions about your preferences
                    <br />
                    3. Get personalized course recommendations
                  </p>
                </div>
                <Button
                  onClick={() => setCurrentStep("courseSelect")}
                  className="w-full py-4 text-lg font-semibold bg-[#831238] hover:bg-[#831238] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Select Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (currentStep === "courseSelect") {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Select Up to 3 Courses
                </h2>
                <p className="text-gray-600 mt-2">
                  Choose the courses you're most interested in
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {availableCourses.map((course) => (
                  <Card
                    key={course}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedCourses.includes(course)
                        ? "border-2 border-[#831238] shadow-lg"
                        : "border hover:border-gray-300"
                    }`}
                    onClick={() => handleCourseSelect(course)}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{course}</CardTitle>
                      <CardDescription>
                        {courseQuestions[course]?.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep("start")}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button
                  onClick={startQuiz}
                  disabled={selectedCourses.length === 0}
                  className="bg-[#831238] hover:bg-[#831238]"
                >
                  Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (currentStep === "quiz") {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100
    const questionVariants = {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -50 },
    }

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl mx-auto">
          {/* Progress Bar and Question Number */}
          <div className="mb-8 flex items-center justify-center space-x-4">
            <div className="text-2xl font-bold text-gray-800">
              {currentQuestionIndex + 1} / {questions.length}
            </div>
            <div className="w-64 bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#831238] rounded-full h-2 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-sm text-gray-600">
              {Math.round(progress)}% Complete
            </div>
          </div>

          <Card className="rounded-xl shadow-lg border-none">
            <CardContent className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestionIndex}
                  variants={questionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-8"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {questions[currentQuestionIndex]?.question}
                    </h3>
                    {questions[currentQuestionIndex]?.category && (
                      <p className="text-sm text-gray-500">
                        Category: {questions[currentQuestionIndex]?.category}
                      </p>
                    )}
                  </div>

                  {questions[currentQuestionIndex]?.type === "behavioral" ? (
                    <div className="grid grid-cols-5 gap-4">
                      {LIKERT_OPTIONS.map((option) => (
                        <Button
                          key={option.value}
                          variant="outline"
                          className={`flex flex-col items-center justify-center p-4 h-28 rounded-xl transition-all duration-200 ${
                            selectedAnswer === option.value
                              ? "border-2 border-blue-500 bg-blue-50 text-blue-700 shadow-md"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                          onClick={() => handleAnswerSelect(option.value)}
                        >
                          <span className="text-3xl mb-1">
                            {option.emoji === "🌟" ? "😁" : option.emoji}
                          </span>
                          <span className="text-lg font-medium">
                            {option.value}
                          </span>
                          <span className="text-xs text-gray-600 text-center mt-1">
                            {option.label.split(" ").map((word, index) => (
                              <div key={index}>{word}</div>
                            ))}
                          </span>
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-3">
                      {questions[currentQuestionIndex]?.options?.map(
                        (opt: string, idx: number) => (
                          <Button
                            key={idx}
                            variant={
                              selectedAnswer === String(idx)
                                ? "default"
                                : "outline"
                            }
                            className={`text-left p-4 rounded-lg transition-colors ${
                              selectedAnswer === String(idx)
                                ? "bg-blue-50 border-blue-500 text-blue-700"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                            onClick={() => handleAnswerSelect(String(idx))}
                          >
                            <div className="flex items-center justify-between">
                              <div className="text-sm">{opt}</div>
                              {selectedAnswer === String(idx) && (
                                <div className="text-xs text-blue-600 font-medium">
                                  Selected
                                </div>
                              )}
                            </div>
                          </Button>
                        )
                      )}
                    </div>
                  )}

                  <div className="flex justify-end pt-4">
                    <Button
                      onClick={handleNextQuestion}
                      disabled={!selectedAnswer || isTransitioning}
                      className="bg-[#831238] hover:bg-[#831238] text-white px-6 py-3 rounded-lg text-lg"
                    >
                      Next Question
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (currentStep === "results") {
    const topResult = quizResults[0]
    const courseData = courseQuestions[topResult.category]

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              We Found Your Perfect Match! 🎉
            </h1>
            <p className="text-xl text-gray-600">
              Based on your responses, we recommend:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-[#831238] mb-4">
              {courseData?.courseName}
            </h2>
            <p className="text-gray-600 mb-6">{courseData?.description}</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Match Score</h3>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-[#831238] rounded-full h-4"
                    style={{ width: `${topResult.averageScore}%` }}
                  />
                </div>
                <span className="ml-4 font-semibold">
                  {Math.round(topResult.averageScore)}%
                </span>
              </div>
            </div>
            {topResult.technicalTotal && topResult.technicalTotal > 0 && (
              <div className="bg-white mt-4 p-4 rounded-lg border">
                <h4 className="font-medium mb-2">Technical Questions</h4>
                <p className="text-sm text-gray-700">
                  Correct: {topResult.technicalCorrect ?? 0} /{" "}
                  {topResult.technicalTotal}{" "}
                  {topResult.technicalTotal > 0 && (
                    <span className="text-sm text-gray-500">
                      (
                      {Math.round(
                        ((topResult.technicalCorrect ?? 0) /
                          topResult.technicalTotal) *
                          100
                      )}
                      % )
                    </span>
                  )}
                </p>
              </div>
            )}
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              onClick={restartQuiz}
              variant="outline"
              className="px-8 py-3 w-full sm:w-auto text-base font-semibold border-2 border-gray-400 text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-lg"
            >
              <RotateCcw className="mr-2 h-4 w-4" /> Try Again
            </Button>
            <Button
              onClick={onCloseAction}
              className="px-8 py-3 w-full sm:w-auto text-base font-semibold bg-[#831238] hover:bg-[#831238] text-white rounded-lg"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
