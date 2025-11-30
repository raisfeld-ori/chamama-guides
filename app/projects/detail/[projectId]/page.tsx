import { ProjectDetailClient } from "@/components/projects/project-detail-client";
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

  return <ProjectDetailClient project={project} category={category} />;
}
