import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Import all project configs
import { projects as frontendYear1 } from "@/config/projects/year-1/frontend";
import { projects as backendYear1 } from "@/config/projects/year-1/backend";
import { projects as devopsYear1 } from "@/config/projects/year-1/devops";
import { projects as dataYear1 } from "@/config/projects/year-1/data-science";

const allProjects = [
  ...frontendYear1,
  ...backendYear1,
  ...devopsYear1,
  ...dataYear1,
];

const getProjectDetails = (projectId: string) => {
  return allProjects.find((p) => p.id === projectId);
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = getProjectDetails(projectId);

  if (!project) {
    notFound();
  }

  // Extract category from project ID (e.g., "year-1-frontend-portfolio" -> "frontend")
  const categoryMatch = project.id.match(/year-\d+-([^-]+)/);
  const category = categoryMatch ? categoryMatch[1] : "frontend";

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <BlurFade delay={0.1}>
        <Button variant="ghost" className="mb-6" asChild>
          <Link href={`/projects/${category}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            חזרה לפרויקטים
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <span className={`rounded-full border px-4 py-2 font-medium ${
              project.difficulty === "קל" 
                ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                : project.difficulty === "בינוני"
                ? "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20"
                : "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20"
            }`}>
              {project.difficulty}
            </span>
            <span className="rounded-full bg-muted px-4 py-2">
              ⏱️ {project.estimatedTime}
            </span>
          </div>
        </div>
      </BlurFade>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <BlurFade delay={0.2} inView>
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">מיומנויות</h2>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full border bg-background px-4 py-2 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </BlurFade>

          {project.longDescription && (
            <BlurFade delay={0.3} inView>
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold">תיאור מפורט</h2>
                <div className="rounded-lg border bg-card p-6">
                  <p className="whitespace-pre-wrap text-muted-foreground">
                    {project.longDescription}
                  </p>
                </div>
              </section>
            </BlurFade>
          )}

          <BlurFade delay={0.4} inView>
            <section>
              <h2 className="mb-6 text-2xl font-bold">פרטים נוספים</h2>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="mb-2 text-lg font-semibold">רמת קושי</h3>
                  <p className="text-muted-foreground">{project.difficulty}</p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="mb-2 text-lg font-semibold">זמן משוער</h3>
                  <p className="text-muted-foreground">{project.estimatedTime}</p>
                </div>
              </div>
            </section>
          </BlurFade>
        </div>

        <div className="lg:col-span-1">
          <BlurFade delay={0.2} inView>
            <div className="sticky top-20 space-y-6">
              <div className="rounded-lg border bg-muted/50 p-6">
                <h3 className="mb-2 text-lg font-semibold">מוכן להתחיל?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  התחל לעבוד על הפרויקט ושתף את העבודה שלך
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/projects/${category}`}>חזרה לרשימה</Link>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
