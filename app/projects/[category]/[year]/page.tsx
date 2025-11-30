import { InteractiveProjectsList } from "@/components/projects/interactive-projects-list";

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

export default async function ProjectsListPage({
  params,
}: {
  params: Promise<{ category: string; year: string }>;
}) {
  const { category, year } = await params;
  const projects = await getProjects(category, year);

  return <InteractiveProjectsList category={category} year={year} projects={projects} />;
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
