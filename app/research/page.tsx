"use client";
import Link from "next/link";
import { QUESTION_BANK, PLACEMENT_DATA } from "./data";
import type { PlacementData } from "./data"; // Import the type for use in our interfaces
import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";

// --- INTERFACES (Specific to this page's state) ---

interface Question {
  id: number;
  question: string;
  category: string;
}

interface QuizResult {
  category: string;
  averageScore: number;
  total: number;
  placementInfo: PlacementData; // This type is imported from './data'
}

// --- CONSTANTS ---

const LIKERT_OPTIONS = [
  { value: "1", label: "Strongly Disagree", emoji: "😞", color: "bg-red-400" },
  { value: "2", label: "Disagree", emoji: "😐", color: "bg-orange-400" },
  { value: "3", label: "Neutral", emoji: "😊", color: "bg-yellow-400" },
  { value: "4", label: "Agree", emoji: "😃", color: "bg-blue-400" },
  { value: "5", label: "Strongly Agree", emoji: "🤩", color: "bg-indigo-500" },
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
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
  );
};

// --- MAIN COMPONENT ---

export default function CourseInterestAssessment() {
  const [currentStep, setCurrentStep] = useState<"start" | "quiz" | "results">(
    "start"
  );
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [totalQuestionCount, setTotalQuestionCount] = useState(0);

  const generateQuestions = useCallback(() => {
    const allQuestions: Question[] = [];
    let questionId = 1;

    const storedCoursesRaw =
      typeof window !== "undefined" ? localStorage.getItem("courses") : null;
    let activeCategories: string[] = [];

    if (storedCoursesRaw) {
      try {
        const parsedCourses: string[] = JSON.parse(storedCoursesRaw);
        if (Array.isArray(parsedCourses) && parsedCourses.length > 0) {
          const allProgramKeys = Object.keys(QUESTION_BANK);
          parsedCourses.forEach((courseName) => {
            const matchingKey = allProgramKeys.find((key) =>
              courseName.includes(key)
            );
            if (matchingKey && !activeCategories.includes(matchingKey)) {
              activeCategories.push(matchingKey);
            }
          });
        }
      } catch (e) {
        console.error("Error parsing courses from localStorage", e);
      }
    }

    if (activeCategories.length === 0) {
      console.log(
        "No courses found in localStorage or failed to parse. Using all question categories as a fallback."
      );
      activeCategories = Object.keys(QUESTION_BANK);
    }

    activeCategories.forEach((category) => {
      const categoryQuestions = QUESTION_BANK[
        category as keyof typeof QUESTION_BANK
      ].map((q) => ({
        id: questionId++,
        question: q.question,
        category: category,
      }));
      allQuestions.push(...categoryQuestions);
    });

    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setTotalQuestionCount(shuffled.length);
  }, []);

  const startQuiz = () => {
    generateQuestions();
    setCurrentStep("quiz");
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedAnswer("");
  };

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) return;
    setIsTransitioning(true);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = parseInt(selectedAnswer);
    setUserAnswers(newAnswers);
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer("");
        setIsTransitioning(false);
      } else {
        handleQuizComplete(newAnswers);
      }
    }, 300);
  };

  const handleQuizComplete = (answers: number[]) => {
    const categoryScores: { [key: string]: { total: number; count: number } } =
      {};

    const activeCategories = [...new Set(questions.map((q) => q.category))];

    activeCategories.forEach((category) => {
      categoryScores[category] = { total: 0, count: 0 };
    });

    questions.forEach((question, index) => {
      if (categoryScores[question.category]) {
        categoryScores[question.category].total += answers[index];
        categoryScores[question.category].count++;
      }
    });

    const results: QuizResult[] = Object.entries(categoryScores).map(
      ([category, data]) => {
        const placementInfo =
          PLACEMENT_DATA[category as keyof typeof PLACEMENT_DATA];
        const averageScore =
          data.count > 0 ? (data.total / (data.count * 5)) * 100 : 0;
        return {
          category,
          averageScore,
          total: data.count,
          placementInfo,
        };
      }
    );

    results.sort((a, b) => b.averageScore - a.averageScore);
    setQuizResults(results);
    setCurrentStep("results");
    setIsTransitioning(false);
  };

  const restartQuiz = () => {
    setCurrentStep("start");
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setUserAnswers([]);
    setQuestions([]);
    setQuizResults([]);
    setIsTransitioning(false);
  };

  useEffect(() => {
    const storedCoursesRaw = localStorage.getItem("courses");
    let activeCategories: string[] = [];

    if (storedCoursesRaw) {
      try {
        const parsedCourses: string[] = JSON.parse(storedCoursesRaw);
        if (Array.isArray(parsedCourses) && parsedCourses.length > 0) {
          const allProgramKeys = Object.keys(QUESTION_BANK);
          parsedCourses.forEach((courseName) => {
            const matchingKey = allProgramKeys.find((key) =>
              courseName.includes(key)
            );
            if (matchingKey && !activeCategories.includes(matchingKey)) {
              activeCategories.push(matchingKey);
            }
          });
        }
      } catch (e) {
        console.error("Error parsing courses from localStorage", e);
      }
    }

    if (activeCategories.length === 0) {
      activeCategories = Object.keys(QUESTION_BANK);
    }

    let count = 0;
    activeCategories.forEach((category) => {
      count += QUESTION_BANK[category as keyof typeof QUESTION_BANK].length;
    });
    setTotalQuestionCount(count);
  }, []);

  const formatPercentage = (score: number) => {
    return `${Math.round(score)}%`;
  };

  // --- START PAGE ---
  if (currentStep === "start") {
    return (
      <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-purple-50/20 via-white to-blue-50/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#8B0000] rounded-full mb-6 shadow-lg">
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
                <Target className="h-7 w-7 text-[#8B0000]" />
                Assessment Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 px-6 sm:px-8 pb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#8B0000] rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Duration</div>
                    <div className="text-sm text-gray-600">~15 minutes</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-100">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#8B0000] rounded-full flex-shrink-0">
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
                  <div className="flex items-center justify-center w-12 h-12 bg-[#8B0000] rounded-full flex-shrink-0">
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
                  <div className="flex items-center justify-center w-12 h-12 bg-[#8B0000] rounded-full flex-shrink-0">
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
                className="w-full py-4 text-lg font-semibold bg-[#8B0000] hover:bg-[#700000] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Begin Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // --- QUIZ PAGE ---
  if (currentStep === "quiz") {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    const questionVariants = {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -50 },
    };

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
                className="h-2 bg-gray-200 [&>div]:bg-[#8B0000]"
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
                <div className="h-1.5 bg-[#8B0000]" />
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
                            ? "bg-blue-50 border-[#8B0000] shadow-lg"
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
                  ? "bg-[#8B0000] hover:bg-[#700000] shadow-md hover:shadow-lg"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Next Question
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // --- RESULTS PAGE ---
  if (currentStep === "results") {
    if (!quizResults.length) return null; // Prevent rendering if results are not ready
    const topMatch = quizResults[0];
    const CourseIcons: { [key: string]: React.ReactNode } = {
      "Law Programmes": <Gavel className="h-7 w-7 text-[#8B0000]" />,
      "Pharmacy Programmes": <Pill className="h-7 w-7 text-[#8B0000]" />,
      "Engineering Programmes": <HardHat className="h-7 w-7 text-[#8B0000]" />,
      "Architecture Programmes": <Home className="h-7 w-7 text-[#8B0000]" />,
      "Nursing Programmes": <HeartPulse className="h-7 w-7 text-[#8B0000]" />,
      "Physiotherapy Programmes": (
        <PersonStanding className="h-7 w-7 text-[#8B0000]" />
      ),
      "Dental Programmes": <Stethoscope className="h-7 w-7 text-[#8B0000]" />, // Using Stethoscope as a proxy for dental
      "Arts, Science and Humanities Programmes": (
        <Palette className="h-7 w-7 text-[#8B0000]" />
      ),
    };

    return (
      <div
        className="min-h-screen py-12 px-4"
        style={{ backgroundColor: "#f0f7f7" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Assessment Results
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Based on your responses, here are your personalized results and
              recommendations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {quizResults.slice(0, 3).map((result) => {
              if (!result.placementInfo) return null; // Safety check
              const isTopMatch = result.category === topMatch.category;
              const scoreOutOf5 = (result.averageScore / 100) * 5;
              return (
                <Link
                  key={result.category}
                  href={`/course/${encodeURIComponent(result.category)}`}
                  passHref
                >
                  <Card
                    className={`relative bg-white text-center p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full cursor-pointer ${
                      isTopMatch ? "border-2 border-[#8B0000]" : "border"
                    }`}
                  >
                    {isTopMatch && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8B0000] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Trophy className="h-4 w-4" /> Top Match
                      </div>
                    )}
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl font-bold text-gray-800">
                        {result.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex flex-col items-center gap-4">
                      <div className="font-extrabold text-5xl text-gray-800">
                        {scoreOutOf5.toFixed(2)}
                        <span className="text-3xl text-gray-500">/5.0</span>
                      </div>
                      <StarRating rating={scoreOutOf5} />
                      <div className="w-full text-left">
                        <p className="text-sm font-medium text-gray-600">
                          Overall Score: {formatPercentage(result.averageScore)}
                        </p>
                        <Progress
                          value={result.averageScore}
                          className="h-2 mt-1 [&>div]:bg-[#8B0000]"
                        />
                      </div>
                      <p className="text-sm text-gray-500">
                        {result.total} questions answered
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-200/80"
          >
            <h2 className="text-3xl font-bold text-[#8B0000] flex items-center gap-3 mb-2">
              {CourseIcons[topMatch.category] || (
                <GraduationCap className="h-7 w-7 text-[#8B0000]" />
              )}
              Recommended Course: {topMatch.category}
            </h2>
            <p className="text-gray-600 mb-10 max-w-4xl text-base">
              {topMatch.placementInfo.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Course Details
                  </h3>
                  <div className="space-y-3 text-base">
                    <p className="text-gray-700">
                      <span className="font-bold text-gray-900">Duration:</span>{" "}
                      {topMatch.placementInfo.duration}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-bold text-gray-900">
                        Eligibility:
                      </span>{" "}
                      {topMatch.placementInfo.eligibility}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-bold text-gray-900">
                        Average Salary:
                      </span>{" "}
                      {topMatch.placementInfo.averageSalary}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Specializations
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {topMatch.placementInfo.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Career Prospects
                  </h3>
                  <ul className="space-y-3">
                    {topMatch.placementInfo.careerOptions.map((prospect) => (
                      <li
                        key={prospect}
                        className="flex items-center gap-3 text-base text-gray-700"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        {prospect}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Top Recruiters
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {topMatch.placementInfo.recruiters.map((rec) => (
                      <span
                        key={rec.name}
                        className="flex items-center gap-2 bg-green-100 text-green-900 text-sm font-semibold pl-2 pr-4 py-1.5 rounded-full"
                      >
                        <img
                          src={rec.logoUrl}
                          alt={`${rec.name} logo`}
                          className="h-6 w-6 rounded-full bg-white object-contain"
                        />
                        {rec.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <Button
              onClick={restartQuiz}
              variant="outline"
              className="px-8 py-3 w-full sm:w-auto text-base font-semibold border-2 border-gray-400 text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-lg"
            >
              <RotateCcw className="mr-2 h-4 w-4" /> Retake Assessment
            </Button>
            <Button className="px-10 py-3 w-full sm:w-auto text-base font-semibold bg-[#8B0000] hover:bg-[#700000] text-white shadow-lg hover:shadow-xl transition-all rounded-lg">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
