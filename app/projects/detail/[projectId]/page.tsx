import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Github, ExternalLink } from "lucide-react";

// Sample project detail data
const getProjectDetails = (projectId: string) => {
  return {
    id: projectId,
    title: "Build a Modern Web Application",
    description:
      "Create a fully functional web application with modern technologies and best practices",
    difficulty: "Intermediate",
    estimatedTime: "4-6 hours",
    objectives: [
      "Understand component-based architecture",
      "Implement state management",
      "Connect to external APIs",
      "Handle user authentication",
      "Deploy to production",
    ],
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Familiarity with React or similar framework",
      "Understanding of REST APIs",
      "Git and GitHub account",
    ],
    steps: [
      {
        title: "Setup Your Development Environment",
        content:
          "Install Node.js, create a new project, and set up your code editor with necessary extensions.",
      },
      {
        title: "Create the Project Structure",
        content:
          "Organize your files and folders following best practices. Set up routing and basic components.",
      },
      {
        title: "Build the User Interface",
        content:
          "Design and implement the UI components using modern CSS frameworks and responsive design principles.",
      },
      {
        title: "Implement Core Functionality",
        content:
          "Add business logic, state management, and connect to APIs for dynamic data.",
      },
      {
        title: "Testing and Debugging",
        content:
          "Write tests for your components and fix any bugs. Ensure cross-browser compatibility.",
      },
      {
        title: "Deploy Your Application",
        content:
          "Deploy your project to a hosting platform like Vercel, Netlify, or GitHub Pages.",
      },
    ],
    resources: [
      {
        title: "Official Documentation",
        url: "https://react.dev",
      },
      {
        title: "Tutorial Video Series",
        url: "https://youtube.com",
      },
      {
        title: "GitHub Repository Template",
        url: "https://github.com",
      },
    ],
  };
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = getProjectDetails(projectId);

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <BlurFade delay={0.1}>
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/projects/year-1">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <span className="rounded-full bg-primary/10 px-4 py-2 font-medium">
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
              <h2 className="mb-4 text-2xl font-bold">Learning Objectives</h2>
              <ul className="space-y-3">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </section>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Prerequisites</h2>
              <ul className="space-y-3">
                {project.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </section>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <section>
              <h2 className="mb-6 text-2xl font-bold">Project Steps</h2>
              <div className="space-y-6">
                {project.steps.map((step, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-card p-6"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="ml-11 text-muted-foreground">{step.content}</p>
                  </div>
                ))}
              </div>
            </section>
          </BlurFade>
        </div>

        <div className="lg:col-span-1">
          <BlurFade delay={0.2} inView>
            <div className="sticky top-20 space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-4 text-xl font-semibold">Resources</h3>
                <div className="space-y-3">
                  {project.resources.map((resource, index) => (
                    <Link
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {resource.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-4 text-xl font-semibold">Submit Your Work</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Once you complete the project, share your work on GitHub
                </p>
                <Button className="w-full" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Submit on GitHub
                  </Link>
                </Button>
              </div>

              <div className="rounded-lg border bg-muted/50 p-6">
                <h3 className="mb-2 text-lg font-semibold">Need Help?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Join our community for support and guidance
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Get Support</Link>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
