"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SkillsChart() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">تقييم المهارات</h1>
      </div>

      <Tabs defaultValue="progress">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="progress">تقدم التطوير</TabsTrigger>
          <TabsTrigger value="details">تفاصيل المهارات</TabsTrigger>
        </TabsList>

        <TabsContent value="progress" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>الأنشطة الأخيرة</CardTitle>
                <CardDescription>جلسات التدريب والتقييمات من الأسبوع الماضي</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">تدريب المهارات الفنية</h4>
                    <span className="text-sm text-slate-500">اليوم</span>
                  </div>
                  <p className="text-sm text-slate-600">التركيز على التمرير والتحكم بالكرة</p>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">تقييم المهارات</h4>
                    <span className="text-sm text-slate-500">الأمس</span>
                  </div>
                  <p className="text-sm text-slate-600">التقييم الفصلي للمهارات الفنية</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="details" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>تفاصيل المهارات</CardTitle>
              <CardDescription>تفاصيل مستويات مهاراتك في مختلف المجالات</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-3">المهارات الفنية</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm">التحكم بالكرة</div>
                        <div className="text-sm font-medium">80%</div>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm">التمرير</div>
                        <div className="text-sm font-medium">75%</div>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm">التسديد</div>
                        <div className="text-sm font-medium">65%</div>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3">اللياقة البدنية</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm">السرعة</div>
                        <div className="text-sm font-medium">70%</div>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm">القوة</div>
                        <div className="text-sm font-medium">60%</div>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm">الرشاقة</div>
                        <div className="text-sm font-medium">85%</div>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3">الجوانب التكتيكية والذهنية</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm">الوعي التكتيكي</div>
                        <div className="text-sm font-medium">55%</div>
                      </div>
                      <Progress value={55} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm">الجوانب الذهنية</div>
                        <div className="text-sm font-medium">60%</div>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
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
