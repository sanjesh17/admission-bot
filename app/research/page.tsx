"use client"

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, BookOpen, Award, ArrowRight, RotateCcw, TrendingUp, Star, Target, Building2, Briefcase, LineChart, GraduationCap, Lightbulb, Users, BadgeDollarSign, Trophy } from 'lucide-react'

interface Question {
  id: number
  question: string
  category: string
}

interface PlacementData {
  topCompanies: string[]
  averageCTC: string
  highestCTC: string
  careerOptions: string[]
  industryDemand: 'High' | 'Medium' | 'Low'
  skillsInDemand: string[]
  futureScope: string
}

interface PlacementInfo {
  highestCTC: string
  averageCTC: string
  topCompanies: string[]
  industryDemand: 'High' | 'Medium' | 'Low'
  careerOptions: string[]
}

interface QuizResult {
  category: string
  averageScore: number
  total: number
  recommendation: string
  color: string
  placementInfo: PlacementData
}

const PLACEMENT_DATA: Record<string, PlacementData> = {
  'Engineering Programmes (B.E. / B.Tech / B.Des)': {
    topCompanies: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Amazon', 'Microsoft'],
    averageCTC: '4.5 LPA',
    highestCTC: '45 LPA',
    careerOptions: ['Software Developer', 'System Architect', 'Data Scientist', 'DevOps Engineer', 'AI/ML Engineer'],
    industryDemand: 'High',
    skillsInDemand: ['Cloud Computing', 'AI/ML', 'Full Stack Development', 'Cybersecurity', 'IoT'],
    futureScope: 'Excellent growth prospects with emerging technologies and digital transformation'
  },
  'Medical and Health Sciences': {
    topCompanies: ['Apollo Hospitals', 'Fortis', 'Max Healthcare', 'Manipal Hospitals', 'AIIMS'],
    averageCTC: '5.0 LPA',
    highestCTC: '25 LPA',
    careerOptions: ['Clinical Practice', 'Medical Research', 'Healthcare Management', 'Telemedicine', 'Public Health'],
    industryDemand: 'High',
    skillsInDemand: ['Patient Care', 'Medical Technology', 'Healthcare Informatics', 'Clinical Research', 'Emergency Medicine'],
    futureScope: 'Growing demand in healthcare sector with focus on specialized care and research'
  },
  'Business and Management': {
    topCompanies: ['Deloitte', 'EY', 'KPMG', 'JP Morgan', 'Goldman Sachs'],
    averageCTC: '6.0 LPA',
    highestCTC: '30 LPA',
    careerOptions: ['Business Analyst', 'Investment Banking', 'Marketing Manager', 'Strategy Consultant', 'Entrepreneur'],
    industryDemand: 'High',
    skillsInDemand: ['Data Analytics', 'Digital Marketing', 'Financial Analysis', 'Project Management', 'Leadership'],
    futureScope: 'Diverse opportunities in global business landscape with focus on digital transformation'
  }
}

const LIKERT_OPTIONS = [
  { value: '1', label: 'Strongly Disagree', emoji: '😞', color: '#ff4d4d' },
  { value: '2', label: 'Disagree', emoji: '😐', color: '#ff9999' },
  { value: '3', label: 'Neutral', emoji: '😊', color: '#cccccc' },
  { value: '4', label: 'Agree', emoji: '😃', color: '#80b3ff' },
  { value: '5', label: 'Strongly Agree', emoji: '🤩', color: '#3366cc' }
]

const getMatchLevel = (score: number) => {
  if (score >= 85) return { text: 'Excellent Match', color: '#2ecc71', description: 'Your interests strongly align with this program.' }
  if (score >= 70) return { text: 'Good Match', color: '#3498db', description: 'You show promising potential for this field.' }
  if (score >= 50) return { text: 'Moderate Match', color: '#f1c40f', description: 'You might want to explore other options.' }
  return { text: 'Consider Exploring', color: '#95a5a6', description: 'You might want to explore other options that better match your interests.' }
}

