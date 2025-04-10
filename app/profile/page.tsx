"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Profile() {
  const [name, setName] = useState("أحمد محمد")
  const [email, setEmail] = useState("ahmed@example.com")
  const [phone, setPhone] = useState("0501234567")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle profile update logic here
    console.log("Profile update with:", { name, email, phone })
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">الملف الشخصي</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src="/placeholder.svg?height=128&width=128" />
                <AvatarFallback>أم</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h2 className="text-xl font-bold">أحمد محمد</h2>
                <p className="text-sm text-slate-500">وسط / هجومي</p>
                <div className="flex justify-center gap-2 mt-2">
                  <Badge variant="outline">متقدم</Badge>
                  <Badge variant="outline" className="bg-green-50">
                    نشط
                  </Badge>
                </div>
              </div>
              <Button className="w-full">تغيير الصورة</Button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <div className="text-sm font-medium mb-1">التقدم الإجمالي</div>
                <Progress value={64} className="h-2" />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>64%</span>
                  <span>المستوى المتقدم</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-medium mb-2">معلومات الاتصال</h3>
                <div className="space-y-1 text-sm">
                  <p className="flex justify-between">
                    <span className="text-slate-500">البريد الإلكتروني:</span>
                    <span>ahmed@example.com</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-slate-500">رقم الهاتف:</span>
                    <span>0501234567</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-medium mb-2">معلومات اللاعب</h3>
                <div className="space-y-1 text-sm">
                  <p className="flex justify-between">
                    <span className="text-slate-500">الفريق:</span>
                    <span>فريق الشباب</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-slate-500">المدرب:</span>
                    <span>خالد العلي</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-slate-500">تاريخ الانضمام:</span>
                    <span>15 يناير 2022</span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="account">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="account">الحساب</TabsTrigger>
              <TabsTrigger value="stats">الإحصائيات</TabsTrigger>
              <TabsTrigger value="history">السجل</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>معلومات الحساب</CardTitle>
                  <CardDescription>قم بتحديث معلومات حسابك الشخصية هنا</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم الكامل</Label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <Button type="submit">حفظ التغييرات</Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>تغيير كلمة المرور</CardTitle>
                  <CardDescription>قم بتحديث كلمة المرور الخاصة بك</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">كلمة المرور الحالية</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">كلمة المرور الجديدة</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button type="submit">تغيير كلمة المرور</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stats" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>إحصائيات اللاعب</CardTitle>
                  <CardDescription>إحصائيات أدائك في التدريبات والمباريات</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold mb-3">إحصائيات التدريب</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-sm text-slate-500">جلسات التدريب</div>
                            <div className="text-2xl font-bold">124</div>
                            <div className="text-xs text-green-600">+12 هذا الشهر</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-sm text-slate-500">ساعات التدريب</div>
                            <div className="text-2xl font-bold">156</div>
                            <div className="text-xs text-green-600">+8.5 هذا الشهر</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-sm text-slate-500">معدل الحضور</div>
                            <div className="text-2xl font-bold">92%</div>
                            <div className="text-xs text-green-600">+2% عن الشهر الماضي</div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold mb-3">إحصائيات المباريات</h3>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-sm text-slate-500">المباريات</div>
                            <div className="text-2xl font-bold">28</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-sm text-slate-500">الأهداف</div>
                            <div className="text-2xl font-bold">12</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-sm text-slate-500">التمريرات الحاسمة</div>
                            <div className="text-2xl font-bold">18</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-sm text-slate-500">دقائق اللعب</div>
                            <div className="text-2xl font-bold">1840</div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>سجل النشاط</CardTitle>
                  <CardDescription>سجل نشاطاتك الأخيرة في التطبيق</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="flex gap-4 pb-4 border-b last:border-0">
                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                        <div>
                          <div className="font-medium">
                            {item === 1
                              ? "حضور جلسة تدريب المهارات الفنية"
                              : item === 2
                                ? "إكمال تقييم المهارات الفصلي"
                                : item === 3
                                  ? "المشاركة في مباراة ودية"
                                  : item === 4
                                    ? "تحديث معلومات الملف الشخصي"
                                    : "حضور جلسة تدريب اللياقة البدنية"}
                          </div>
                          <div className="text-sm text-slate-500">
                            {item === 1
                              ? "اليوم، 10:30 صباحًا"
                              : item === 2
                                ? "الأمس، 2:00 مساءً"
                                : item === 3
                                  ? "قبل 3 أيام، 4:00 مساءً"
                                  : item === 4
                                    ? "قبل 5 أيام، 11:15 صباحًا"
                                    : "قبل أسبوع، 9:00 صباحًا"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
