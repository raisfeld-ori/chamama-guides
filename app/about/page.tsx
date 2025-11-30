import { BookOpen, Code, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-16 max-w-4xl">

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black gradient-green-shimmer animate-shimmer mb-4">
            מדריכי חממה
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            אתר למידה לתלמידי תיכון חממה
          </p>
        </div>

        {/* Info Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-gray-200 shadow-xl text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-6">מה יש כאן?</h2>
            <p className="text-xl text-gray-700 font-medium leading-relaxed">
              באתר הזה תמצאו <span className="text-emerald-600 font-black">מדריכי למידה</span>, <span className="text-teal-600 font-black">פרויקטים</span>, ו<span className="text-cyan-600 font-black">מדריכי תעסוקה</span>.
              <br />
              כל התוכן מסודר לפי שנים (1-4) ותחומים.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">מדריכי למידה</h3>
            <p className="text-sm text-gray-600 font-medium">
              סרטונים וחומרים
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-teal-500 flex items-center justify-center shadow-lg">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">פרויקטים</h3>
            <p className="text-sm text-gray-600 font-medium">
              בנו תיק עבודות
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-lg">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">מדריכי תעסוקה</h3>
            <p className="text-sm text-gray-600 font-medium">
              טיפים לעבודה
            </p>
          </div>
        </div>

        {/* How to use */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">איך משתמשים?</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-xl font-black text-white">1</span>
              </div>
              <p className="text-lg text-gray-700 font-medium pt-2">
                בחרו את השנה שלכם מהדף הראשי
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-xl font-black text-white">2</span>
              </div>
              <p className="text-lg text-gray-700 font-medium pt-2">
                בחרו תחום (פרונטאנד, בקאנד, DevOps, מדעי נתונים)
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-xl font-black text-white">3</span>
              </div>
              <p className="text-lg text-gray-700 font-medium pt-2">
                עקבו אחרי המדריכים ובנו פרויקטים
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-8 shadow-xl">
            <p className="text-white text-xl font-bold mb-6">מוכנים להתחיל? 🚀</p>
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 font-black cursor-pointer shadow-lg text-lg px-8"
              asChild
            >
              <Link href="/">
                חזרה לדף הבית
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
