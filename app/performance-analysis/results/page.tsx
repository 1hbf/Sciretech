"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Download,
  FileText,
  Play,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ChevronRight,
  Video,
  Loader2,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Default performance metrics (will be overridden by AI analysis when available)
const defaultPerformance = {
  technical: {
    ballControl: 70,
    passing: 70,
    shooting: 70,
    dribbling: 70,
    heading: 70,
    firstTouch: 70,
  },
  physical: {
    speed: 70,
    strength: 70,
    agility: 70,
    stamina: 70,
    balance: 70,
    acceleration: 70,
  },
  tactical: {
    positioning: 70,
    awareness: 70,
    decision: 70,
    teamwork: 70,
    offBall: 70,
    defensiveWork: 70,
  },
  mental: {
    concentration: 70,
    composure: 70,
    leadership: 70,
    aggression: 70,
    workRate: 70,
    reaction: 70,
  },
}

// Default video analysis (will be replaced with AI-generated content when available)
const defaultVideoAnalysis = [
  {
    timeCode: "00:15",
    observation: "مثال على ملاحظة",
    feedback: "مثال على تعليق",
    rating: "neutral",
  },
]

interface FormData {
  name: string
  weight: string
  height: string
  diet: string
  sportsRoutine: string
  position: string
  preferredFoot: string
  age: string
  experience: string
}

interface EvaluationResult {
  evaluation: string
}

