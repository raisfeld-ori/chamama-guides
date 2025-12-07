"use client"

import { Hero } from "@/components/layout/hero";
import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlayfulButton } from "@/components/ui/playful-button";
import { BookOpen, Code, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useLoading } from "@/contexts/LoadingContext";
import { Loading } from "@/components/ui/loading";

export default function Home() {
  const { isLoading } = useLoading();

  if (isLoading) {
    return <Loading variant="default" text="טוען את המערכת..." />;
  }
  const sections = [
    {
      icon: BookOpen,
      title: "למידה",
      description:
        "תכנית לימודים מקיפה עם סרטונים, מדריכים ומשאבים לכל שנה ומסלול.",
      href: "/learning",
      color: "#10b981",
      lightColor: "#d1fae5",
    },
    {
      icon: Code,
      title: "פרויקטים",
      description:
        "פרויקטים מעשיים המותאמים לשנה ולהתמחות שלך לבניית תיק העבודות.",
      href: "/projects",
      color: "#84cc16",
      lightColor: "#ecfccb",
    },
    {
      icon: Briefcase,
      title: "תעסוקה",
      description:
        "הדרכה קריירה, הכנה לראיונות ואסטרטגיות חיפוש עבודה לכל שנת לימוד.",
      href: "/employment",
      color: "#14b8a6",
      lightColor: "#ccfbf1",
    },
  ];

  const tracks = [
    {
      title: "פרונטאנד",
      description: "בנה ממשקי משתמש יפים",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      href: "/learning/frontend",
      color: "#06b6d4",
      lightColor: "#cffafe",
    },
    {
      title: "בקאנד",
      description: "צור אפליקציות שרת חזקות",
      technologies: ["Node.js", "Python", "מסדי נתונים"],
      href: "/learning/backend",
      color: "#22c55e",
      lightColor: "#dcfce7",
    },
    {
      title: "פיתוח משחקים",
      description: "תפתחו משחקים כיפיים ומשמעותיים",
      technologies: ["Python", "Godot", "#C"],
      href: "/learning/gamedev",
      color: "#10b981",
      lightColor: "#d1fae5",
    },
    {
      title: "מדעי הנתונים",
      description: "נתח והצג נתונים",
      technologies: ["Python", "ML", "אנליטיקה"],
      href: "/learning/datascience",
      color: "#84cc16",
      lightColor: "#ecfccb",
    },
  ];

  return (
    <>
      <Hero />

      {/* Main Sections */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <BlurFade delay={0.2} inView>
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl gradient-green-shimmer animate-shimmer">
            מסלול הלמידה שלך
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            בחר את המסע שלך דרך שלושת המקטעים העיקריים שלנו
          </p>
        </BlurFade>

        <div className="grid gap-12 md:grid-cols-3">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                <Link href={section.href} className="group block">
                  <div className="relative">
                    <svg
                      viewBox="0 0 300 300"
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Mario SVG replacing the cloud */}
                      <path
                        d="M150 50c-20 0-35 15-35 35v40c0 20 15 35 35 35s35-15 35-35v-40c0-20-15-35-35-35zm-20 30h40v40h-40v-40z
                           M135 120c0 10 10 20 20 20s20-10 20-20h-40z"
                        fill={section.lightColor}
                        className="transition-all duration-300"
                      />

                      <motion.circle
                        cx="80"
                        cy="100"
                        r="15"
                        fill={section.color}
                        opacity="0.3"
                        animate={{ x: [-3, 3, -3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />

                      <motion.circle
                        cx="220"
                        cy="120"
                        r="20"
                        fill={section.color}
                        opacity="0.2"
                        animate={{ x: [3, -3, 3] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      />

                      <circle
                        cx="150"
                        cy="150"
                        r="60"
                        fill={section.color}
                        className="transition-all duration-300 group-hover:r-[65]"
                      />

                      <foreignObject x="110" y="110" width="80" height="80">
                        <div className="flex items-center justify-center w-full h-full">
                          <Icon className="h-12 w-12 text-white" strokeWidth={2.5} />
                        </div>
                      </foreignObject>

                      <foreignObject x="50" y="235" width="200" height="60">
                        <div className="flex flex-col items-center justify-start h-full">
                          <h3
                            className="text-lg font-black mb-1.5 animate-shimmer"
                            style={{
                              background: `linear-gradient(90deg, ${section.color} 0%, ${section.color}dd 25%, ${section.color}99 50%, ${section.color}dd 75%, ${section.color} 100%)`,
                              backgroundSize: "200% auto",
                              WebkitBackgroundClip: "text",
                              backgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              color: "transparent",
                            }}
                          >
                            {section.title}
                          </h3>
                          <p className="text-[10px] text-gray-500 font-medium leading-tight text-center px-2 opacity-80">
                            {section.description}
                          </p>
                        </div>
                      </foreignObject>
                    </svg>
                  </div>
                </Link>
              </BlurFade>
            );
          })}
        </div>
      </section>

      {/* Tracks Section */}
      <section className="border-t bg-gradient-to-b from-emerald-50 to-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2} inView>
            <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl gradient-green-shimmer animate-shimmer">
              ארבעה מסלולי התמחות
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              בחר את ההתמחות שלך ושלוט במיומנויות שאתה צריך
            </p>
          </BlurFade>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map((track, index) => {
              const shapes = [
                "M60,85 L140,85 L140,120 L60,120 Z M55,122 L145,122 L142,127 L58,127 Z",
                "M65,65 L135,65 Q145,65 145,75 L145,95 Q145,105 135,105 L65,105 Q55,105 55,95 L55,75 Q55,65 65,65 Z M65,110 L135,110 Q145,110 145,120 L145,137 Q145,147 135,147 L65,147 Q55,147 55,137 L55,120 Q55,110 65,110 Z",
                "M65,95 Q65,80 85,80 Q100,70 115,80 Q135,80 135,95 Q148,95 148,108 Q148,120 135,120 L65,120 Q52,120 52,108 Q52,95 52,95 Z",
                "M45,130 L60,105 L75,115 L95,80 L115,100 L135,75 L155,95",
              ];

              return (
                <BlurFade key={index} delay={0.3 + index * 0.1} inView>
                  <Link href={track.href} className="group block">
                    <div className="relative cursor-pointer">
                      <svg
                        viewBox="0 0 200 200"
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="100" cy="100" r="85" fill={track.lightColor} />

                        <motion.circle
                          cx="50"
                          cy="60"
                          r="10"
                          fill={track.color}
                          opacity="0.3"
                          animate={{ x: [-2, 2, -2] }}
                          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                        />

                        <path
                          d={shapes[index]}
                          fill={index === 3 ? "none" : track.color}
                          stroke={index === 3 ? track.color : "none"}
                          strokeWidth={index === 3 ? "4" : "0"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-all duration-300 group-hover:opacity-90"
                        />
                      </svg>

                      <div className="mt-4 text-center">
                        <h3
                          className="text-xl font-black mb-2 animate-shimmer"
                          style={{
                            background: `linear-gradient(90deg, ${track.color} 0%, ${track.color}dd 25%, ${track.color}99 50%, ${track.color}dd 75%, ${track.color} 100%)`,
                            backgroundSize: "200% auto",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            color: "transparent",
                          }}
                        >
                          {track.title}
                        </h3>

                        <p className="mb-3 text-sm text-gray-500 font-medium opacity-80">
                          {track.description}
                        </p>

                        <div className="flex flex-wrap gap-2 justify-center">
                          {track.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="rounded-full border-2 px-3 py-1 text-xs font-bold text-gray-700 transition-all hover:scale-110"
                              style={{ borderColor: track.color, backgroundColor: track.lightColor }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <BlurFade delay={0.2} inView>
          <div className="relative rounded-3xl bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 p-8 sm:p-12 overflow-hidden">
            <div className="relative z-10 text-center">
              <div className="inline-block mb-4 text-5xl animate-bounce">🎓</div>

              <h2 className="mb-3 text-3xl font-black sm:text-4xl text-gray-900">
                שנה א׳? בוא נתחיל ביחד!
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-gray-700 font-bold text-lg">
                כל מה שצריך כדי להתחיל את המסע שלך בתכנות - מההתחלה ועד ההצלחה 🚀
              </p>

              <div className="relative flex flex-col items-center justify-center gap-4 sm:flex-row min-h-[80px]">
                <PlayfulButton />
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-black transition-all hover:scale-105"
                >
                  <Link href="/about">רוצה לדעת עוד? 🤔</Link>
                </Button>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
    </>
  );
}
