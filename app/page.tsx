import { Hero } from "@/components/layout/hero";
import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlayfulButton } from "@/components/ui/playful-button";
import { BookOpen, Code, Briefcase } from "lucide-react";

export default function Home() {
  const sections = [
    {
      icon: BookOpen,
      title: "למידה",
      description:
        "תכנית לימודים מקיפה עם סרטונים, מדריכים ומשאבים לכל שנה ומסלול.",
      href: "/learning/frontend",
      color: "#10b981",
      lightColor: "#d1fae5",
    },
    {
      icon: Code,
      title: "פרויקטים",
      description:
        "פרויקטים מעשיים המותאמים לשנה ולהתמחות שלך לבניית תיק העבודות.",
      href: "/projects/frontend",
      color: "#84cc16",
      lightColor: "#ecfccb",
    },
    {
      icon: Briefcase,
      title: "תעסוקה",
      description:
        "הדרכה קריירה, הכנה לראיונות ואסטרטגיות חיפוש עבודה לכל שנת לימוד.",
      href: "/employment/year-1",
      color: "#14b8a6",
      lightColor: "#ccfbf1",
    },
  ];

  const tracks = [
    {
      title: "פרונטאנד",
      description: "בנה ממשקי משתמש יפים",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      color: "#06b6d4",
      lightColor: "#cffafe",
    },
    {
      title: "בקאנד",
      description: "צור אפליקציות שרת חזקות",
      technologies: ["Node.js", "Python", "מסדי נתונים"],
      color: "#22c55e",
      lightColor: "#dcfce7",
    },
    {
      title: "ניהול תשתיות",
      description: "פרוס ונהל תשתיות",
      technologies: ["Docker", "CI/CD", "ענן"],
      color: "#10b981",
      lightColor: "#d1fae5",
    },
    {
      title: "מדעי הנתונים",
      description: "נתח והצג נתונים",
      technologies: ["Python", "ML", "אנליטיקה"],
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
                    {/* SVG Illustration */}
                    <svg
                      viewBox="0 0 300 300"
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Background blob */}
                      <path
                        d="M150,50 Q250,80 250,150 Q250,220 150,250 Q50,220 50,150 Q50,80 150,50 Z"
                        fill={section.lightColor}
                        className="transition-all duration-300"
                      />

                      {/* Decorative circles */}
                      <circle cx="80" cy="100" r="15" fill={section.color} opacity="0.3" />
                      <circle cx="220" cy="120" r="20" fill={section.color} opacity="0.2" />
                      <circle cx="100" cy="220" r="12" fill={section.color} opacity="0.25" />

                      {/* Main icon circle */}
                      <circle
                        cx="150"
                        cy="150"
                        r="60"
                        fill={section.color}
                        className="transition-all duration-300 group-hover:r-[65]"
                      />

                      {/* Icon placeholder - we'll use foreignObject to embed the React icon */}
                      <foreignObject x="110" y="110" width="80" height="80">
                        <div className="flex items-center justify-center w-full h-full">
                          <Icon className="h-12 w-12 text-white" strokeWidth={2.5} />
                        </div>
                      </foreignObject>

                      {/* Decorative lines */}
                      <line x1="150" y1="50" x2="150" y2="90" stroke={section.color} strokeWidth="3" opacity="0.4" />
                      <line x1="50" y1="150" x2="90" y2="150" stroke={section.color} strokeWidth="3" opacity="0.4" />
                      <line x1="250" y1="150" x2="210" y2="150" stroke={section.color} strokeWidth="3" opacity="0.4" />

                      {/* Text overlay on SVG with better styling */}
                      <foreignObject x="50" y="235" width="200" height="60">
                        <div className="flex flex-col items-center justify-start h-full">
                          <h3
                            className="text-lg font-black mb-1.5 animate-shimmer"
                            style={{
                              background: `linear-gradient(90deg, ${section.color} 0%, ${section.color}dd 25%, ${section.color}99 50%, ${section.color}dd 75%, ${section.color} 100%)`,
                              backgroundSize: '200% auto',
                              WebkitBackgroundClip: 'text',
                              backgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              color: 'transparent'
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
                // Frontend - Modern laptop/screen
                "M60,85 L140,85 L140,120 L60,120 Z M55,122 L145,122 L142,127 L58,127 Z",
                // Backend - Server/Database shape (moved up more)
                "M65,65 L135,65 Q145,65 145,75 L145,95 Q145,105 135,105 L65,105 Q55,105 55,95 L55,75 Q55,65 65,65 Z M65,110 L135,110 Q145,110 145,120 L145,137 Q145,147 135,147 L65,147 Q55,147 55,137 L55,120 Q55,110 65,110 Z",
                // DevOps - Cloud (moved down more)
                "M65,95 Q65,80 85,80 Q100,70 115,80 Q135,80 135,95 Q148,95 148,108 Q148,120 135,120 L65,120 Q52,120 52,108 Q52,95 65,95 Z",
                // Data Science - Line chart
                "M45,130 L60,105 L75,115 L95,80 L115,100 L135,75 L155,95"
              ];

              return (
                <BlurFade key={index} delay={0.3 + index * 0.1} inView>
                  <div className="group relative">
                    {/* SVG Illustration */}
                    <svg
                      viewBox="0 0 200 200"
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Background blob - centered circle */}
                      <circle cx="100" cy="100" r="85" fill={track.lightColor} />

                      {/* Decorative circles */}
                      <circle cx="50" cy="60" r="10" fill={track.color} opacity="0.3" />
                      <circle cx="150" cy="70" r="12" fill={track.color} opacity="0.2" />
                      <circle cx="60" cy="150" r="8" fill={track.color} opacity="0.25" />

                      {/* Main shape */}
                      <path
                        d={shapes[index]}
                        fill={index === 3 ? "none" : track.color}
                        stroke={index === 3 ? track.color : "none"}
                        strokeWidth={index === 3 ? "4" : "0"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300 group-hover:opacity-90"
                      />

                      {/* Data points for chart */}
                      {index === 3 && (
                        <>
                          <circle cx="45" cy="130" r="5" fill={track.color} />
                          <circle cx="60" cy="105" r="5" fill={track.color} />
                          <circle cx="75" cy="115" r="5" fill={track.color} />
                          <circle cx="95" cy="80" r="5" fill={track.color} />
                          <circle cx="115" cy="100" r="5" fill={track.color} />
                          <circle cx="135" cy="75" r="5" fill={track.color} />
                          <circle cx="155" cy="95" r="5" fill={track.color} />
                        </>
                      )}

                      {/* Decorative lines */}
                      <line x1="100" y1="15" x2="100" y2="30" stroke={track.color} strokeWidth="2" opacity="0.4" />
                      <line x1="15" y1="100" x2="30" y2="100" stroke={track.color} strokeWidth="2" opacity="0.4" />
                      <line x1="185" y1="100" x2="170" y2="100" stroke={track.color} strokeWidth="2" opacity="0.4" />
                    </svg>

                    {/* Content below SVG */}
                    <div className="mt-4 text-center">
                      <h3
                        className="text-xl font-black mb-2 animate-shimmer"
                        style={{
                          background: `linear-gradient(90deg, ${track.color} 0%, ${track.color}dd 25%, ${track.color}99 50%, ${track.color}dd 75%, ${track.color} 100%)`,
                          backgroundSize: '200% auto',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          color: 'transparent'
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
                            style={{
                              borderColor: track.color,
                              backgroundColor: track.lightColor
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
            {/* Decorative SVG background */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="#10b981" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>

            {/* Decorative shapes */}
            <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-emerald-300/30 blur-2xl" />
            <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-teal-300/30 blur-2xl" />

            <div className="relative z-10 text-center">
              {/* Emoji badge */}
              <div className="inline-block mb-4 text-5xl animate-bounce">
                🎓
              </div>

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
                  <Link href="/about">
                    רוצה לדעת עוד? 🤔
                  </Link>
                </Button>
              </div>

              {/* Fun fact */}
              <p className="mt-6 text-sm text-gray-600 font-medium">
                💡 כבר למעלה מ-100 תלמידים התחילו את המסע שלהם איתנו
              </p>
            </div>
          </div>
        </BlurFade>
      </section>
    </>
  );
}
