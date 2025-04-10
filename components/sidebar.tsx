"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart,
  Calendar,
  PieChartIcon as ChartPieIcon,
  Home,
  LayoutDashboard,
  Users,
  BookOpen,
  MessageSquare,
  MessageCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const routes = [
  {
    label: "الرئيسية",
    icon: Home,
    href: "/",
  },
  {
    label: "لوحة التحكم",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "خطط التدريب",
    icon: Calendar,
    href: "/training",
  },
  {
    label: "الفريق",
    icon: Users,
    href: "/team",
  },
  {
    label: "تقييم المهارات",
    icon: ChartPieIcon,
    href: "/skills",
  },
  {
    label: "تحليل الأداء",
    icon: BarChart,
    href: "/performance-analysis",
  },
  {
    label: "الموارد",
    icon: BookOpen,
    href: "/resources",
  },
  {
    label: "المجتمع",
    icon: MessageSquare,
    href: "/community",
  },
  {
    label: "الشات بوت",
    icon: MessageCircle,
    href: "/chatbot",
    badge: "قريباً",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center justify-center mb-14 mt-4">
          <h1 className="text-2xl font-bold">Score tech</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className="h-5 w-5 ml-3" />
                {route.label}
              </div>
              {route.badge && (
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">{route.badge}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 py-2">
        <Button variant="outline" className="w-full bg-white text-slate-900 hover:bg-slate-200">
          تسجيل الخروج
        </Button>
      </div>
    </div>
  )
}
