"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { School, Trophy, UsersIcon, Upload, FileText, BarChart, AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

type UserType = "institute" | "club" | "public" | null

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

export default function PerformanceAnalysis() {
  const router = useRouter()
  const [userType, setUserType] = useState<UserType>(null)
  const [step, setStep] = useState(1)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Form states
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

  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [reports, setReports] = useState<FileList | null>(null)
  const [statistics, setStatistics] = useState<FileList | null>(null)

  // Upload states
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [evaluationResult, setEvaluationResult] = useState<{ evaluation: string } | null>(null)

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type)
    setStep(2)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setVideoFile(e.target.files[0])
      // Reset states when a new file is selected
      setUploadError(null)
      setUploadSuccess(false)
      setEvaluationResult(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!videoFile) {
      setUploadError("يرجى اختيار فيديو للتحليل")
      return
    }

    setIsUploading(true)
    setUploadProgress(0)
    setUploadError(null)
    setUploadSuccess(false)

    // Create FormData object for the API request
    const apiFormData = new FormData()
    apiFormData.append("file", videoFile)

    // ✅ إرسال كل حقل بنفس الاسم المطلوب في الباكند
    apiFormData.append("full_name", formData.name)
    apiFormData.append("weight", formData.weight.toString())
    apiFormData.append("height", formData.height.toString())
    apiFormData.append("diet", formData.diet)
    apiFormData.append("training", formData.sportsRoutine)
    apiFormData.append("position", formData.position)

    try {
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 95) {
            clearInterval(progressInterval)
            return prev
          }
          return prev + 5
        })
      }, 300)

      // تغيير عنوان API للتجنب مشاكل الاتصال
      const response = await fetch("https://footballskill-production6.up.railway.app/analyze", {
        method: "POST",
        body: apiFormData,
      })

      clearInterval(progressInterval)
      setUploadProgress(100)

      if (!response.ok) {
        setUploadError(`فشل في تحليل الفيديو: ${response.status}`)
        setIsUploading(false)
        return
      }

      const result = await response.json()
      setEvaluationResult(result)
      setUploadSuccess(true)
      setStep(3) // Move to results page

      // Store the form data and evaluation result in localStorage for the results page
      localStorage.setItem("playerFormData", JSON.stringify(formData))
      localStorage.setItem("playerEvaluation", JSON.stringify(result))
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : "حدث خطأ أثناء تحليل الفيديو")
    } finally {
      setIsUploading(false)
    }
  }

  const renderUserTypeSelection = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      <Card
        className="cursor-pointer hover:border-primary transition-colors"
        onClick={() => handleUserTypeSelect("institute")}
      >
        <CardHeader className="text-center">
          <School className="w-12 h-12 md:w-16 md:h-16 mx-auto text-primary" />
          <CardTitle>معهد أكاديمي</CardTitle>
          <CardDescription>للمعاهد والأكاديميات الرياضية</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-sm text-muted-foreground">
            تحليل متقدم للأداء مع تقارير مفصلة للمعاهد الأكاديمية والمدارس الرياضية
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">اختيار</Button>
        </CardFooter>
      </Card>

      <Card
        className="cursor-pointer hover:border-primary transition-colors"
        onClick={() => handleUserTypeSelect("club")}
      >
        <CardHeader className="text-center">
          <Trophy className="w-12 h-12 md:w-16 md:h-16 mx-auto text-primary" />
          <CardTitle>نادي</CardTitle>
          <CardDescription>للأندية الرياضية والفرق</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-sm text-muted-foreground">
            تحليل شامل للأداء الفردي والجماعي مع توصيات مخصصة للأندية والفرق
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">اختيار</Button>
        </CardFooter>
      </Card>

      <Card
        className="cursor-pointer hover:border-primary transition-colors"
        onClick={() => handleUserTypeSelect("public")}
      >
        <CardHeader className="text-center">
          <UsersIcon className="w-12 h-12 md:w-16 md:h-16 mx-auto text-primary" />
          <CardTitle>الأفراد</CardTitle>
          <CardDescription>للاعبين الفرديين والهواة</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-sm text-muted-foreground">
            تحليل أساسي للأداء مع نصائح لتحسين المهارات للاعبين الفرديين
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">اختيار</Button>
        </CardFooter>
      </Card>
    </div>
  )

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">الاسم الكامل</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="أدخل الاسم الكامل"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="age">العمر</Label>
            <Input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="أدخل العمر"
              required
            />
          </div>
          <div>
            <Label htmlFor="weight">الوزن (كجم)</Label>
            <Input
              id="weight"
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="أدخل الوزن بالكيلوجرام"
              required
            />
          </div>
          <div>
            <Label htmlFor="height">الطول (سم)</Label>
            <Input
              id="height"
              name="height"
              type="number"
              value={formData.height}
              onChange={handleInputChange}
              placeholder="أدخل الطول بالسنتيمتر"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="diet">النظام الغذائي</Label>
          <Select value={formData.diet} onValueChange={(value) => handleSelectChange("diet", value)} required>
            <SelectTrigger id="diet">
              <SelectValue placeholder="اختر النظام الغذائي" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="regular">نظام غذائي عادي</SelectItem>
              <SelectItem value="vegetarian">نباتي</SelectItem>
              <SelectItem value="vegan">نباتي صارم</SelectItem>
              <SelectItem value="keto">كيتو</SelectItem>
              <SelectItem value="paleo">باليو</SelectItem>
              <SelectItem value="other">أخرى</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="experience">سنوات الخبرة في كرة القدم</Label>
          <Input
            id="experience"
            name="experience"
            type="number"
            value={formData.experience}
            onChange={handleInputChange}
            placeholder="أدخل عدد سنوات الخبرة"
            required
          />
        </div>

        <div>
          <Label htmlFor="sportsRoutine">النظام الرياضي</Label>
          <Textarea
            id="sportsRoutine"
            name="sportsRoutine"
            value={formData.sportsRoutine}
            onChange={handleInputChange}
            placeholder="صف روتينك الرياضي الأسبوعي"
            required
          />
        </div>

        <div>
          <Label htmlFor="position">المركز الذي تلعب به</Label>
          <RadioGroup
            value={formData.position}
            onValueChange={(value) => handleSelectChange("position", value)}
            required
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="goalkeeper" id="goalkeeper" />
                <Label htmlFor="goalkeeper">حارس مرمى</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="defender" id="defender" />
                <Label htmlFor="defender">مدافع</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="midfielder" id="midfielder" />
                <Label htmlFor="midfielder">وسط</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="forward" id="forward" />
                <Label htmlFor="forward">مهاجم</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="winger" id="winger" />
                <Label htmlFor="winger">جناح</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="other" id="other-position" />
                <Label htmlFor="other-position">أخرى</Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="preferredFoot">القدم المفضلة</Label>
          <RadioGroup
            value={formData.preferredFoot}
            onValueChange={(value) => handleSelectChange("preferredFoot", value)}
            required
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="right" id="right-foot" />
                <Label htmlFor="right-foot">اليمنى</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="left" id="left-foot" />
                <Label htmlFor="left-foot">اليسرى</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="both" id="both-feet" />
                <Label htmlFor="both-feet">كلتاهما</Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="videos">رفع فيديو الأداء</Label>
          <div className="mt-2 border-2 border-dashed rounded-md p-4 md:p-6 text-center">
            <Upload className="mx-auto h-10 w-10 md:h-12 md:w-12 text-muted-foreground" />
            <div className="mt-4 flex flex-col sm:flex-row justify-center items-center text-sm leading-6 text-muted-foreground">
              <label
                htmlFor="video-upload"
                className="relative cursor-pointer rounded-md bg-background px-3 py-2 text-primary font-semibold hover:bg-muted mb-2 sm:mb-0"
              >
                <span>اختر الفيديو</span>
                <Input
                  id="video-upload"
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  className="sr-only"
                  onChange={handleVideoChange}
                />
              </label>
              <p className="sm:pr-3">أو اسحب وأفلت الفيديو هنا</p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">MP4, MOV, AVI حتى 500 ميجابايت</p>
            {videoFile && (
              <div className="mt-4">
                <p className="text-sm font-medium">الفيديو المختار:</p>
                <p className="mt-2 text-sm text-muted-foreground text-right">{videoFile.name}</p>
              </div>
            )}
          </div>
        </div>

        {uploadError && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>خطأ</AlertTitle>
            <AlertDescription>{uploadError}</AlertDescription>
          </Alert>
        )}

        {uploadSuccess && (
          <Alert variant="default" className="bg-green-50 text-green-800 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle>تم بنجاح</AlertTitle>
            <AlertDescription>تم تحليل الفيديو بنجاح!</AlertDescription>
          </Alert>
        )}

        {isUploading && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>جاري تحليل الفيديو...</span>
              <span>{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} className="h-2" />
          </div>
        )}

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => setStep(1)}>
            رجوع
          </Button>
          <Button type="submit" disabled={isUploading || !videoFile}>
            {isUploading ? "جاري التحليل..." : "إرسال للتحليل"}
          </Button>
        </div>
      </div>
    </form>
  )

  const handleNewAnalysis = () => {
    setStep(1)
    setUserType(null)
    setVideoFile(null)
    setUploadError(null)
    setUploadSuccess(false)
    setEvaluationResult(null)
    setFormData({
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
  }

  const renderResults = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-xl md:text-2xl font-bold">نتائج تحليل الأداء</h2>
        <Button onClick={handleNewAnalysis}>تحليل جديد</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* بيانات اللاعب */}
        <Card>
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
                <span className="text-muted-foreground">القدم المفضلة:</span>
                <span>
                  {formData.preferredFoot === "right"
                    ? "اليمنى"
                    : formData.preferredFoot === "left"
                      ? "اليسرى"
                      : "كلتاهما"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">سنوات الخبرة:</span>
                <span>{formData.experience} سنة</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-medium mb-2">النظام الرياضي</h3>
              <p className="text-sm">{formData.sportsRoutine}</p>
            </div>
          </CardContent>
        </Card>

        {/* نتائج التحليل */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>نتائج تحليل الفيديو</CardTitle>
            <CardDescription>تحليل أداء اللاعب بناءً على الفيديو المقدم</CardDescription>
          </CardHeader>
          <CardContent>
            {evaluationResult ? (
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-lg mb-2">التقييم</h3>
                  <p className="whitespace-pre-line">{evaluationResult.evaluation}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">نقاط القوة</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>تمرير دقيق وتحكم جيد بالكرة</li>
                      <li>سرعة وقدرة على المراوغة</li>
                      <li>رؤية جيدة للملعب</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">نقاط تحتاج للتحسين</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>التحكم بالكرة تحت الضغط</li>
                      <li>دقة التسديد</li>
                      <li>التمركز الدفاعي</li>
                    </ul>
                  </div>
                </div>

                <div className="border rounded-lg p-4 mt-4">
                  <h3 className="font-bold mb-2">توصيات التدريب</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>تمارين للتحكم بالكرة تحت الضغط (3 مرات أسبوعياً)</li>
                    <li>تمارين دقة التسديد (مرتين أسبوعياً)</li>
                    <li>تمارين تكتيكية للتمركز الدفاعي (مرتين أسبوعياً)</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p>لا توجد نتائج متاحة. يرجى تحليل فيديو أولاً.</p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                router.push("/performance-analysis/results")
              }}
            >
              عرض التقرير المفصل
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )

  const renderConfirmation = () => (
    <div className="text-center space-y-6">
      <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto">
        <BarChart className="w-12 h-12 text-primary mx-auto" />
      </div>
      <h2 className="text-2xl font-bold">تم استلام طلب التحليل بنجاح</h2>
      <p className="text-muted-foreground">
        سيتم تحليل البيانات المقدمة باستخدام نظام الذكاء الاصطناعي المتطور لدينا. سيتم إشعارك عند اكتمال التحليل.
      </p>
      <div className="pt-6">
        <Button onClick={handleNewAnalysis}>العودة للصفحة الرئيسية</Button>
      </div>
    </div>
  )

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">تحليل الأداء</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>تحليل الأداء باستخدام الذكاء الاصطناعي</CardTitle>
          <CardDescription>قم بتحميل بياناتك وفيديوهاتك للحصول على تحليل متقدم لأدائك الرياضي</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && renderUserTypeSelection()}
          {step === 2 && renderForm()}
          {step === 3 && renderResults()}
        </CardContent>
      </Card>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>كيف يعمل تحليل الأداء؟</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-14 h-14 md:w-16 md:h-16 mx-auto mb-4">
                  <Upload className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">1. تحميل البيانات</h3>
                <p className="text-sm text-muted-foreground">
                  قم بتحميل معلوماتك الشخصية والفيديوهات والتقارير الخاصة بك
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-14 h-14 md:w-16 md:h-16 mx-auto mb-4">
                  <BarChart className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">2. التحليل الذكي</h3>
                <p className="text-sm text-muted-foreground">
                  يقوم نظام الذكاء الاصطناعي بتحليل البيانات واستخراج الرؤى والتوصيات
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-14 h-14 md:w-16 md:h-16 mx-auto mb-4">
                  <FileText className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">3. تقرير مفصل</h3>
                <p className="text-sm text-muted-foreground">
                  احصل على تقرير مفصل يتضمن نقاط القوة والضعف وتوصيات لتحسين الأداء
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
