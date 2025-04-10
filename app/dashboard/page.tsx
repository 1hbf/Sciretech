import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Activity, Award, Clock, Users } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">لوحة التحكم</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>نظرة عامة على اللاعب</CardTitle>
            <CardDescription>ملخص أدائك ومستوى تطورك الحالي</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-sm text-slate-500 mb-1">المستوى الحالي</div>
                <div className="text-2xl font-bold">متقدم</div>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-sm text-slate-500 mb-1">مركز اللعب</div>
                <div className="text-2xl font-bold">وسط / هجومي</div>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-sm text-slate-500 mb-1">التدريب</div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">3.5</span>
                  <span className="text-sm mr-1">سنوات من التدريب</span>
                </div>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-sm text-slate-500 mb-1">هذا الشهر</div>
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-2xl font-bold">8.5</span>
                    <span className="text-sm mr-1">ساعة</span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold">24</span>
                    <span className="text-sm mr-1">جلسة</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <div className="text-sm">التقدم نحو المستوى المتقدم</div>
                <div className="text-sm font-medium">75% مكتمل</div>
              </div>
              <Progress value={75} className="h-2" />
            </div>

            <div>
              <div className="text-sm mb-2">الهدف القادم:</div>
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-sm">
                إتقان التمريرات المتقدمة والتحكم بالكرة تحت الضغط
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>تقدم التطوير</CardTitle>
            <CardDescription>تقدمك العام في جميع مجالات المهارات</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <div className="text-sm">المهارات الفنية</div>
                <div className="text-sm font-medium">68%</div>
              </div>
              <Progress value={68} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <div className="text-sm">اللياقة البدنية</div>
                <div className="text-sm font-medium">72%</div>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <div className="text-sm">الوعي التكتيكي</div>
                <div className="text-sm font-medium">54%</div>
              </div>
              <Progress value={54} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <div className="text-sm">الجوانب الذهنية</div>
                <div className="text-sm font-medium">61%</div>
              </div>
              <Progress value={61} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <div className="text-sm font-medium">التقدم الإجمالي</div>
                <div className="text-sm font-medium">64%</div>
              </div>
              <Progress value={64} className="h-2 bg-slate-200" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Activity className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">الأسبوعي</div>
                    <div className="font-medium">1.2 عن الأسبوع الماضي</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">الإنجاز القادم</div>
                    <div className="font-medium">2 جلسات</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>مخطط المهارات</CardTitle>
              <CardDescription>تصور لمستويات مهاراتك الحالية</CardDescription>
            </div>
            <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">تقييم جديد</div>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="w-64 h-64 relative">
              {/* This would be a radar chart in a real implementation */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                مخطط المهارات الرادارية
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>التدريبات القادمة</CardTitle>
            <CardDescription>جلسات التدريب المجدولة للأيام السبعة القادمة</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <div className="font-medium">تدريب الفريق</div>
                <div className="text-sm text-slate-500">الأربعاء 04:30 مساءً</div>
              </div>
              <div className="text-sm text-slate-600 mb-2">جلسة تكتيكية وال��حضير للمباراة</div>
              <div className="flex justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  120 دقيقة
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  فريق
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <div className="font-medium">المهارات الفنية</div>
                <div className="text-sm text-slate-500">السبت 09:00 صباحًا</div>
              </div>
              <div className="text-sm text-slate-600 mb-2">تمارين التمرير والتحكم بالكرة</div>
              <div className="flex justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  90 دقيقة
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  فردي
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <div className="font-medium">القوة واللياقة</div>
                <div className="text-sm text-slate-500">الخميس 10:00 صباحًا</div>
              </div>
              <div className="text-sm text-slate-600 mb-2">جلسة صالة رياضية مع مدرب الأداء</div>
              <div className="flex justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  75 دقيقة
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  فردي
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
