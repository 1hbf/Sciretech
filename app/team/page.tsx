import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, Shield, Zap, Target, Dumbbell } from "lucide-react"

// بيانات اللاعبين مع تصنيفاتهم
const players = [
  {
    id: 1,
    name: "أحمد محمد",
    position: "وسط / هجومي",
    level: "متقدم",
    status: "نشط",
    avatar: "/focused-athlete.png",
    skills: {
      speed: 85,
      technique: 78,
      strength: 70,
      tactical: 82,
      leadership: 75,
    },
    specialties: ["صانع ألعاب", "تمريرات دقيقة"],
  },
  {
    id: 2,
    name: "خالد العلي",
    position: "مدافع",
    level: "متقدم",
    status: "نشط",
    avatar: "/two-gamers.png",
    skills: {
      speed: 75,
      technique: 68,
      strength: 88,
      tactical: 80,
      leadership: 85,
    },
    specialties: ["قوة بدنية", "ضربات رأسية"],
  },
  {
    id: 3,
    name: "محمد سعيد",
    position: "حارس مرمى",
    level: "متقدم",
    status: "نشط",
    avatar: "/esports-arena-gamer.png",
    skills: {
      speed: 70,
      technique: 75,
      strength: 80,
      tactical: 75,
      leadership: 80,
    },
    specialties: ["ردود فعل سريعة", "قراءة اللعب"],
  },
  {
    id: 4,
    name: "عبدالله ناصر",
    position: "جناح",
    level: "متوسط",
    status: "نشط",
    avatar: "/esports-arena.png",
    skills: {
      speed: 90,
      technique: 82,
      strength: 65,
      tactical: 70,
      leadership: 60,
    },
    specialties: ["سرعة فائقة", "مراوغة"],
  },
  {
    id: 5,
    name: "فهد العمري",
    position: "مهاجم",
    level: "متقدم",
    status: "نشط",
    avatar: "/futuristic-athlete.png",
    skills: {
      speed: 82,
      technique: 85,
      strength: 78,
      tactical: 75,
      leadership: 70,
    },
    specialties: ["تسديد قوي", "حس تهديفي"],
  },
  {
    id: 6,
    name: "سعد الحربي",
    position: "وسط / دفاعي",
    level: "متوسط",
    status: "نشط",
    avatar: "/placeholder.svg?height=64&width=64&query=player6",
    skills: {
      speed: 75,
      technique: 70,
      strength: 85,
      tactical: 88,
      leadership: 80,
    },
    specialties: ["استخلاص الكرة", "بناء اللعب"],
  },
]

// مكون لعرض مهارة اللاعب مع أيقونة
const SkillWithIcon = ({ name, value, icon: Icon }) => (
  <div className="flex items-center gap-2 mb-1.5">
    <div className="bg-primary/10 p-1 rounded-full">
      <Icon className="h-3.5 w-3.5 text-primary" />
    </div>
    <div className="flex-1">
      <div className="flex justify-between text-xs mb-0.5">
        <span>{name}</span>
        <span className="font-medium">{value}%</span>
      </div>
      <Progress value={value} className="h-1.5" />
    </div>
  </div>
)

export default function Team() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">الفريق</h1>
        <Button>إضافة لاعب</Button>
      </div>

      <Tabs defaultValue="players">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="players">اللاعبون</TabsTrigger>
          <TabsTrigger value="coaches">المدربون</TabsTrigger>
          <TabsTrigger value="matches">المباريات</TabsTrigger>
        </TabsList>

        <TabsContent value="players" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>لاعبو الفريق</CardTitle>
              <CardDescription>قائمة اللاعبين في الفريق مع تصنيفاتهم ومهاراتهم</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {players.map((player) => (
                  <Card key={player.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-4 border-b">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={player.avatar} />
                            <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-bold">{player.name}</h3>
                            <div className="text-sm text-slate-500">{player.position}</div>
                            <div className="flex gap-2 mt-2">
                              <Badge variant="outline">{player.level}</Badge>
                              <Badge variant="outline" className="bg-green-50">
                                {player.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-slate-50">
                        <div className="mb-3">
                          <h4 className="text-sm font-semibold mb-2">المهارات</h4>
                          <SkillWithIcon name="السرعة" value={player.skills.speed} icon={Zap} />
                          <SkillWithIcon name="التكنيك" value={player.skills.technique} icon={Star} />
                          <SkillWithIcon name="القوة البدنية" value={player.skills.strength} icon={Dumbbell} />
                          <SkillWithIcon name="الوعي التكتيكي" value={player.skills.tactical} icon={Target} />
                          <SkillWithIcon name="القيادة" value={player.skills.leadership} icon={Shield} />
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold mb-2">التخصصات</h4>
                          <div className="flex flex-wrap gap-2">
                            {player.specialties.map((specialty, index) => (
                              <Badge key={index} className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="coaches" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>المدربون</CardTitle>
              <CardDescription>قائمة المدربين في الفريق</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3].map((coach) => (
                  <Card key={coach}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={`/placeholder.svg?height=64&width=64&query=coach${coach}`} />
                          <AvatarFallback>مدرب</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold">مدرب {coach}</h3>
                          <div className="text-sm text-slate-500">
                            {coach === 1 ? "مدرب رئيسي" : coach === 2 ? "مدرب لياقة" : "مدرب حراس"}
                          </div>
                          <div className="text-sm text-slate-500 mt-1">5 سنوات خبرة</div>
                          <div className="flex gap-2 mt-2">
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                              {coach === 1 ? "تكتيك" : coach === 2 ? "لياقة بدنية" : "حراسة المرمى"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="matches" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>المباريات القادمة</CardTitle>
              <CardDescription>جدول المباريات القادمة للفريق</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((match) => (
                  <Card key={match}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-slate-500">
                            {match === 1 ? "السبت، 20 مايو" : match === 2 ? "الأحد، 28 مايو" : "السبت، 3 يونيو"}
                          </div>
                          <h3 className="font-bold mt-1">فريقنا ضد فريق {match}</h3>
                          <div className="text-sm text-slate-500 mt-1">
                            {match === 1 ? "ملعب المدينة الرياضية" : match === 2 ? "ملعب النادي" : "ملعب الجامعة"}
                          </div>
                        </div>
                        <Badge className={match === 1 ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}>
                          {match === 1 ? "مباراة ودية" : "مباراة رسمية"}
                        </Badge>
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
