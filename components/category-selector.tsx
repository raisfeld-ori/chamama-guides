"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magicui/blur-fade";

interface YearSelectorProps {
  category: string;
  basePath: "learning" | "projects";
}

const years = [
  {
    id: "year-1",
    title: "שנה 1",
    description: "יסודות תכנות ומושגי בסיס",
    icon: "1️⃣",
  },
  {
    id: "year-2",
    title: "שנה 2",
    description: "מיומנויות פיתוח בינוניות",
    icon: "2️⃣",
  },
  {
    id: "year-3",
    title: "שנה 3",
    description: "מושגי תכנות מתקדמים",
    icon: "3️⃣",
  },
  {
    id: "year-4",
    title: "שנה 4",
    description: "שיטות פיתוח מקצועיות",
    icon: "4️⃣",
  },
];

const categoryTitles: Record<string, string> = {
  frontend: "פיתוח ממשק משתמש",
  backend: "פיתוח צד שרת",
  devops: "DevOps",
  "data-science": "מדעי הנתונים",
};

export function YearSelector({ category, basePath }: YearSelectorProps) {
  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <BlurFade delay={0.1}>
        <h1 className="mb-4 text-center text-4xl font-bold sm:text-5xl">
          {categoryTitles[category] || category}
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
          בחר את שנת הלימוד שלך
        </p>
      </BlurFade>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {years.map((year, index) => (
          <BlurFade key={year.id} delay={0.2 + index * 0.1} inView>
            <Link href={`/${basePath}/${category}/${year.id}`}>
              <div className="group h-full rounded-lg border bg-card p-6 transition-all hover:shadow-xl hover:scale-105">
                <div className="mb-4 text-5xl">{year.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{year.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {year.description}
                </p>
                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  בחר שנה ←
                </Button>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
