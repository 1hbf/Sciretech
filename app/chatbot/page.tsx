import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Bot, Send } from "lucide-react"

export default function Chatbot() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">الشات بوت</h1>
      </div>

      <Card className="h-[calc(100vh-200px)] flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            مساعد Score tech
          </CardTitle>
          <CardDescription>المساعد الذكي لتحسين أدائك وتطوير مهاراتك</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto">
                <MessageCircle className="w-12 h-12 text-primary mx-auto" />
              </div>
              <h2 className="text-2xl font-bold">قريباً</h2>
              <p className="text-muted-foreground max-w-md">
                نعمل حالياً على تطوير مساعد ذكي يساعدك في تحليل أدائك وتقديم نصائح مخصصة لتطوير مهاراتك. ترقبوا إطلاقه
                قريباً!
              </p>
            </div>
          </div>

          <div className="mt-4 border-t pt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="اكتب سؤالك هنا..."
                className="w-full rounded-full border border-input bg-background px-4 py-2 pr-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                disabled
              />
              <button className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" disabled>
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