export default function PerformanceResults() {
  const router = useRouter()
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Player data state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    weight: "",
    height: "",
    diet: "",
    sportsRoutine: "",
    position: "",
    preferredFoot: "right",
    age: "",
    experience: "",
  })

  // Evaluation result state
  const [evaluationResult, setEvaluationResult] = useState<EvaluationResult | null>(null)

  // Extracted data from evaluation
  const [strengths, setStrengths] = useState<string[]>([])
  const [weaknesses, setWeaknesses] = useState<string[]>([])
  const [trainingRecommendations, setTrainingRecommendations] = useState<string[]>([])
  const [performance, setPerformance] = useState(defaultPerformance)
  const [videoAnalysis, setVideoAnalysis] = useState(defaultVideoAnalysis)
  const [analysisDate, setAnalysisDate] = useState<string>("")
  const [summary, setSummary] = useState<string>("")

  useEffect(() => {
    // Get data from localStorage
    try {
      const storedFormData = localStorage.getItem("playerFormData")
      const storedEvaluation = localStorage.getItem("playerEvaluation")

      if (storedFormData) {
        setFormData(JSON.parse(storedFormData))
      }

      if (storedEvaluation) {
        const evaluation = JSON.parse(storedEvaluation) as EvaluationResult
        setEvaluationResult(evaluation)

        // Parse the evaluation text to extract structured information
        parseEvaluation(evaluation.evaluation)
      } else {
        setError("لم يتم العثور على بيانات التقييم. يرجى العودة وإجراء تحليل جديد.")
      }

      // Set current date as analysis date
      const today = new Date()
      setAnalysisDate(`${today.getDate()} ${getArabicMonth(today.getMonth())} ${today.getFullYear()}`)
    } catch (err) {
      console.error("Error loading data:", err)
      setError("حدث خطأ أثناء تحميل البيانات. يرجى المحاولة مرة أخرى.")
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Function to parse the evaluation text and extract structured information
  const parseEvaluation = (evaluationText: string) => {
    if (!evaluationText) return

    // Set summary (first paragraph or full text if short)
    const paragraphs = evaluationText.split("\n").filter((p) => p.trim().length > 0)
    setSummary(paragraphs[0] || evaluationText)

    // Extract strengths (look for نقاط القوة or مميزات or إيجابيات)
    const strengthsRegex = /(?:نقاط القوة|مميزات|إيجابيات)[:\n]+((?:[-•*]|\d+\s*[.)-]\s*|[^\n]+\n)+)/i
    const strengthsMatch = evaluationText.match(strengthsRegex)

    if (strengthsMatch && strengthsMatch[1]) {
      const strengthsList = extractListItems(strengthsMatch[1])
      setStrengths(strengthsList.length > 0 ? strengthsList : generateDefaultStrengths())
    } else {
      // If no strengths section found, try to extract positive statements
      const positiveStatements = extractPositiveStatements(evaluationText)
      setStrengths(positiveStatements.length > 0 ? positiveStatements : generateDefaultStrengths())
    }

    // Extract weaknesses (look for نقاط الضعف or سلبيات or تحسينات)
    const weaknessesRegex =
      /(?:نقاط الضعف|سلبيات|تحسينات|نقاط تحتاج للتحسين)[:\n]+((?:[-•*]|\d+\s*[.)-]\s*|[^\n]+\n)+)/i
    const weaknessesMatch = evaluationText.match(weaknessesRegex)

    if (weaknessesMatch && weaknessesMatch[1]) {
      const weaknessesList = extractListItems(weaknessesMatch[1])
      setWeaknesses(weaknessesList.length > 0 ? weaknessesList : generateDefaultWeaknesses())
    } else {
      // If no weaknesses section found, try to extract negative statements
      const negativeStatements = extractNegativeStatements(evaluationText)
      setWeaknesses(negativeStatements.length > 0 ? negativeStatements : generateDefaultWeaknesses())
    }

    // Extract training recommendations (look for توصيات or تمارين or تدريبات)
    const recommendationsRegex = /(?:توصيات|تمارين|تدريبات)[:\n]+((?:[-•*]|\d+\s*[.)-]\s*|[^\n]+\n)+)/i
    const recommendationsMatch = evaluationText.match(recommendationsRegex)

    if (recommendationsMatch && recommendationsMatch[1]) {
      const recommendationsList = extractListItems(recommendationsMatch[1])
      setTrainingRecommendations(
        recommendationsList.length > 0 ? recommendationsList : generateDefaultRecommendations(),
      )
    } else {
      // If no recommendations section found, generate some based on weaknesses
      setTrainingRecommendations(generateDefaultRecommendations())
    }

    // Generate performance metrics based on the evaluation text
    generatePerformanceMetrics(evaluationText)

    // Generate video analysis based on the evaluation text
    generateVideoAnalysis(evaluationText)
  }

  // Helper function to extract list items from text
  const extractListItems = (text: string): string[] => {
    // Split by common list markers
    const lines = text
      .split(/\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0)

    // Clean up list markers
    return lines.map((line) => line.replace(/^[-•*]|\d+\s*[.)-]\s*/, "").trim())
  }

  // Helper function to extract positive statements
  const extractPositiveStatements = (text: string): string[] => {
    const positiveKeywords = ["ممتاز", "جيد", "قوي", "متميز", "مهارة", "قدرة", "يتميز", "يمتلك", "إيجابي"]

    const sentences = text.split(/[.!?،]\s*/)
    return sentences
      .filter(
        (sentence) =>
          positiveKeywords.some((keyword) => sentence.includes(keyword)) &&
          !sentence.includes("لا يمتلك") &&
          !sentence.includes("غير") &&
          !sentence.includes("ضعيف"),
      )
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length > 10 && sentence.length < 100)
      .slice(0, 4)
  }

  // Helper function to extract negative statements
  const extractNegativeStatements = (text: string): string[] => {
    const negativeKeywords = ["ضعيف", "يحتاج", "تحسين", "تطوير", "مشكلة", "صعوبة", "لا يستطيع", "لا يمتلك", "سلبي"]

    const sentences = text.split(/[.!?،]\s*/)
    return sentences
      .filter((sentence) => negativeKeywords.some((keyword) => sentence.includes(keyword)))
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length > 10 && sentence.length < 100)
      .slice(0, 4)
  }

  // Generate default strengths if none were extracted
  const generateDefaultStrengths = (): string[] => {
    return [
      "التمرير الدقيق وصناعة الفرص",
      "الرؤية الجيدة والقدرة على قراءة اللعب",
      "معدل عمل مرتفع والتزام تكتيكي",
      "سرعة جيدة وقدرة على المراوغة",
    ]
  }

  // Generate default weaknesses if none were extracted
  const generateDefaultWeaknesses = (): string[] => {
    return [
      "التحكم بالكرة تحت الضغط العالي",
      "دقة التسديد من خارج منطقة الجزاء",
      "ضعف في ضربات الرأس",
      "التمركز خلال الهجمات المرتدة",
    ]
  }

  // Generate default training recommendations if none were extracted
  const generateDefaultRecommendations = (): string[] => {
    return [
      "تمارين للتحكم بالكرة تحت الضغط (3 مرات أسبوعياً)",
      "تمارين دقة التسديد (مرتين أسبوعياً)",
      "تمارين تكتيكية للتمركز الدفاعي (مرتين أسبوعياً)",
      "تمارين القوة والتوازن (3 مرات أسبوعياً)",
    ]
  }

  // Generate performance metrics based on the evaluation text
  const generatePerformanceMetrics = (text: string) => {
    // This is a simplified approach - in a real implementation, you would use
    // more sophisticated NLP techniques to analyze the text and generate metrics

    // Technical skills
    const technicalKeywords = {
      ballControl: ["تحكم", "سيطرة", "استلام"],
      passing: ["تمرير", "تمريرة", "تمريرات"],
      shooting: ["تسديد", "تصويب", "هدف"],
      dribbling: ["مراوغة", "تخطي", "تجاوز"],
      heading: ["رأسية", "ضربة رأس", "رأس"],
      firstTouch: ["لمسة أولى", "استقبال", "استلام"],
    }

    // Physical attributes
    const physicalKeywords = {
      speed: ["سرعة", "سريع"],
      strength: ["قوة", "قوي", "بدني"],
      agility: ["رشاقة", "مرونة"],
      stamina: ["تحمل", "لياقة"],
      balance: ["توازن", "ثبات"],
      acceleration: ["تسارع", "انطلاق"],
    }

    // Tactical awareness
    const tacticalKeywords = {
      positioning: ["تمركز", "موقع", "مكان"],
      awareness: ["وعي", "إدراك", "فهم"],
      decision: ["قرار", "اختيار", "تقدير"],
      teamwork: ["تعاون", "جماعي", "فريق"],
      offBall: ["بدون كرة", "تحرك", "مساحة"],
      defensiveWork: ["دفاع", "دفاعي", "استخلاص"],
    }

    // Mental attributes
    const mentalKeywords = {
      concentration: ["تركيز", "انتباه"],
      composure: ["هدوء", "رباطة جأش", "ثبات"],
      leadership: ["قيادة", "قائد", "توجيه"],
      aggression: ["حماس", "اندفاع", "قتالية"],
      workRate: ["مجهود", "عمل", "جهد"],
      reaction: ["رد فعل", "استجابة", "تفاعل"],
    }

    // Generate scores based on keyword presence and sentiment
    const newPerformance = { ...defaultPerformance }

    // Score technical skills
    Object.entries(technicalKeywords).forEach(([skill, keywords]) => {
      const score = scoreAttribute(text, keywords)
      if (score !== null) {
        newPerformance.technical[skill as keyof typeof newPerformance.technical] = score
      }
    })

    // Score physical attributes
    Object.entries(physicalKeywords).forEach(([attribute, keywords]) => {
      const score = scoreAttribute(text, keywords)
      if (score !== null) {
        newPerformance.physical[attribute as keyof typeof newPerformance.physical] = score
      }
    })

    // Score tactical awareness
    Object.entries(tacticalKeywords).forEach(([aspect, keywords]) => {
      const score = scoreAttribute(text, keywords)
      if (score !== null) {
        newPerformance.tactical[aspect as keyof typeof newPerformance.tactical] = score
      }
    })

    // Score mental attributes
    Object.entries(mentalKeywords).forEach(([attribute, keywords]) => {
      const score = scoreAttribute(text, keywords)
      if (score !== null) {
        newPerformance.mental[attribute as keyof typeof newPerformance.mental] = score
      }
    })

    setPerformance(newPerformance)
  }

  // Helper function to score an attribute based on keywords and sentiment
  const scoreAttribute = (text: string, keywords: string[]): number | null => {
    // Check if any keywords are present
    const relevantSentences = text
      .split(/[.!?،]\s*/)
      .filter((sentence) => keywords.some((keyword) => sentence.includes(keyword)))

    if (relevantSentences.length === 0) {
      return null
    }

    // Analyze sentiment
    let positiveCount = 0
    let negativeCount = 0

    const positiveWords = ["ممتاز", "جيد", "قوي", "متميز", "رائع", "مميز"]
    const negativeWords = ["ضعيف", "سيء", "يحتاج تحسين", "غير كافي", "محدود"]

    relevantSentences.forEach((sentence) => {
      if (positiveWords.some((word) => sentence.includes(word))) {
        positiveCount++
      }
      if (negativeWords.some((word) => sentence.includes(word))) {
        negativeCount++
      }
    })

    // Calculate score based on sentiment
    if (positiveCount > negativeCount) {
      return 75 + Math.min(15, (positiveCount - negativeCount) * 5)
    } else if (negativeCount > positiveCount) {
      return 65 - Math.min(15, (negativeCount - positiveCount) * 5)
    } else {
      return 70
    }
  }

  // Generate video analysis based on the evaluation text
  const generateVideoAnalysis = (text: string) => {
    // In a real implementation, this would be more sophisticated
    // For now, we'll generate some sample video analysis points

    const sentences = text.split(/[.!?،]\s*/).filter((s) => s.trim().length > 10)

    if (sentences.length < 3) {
      return // Keep default if not enough content
    }

    const newVideoAnalysis = [
      {
        timeCode: "00:15",
        observation: sentences[0].trim(),
        feedback: sentences.length > 3 ? sentences[3].trim() : "يجب العمل على تحسين هذه النقطة",
        rating: "positive",
      },
      {
        timeCode: "01:23",
        observation: sentences[1].trim(),
        feedback: sentences.length > 4 ? sentences[4].trim() : "هناك مجال للتحسين في هذا الجانب",
        rating: "negative",
      },
      {
        timeCode: "02:47",
        observation: sentences[2].trim(),
        feedback: sentences.length > 5 ? sentences[5].trim() : "يمكن تطوير هذه المهارة من خلال التدريب المستمر",
        rating: "neutral",
      },
    ]

    setVideoAnalysis(newVideoAnalysis)
  }

  // Helper function to get Arabic month name
  const getArabicMonth = (monthIndex: number): string => {
    const arabicMonths = [
      "يناير",
      "فبراير",
      "مارس",
      "إبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ]
    return arabicMonths[monthIndex]
  }

  // Calculate average scores for each category
  const calculateAverage = (scores: Record<string, number>) => {
    const values = Object.values(scores)
    return values.reduce((sum, value) => sum + value, 0) / values.length
  }

  const technicalAvg = calculateAverage(performance.technical)
  const physicalAvg = calculateAverage(performance.physical)
  const tacticalAvg = calculateAverage(performance.tactical)
  const mentalAvg = calculateAverage(performance.mental)

  // Calculate overall average
  const overallAvg = (technicalAvg + physicalAvg + tacticalAvg + mentalAvg) / 4

  // Helper function to determine strength level based on score
  const getStrengthLevel = (score: number) => {
    if (score >= 80) return "ممتاز"
    if (score >= 70) return "جيد جداً"
    if (score >= 60) return "جيد"
    if (score >= 50) return "متوسط"
    return "يحتاج تحسين"
  }

  // Helper function to get color class based on score
  const getColorClass = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 70) return "bg-blue-500"
    if (score >= 60) return "bg-yellow-500"
    if (score >= 50) return "bg-orange-500"
    return "bg-red-500"
  }

  // Helper function to get badge color based on rating
  const getBadgeVariant = (rating: string) => {
    switch (rating) {
      case "positive":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "negative":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
    }
  }

  // Helper function to get icon based on rating
  const getRatingIcon = (rating: string) => {
    switch (rating) {
      case "positive":
        return <CheckCircle2 className="h-4 w-4 text-green-600" />
      case "negative":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
    }
  }

  // Function to handle new analysis
  const handleNewAnalysis = () => {
    router.push("/performance-analysis")
  }

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
          <h2 className="text-xl font-medium">جاري تحميل نتائج التحليل...</h2>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 md:p-6 space-y-6 container mx-auto max-w-7xl">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>خطأ</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <div className="flex justify-center">
          <Button onClick={handleNewAnalysis}>العودة لصفحة التحليل</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 md:p-6 space-y-6 container mx-auto max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">نتائج تحليل الأداء</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>تحميل التقرير</span>
          </Button>
          <Button asChild onClick={handleNewAnalysis}>
            <Link href="/performance-analysis">تحليل جديد</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>معلومات اللاعب</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-500">
                  {formData.name
                    ? formData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                    : ""}
                </span>
              </div>
              <h2 className="text-xl font-bold">{formData.name}</h2>
              <p className="text-sm text-muted-foreground">
                {formData.position === "goalkeeper"
                  ? "حارس مرمى"
                  : formData.position === "defender"
                    ? "مدافع"
                    : formData.position === "midfielder"
                      ? "وسط"
                      : formData.position === "forward"
                        ? "مهاجم"
                        : formData.position === "winger"
                          ? "جناح"
                          : formData.position}
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">العمر:</span>
                <span>{formData.age} سنة</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">الطول:</span>
                <span>{formData.height} سم</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">الوزن:</span>
                <span>{formData.weight} كجم</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">تاريخ التحليل:</span>
                <span>{analysisDate}</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="text-sm font-medium">التقييم العام</div>
              <div className="flex items-center gap-2">
                <Progress value={overallAvg} className="h-2" />
                <span className="text-sm font-medium">{Math.round(overallAvg)}%</span>
              </div>
              <div className="text-sm text-muted-foreground">المستوى: {getStrengthLevel(overallAvg)}</div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">المستوى المحتمل</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                مرتفع
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 max-w-full">
          <CardHeader>
            <CardTitle>ملخص التحليل</CardTitle>
            <CardDescription>نظرة عامة على نتائج تحليل الأداء</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="performance">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="performance">الأداء</TabsTrigger>
                <TabsTrigger value="video">تحليل الفيديو</TabsTrigger>
                <TabsTrigger value="roadmap">خطة التطوير</TabsTrigger>
                <TabsTrigger value="report">التقرير المفصل</TabsTrigger>
              </TabsList>

              <TabsContent value="performance" className="space-y-6 mt-6">
                {evaluationResult && (
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">تقييم الأداء</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="whitespace-pre-line text-right">{evaluationResult.evaluation}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">المهارات الفنية</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(performance.technical).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>
                              {key === "ballControl"
                                ? "التحكم بالكرة"
                                : key === "passing"
                                  ? "التمرير"
                                  : key === "shooting"
                                    ? "التسديد"
                                    : key === "dribbling"
                                      ? "المراوغة"
                                      : key === "heading"
                                        ? "ضربات الرأس"
                                        : key === "firstTouch"
                                          ? "اللمسة الأولى"
                                          : key}
                            </span>
                            <span className="font-medium">{value}%</span>
                          </div>
                          <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden my-1">
                            <div className={`h-full ${getColorClass(value)}`} style={{ width: `${value}%` }}></div>
                          </div>
                        </div>
                      ))}
                      <div className="pt-2 border-t">
                        <div className="flex justify-between text-sm font-medium">
                          <span>المتوسط</span>
                          <span>{Math.round(technicalAvg)}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">اللياقة البدنية</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(performance.physical).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>
                              {key === "speed"
                                ? "السرعة"
                                : key === "strength"
                                  ? "القوة"
                                  : key === "agility"
                                    ? "الرشاقة"
                                    : key === "stamina"
                                      ? "التحمل"
                                      : key === "balance"
                                        ? "التوازن"
                                        : key === "acceleration"
                                          ? "التسارع"
                                          : key}
                            </span>
                            <span className="font-medium">{value}%</span>
                          </div>
                          <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden my-1">
                            <div className={`h-full ${getColorClass(value)}`} style={{ width: `${value}%` }}></div>
                          </div>
                        </div>
                      ))}
                      <div className="pt-2 border-t">
                        <div className="flex justify-between text-sm font-medium">
                          <span>المتوسط</span>
                          <span>{Math.round(physicalAvg)}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">الجوانب التكتيكية</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(performance.tactical).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>
                              {key === "positioning"
                                ? "التمركز"
                                : key === "awareness"
                                  ? "الوعي التكتيكي"
                                  : key === "decision"
                                    ? "اتخاذ القرار"
                                    : key === "teamwork"
                                      ? "العمل الجماعي"
                                      : key === "offBall"
                                        ? "الحركة بدون كرة"
                                        : key === "defensiveWork"
                                          ? "العمل الدفاعي"
                                          : key}
                            </span>
                            <span className="font-medium">{value}%</span>
                          </div>
                          <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden my-1">
                            <div className={`h-full ${getColorClass(value)}`} style={{ width: `${value}%` }}></div>
                          </div>
                        </div>
                      ))}
                      <div className="pt-2 border-t">
                        <div className="flex justify-between text-sm font-medium">
                          <span>المتوسط</span>
                          <span>{Math.round(tacticalAvg)}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">الجوانب الذهنية</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(performance.mental).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>
                              {key === "concentration"
                                ? "التركيز"
                                : key === "composure"
                                  ? "الهدوء"
                                  : key === "leadership"
                                    ? "القيادة"
                                    : key === "aggression"
                                      ? "الحماس"
                                      : key === "workRate"
                                        ? "معدل العمل"
                                        : key === "reaction"
                                          ? "سرعة رد الفعل"
                                          : key}
                            </span>
                            <span className="font-medium">{value}%</span>
                          </div>
                          <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden my-1">
                            <div className={`h-full ${getColorClass(value)}`} style={{ width: `${value}%` }}></div>
                          </div>
                        </div>
                      ))}
                      <div className="pt-2 border-t">
                        <div className="flex justify-between text-sm font-medium">
                          <span>المتوسط</span>
                          <span>{Math.round(mentalAvg)}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>نقاط القوة والضعف</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-green-500"></div>
                          نقاط القوة
                        </h3>
                        <ul className="space-y-2">
                          {strengths.map((strength, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-red-500"></div>
                          نقاط الضعف
                        </h3>
                        <ul className="space-y-2">
                          {weaknesses.map((weakness, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                              <span>{weakness}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="video" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>تحليل الفيديو</CardTitle>
                    <CardDescription>ملاحظات وتعليقات على أداء اللاعب في الفيديو</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-full">
                      <div className="lg:col-span-1 space-y-3">
                        <div className="font-medium">لقطات الفيديو</div>
                        {videoAnalysis.map((analysis, index) => (
                          <div
                            key={index}
                            className={`border rounded-lg p-2.5 cursor-pointer transition-colors ${selectedVideo === index ? "border-primary bg-primary/5" : "hover:border-primary/50"}`}
                            onClick={() => setSelectedVideo(index)}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <div className="font-medium flex items-center gap-2">
                                <Video className="h-4 w-4" />
                                <span>لقطة {index + 1}</span>
                              </div>
                              <Badge variant="outline">{analysis.timeCode}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">{analysis.observation}</p>
                          </div>
                        ))}
                      </div>

                      <div className="lg:col-span-2">
                        {selectedVideo !== null ? (
                          <div className="space-y-3">
                            <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center relative">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-16 w-16 rounded-full bg-white/10 hover:bg-white/20 text-white"
                                >
                                  <Play className="h-8 w-8" />
                                </Button>
                              </div>
                              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                                {videoAnalysis[selectedVideo].timeCode}
                              </div>
                            </div>

                            <div>
                              <h3 className="font-bold text-lg mb-2">الملاحظة</h3>
                              <p>{videoAnalysis[selectedVideo].observation}</p>
                            </div>

                            <div>
                              <h3 className="font-bold text-lg mb-2">التعليق والنصائح</h3>
                              <div className="flex items-start gap-2">
                                {getRatingIcon(videoAnalysis[selectedVideo].rating)}
                                <p>{videoAnalysis[selectedVideo].feedback}</p>
                              </div>
                            </div>

                            <div className="pt-4 border-t">
                              <Badge className={getBadgeVariant(videoAnalysis[selectedVideo].rating)}>
                                {videoAnalysis[selectedVideo].rating === "positive"
                                  ? "إيجابي"
                                  : videoAnalysis[selectedVideo].rating === "negative"
                                    ? "سلبي"
                                    : "محايد"}
                              </Badge>
                            </div>
                          </div>
                        ) : (
                          <div className="h-full flex items-center justify-center border rounded-lg p-8">
                            <div className="text-center text-muted-foreground">
                              <Video className="h-12 w-12 mx-auto mb-4 opacity-20" />
                              <p>يرجى اختيار لقطة من القائمة لعرض التحليل</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="roadmap" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>خطة تطوير الأداء</CardTitle>
                    <CardDescription>خارطة طريق لتحسين الأداء على المدى القصير والمتوسط والطويل</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200"></div>

                        <div className="relative pr-8 pb-6">
                          <div className="absolute right-0 top-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-bold">1</span>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h3 className="font-bold text-lg mb-4">المدى القصير (1-3 أشهر)</h3>
                            <ul className="space-y-3">
                              {trainingRecommendations.slice(0, 2).map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <ChevronRight className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="relative pr-8 pb-6">
                          <div className="absolute right-0 top-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-bold">2</span>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h3 className="font-bold text-lg mb-4">المدى المتوسط (3-6 أشهر)</h3>
                            <ul className="space-y-3">
                              {trainingRecommendations.slice(2, 3).map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <ChevronRight className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                              <li className="flex items-start gap-2">
                                <ChevronRight className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                                <span>تطوير مهارات ضربات الرأس من خلال تمارين مخصصة</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="relative pr-8">
                          <div className="absolute right-0 top-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-bold">3</span>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h3 className="font-bold text-lg mb-4">المدى الطويل (6-12 شهر)</h3>
                            <ul className="space-y-3">
                              {trainingRecommendations.slice(3, 4).map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <ChevronRight className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                              <li className="flex items-start gap-2">
                                <ChevronRight className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                                <span>تطوير القدرة على قراءة اللعب واتخاذ القرارات السريعة</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>التمارين الموصى بها</CardTitle>
                    <CardDescription>تمارين مخصصة لتحسين نقاط الضعف وتطوير الأداء</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full">
                      {trainingRecommendations.map((recommendation, index) => {
                        // Extract frequency and duration if available
                        const frequencyMatch = recommendation.match(/(\d+\s*مرات\s*أسبوعياً)/)
                        const durationMatch = recommendation.match(/(\d+\s*دقيقة)/)

                        const frequency = frequencyMatch ? frequencyMatch[1] : "2-3 مرات أسبوعياً"
                        const duration = durationMatch ? durationMatch[1] : "30 دقيقة"

                        // Clean up the recommendation text
                        const cleanRecommendation = recommendation
                          .replace(/\d+\s*مرات\s*أسبوعياً/, "")
                          .replace(/\d+\s*دقيقة/, "")
                          .trim()

                        return (
                          <div key={index} className="border rounded-lg p-3">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-bold">{cleanRecommendation.split(" ").slice(0, 3).join(" ")}</h3>
                              <div className="flex gap-2">
                                <Badge variant="outline" className="bg-blue-50 text-xs">
                                  {frequency}
                                </Badge>
                                <Badge variant="outline" className="bg-green-50 text-xs">
                                  {duration}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">{cleanRecommendation}</p>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="report" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>التقرير المفصل</CardTitle>
                    <CardDescription>تقرير شامل عن تحليل أداء اللاعب</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="summary">
                        <AccordionTrigger>الملخص التنفيذي</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-3">{summary}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium mb-2">نقاط القوة الرئيسية</h4>
                              <ul className="space-y-1">
                                {strengths.map((strength, index) => (
                                  <li key={index} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                    <span>{strength}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">مجالات التحسين</h4>
                              <ul className="space-y-1">
                                {weaknesses.map((weakness, index) => (
                                  <li key={index} className="flex items-start gap-2 text-sm">
                                    <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                                    <span>{weakness}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="evaluation">
                        <AccordionTrigger>التقييم الكامل</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            {evaluationResult && (
                              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                <p className="whitespace-pre-line text-right">{evaluationResult.evaluation}</p>
                              </div>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="technical">
                        <AccordionTrigger>تحليل المهارات الفنية</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <p>
                              يظهر اللاعب مستوى جيد في المهارات الفنية بشكل عام، مع تميز خاص في التمرير واللمسة الأولى.
                              يحتاج إلى تحسين في مهارات التسديد وضربات الرأس.
                            </p>

                            <div className="space-y-3">
                              {Object.entries(performance.technical).map(([key, value]) => (
                                <div key={key} className="space-y-1">
                                  <div className="flex justify-between text-sm">
                                    <span>
                                      {key === "ballControl"
                                        ? "التحكم بالكرة"
                                        : key === "passing"
                                          ? "التمرير"
                                          : key === "shooting"
                                            ? "التسديد"
                                            : key === "dribbling"
                                              ? "المراوغة"
                                              : key === "heading"
                                                ? "ضربات الرأس"
                                                : key === "firstTouch"
                                                  ? "اللمسة الأولى"
                                                  : key}
                                    </span>
                                    <span className="font-medium">{value}%</span>
                                  </div>
                                  <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden my-1">
                                    <div
                                      className={`h-full ${getColorClass(value)}`}
                                      style={{ width: `${value}%` }}
                                    ></div>
                                  </div>
                                  <p className="text-xs text-muted-foreground">
                                    {value >= 80
                                      ? "مستوى ممتاز"
                                      : value >= 70
                                        ? "مستوى جيد جداً"
                                        : value >= 60
                                          ? "مستوى جيد"
                                          : value >= 50
                                            ? "مستوى متوسط"
                                            : "يحتاج إلى تحسين"}
                                  </p>
                                </div>
                              ))}
                            </div>

                            <div className="pt-4 border-t">
                              <h4 className="font-medium mb-2">التوصيات</h4>
                              <ul className="space-y-1">
                                {trainingRecommendations.slice(0, 2).map((recommendation, index) => (
                                  <li key={index} className="flex items-start gap-2 text-sm">
                                    <ChevronRight className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                                    <span>{recommendation}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="conclusion">
                        <AccordionTrigger>الخلاصة والتوصيات النهائية</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <p>{summary}</p>

                            <div className="pt-4 border-t">
                              <h4 className="font-medium mb-2">التوصيات النهائية</h4>
                              <ul className="space-y-1.5">
                                <li className="flex items-start gap-2 text-sm">
                                  <ChevronRight className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                                  <span>الالتزام بخطة التطوير المقترحة مع التركيز على نقاط الضعف المحددة</span>
                                </li>
                                {trainingRecommendations.slice(0, 2).map((recommendation, index) => (
                                  <li key={index} className="flex items-start gap-2 text-sm">
                                    <ChevronRight className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                                    <span>{recommendation}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-4 border-t">
                              <h4 className="font-medium mb-2">التقييم النهائي</h4>
                              <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                                  <span className="text-xl font-bold text-blue-600">{Math.round(overallAvg)}%</span>
                                </div>
                                <div>
                                  <div className="font-medium">{getStrengthLevel(overallAvg)}</div>
                                  <div className="text-sm text-muted-foreground">التقييم العام</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button variant="outline" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>تحميل التقرير الكامل (PDF)</span>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
