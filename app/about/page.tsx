import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GraduationCap, Users, Target, Award } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "שנות מצוינות", value: "10+", icon: Award, color: "#10b981" },
    { label: "בוגרים", value: "500+", icon: GraduationCap, color: "#22c55e" },
    { label: "שותפים בתעשייה", value: "50+", icon: Users, color: "#14b8a6" },
    { label: "שיעור השמה בעבודה", value: "85%", icon: Target, color: "#84cc16" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <BlurFade delay={0.1}>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-black sm:text-5xl gradient-green-shimmer animate-shimmer">
            אודות תיכון חממה
          </h1>
          <p className="mb-8 text-lg text-gray-700 font-medium">
            מעצימים את הדור הבא של מפתחים באמצעות חינוך מקיף וניסיון מעשי
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <div className="mx-auto mb-16 max-w-4xl">
          <div className="rounded-xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-black text-emerald-800">המשימה שלנו</h2>
            <p className="mb-4 text-gray-700 font-medium leading-relaxed">
              בתיכון חממה, אנחנו מאמינים שלכל תלמיד יש את הפוטנציאל להפוך למפתח תוכנה מיומן. 
              תכנית הלימודים המקיפה שלנו ל-4 שנים מיועדת לקחת תלמידים ממתחילים מוחלטים למקצוענים מוכנים לעבודה.
            </p>
            <p className="text-gray-700 font-medium leading-relaxed">
              אנחנו מתמקדים בלמידה מעשית ומעשית בשילוב עם יסודות תיאורטיים חזקים. 
              התלמידים שלנו לא רק לומדים לתכנת - הם לומדים לחשוב כמו מפתחים, לפתור בעיות אמיתיות ולבנות אפליקציות שעושות הבדל.
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.3} inView>
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-black gradient-green-shimmer animate-shimmer">ההשפעה שלנו</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group rounded-xl border-2 border-gray-100 hover:border-emerald-300 bg-white p-6 text-center transition-all hover:shadow-lg hover:scale-105"
                >
                  <div 
                    className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon className="h-8 w-8" style={{ color: stat.color }} />
                  </div>
                  <div className="mb-2 text-3xl font-black text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.4} inView>
        <div className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-black gradient-green-shimmer animate-shimmer">
            תכנית הלימודים שלנו
          </h2>
          <div className="space-y-6">
            <div className="group rounded-xl border-2 border-emerald-200 hover:border-emerald-400 bg-gradient-to-r from-emerald-50 to-white p-6 transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <h3 className="mb-2 text-xl font-black text-emerald-700 group-hover:text-emerald-600">
                שנה 1: יסודות
              </h3>
              <p className="text-gray-700 font-medium">
                למד יסודות תכנות, פיתוח אתרים בסיסי ומיומנויות פתרון בעיות.
              </p>
            </div>
            <div className="group rounded-xl border-2 border-green-200 hover:border-green-400 bg-gradient-to-r from-green-50 to-white p-6 transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <h3 className="mb-2 text-xl font-black text-green-700 group-hover:text-green-600">
                שנה 2: התמחות
              </h3>
              <p className="text-gray-700 font-medium">
                בחר את המסלול שלך (פרונטאנד, בקאנד, DevOps או מדעי הנתונים) והעמק במיומנויות מתמחות.
              </p>
            </div>
            <div className="group rounded-xl border-2 border-teal-200 hover:border-teal-400 bg-gradient-to-r from-teal-50 to-white p-6 transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <h3 className="mb-2 text-xl font-black text-teal-700 group-hover:text-teal-600">
                שנה 3: פיתוח מתקדם
              </h3>
              <p className="text-gray-700 font-medium">
                בנה אפליקציות מורכבות, תרום לקוד פתוח והתכונן להתמחויות.
              </p>
            </div>
            <div className="group rounded-xl border-2 border-lime-200 hover:border-lime-400 bg-gradient-to-r from-lime-50 to-white p-6 transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <h3 className="mb-2 text-xl font-black text-lime-700 group-hover:text-lime-600">
                שנה 4: השקת קריירה
              </h3>
              <p className="text-gray-700 font-medium">
                השלם פרויקטי סיום, הכנה לראיונות ותמיכה בהשמה בעבודה.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.5} inView>
        <div className="rounded-3xl bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 p-8 sm:p-12 text-center border-2 border-emerald-200 shadow-xl">
          <div className="inline-block mb-4 text-5xl animate-bounce">
            🎓
          </div>
          <h2 className="mb-4 text-3xl font-black text-gray-900">מוכנים להתחיל ללמוד?</h2>
          <p className="mb-6 text-gray-700 font-bold text-lg">
            הצטרף למאות תלמידים שהשיקו קריירות טכנולוגיות מוצלחות
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black shadow-lg hover:shadow-xl transition-all hover:scale-105"
            asChild
          >
            <Link href="/learning/frontend">התחל את המסע שלך</Link>
          </Button>
        </div>
      </BlurFade>
    </div>
  );
}
