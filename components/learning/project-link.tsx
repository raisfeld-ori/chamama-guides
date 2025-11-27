import Link from "next/link";
import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectLinkProps {
  title: string;
  projectId: string;
  description?: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

export function ProjectLink({
  title,
  projectId,
  description,
  difficulty = "Beginner",
}: ProjectLinkProps) {
  const difficultyColors = {
    Beginner: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20",
    Intermediate: "bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/20",
    Advanced: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20",
  };

  return (
    <div className="group rounded-lg border bg-card p-6 transition-all hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between">
        <Code className="h-8 w-8 text-primary" />
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${difficultyColors[difficulty]}`}
        >
          {difficulty}
        </span>
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      {description && (
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      )}
      <Button variant="outline" className="w-full" asChild>
        <Link href={`/projects/detail/${projectId}`}>View Project</Link>
      </Button>
    </div>
  );
}
