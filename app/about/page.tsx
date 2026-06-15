"use client";

import Link from "next/link";
import { BookOpen, Briefcase, Code, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLoading } from "@/contexts/LoadingContext";
import { Loading } from "@/components/ui/loading";

const sections = [
  {
    icon: BookOpen,
    title: "מדריכי למידה",
    description: "מסלולי לימוד מסודרים לפי תחום ורמה.",
    bullets: [
      "סרטוני הדרכה ברורים",
      "חומרי קריאה קצרים ומעשיים",
      "מסלול למידה לפי שנים",
    ],
    link: "/learning",
    linkText: "לעמוד הלמידה",
  },
  {
    icon: Code,
    title: "פרויקטים",
    description: "פרויקטים לבנייה מעשית ותיק עבודות.",
    bullets: [
      "פרויקטים לפי תחום",
      "רעיונות ותוצרים לדוגמה",
      "חיבור בין למידה לעבודה אמיתית",
    ],
    link: "/projects",
    linkText: "לעמוד הפרויקטים",
  },
  {
    icon: Briefcase,
    title: "מדריכי תעסוקה",
    description: "מדריכים פרקטיים לקריירה ופרילנסינג.",
    bullets: [
      "איך להתחיל לחפש עבודה",
      "איך לדבר עם לקוחות",
      "מסלול Freelancing מסודר",
    ],
    link: "/employment/year-1",
    linkText: "לעמוד התעסוקה",
  },
];

const steps = [
  {
    number: "1",
    title: "בחרו מסלול",
    description: "למידה, פרויקטים או תעסוקה.",
  },
  {
    number: "2",
    title: "בחרו תחום",
    description: "פרונטאנד, בקאנד, גיימדב או דאטה.",
  },
  {
    number: "3",
    title: "התקדמו צעד צעד",
    description: "יישום מעשי, תרגול ושיפור מתמיד.",
  },
];

export default function AboutPage() {
  const { isLoading } = useLoading();

  if (isLoading) {
    return <Loading variant="default" text="טוען מידע על המערכת..." />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-emerald-700">
            <GraduationCap className="h-4 w-4" />
            <span className="text-sm font-bold">אודות מדריכי חממה</span>
          </div>
          <h1 className="mb-3 text-4xl font-black gradient-green-shimmer animate-shimmer sm:text-5xl">מדריכי חממה</h1>
          <p className="mx-auto max-w-2xl text-base text-gray-600">
פלטפורמה ללמידה, תרגול וביצוע פרויקטים בשביל מגמת ההייטק, במקום אחד ונגיש          </p>
        </header>

        <section className="mb-12 grid gap-4 md:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article key={section.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                  <Icon className="h-5 w-5 text-emerald-700" />
                </div>
                <h2 className="mb-2 text-xl font-black text-gray-900">{section.title}</h2>
                <p className="mb-4 text-sm text-gray-600">{section.description}</p>
                <ul className="mb-5 space-y-2 text-sm text-gray-700">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-emerald-600 text-white hover:bg-emerald-700">
                  <Link href={section.link}>{section.linkText}</Link>
                </Button>
              </article>
            );
          })}
        </section>

        <section className="mb-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-black text-gray-900">איך מתחילים?</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-black text-white">
                  {step.number}
                </div>
                <h3 className="mb-1 text-base font-black text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h2 className="mb-2 text-2xl font-black text-gray-900">מוכנים להתחיל?</h2>
          <p className="mb-6 text-gray-600">אפשר להתחיל מכל מסלול ולבנות התקדמות אמיתית לאורך זמן.</p>
          <Button size="lg" asChild className="bg-emerald-600 px-8 text-white hover:bg-emerald-700">
            <Link href="/">חזרה לדף הבית</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
