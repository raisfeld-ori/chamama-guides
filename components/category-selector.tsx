"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { motion } from "framer-motion";

interface YearSelectorProps {
  category: string;
  basePath: "learning" | "projects";
}

const years = [
  {
    id: "year-1",
    title: "שנה 1",
    color: "#14b8a6",
    lightColor: "#ccfbf1",
  },
  {
    id: "year-2",
    title: "שנה 2",
    color: "#06b6d4",
    lightColor: "#cffafe",
  },
  {
    id: "year-3",
    title: "שנה 3",
    color: "#84cc16",
    lightColor: "#ecfccb",
  },
];

const categoryTitles: Record<string, string> = {
  frontend: "Frontend - צד משתמש",
  backend: "Backend - צד שרת",
  devops: "DevOps - ניהול תשתיות",
  "data-science": "Data Science - מדעי הנתונים",
};

export function YearSelector({ category, basePath }: YearSelectorProps) {
  return (
    <div className="relative h-screen flex flex-col bg-gradient-to-b from-emerald-50 via-white to-teal-50 overflow-hidden">
      {/* Animated background blur circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 right-40 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <section className="relative flex-1 flex flex-col container mx-auto px-4 pt-6 pb-3 sm:py-8 sm:px-6 lg:px-8">
        {/* Header with title */}
        <BlurFade delay={0.05}>
          <div className="flex flex-col items-center mb-2 sm:mb-8">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-black text-emerald-700 mb-1 sm:mb-3">
              {categoryTitles[category] || category}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
          </div>
        </BlurFade>

        <BlurFade delay={0.1}>
          <h1 className="mb-1 sm:mb-3 text-center text-2xl font-black sm:text-5xl md:text-6xl gradient-green-shimmer animate-shimmer">
            בחרו את השנה שלכם
          </h1>
          <p className="mx-auto mb-3 sm:mb-8 max-w-2xl text-center text-sm sm:text-base text-gray-600 font-medium">
            כל שנה מכילה תכנים מותאמים לרמת הידע שלכם 🎯
          </p>
        </BlurFade>

        {/* Mobile layout — large stacked tap-target cards */}
        <div className="flex flex-col gap-3 sm:hidden w-full mt-2">
          {years.map((year, index) => (
            <BlurFade key={year.id} delay={0.2 + index * 0.1} inView>
              <Link
                href={`/${basePath}/${category}/${year.id}`}
                className="flex items-center gap-4 rounded-2xl px-6 py-5 transition-all active:scale-[0.98] hover:scale-[1.02]"
                style={{ backgroundColor: year.lightColor }}
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl font-black text-white shadow-md"
                  style={{ backgroundColor: year.color }}
                >
                  {index + 1}
                </div>
                <span className="text-2xl font-black" style={{ color: year.color }}>
                  {year.title}
                </span>
              </Link>
            </BlurFade>
          ))}
        </div>

        {/* Desktop layout — SVG grid */}
        <div className="hidden sm:grid flex-1 gap-6 grid-cols-3 content-center max-w-4xl mx-auto w-full">
          {years.map((year, index) => (
            <BlurFade key={year.id} delay={0.2 + index * 0.1} inView>
              <Link href={`/${basePath}/${category}/${year.id}`} className="group cursor-pointer transition-all hover:scale-105">
                {/* SVG with text overlay */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background */}
                  <rect width="200" height="200" fill={year.lightColor} rx="20" />

                  {/* Decorative circles */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="8"
                    fill={year.color}
                    opacity="0.3"
                    animate={{ x: [-2, 2, -2] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  />
                  <motion.circle
                    cx="150"
                    cy="60"
                    r="10"
                    fill={year.color}
                    opacity="0.2"
                    animate={{ x: [2, -2, 2] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                  />

                  {/* Year number circle */}
                  <circle cx="100" cy="100" r="40" fill={year.color} />
                  <foreignObject x="70" y="70" width="60" height="60">
                    <div className="flex items-center justify-center w-full h-full text-white text-3xl font-black">
                      {index + 1}
                    </div>
                  </foreignObject>

                  {/* Decorative lines */}
                  <motion.line
                    x1="30"
                    y1="100"
                    x2="60"
                    y2="100"
                    stroke={year.color}
                    strokeWidth="2"
                    opacity="0.4"
                    animate={{ x1: [28, 32, 28], x2: [58, 62, 58] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.line
                    x1="140"
                    y1="100"
                    x2="170"
                    y2="100"
                    stroke={year.color}
                    strokeWidth="2"
                    opacity="0.4"
                    animate={{ x1: [138, 142, 138], x2: [168, 172, 168] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />

                  {/* Text overlay */}
                  <foreignObject x="30" y="150" width="140" height="40">
                    <div className="flex items-center justify-center h-full">
                      <h3
                        className="text-xl font-black"
                        style={{
                          background: `linear-gradient(90deg, ${year.color} 0%, ${year.color}dd 25%, ${year.color}99 50%, ${year.color}dd 75%, ${year.color} 100%)`,
                          backgroundSize: '200% auto',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {year.title}
                      </h3>
                    </div>
                  </foreignObject>
                </svg>
              </Link>
            </BlurFade>
          ))}
        </div>{/* end desktop grid */}
      </section>

      {/* Bottom decorative SVG - Full width, no padding */}
      <BlurFade delay={0.6} inView>
        <div className="w-full">
          <svg viewBox="0 0 1200 150" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            {/* Background wave - full width */}
            <path
              d="M0,75 Q300,25 600,75 T1200,75 L1200,150 L0,150 Z"
              fill="#d1fae5"
              opacity="0.6"
            />

            {/* Decorative lines */}
            <motion.line
              x1="300"
              y1="90"
              x2="360"
              y2="90"
              stroke="#10b981"
              strokeWidth="3"
              opacity="0.5"
              strokeLinecap="round"
              animate={{ x1: [298, 302, 298], x2: [358, 362, 358] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line
              x1="700"
              y1="95"
              x2="760"
              y2="95"
              stroke="#14b8a6"
              strokeWidth="3"
              opacity="0.5"
              strokeLinecap="round"
              animate={{ x1: [698, 702, 698], x2: [758, 762, 758] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Text */}
            <foreignObject x="450" y="105" width="300" height="40">
              <div className="flex items-center justify-center h-full">

              </div>
            </foreignObject>
          </svg>
        </div>
      </BlurFade>
    </div>
  );
}
