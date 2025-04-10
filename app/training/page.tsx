import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin } from "lucide-react"

export default function Training() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">التدريب</h1>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="upcoming">التدريبات القادمة</TabsTrigger>
          <TabsTrigger value="history">سجل التدريبات</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>التدريبات القادمة</CardTitle>
              <CardDescription>جلسات التدريب المجدولة للأيام السبعة القادمة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-slate-50 p-4 border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">تدريب الفريق</h3>
                      <p className="text-slate-500">جلسة تكتيكية والتحضير للمباراة</p>
                    </div>
                    <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">فريق</div>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4" />
                      <span>الأربعاء 04:30 مساءً (120 دقيقة)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>منشأة النادي</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button>تسجيل الحضور</Button>
                    <Button variant="outline">التفاصيل</Button>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-slate-50 p-4 border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">المهارات الفنية</h3>
                      <p className="text-slate-500">تمارين التمرير والتحكم بالكرة</p>
                    </div>
                    <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">فردي</div>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4" />
                      <span>السبت 09:00 صباحًا (90 دقيقة)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>ملعب التدريب الرئيسي</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button>تسجيل الحضور</Button>
                    <Button variant="outline">التفاصيل</Button>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-slate-50 p-4 border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">القوة واللياقة</h3>
                      <p className="text-slate-500">جلسة صالة رياضية مع مدرب الأداء</p>
                    </div>
                    <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">فردي</div>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4" />
                      <span>الخميس 10:00 صباحًا (75 دقيقة)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>مركز الأداء</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button>تسجيل الحضور</Button>
                    <Button variant="outline">التفاصيل</Button>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-slate-50 p-4 border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">جلسة استشفاء</h3>
                      <p className="text-slate-500">تدريب خفيف وتمارين إطالة</p>
                    </div>
                    <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">فردي</div>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4" />
                      <span>الجمعة 02:00 مساءً (60 دقيقة)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>جناح الاستشفاء</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button>تسجيل الحضور</Button>
                    <Button variant="outline">التفاصيل</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>سجل التدريبات</CardTitle>
              <CardDescription>جلسات التدريب السابقة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg overflow-hidden opacity-70">
                  <div className="bg-slate-50 p-4 border-b">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">تدريب المهارات الفنية</h3>
                        <p className="text-slate-500">التركيز على التمرير والتحكم بالكرة</p>
                      </div>
                      <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        مكتمل
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-4 mb-3">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Clock className="h-4 w-4" />
                        <span>الأمس - 10:30 صباحًا (90 دقيقة)</span>
                      </div>
                    </div>
                    <Button variant="outline">عرض التفاصيل</Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden opacity-70">
                  <div className="bg-slate-50 p-4 border-b">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">اللياقة البدنية</h3>
                        <p className="text-slate-500">تمارين القوة والرشاقة</p>
                      </div>
                      <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        مكتمل
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-4 mb-3">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Clock className="h-4 w-4" />
                        <span>قبل 3 أيام - 9:00 صباحًا (75 دقيقة)</span>
                      </div>
                    </div>
                    <Button variant="outline">عرض التفاصيل</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
