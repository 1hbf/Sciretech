import type React from "react"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

// استخدام طريقة بديلة لاستيراد الخط
const inter = { className: "font-sans" }

export const metadata = {
  title: "Score tech - تطبيق تدريب كرة القدم",
  description: "تتبع تطورك، وإدارة خطط التدريب، وتحقيق أهدافك في كرة القدم",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'