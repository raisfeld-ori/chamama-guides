import { Hero } from "@/components/layout/hero";
import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Briefcase } from "lucide-react";

export default function Home() {
  const sections = [
    {
      icon: BookOpen,
      title: "למידה",
      description:
        "תכנית לימודים מקיפה עם סרטונים, מדריכים ומשאבים לכל שנה ומסלול.",
      href: "/learning/frontend",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "פרויקטים",
      description:
        "פרויקטים מעשיים המותאמים לשנה ולהתמחות שלך לבניית תיק העבודות.",
      href: "/projects/frontend",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Briefcase,
      title: "תעסוקה",
      description:
        "הדרכה קריירה, הכנה לראיונות ואסטרטגיות חיפוש עבודה לכל שנת לימוד.",
      href: "/employment/year-1",
      color: "from-orange-500 to-red-500",
    },
  ];

  const tracks = [
    {
      title: "פרונטאנד",
      description: "בנה ממשקי משתמש יפים",
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "בקאנד",
      description: "צור אפליקציות שרת חזקות",
      technologies: ["Node.js", "Python", "מסדי נתונים"],
    },
    {
      title: "ניהול תשתיות",
      description: "פרוס ונהל תשתיות",
      technologies: ["Docker", "CI/CD", "ענן"],
    },
    {
      title: "מדעי הנתונים",
      description: "נתח והצג נתונים",
      technologies: ["Python", "ML", "אנליטיקה"],
    },
  ];

  return (
    <>
      <Hero />

      {/* Main Sections */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <BlurFade delay={0.2} inView>
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            מסלול הלמידה שלך
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            בחר את המסע שלך דרך שלושת המקטעים העיקריים שלנו
          </p>
        </BlurFade>

        <div className="grid gap-8 md:grid-cols-3">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                <Link href={section.href}>
                  <div className="group relative h-full overflow-hidden rounded-lg border bg-card p-8 transition-all hover:shadow-xl">
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${section.color} opacity-0 transition-opacity group-hover:opacity-5`}
                    />
                    <Icon className="mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-3 text-2xl font-semibold">
                      {section.title}
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      {section.description}
                    </p>
                    <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
                      חקור ←
                    </Button>
                  </div>
                </Link>
              </BlurFade>
            );
          })}
        </div>
      </section>

      {/* Tracks Section */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.2} inView>
            <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
              ארבעה מסלולי התמחות
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              בחר את ההתמחות שלך ושלוט במיומנויות שאתה צריך
            </p>
          </BlurFade>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map((track, index) => (
              <BlurFade key={index} delay={0.3 + index * 0.1} inView>
                <div className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-lg">
                  <h3 className="mb-2 text-xl font-semibold">{track.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {track.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {track.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <BlurFade delay={0.2} inView>
          <div className="rounded-2xl border bg-card p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              מוכן להתחיל את המסע שלך?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              התחל עם שנה 1 ועבור דרך תכנית הלימודים המקיפה שלנו
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/learning/frontend">התחל ללמוד עכשיו</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">למד עוד על חממה</Link>
              </Button>
            </div>
          </div>
        </BlurFade>
      </section>
    </>
  );
}
