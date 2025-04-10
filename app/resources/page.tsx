import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Video, Download } from "lucide-react"

export default function Resources() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">الموارد</h1>
      </div>

      <Tabs defaultValue="articles">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="articles">مقالات</TabsTrigger>
          <TabsTrigger value="videos">فيديوهات</TabsTrigger>
          <TabsTrigger value="documents">مستندات</TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((article) => (
              <Card key={article}>
                <CardHeader className="pb-3">
                  <div className="h-40 bg-slate-100 rounded-md mb-3 flex items-center justify-center">
                    <BookOpen className="h-10 w-10 text-slate-400" />
                  </div>
                  <CardTitle>
                    {article === 1
                      ? "أساسيات التمرير في كرة القدم"
                      : article === 2
                        ? "تمارين لتحسين السرعة والرشاقة"
                        : article === 3
                          ? "استراتيجيات التكتيك الهجومي"
                          : article === 4
                            ? "تقنيات التحكم بالكرة المتقدمة"
                            : article === 5
                              ? "تمارين الإحماء الفعالة"
                              : "الاستشفاء بعد التدريب المكثف"}
                  </CardTitle>
                  <CardDescription>
                    {article === 1
                      ? "تعلم أساسيات التمرير الصحيح وتقنياته المختلفة"
                      : article === 2
                        ? "مجموعة تمارين لتحسين السرعة والرشاقة للاعبي كرة القدم"
                        : article === 3
                          ? "فهم وتطبيق استراتيجيات التكتيك الهجومي في المباريات"
                          : article === 4
                            ? "تقنيات متقدمة للتحكم بالكرة تحت الضغط"
                            : article === 5
                              ? "أهمية الإحماء الصحيح وتمارين فعالة قبل التدريب"
                              : "طرق الاستشفاء السريع بعد التدريبات والمباريات المكثفة"}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    قراءة المقال
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((video) => (
              <Card key={video}>
                <CardHeader className="pb-3">
                  <div className="h-48 bg-slate-100 rounded-md mb-3 flex items-center justify-center">
                    <Video className="h-10 w-10 text-slate-400" />
                  </div>
                  <CardTitle>
                    {video === 1
                      ? "تدريبات التمرير المتقدمة"
                      : video === 2
                        ? "تحليل مباراة: دروس تكتيكية"
                        : video === 3
                          ? "تمارين تحسين المهارات الفردية"
                          : "تدريبات القوة واللياقة للاعبي كرة القدم"}
                  </CardTitle>
                  <CardDescription>
                    {video === 1
                      ? "شرح مفصل لتدريبات التمرير المتقدمة مع أمثلة عملية"
                      : video === 2
                        ? "تحليل تكتيكي لمباراة احترافية واستخلاص الدروس"
                        : video === 3
                          ? "مجموعة تمارين لتطوير المهارات الفردية للاعبين"
                          : "برنامج تدريبي متكامل لتحسين القوة واللياقة البدنية"}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    مشاهدة الفيديو
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="documents" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>المستندات والملفات</CardTitle>
              <CardDescription>مستندات وملفات تدريبية يمكن تحميلها</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((doc) => (
                  <div key={doc} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">
                          {doc === 1
                            ? "خطة تدريب أسبوعية نموذجية"
                            : doc === 2
                              ? "دليل تمارين الإحماء"
                              : doc === 3
                                ? "نموذج تقييم المهارات"
                                : doc === 4
                                  ? "خطة تغذية للاعبي كرة القدم"
                                  : "تمارين الاستشفاء بعد المباريات"}
                        </div>
                        <div className="text-sm text-slate-500">
                          {doc === 1 || doc === 3 ? "PDF" : doc === 2 || doc === 5 ? "DOCX" : "XLSX"} •{" "}
                          {doc === 1
                            ? "2.4 MB"
                            : doc === 2
                              ? "1.8 MB"
                              : doc === 3
                                ? "3.2 MB"
                                : doc === 4
                                  ? "1.5 MB"
                                  : "2.1 MB"}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
