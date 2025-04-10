import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Calendar,
  PieChartIcon as ChartPieIcon,
  CheckCircle,
  Clock,
  FileText,
  Layers,
  LineChart,
  Rocket,
  Shield,
  Star,
  Trophy,
  Users,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Enhanced with gradient and better layout */}
      <header className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-12 sm:py-16 md:py-20 px-4 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/stadium.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
            <div className="space-y-4 sm:space-y-6 w-full md:max-w-2xl text-center md:text-right">
              <Badge className="bg-white/20 text-white hover:bg-white/30 border-none px-3 py-1 text-xs sm:text-sm">
                منصة رياضية متكاملة
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Score tech</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                المنصة الرائدة في تطوير المهارات الرياضية وتحليل الأداء باستخدام الذكاء الاصطناعي
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90 w-full sm:w-auto" asChild>
                  <Link href="/login">تسجيل الدخول</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/signup">إنشاء حساب</Link>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm justify-center md:justify-start">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span>تجربة مجانية لمدة 14 يوم</span>
              </div>
            </div>
            <div className="relative w-full max-w-sm md:max-w-md mt-6 md:mt-0">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/20">
                <img src="/images/stadium.png" alt="ملعب كرة قدم" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-2 sm:p-3 rounded-lg shadow-lg hidden sm:flex">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-1.5 sm:p-2 rounded-full">
                    <LineChart className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-gray-800">تحسن في الأداء</div>
                    <div className="text-xs text-gray-500">+35% في 3 أشهر</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Platform Overview Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-3 sm:mb-4">نبذة عن المنصة</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              منصة Score tech - الحل المتكامل لتطوير المهارات الرياضية
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              منصة متخصصة تجمع بين التكنولوجيا المتقدمة والخبرة الرياضية لمساعدة اللاعبين والمدربين والأندية على تحقيق
              أقصى إمكاناتهم
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <CardTitle>للاعبين</CardTitle>
                <CardDescription>تطوير المهارات ومتابعة التقدم</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">تحليل شامل للمهارات الفنية والبدنية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">خطط تدريبية مخصصة لتطوير نقاط الضعف</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">متابعة التقدم بشكل مستمر ودقيق</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-purple-100 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <CardTitle>للمدربين والأندية</CardTitle>
                <CardDescription>إدارة الفرق وتحليل الأداء</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">إدارة متكاملة للفرق والتدريبات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">تحليل أداء اللاعبين باستخدام الذكاء الاصطناعي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">تقارير تفصيلية عن تطور الفريق</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-green-100 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <CardTitle>للمؤسسات التعليمية</CardTitle>
                <CardDescription>برامج تدريبية متكاملة</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">برامج تدريبية للمدارس والأكاديميات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">متابعة تطور الطلاب بشكل دقيق</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">تقارير دورية للإدارة وأولياء الأمور</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section with Detailed Explanations */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-3 sm:mb-4">خدماتنا</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">خدمات متكاملة لتطوير الأداء الرياضي</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              تقدم منصة Score tech مجموعة متكاملة من الخدمات المصممة خصيصاً لتلبية احتياجات اللاعبين والمدربين والأندية
            </p>
          </div>

          <Tabs defaultValue="performance" className="w-full">
            <div className="overflow-x-auto pb-2">
              <TabsList className="grid w-full min-w-[500px] sm:min-w-0 grid-cols-4 mb-6 sm:mb-8">
                <TabsTrigger value="performance" className="text-xs sm:text-sm">
                  تحليل الأداء
                </TabsTrigger>
                <TabsTrigger value="training" className="text-xs sm:text-sm">
                  خطط التدريب
                </TabsTrigger>
                <TabsTrigger value="skills" className="text-xs sm:text-sm">
                  تقييم المهارات
                </TabsTrigger>
                <TabsTrigger value="team" className="text-xs sm:text-sm">
                  إدارة الفريق
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="performance" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">تحليل الأداء باستخدام الذكاء الاصطناعي</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    نقدم تحليلاً شاملاً لأداء اللاعبين باستخدام تقنيات الذكاء الاصطناعي المتقدمة. يتم تحليل الفيديوهات
                    وتقديم تقارير مفصلة عن نقاط القوة والضعف وتوصيات للتحسين.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full shrink-0">
                        <BarChart className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">تحليل فيديوهات الأداء</h4>
                        <p className="text-xs sm:text-sm text-gray-500">
                          تحليل دقيق للفيديوهات باستخدام خوارزميات متقدمة لتحديد المهارات والحركات
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full shrink-0">
                        <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">تقارير مفصلة</h4>
                        <p className="text-xs sm:text-sm text-gray-500">
                          تقارير شاملة توضح نقاط القوة والضعف مع رسوم بيانية توضيحية
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full shrink-0">
                        <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">خطة تطوير مخصصة</h4>
                        <p className="text-xs sm:text-sm text-gray-500">
                          توصيات مخصصة لتحسين الأداء بناءً على نتائج التحليل
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Button className="mt-4 sm:mt-6 w-full sm:w-auto" asChild>
                    <Link href="/performance-analysis">استكشاف خدمة تحليل الأداء</Link>
                  </Button>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg mt-4 md:mt-0">
                  <img src="/football-analysis-dashboard.png" alt="تحليل الأداء" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="training" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">خطط التدريب المتكاملة</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    خطط تدريبية مخصصة تناسب احتياجات كل لاعب وفريق، مع متابعة دقيقة للتقدم وتعديل الخطط بناءً على
                    النتائج.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1.5 sm:p-2 rounded-full shrink-0">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">جدولة التدريبات</h4>
                        <p className="text-xs sm:text-sm text-gray-500">
                          جدولة سهلة للتدريبات الفردية والجماعية مع إشعارات تذكيرية
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1.5 sm:p-2 rounded-full shrink-0">
                        <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">تمارين متنوعة</h4>
                        <p className="text-xs sm:text-sm text-gray-500">
                          مكتبة ضخمة من التمارين المتنوعة لتطوير مختلف المهارات
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1.5 sm:p-2 rounded-full shrink-0">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">متابعة الحضور والأداء</h4>
                        <p className="text-xs sm:text-sm text-gray-500">تسجيل حضور التدريبات ومتابعة الأداء خلالها</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="mt-4 sm:mt-6 w-full sm:w-auto" asChild>
                    <Link href="/training">استكشاف خطط التدريب</Link>
                  </Button>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg mt-4 md:mt-0">
                  <img src="/football-training-calendar.png" alt="خطط التدريب" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">تقييم المهارات الشامل</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    تقييم دقيق وشامل لمختلف المهارات الفنية والبدنية والذهنية للاعبين، مع متابعة التطور على مدار الوقت.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-purple-100 p-1.5 sm:p-2 rounded-full shrink-0">
                        <ChartPieIcon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">تقييم شامل للمهارات</h4>
                        <p className="text-xs sm:text-sm text-gray-500">
                          تقييم دقيق لأكثر من 30 مهارة فنية وبدنية وذهنية
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-purple-100 p-1.5 sm:p-2 rounded-full shrink-0">
                        <LineChart className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">متابعة التطور</h4>
                        <p className="text-xs sm:text-sm text-gray-500">
                          رسوم بيانية توضح تطور المهارات على مدار الوقت
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-purple-100 p-1.5 sm:p-2 rounded-full shrink-0">
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">تحديد نقاط التميز</h4>
                        <p className="text-xs sm:text-sm text-gray-500">تحديد المهارات المتميزة لدى اللاعب لتعزيزها</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="mt-4 sm:mt-6 w-full sm:w-auto" asChild>
                    <Link href="/skills">استكشاف تقييم المهارات</Link>
                  </Button>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg mt-4 md:mt-0">
                  <img src="/football-skills-radar.png" alt="تقييم المهارات" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="team" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">إدارة الفريق المتكاملة</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    نظام متكامل لإدارة الفرق الرياضية، يشمل إدارة اللاعبين والمدربين والمباريات والتدريبات.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-orange-100 p-1.5 sm:p-2 rounded-full shrink-0">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">إدارة اللاعبين</h4>
                        <p className="text-xs sm:text-sm text-gray-500">
                          إدارة بيانات اللاعبين وتصنيفهم ومتابعة تطورهم
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-orange-100 p-1.5 sm:p-2 rounded-full shrink-0">
                        <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">إدارة المباريات</h4>
                        <p className="text-xs sm:text-sm text-gray-500">جدولة المباريات وتسجيل النتائج والإحصائيات</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-orange-100 p-1.5 sm:p-2 rounded-full shrink-0">
                        <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm sm:text-base">تقارير الفريق</h4>
                        <p className="text-xs sm:text-sm text-gray-500">
                          تقارير شاملة عن أداء الفريق ككل واللاعبين بشكل فردي
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Button className="mt-4 sm:mt-6 w-full sm:w-auto" asChild>
                    <Link href="/team">استكشاف إدارة الفريق</Link>
                  </Button>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg mt-4 md:mt-0">
                  <img src="/football-team-dashboard.png" alt="إدارة الفريق" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-3 sm:mb-4">آراء المستخدمين</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">ماذا يقول مستخدمو المنصة</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              تعرف على تجارب المدربين واللاعبين والأندية مع منصة Score tech
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  "منصة Score tech غيرت طريقة تدريبي للفريق بشكل كامل. التحليل الدقيق للأداء ساعدني في تحديد نقاط الضعف
                  لدى اللاعبين وتطويرها بشكل فعال."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full overflow-hidden shrink-0">
                    <img src="/determined-coach.png" alt="صورة المدرب" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">أحمد محمد</div>
                    <div className="text-xs sm:text-sm text-gray-500">مدرب كرة قدم - نادي النصر</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  "كلاعب، ساعدتني المنصة في فهم نقاط ضعفي بشكل دقيق وتطويرها من خلال خطط التدريب المخصصة. تحسن أدائي
                  بشكل ملحوظ خلال فترة قصيرة."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full overflow-hidden shrink-0">
                    <img src="/determined-athlete.png" alt="صورة اللاعب" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">خالد العلي</div>
                    <div className="text-xs sm:text-sm text-gray-500">لاعب كرة قدم محترف</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  "كأكاديمية رياضية، وفرت لنا المنصة حلاً متكاملاً لإدارة التدريب وتطوير مهارات الطلاب. التقارير الدورية
                  ساعدتنا في متابعة تقدم كل طالب بدقة."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full overflow-hidden shrink-0">
                    <img
                      src="/placeholder.svg?key=fe5ow"
                      alt="صورة مدير الأكاديمية"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">سارة الأحمد</div>
                    <div className="text-xs sm:text-sm text-gray-500">مديرة أكاديمية الأبطال الرياضية</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6">ابدأ رحلتك الآن مع Score tech</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            انضم إلى الآلاف من اللاعبين والمدربين والأندية الذين يستخدمون منصتنا لتحقيق أقصى إمكاناتهم
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90 w-full sm:w-auto" asChild>
              <Link href="/signup">سجل مجاناً</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">تواصل معنا</Link>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 sm:flex sm:items-center sm:justify-center sm:gap-8 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">+5000</div>
              <div className="text-xs sm:text-sm">لاعب</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">+300</div>
              <div className="text-xs sm:text-sm">مدرب</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">+100</div>
              <div className="text-xs sm:text-sm">نادي</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-8 sm:py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Score tech</h3>
              <p className="text-sm text-gray-400 mb-3 sm:mb-4">
                المنصة الرائدة في تطوير المهارات الرياضية وتحليل الأداء باستخدام الذكاء الاصطناعي
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-gray-400 hover:text-white">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="/performance-analysis" className="text-sm text-gray-400 hover:text-white">
                    تحليل الأداء
                  </Link>
                </li>
                <li>
                  <Link href="/training" className="text-sm text-gray-400 hover:text-white">
                    خطط التدريب
                  </Link>
                </li>
                <li>
                  <Link href="/skills" className="text-sm text-gray-400 hover:text-white">
                    تقييم المهارات
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-sm text-gray-400 hover:text-white">
                    إدارة الفريق
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4">الدعم</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
                    اتصل بنا
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-gray-400 hover:text-white">
                    الأسئلة الشائعة
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-sm text-gray-400 hover:text-white">
                    مركز المساعدة
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-sm text-gray-400 hover:text-white">
                    دروس تعليمية
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4">تواصل معنا</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@scoretech.com</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+966 12 345 6789</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>الرياض، المملكة العربية السعودية</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Score tech. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
