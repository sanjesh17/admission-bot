"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  BookOpen,
  Calendar,
  GraduationCap,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigation } from "react-day-picker"

const StudentCounseling = () => {
  const [open, setOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState("info")
  const [selectedDate, setSelectedDate] = useState(null)
  const [formData, setFormData] = useState({
    studentName: "",
    studentPhone: "",
    tenthMarks: "",
    twelfthMarks: "",
    emailId: "",
    hasEntranceExam: false,
    entranceExamName: "",
    entranceExamScore: "",
    courseAfterTenth: "",
    selectedCourses: [] as string[],
  })

  // ... existing code ...

  const programOptions = [
    "School of Computing",
    "School of Building and Environment",
    "School of Pharmacy",
    "School of Nursing",
    "School of Physiotherapy",
    "School of Dental Sciences",
    "School of Law",
    "School of Science & Humanities",
    "School of Management Studies",
    "School of Allied Health Sciences",
    "School of Bio and Chemical Engineering",
    "School of Mechanical",
    "School of Electrical and Electronics",
  ]

  const streamToPrograms = {
    science: [
      "School of Computing",
      "School of Building and Environment",
      "School of Pharmacy",
      "School of Nursing",
      "School of Physiotherapy",
      "School of Dental Sciences",
      "School of Science & Humanities",
      "School of Allied Health Sciences",
      "School of Bio and Chemical Engineering",
      "School of Mechanical",
      "School of Electrical and Electronics",
    ],
    commerce: ["School of Management Studies", "School of Law"],
    arts: [
      "School of Law",
      "School of Management Studies",
      "School of Science & Humanities",
    ],
    diploma: [
      "School of Building and Environment",
      "School of Mechanical",
      "School of Electrical and Electronics",
      "School of Bio and Chemical Engineering",
    ],
    iti: ["School of Allied Health Sciences", "School of Nursing"],
    other: programOptions,
  }

  // Add this function to get filtered programs
  const getFilteredPrograms = () => {
    if (!formData.courseAfterTenth) return programOptions
    return (
      streamToPrograms[
        formData.courseAfterTenth as keyof typeof streamToPrograms
      ] || programOptions
    )
  }

  const filteredPrograms = getFilteredPrograms()

  // ... existing code ...

  // Open the dialog automatically when component mounts
  const pathname = usePathname()

  // Open the dialog automatically when component mounts
  useEffect(() => {
    // Small delay to ensure it doesn't interfere with initial page load
    if (pathname === "/") {
      const timer = setTimeout(() => {
        setOpen(true)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [pathname]) // Empty dependency array is correct, as we only want this logic to run on mount
  // =================================================================

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => {
      // Reset selected courses if the stream is changed
      if (name === "courseAfterTenth") {
        return { ...prev, [name]: value, selectedCourses: [] }
      }
      return { ...prev, [name]: value }
    })
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      hasEntranceExam: checked,
      // Reset entrance exam fields if unchecked
      entranceExamName: checked ? prev.entranceExamName : "",
      entranceExamScore: checked ? prev.entranceExamScore : "",
    }))
  }

  const handleCourseSelection = (course: string) => {
    setFormData((prev) => {
      // If already selected, remove it
      if (prev.selectedCourses.includes(course)) {
        return {
          ...prev,
          selectedCourses: prev.selectedCourses.filter((c) => c !== course),
        }
      }

      // Prevent selecting more than 3
      if (prev.selectedCourses.length >= 3) {
        alert("You can select a maximum of 3 programs.")
        return prev
      }

      // Add the new selection
      return {
        ...prev,
        selectedCourses: [...prev.selectedCourses, course],
      }
    })
  }

  const handleSubmitInfo = () => {
    setCurrentStep("courseSelection")
  }

  const handleSubmitCourses = () => {
    localStorage.setItem("courses", JSON.stringify(formData.selectedCourses))
    setCurrentStep("results")
  }

  const isInfoComplete = () => {
    return (
      formData.studentName !== "" &&
      formData.studentPhone !== "" &&
      formData.tenthMarks !== "" &&
      formData.twelfthMarks !== "" &&
      formData.emailId !== "" &&
      formData.courseAfterTenth !== "" &&
      (!formData.hasEntranceExam ||
        (formData.entranceExamName !== "" && formData.entranceExamScore !== ""))
    )
  }

  const isCourseSelectionComplete = () => {
    return (
      formData.selectedCourses.length >= 1 &&
      formData.selectedCourses.length <= 3
    )
  }

  const storeInfo = async () => {
    const info = {
      studentName: formData.studentName,
      studentPhone: formData.studentPhone,
      tenthMarks: formData.tenthMarks,
      twelfthMarks: formData.twelfthMarks,
      emailId: formData.emailId,
      studentStream: formData.courseAfterTenth,
      studentPrograms: formData.selectedCourses,
    }
    try {
      const response = await fetch(`${process.env.API_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })

      window.location.href = "/research"

      if (!response.ok) {
        throw new Error("Failed to store information")
      }
    } catch (error) {
      console.error("Error storing information:", error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-[#800000]">
            <GraduationCap className="h-5 w-5" />
            Student Counseling Services
          </DialogTitle>
          <DialogDescription>
            Get personalized guidance for your academic journey
          </DialogDescription>
        </DialogHeader>

        {currentStep === "info" && (
          <div className="space-y-4 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="studentName">Student Name *</Label>
                <Input
                  id="studentName"
                  name="studentName"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.studentName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="studentPhone">Student Phone *</Label>
                <Input
                  id="studentPhone"
                  name="studentPhone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.studentPhone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tenthMarks">10th Marks (%)</Label>
                  <Input
                    id="tenthMarks"
                    name="tenthMarks"
                    type="number"
                    placeholder="e.g. 85"
                    value={formData.tenthMarks}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twelfthMarks">12th Marks (%)</Label>
                  <Input
                    id="twelfthMarks"
                    name="twelfthMarks"
                    type="number"
                    placeholder="e.g. 90"
                    value={formData.twelfthMarks}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <div className="space-y-2">
                  <Label htmlFor="emailId">Email ID *</Label>
                  <Input
                    id="emailId"
                    name="emailId"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.emailId}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="courseAfterTenth">Course after 10th</Label>
                <Select
                  value={formData.courseAfterTenth}
                  onValueChange={(value) =>
                    handleSelectChange("courseAfterTenth", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="science">Science (PCM/PCB)</SelectItem>
                    <SelectItem value="commerce">Commerce</SelectItem>
                    <SelectItem value="arts">Arts/Humanities</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="iti">ITI</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <Checkbox
                  id="hasEntranceExam"
                  checked={formData.hasEntranceExam}
                  onCheckedChange={handleCheckboxChange}
                />
                <Label htmlFor="hasEntranceExam">
                  I have taken an entrance exam
                </Label>
              </div>

              {formData.hasEntranceExam && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="entranceExamName">Entrance Exam Name</Label>
                    <Select
                      value={formData.entranceExamName}
                      onValueChange={(value) =>
                        handleSelectChange("entranceExamName", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select exam" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jee">JEE Main/Advanced</SelectItem>
                        <SelectItem value="neet">NEET</SelectItem>
                        <SelectItem value="bitsat">BITSAT</SelectItem>
                        <SelectItem value="viteee">VITEEE</SelectItem>
                        <SelectItem value="srmjeee">SRMJEEE</SelectItem>
                        <SelectItem value="comedk">COMEDK</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="entranceExamScore">
                      Entrance Exam Score/Rank
                    </Label>
                    <Input
                      id="entranceExamScore"
                      name="entranceExamScore"
                      placeholder="Enter score or rank"
                      value={formData.entranceExamScore}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              <Button
                className="w-full bg-[#800000] hover:bg-[#600000] mt-4"
                onClick={handleSubmitInfo}
                disabled={!isInfoComplete()}
              >
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {currentStep === "courseSelection" && (
          <div className="space-y-4 py-4">
            <div className="space-y-4">
              <h3 className="font-medium text-center">
                Select 3 Programs of Interest
              </h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Choose any 3 programs you are interested in pursuing
              </p>
              <div className="grid grid-cols-2 gap-3">
                {filteredPrograms.map((program) => (
                  <Card
                    key={program}
                    className={`cursor-pointer transition-all ${
                      formData.selectedCourses.includes(program)
                        ? "border-[#800000] bg-[#800000]/10"
                        : ""
                    }`}
                    onClick={() => handleCourseSelection(program)}
                  >
                    <CardContent className="p-3 flex items-center justify-between">
                      <span className="text-sm">{program}</span>
                      {formData.selectedCourses.includes(program) && (
                        <Checkbox
                          checked={true}
                          className="pointer-events-none"
                        />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep("info")}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back
                </Button>

                <Button
                  className="bg-[#800000] hover:bg-[#600000]"
                  onClick={handleSubmitCourses}
                  disabled={!isCourseSelectionComplete()}
                >
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                Selected: {formData.selectedCourses.length}/3 programs
              </div>
            </div>
          </div>
        )}

        {currentStep === "results" && (
          <div className="space-y-4 py-4">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Your Selected Programs
              </h3>

              <ul className="list-disc list-inside space-y-2 text-sm">
                {formData.selectedCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-border">
                <h4 className="font-medium mb-2">Next Steps:</h4>
                <p className="text-sm">
                  Our counselors will analyze your profile and provide
                  personalized recommendations for these programs. Schedule a
                  one-on-one session for detailed guidance.
                </p>
              </div>
            </div>

            <Button
              className="w-full bg-[#800000] hover:bg-[#600000]"
              onClick={storeInfo}
            >
              Schedule Counseling Session
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setCurrentStep("courseSelection")}
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Program Selection
            </Button>
          </div>
        )}

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default StudentCounseling