const QUESTION_BANK = {
  'Engineering Programmes (B.E. / B.Tech / B.Des)': [
    { question: 'I enjoy solving complex mathematical problems and logical puzzles.' },
    { question: 'I am fascinated by how machines and technology work.' },
    { question: 'I like to build or fix things in my spare time.' },
    { question: 'I prefer structured, logical approaches to problem-solving.' },
    { question: 'I am interested in learning programming languages.' },
    { question: 'I enjoy working with computers and digital devices.' },
    { question: 'I am good at visualizing how different parts work together.' },
    { question: 'I like to understand the scientific principles behind things.' }
  ],
  'Medical and Health Sciences': [
    { question: 'I am passionate about helping people improve their health.' },
    { question: 'I enjoy learning about human anatomy and physiology.' },
    { question: 'I am comfortable working in high-pressure situations.' },
    { question: 'I have strong attention to detail and precision.' },
    { question: 'I am interested in medical research and discoveries.' },
    { question: 'I enjoy working directly with people and patients.' },
    { question: 'I am fascinated by biological sciences and chemistry.' },
    { question: 'I can handle emotionally challenging situations well.' }
  ],
  'Business and Management': [
    { question: 'I enjoy leading teams and organizing projects.' },
    { question: 'I am interested in economics and market trends.' },
    { question: 'I like analyzing data to make strategic decisions.' },
    { question: 'I am comfortable with public speaking and presentations.' },
    { question: 'I enjoy networking and building professional relationships.' },
    { question: 'I am interested in entrepreneurship and starting businesses.' },
    { question: 'I like understanding consumer behavior and marketing.' },
    { question: 'I am good at negotiating and finding win-win solutions.' }
  ]
}

const ENCOURAGEMENT_MESSAGES = [
  { text: "You're crushing it!", emoji: "🌟" },
  { text: "Keep going, future genius!", emoji: "🧠" },
  { text: "You're doing amazing!", emoji: "🚀" },
  { text: "Almost there, superstar!", emoji: "⭐" },
  { text: "You're on fire!", emoji: "🔥" },
  { text: "Fantastic progress!", emoji: "🎯" },
  { text: "You're unstoppable!", emoji: "💪" },
  { text: "Excellence in action!", emoji: "✨" }
]

