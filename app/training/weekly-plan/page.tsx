import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Clock, Video } from "lucide-react"

export default function WeeklyPlan() {
  // Sample data for the weekly calendar
  const days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
  const dates = [14, 15, 16, 17, 18, 19, 20]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">خطة التدريب الأسبوعية</h1>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>جدول التدريب للأسبوع القادم</CardTitle>
              <CardDescription>14 - 20 مايو</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => (
              <div key={day} className="text-center">
                <div className="font-medium text-sm">{day}</div>
                <div className="bg-slate-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mt-1">
                  {dates[index]}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">تقدم الأسبوع</h3>
                <div className="text-sm font-medium">4 من 5 جلسات مكتملة</div>
              </div>
              <Progress value={80} className="h-2 mb-2" />
              <div className="text-sm text-slate-500 text-left">80%</div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>جلسة مكتملة</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>جلسة مجدولة</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>جلسة فائتة</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>الأنشطة الأخيرة</CardTitle>
          <CardDescription>جلسات التدريب والتق��يمات من الأسبوع الماضي</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border rounded-lg p-4 flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">تدريب المهارات الفنية</h4>
                <span className="text-sm text-slate-500">اليوم - 10:30 صباحًا</span>
              </div>
              <p className="text-sm text-slate-600">التركيز على التمرير والتحكم بالكرة</p>
              <div className="text-xs text-slate-500 mt-1">90 دقيقة</div>
            </div>
          </div>

          <div className="border rounded-lg p-4 flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-full">
              <Clock className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">تقييم المهارات</h4>
                <span className="text-sm text-slate-500">الأمس - 2:00 مساءً</span>
              </div>
              <p className="text-sm text-slate-600">التقييم الفصلي للمهارات الفنية</p>
              <div className="text-xs text-slate-500 mt-1">60 دقيقة</div>
            </div>
          </div>

          <div className="border rounded-lg p-4 flex items-start gap-4">
            <div className="bg-purple-100 p-2 rounded-full">
              <Video className="h-5 w-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">تحليل المباراة</h4>
                <span className="text-sm text-slate-500">قبل يومين - 7:00 مساءً</span>
              </div>
              <p className="text-sm text-slate-600">مراجعة أداء مباراة نهاية الأسبوع</p>
              <div className="text-xs text-slate-500 mt-1">45 دقيقة</div>
            </div>
          </div>

          <div className="border rounded-lg p-4 flex items-start gap-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <Clock className="h-5 w-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">اللياقة البدنية</h4>
                <span className="text-sm text-slate-500">قبل 3 أيام - 9:00 صباحًا</span>
              </div>
              <p className="text-sm text-slate-600">تمارين القوة والرشاقة</p>
              <div className="text-xs text-slate-500 mt-1">75 دقيقة</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
