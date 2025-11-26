import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Clock, Star } from "lucide-react";

// Import project configs
const getProjects = async (category: string, year: string) => {
  try {
    const config = await import(`@/config/projects/${year}/${category}.ts`);
    return config.projects;
  } catch (error) {
    // Fallback if config doesn't exist
    return [
      {
        id: `${year}-${category}-coming-soon`,
        title: "פרויקטים בקרוב",
        description: "תוכן הפרויקטים לקטגוריה זו נמצא בפיתוח",
        difficulty: "Beginner" as const,
        estimatedTime: "TBD",
        skills: ["בקרוב"],
        featured: false,
      },
    ];
  }
};

const categoryTitles: Record<string, string> = {
  frontend: "פיתוח ממשק משתמש",
  backend: "פיתוח צד שרת",
  devops: "DevOps",
  "data-science": "מדעי הנתונים",
};

export default async function ProjectsListPage({
  params,
}: {
  params: Promise<{ category: string; year: string }>;
}) {
  const { category, year } = await params;
  const projects = await getProjects(category, year);
  const yearNum = year.split("-")[1];
  const categoryTitle = categoryTitles[category] || category;

  const difficultyColors = {
    קל:
      "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    בינוני:
      "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
    קשה:
      "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <BlurFade delay={0.1}>
        <Button variant="ghost" className="mb-6" asChild>
          <Link href={`/projects/${category}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            חזרה לבחירת שנה
          </Link>
        </Button>

        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          פרויקטי {categoryTitle} - שנה {yearNum}
        </h1>
        <p className="mb-12 text-lg text-muted-foreground">
          פרויקטים מעשיים לבניית תיק העבודות שלך ושליטה בפיתוח {categoryTitle}
        </p>
      </BlurFade>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project: any, index: number) => (
          <BlurFade key={project.id} delay={0.2 + index * 0.1} inView>
            <div
              className={`group relative h-full rounded-lg border bg-card p-6 transition-all hover:shadow-xl ${
                project.featured ? "ring-2 ring-primary/20" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                  <Star className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
                </div>
              )}

              <div className="mb-4 flex items-start justify-between">
                <Code className="h-10 w-10 text-primary" />
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    difficultyColors[
                      project.difficulty as keyof typeof difficultyColors
                    ]
                  }`}
                >
                  {project.difficulty}
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-muted-foreground">
                {project.description}
              </p>

              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{project.estimatedTime}</span>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.skills.map((skill: string, i: number) => (
                  <span
                    key={i}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Button className="w-full" asChild>
                <Link href={`/projects/detail/${project.id}`}>
                  צפה בפרטי הפרויקט
                </Link>
              </Button>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const categories = ["frontend", "backend", "devops", "data-science"];
  const years = ["year-1", "year-2", "year-3", "year-4"];

  return categories.flatMap((category) =>
    years.map((year) => ({
      category,
      year,
    }))
  );
}