export default function CourseInterestAssessment() {
  const [currentStep, setCurrentStep] = useState<'start' | 'quiz' | 'results'>('start')
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [quizResults, setQuizResults] = useState<QuizResult[]>([])
  const [recommendedCourse, setRecommendedCourse] = useState<string>('')
  const [showEncouragement, setShowEncouragement] = useState(false)
  const [encouragementMessage, setEncouragementMessage] = useState({ text: '', emoji: '' })
  const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const generateQuestions = useCallback(() => {
    const allQuestions: Question[] = []
    let questionId = 1
    
    Object.entries(QUESTION_BANK).forEach(([category, questions]) => {
      questions.forEach(q => {
        allQuestions.push({
          id: questionId++,
          question: q.question,
          category: category
        })
      })
    })
    
    // Shuffle and select 24 questions
    const shuffled = allQuestions.sort(() => Math.random() - 0.5)
    setQuestions(shuffled.slice(0, 24))
  }, [])

  const getRandomEncouragementMessage = useCallback(() => {
    return ENCOURAGEMENT_MESSAGES[Math.floor(Math.random() * ENCOURAGEMENT_MESSAGES.length)]
  }, [])

  useEffect(() => {
    if ((currentQuestionIndex + 1) % 6 === 0 && currentStep === 'quiz' && currentQuestionIndex > 0) {
      setShowEncouragement(true)
      setEncouragementMessage(getRandomEncouragementMessage())
      const timer = setTimeout(() => setShowEncouragement(false), 2500)
      return () => clearTimeout(timer)
    }
  }, [currentQuestionIndex, currentStep, getRandomEncouragementMessage])

  const startQuiz = () => {
    generateQuestions()
    setCurrentStep('quiz')
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setSelectedAnswer('')
  }

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value)
  }

  const handleNextQuestion = () => {
    if (!selectedAnswer) return
    
    setIsTransitioning(true)
    setSlideDirection(Math.random() > 0.5 ? 'left' : 'right')
    
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestionIndex] = parseInt(selectedAnswer)
    setUserAnswers(newAnswers)
    
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedAnswer('')
        setSlideDirection(Math.random() > 0.5 ? 'left' : 'right')
        setIsTransitioning(false)
      } else {
        handleQuizComplete(newAnswers)
      }
    }, 400)
  }

  const handleQuizComplete = (answers: number[]) => {
    const categoryScores: { [key: string]: { total: number; count: number } } = {}
    
    questions.forEach((question, index) => {
      if (!categoryScores[question.category]) {
        categoryScores[question.category] = { total: 0, count: 0 }
      }
      categoryScores[question.category].total += answers[index]
      categoryScores[question.category].count++
    })
    
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500']
    
    const results: QuizResult[] = Object.entries(categoryScores).map(([category, data], index) => {
      const averageScore = (data.total / (data.count * 5)) * 100 // Normalize to percentage
      return {
        category,
        averageScore,
        total: data.count,
        recommendation: getRecommendation(averageScore),
        color: colors[index % colors.length],
        placementInfo: PLACEMENT_DATA[category] || PLACEMENT_DATA['Engineering Programmes (B.E. / B.Tech / B.Des)'] // Fallback to engineering if category not found
      }
    })
    
    // Sort by score descending
    results.sort((a, b) => b.averageScore - a.averageScore)
    
    setQuizResults(results)
    setRecommendedCourse(results[0]?.category || '')
    setCurrentStep('results')
    setIsTransitioning(false)
  }

  const getRecommendation = (score: number): string => {
    if (score >= 80) return 'Excellent Match - Highly Recommended'
    if (score >= 70) return 'Very Good Match - Recommended'
    if (score >= 60) return 'Good Match - Consider This Path'
    if (score >= 50) return 'Moderate Interest - Worth Exploring'
    return 'Limited Interest - Consider Prerequisites'
  }

  const restartQuiz = () => {
    setCurrentStep('start')
    setCurrentQuestionIndex(0)
    setSelectedAnswer('')
    setUserAnswers([])
    setQuestions([])
    setQuizResults([])
    setRecommendedCourse('')
    setSlideDirection('right')
    setIsTransitioning(false)
  }

  const formatPercentage = (score: number) => {
    return `${Math.round(score)}%`
  }

  if (currentStep === 'start') {
    return (
      <div className="min-h-screen py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#800000] to-[#a00000] rounded-full mb-6">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Course Interest Assessment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover your ideal academic path through our comprehensive interest assessment designed to match your passions with the perfect course.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center gap-2 text-3xl font-bold text-gray-800">
                <Target className="h-8 w-8 text-[#800000]" />
                Assessment Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#800000] rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Duration</div>
                    <div className="text-sm text-gray-600">15-20 minutes</div>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#800000] rounded-full group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Questions</div>
                    <div className="text-sm text-gray-600">24 statements</div>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#800000] rounded-full group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Analysis</div>
                    <div className="text-sm text-gray-600">Interest-based matching</div>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#800000] rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Results</div>
                    <div className="text-sm text-gray-600">Personalized recommendations</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-800 mb-2">How it works:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Rate each statement based on how much you agree with it. Your responses will be analyzed to determine your interest levels across different course categories, helping us recommend the most suitable academic paths for you.
                </p>
              </div>
              
              <Button 
                onClick={startQuiz}
                className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#600000] hover:to-[#800000] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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

  if (currentStep === 'quiz') {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100
    
    return (
      <div className="min-h-screen py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="text-2xl font-bold text-gray-800">
                {currentQuestionIndex + 1}
              </div>
              <div className="text-gray-400">/</div>
              <div className="text-xl text-gray-600">
                {questions.length}
              </div>
            </div>
            <div className="max-w-md mx-auto">
              <Progress
                value={progress}
                className="h-3 bg-gray-200"
              />
              <div className="text-sm text-gray-600 mt-2">
                {formatPercentage(progress)} Complete
              </div>
            </div>
          </div>

          {/* Encouragement Modal */}
          {showEncouragement && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
              <div className="bg-white rounded-2xl p-8 text-center shadow-2xl transform">
                <div className="text-8xl mb-4 animate-bounce">
                  {encouragementMessage.emoji}
                </div>
                <p className="text-2xl font-bold text-[#800000] mb-2">
                  {encouragementMessage.text}
                </p>
                <p className="text-gray-600">
                  Keep up the great work!
                </p>
              </div>
            </div>
          )}

          {/* Question Card */}
          <div className="relative">
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#800000] to-[#a00000]" />
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-800 leading-relaxed">
                  {questions[currentQuestionIndex]?.question}
                </CardTitle>
                <div className="text-sm text-gray-500 mt-2">
                  Category: {questions[currentQuestionIndex]?.category}
                </div>
              </CardHeader>
              
              <CardContent className="pt-4">
                <RadioGroup
                  value={selectedAnswer}
                  onValueChange={handleAnswerSelect}
                  className="flex flex-row justify-between items-center gap-2 overflow-x-auto py-4"
                >
                  {LIKERT_OPTIONS.map((option) => (
                    <div
                      key={option.value}
                      className={`group flex flex-col items-center p-4 rounded-xl transition-all duration-300 cursor-pointer hover:bg-gray-50 min-w-[150px] ${
                        selectedAnswer === option.value 
                          ? 'bg-gradient-to-r from-[#800000]/10 to-[#a00000]/10 border-2 border-[#800000]' 
                          : 'border-2 border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleAnswerSelect(option.value)}
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={`option-${option.value}`}
                        className="sr-only"
                      />
                      <div 
                        className={`relative w-16 h-16 rounded-full flex items-center justify-center ${selectedAnswer === option.value ? 'scale-110' : ''} transition-all duration-300`}
                        style={{
                          background: `${option.color}`,
                          boxShadow: selectedAnswer === option.value ? `0 0 20px ${option.color}` : 'none'
                        }}
                      >
                        <div className="absolute inset-0 rounded-full bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 hover:bg-opacity-40">
                          <span className="text-white text-xl font-bold">{option.value}</span>
                        </div>
                      </div>
                      <div className="text-center mt-4">
                        <Label
                          htmlFor={`option-${option.value}`}
                          className={`text-lg font-medium cursor-pointer transition-colors duration-200 ${
                            selectedAnswer === option.value ? 'text-[#800000]' : 'text-gray-700'
                          }`}
                        >
                          {option.label}
                        </Label>
                      </div>
                      <div className="text-2xl">
                        {option.emoji}
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <div className="text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <Button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer || isTransitioning}
              className={`px-8 py-3 font-semibold transition-all duration-300 ${
                selectedAnswer && !isTransitioning
                  ? 'bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#600000] hover:to-[#800000] text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Complete Assessment' : 'Next Question'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 'results') {
    const topMatch = quizResults.reduce((prev, current) => 
      current.averageScore > prev.averageScore ? current : prev
    )

    return (
      <div className="min-h-screen py-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#800000] to-[#a00000] rounded-full mb-4 shadow-lg">
              <GraduationCap className="h-8 w-8 text-white" />
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-gray-900 mb-2">
              Your Career Path at Sathyabama
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base text-gray-600 max-w-2xl mx-auto">
              Based on your responses, you show strongest alignment with <span className="font-semibold text-[#800000]">{topMatch.category}</span>
            </motion.p>
          </div>

          {/* Top Recommendation with Placement Insights */}
          {quizResults.length > 0 && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <Card className="border-0 bg-gradient-to-br from-[#800000] to-[#a00000] text-white overflow-hidden shadow-xl">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl font-medium">
                    <Trophy className="h-6 w-6" />
                    Recommended Career Path
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Main Info */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{quizResults[0].category}</h3>
                        <p className="text-sm opacity-90">{quizResults[0].recommendation}</p>
                      </div>
                      <div className="flex items-center gap-4 bg-white/10 rounded-lg px-6 py-3">
                        <div className="text-center">
                          <div className="text-4xl font-bold">{formatPercentage(quizResults[0].averageScore)}</div>
                          <div className="text-xs opacity-90">Match Score</div>
                        </div>
                      </div>
                    </div>

                    {/* Placement Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <BadgeDollarSign className="h-5 w-5" />
                          <h4 className="font-semibold">Package Details</h4>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm">Highest: {quizResults[0].placementInfo.highestCTC}</p>
                          <p className="text-sm">Average: {quizResults[0].placementInfo.averageCTC}</p>
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="h-5 w-5" />
                          <h4 className="font-semibold">Top Recruiters</h4>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {quizResults[0].placementInfo.topCompanies.slice(0, 3).map((company, index) => (
                            <span key={index} className="text-xs bg-white/20 rounded px-2 py-1">{company}</span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-5 w-5" />
                          <h4 className="font-semibold">Industry Demand</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{quizResults[0].placementInfo.industryDemand}</span>
                          <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-white" 
                              style={{ 
                                width: quizResults[0].placementInfo.industryDemand === 'High' ? '100%' : 
                                       quizResults[0].placementInfo.industryDemand === 'Medium' ? '66%' : '33%' 
                              }} 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* All Results */}
          <div className="grid gap-4">
            {quizResults.map((result, index) => {
              const matchLevel = getMatchLevel(result.averageScore)
              return (
                <motion.div
                  key={result.category}
                  initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card 
                    className={`shadow-md border-0 bg-white/95 backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
                      index === 0 ? 'ring-1 ring-[#800000]' : ''
                    }`}
                  >
                    <CardHeader className="py-3">
                      <CardTitle className="flex items-center justify-between text-base">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: matchLevel.color }} />
                          <span className="font-medium">{result.category}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-lg font-bold" style={{ color: matchLevel.color }}>
                            {formatPercentage(result.averageScore)}
                          </div>
                          <span className="text-xs px-2 py-1 rounded-full" 
                            style={{ backgroundColor: matchLevel.color + '20', color: matchLevel.color }}>
                            {matchLevel.text}
                          </span>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="relative h-1.5">
                          <div className="absolute inset-0 bg-gray-100 rounded-full" />
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${result.averageScore}%` }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: matchLevel.color }}
                          />
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <p className="text-gray-600 text-xs">{matchLevel.description}</p>
                          <div className="text-xs text-gray-400">
                            {result.total} questions
                          </div>
                        </div>

                        {/* Career & Placement Insights */}
                        <div className="pt-4 border-t border-gray-100">
                          <div className="grid grid-cols-2 gap-4">
                            {/* Package Info */}
                            <div>
                              <div className="flex items-center gap-2 mb-2 text-[#800000]">
                                <BadgeDollarSign className="h-4 w-4" />
                                <h4 className="text-sm font-semibold">Package</h4>
                              </div>
                              <div className="space-y-1">
                                <p className="text-xs text-gray-600">Highest: <span className="font-medium text-gray-900">{result.placementInfo.highestCTC}</span></p>
                                <p className="text-xs text-gray-600">Average: <span className="font-medium text-gray-900">{result.placementInfo.averageCTC}</span></p>
                              </div>
                            </div>

                            {/* Industry Demand */}
                            <div>
                              <div className="flex items-center gap-2 mb-2 text-[#800000]">
                                <TrendingUp className="h-4 w-4" />
                                <h4 className="text-sm font-semibold">Demand</h4>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-gray-900">{result.placementInfo.industryDemand}</span>
                                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-[#800000]" 
                                    style={{ 
                                      width: result.placementInfo.industryDemand === 'High' ? '100%' : 
                                             result.placementInfo.industryDemand === 'Medium' ? '66%' : '33%' 
                                    }} 
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Top Companies */}
                          <div className="mt-4">
                            <div className="flex items-center gap-2 mb-2 text-[#800000]">
                              <Building2 className="h-4 w-4" />
                              <h4 className="text-sm font-semibold">Top Recruiters</h4>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {result.placementInfo.topCompanies.slice(0, 3).map((company, index) => (
                                <span key={index} className="text-xs bg-gray-100 text-gray-700 rounded px-2 py-0.5">{company}</span>
                              ))}
                            </div>
                          </div>

                          {/* Career Options */}
                          <div className="mt-4">
                            <div className="flex items-center gap-2 mb-2 text-[#800000]">
                              <Briefcase className="h-4 w-4" />
                              <h4 className="text-sm font-semibold">Career Options</h4>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {result.placementInfo.careerOptions.slice(0, 3).map((option, index) => (
                                <span key={index} className="text-xs bg-gray-100 text-gray-700 rounded px-2 py-0.5">{option}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Action Buttons & Summary */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <div className="flex justify-center mb-6">
              <Button
                onClick={restartQuiz}
                className="px-6 py-2 text-sm font-medium bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#600000] hover:to-[#800000] text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-102"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Retake Assessment
              </Button>
            </div>

            <Card className="shadow-md border-0 bg-gray-50/50">
              <CardContent className="py-4 text-center">
                <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
                  Analysis based on {questions.length} statements. Percentages show course alignment with your interests.
                  Consider exploring recommended paths while keeping in mind that interests can evolve.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    )
  }

  return null
}