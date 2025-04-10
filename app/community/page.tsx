"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, ThumbsUp, MessageCircle, Share2, Send } from "lucide-react"

export default function Community() {
  const [newPost, setNewPost] = useState("")

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle post submission logic here
    console.log("New post:", newPost)
    setNewPost("")
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">المجتمع</h1>
      </div>

      <Tabs defaultValue="feed">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="feed">المنشورات</TabsTrigger>
          <TabsTrigger value="discussions">المناقشات</TabsTrigger>
          <TabsTrigger value="events">الفعاليات</TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>شارك منشورًا</CardTitle>
              <CardDescription>شارك أفكارك وإنجازاتك مع مجتمع اللاعبين</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePostSubmit}>
                <Textarea
                  placeholder="ماذا يدور في ذهنك؟"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="mb-3"
                />
                <div className="flex justify-end">
                  <Button type="submit">نشر</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {[1, 2, 3].map((post) => (
              <Card key={post}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                      <AvatarFallback>مستخدم</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <div className="font-bold">
                            {post === 1 ? "أحمد محمد" : post === 2 ? "خالد العلي" : "سارة أحمد"}
                          </div>
                          <div className="text-sm text-slate-500">
                            {post === 1 ? "منذ ساعة" : post === 2 ? "منذ 3 ساعات" : "منذ يوم"}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p>
                          {post === 1
                            ? "سعيد جدًا بإكمال تدريب اليوم! حققت تقدمًا كبيرًا في تمارين التمرير والتحكم بالكرة. شكرًا للمدرب على النصائح القيمة!"
                            : post === 2
                              ? "شاهدت فيديو تحليلي رائع عن التكتيكات الدفاعية. أنصح الجميع بمشاهدته للاستفادة من النصائح المقدمة فيه."
                              : "أكملت اليوم تقييم المهارات الفصلي وحصلت على تقدم بنسبة 15% عن التقييم السابق. العمل الجاد يؤتي ثماره دائمًا!"}
                        </p>
                      </div>
                      <div className="flex gap-4 mt-4">
                        <Button variant="ghost" size="sm" className="flex gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>إعجاب</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="flex gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>تعليق</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="flex gap-1">
                          <Share2 className="h-4 w-4" />
                          <span>مشاركة</span>
                        </Button>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex gap-2 items-center">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                            <AvatarFallback>م</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 relative">
                            <Input placeholder="اكتب تعليقًا..." className="pr-10" />
                            <Button variant="ghost" size="icon" className="absolute left-1 top-1/2 -translate-y-1/2">
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="discussions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>المناقشات النشطة</CardTitle>
              <CardDescription>انضم إلى المناقشات الجارية حول مواضيع كرة القدم المختلفة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((discussion) => (
                  <div key={discussion} className="border rounded-lg p-4">
                    <div className="flex justify-between">
                      <h3 className="font-bold">
                        {discussion === 1
                          ? "أفضل تمارين لتحسين السرعة والرشاقة"
                          : discussion === 2
                            ? "نصائح للتعامل مع الإصابات الرياضية"
                            : discussion === 3
                              ? "استراتيجيات التغذية قبل المباريات"
                              : "تقنيات الاسترخاء والتركيز الذهني"}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MessageSquare className="h-4 w-4" />
                        <span>{discussion * 5 + 3}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                      <span>بدأها:</span>
                      <span className="font-medium">
                        {discussion === 1
                          ? "محمد علي"
                          : discussion === 2
                            ? "سارة أحمد"
                            : discussion === 3
                              ? "خالد العلي"
                              : "فاطمة محمد"}
                      </span>
                      <span>•</span>
                      <span>
                        {discussion === 1
                          ? "منذ يومين"
                          : discussion === 2
                            ? "منذ 3 أيام"
                            : discussion === 3
                              ? "منذ أسبوع"
                              : "منذ أسبوعين"}
                      </span>
                    </div>
                    <Button variant="outline" className="mt-3">
                      عرض المناقشة
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button>بدء مناقشة جديدة</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>الفعاليات القادمة</CardTitle>
              <CardDescription>فعاليات وأنشطة مجتمعية قادمة يمكنك المشاركة فيها</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((event) => (
                  <Card key={event}>
                    <CardContent className="p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-bold">
                            {event === 1
                              ? "ورشة عمل: تطوير المهارات الفنية"
                              : event === 2
                                ? "لقاء مفتوح مع مدربين محترفين"
                                : "بطولة ودية للفرق المحلية"}
                          </h3>
                          <div className="text-sm text-slate-500 mt-1">
                            {event === 1
                              ? "السبت، 25 مايو • 10:00 صباحًا - 1:00 مساءً"
                              : event === 2
                                ? "الأربعاء، 5 يونيو • 6:00 مساءً - 8:00 مساءً"
                                : "السبت-الأحد، 15-16 يونيو • 9:00 صباحًا - 6:00 مساءً"}
                          </div>
                          <div className="text-sm text-slate-500 mt-1">
                            {event === 1
                              ? "مركز التدريب الرئيسي"
                              : event === 2
                                ? "قاعة المؤتمرات - النادي الرياضي"
                                : "ملاعب المدينة الرياضية"}
                          </div>
                          <p className="text-sm mt-2">
                            {event === 1
                              ? "ورشة عمل تدريبية مكثفة لتطوير المهارات الفنية في كرة القدم مع مدربين محترفين."
                              : event === 2
                                ? "لقاء مفتوح للأسئلة والأجوبة مع مجموعة من المدربين المحترفين لمناقشة مختلف جوانب التدريب."
                                : "بطولة ودية للفرق المحلية تهدف إلى تعزيز روح المنافسة وتبادل الخبرات بين اللاعبين."}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-4">
                        <Button>التسجيل</Button>
                        <Button variant="outline">التفاصيل</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
