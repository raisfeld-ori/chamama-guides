"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { InteractiveProjectsList } from "@/components/projects/interactive-projects-list";
import { useLoading } from "@/contexts/LoadingContext";
import { Loading } from "@/components/ui/loading";

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
        technologies: ["בקרוב"],
        features: ["בפיתוח"],
        keyLearnings: ["בקרוב"],
        estimatedTime: "בקרוב",
        prerequisites: [],
        tasks: [],
      }
    ];
  }
};

export default function ProjectsYearPage() {
  const { isLoading } = useLoading();
  const params = useParams();
  const category = params.category as string;
  const year = params.year as string;
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const projectsList = await getProjects(category, year);
      setProjects(projectsList);
      setLoading(false);
    };
    loadProjects();
  }, [category, year]);

  if (isLoading) {
    return <Loading variant="default" text="טוען פרויקטים..." />;
  }

  if (loading) {
    return <Loading variant="minimal" text="טוען..." />;
  }

  return <InteractiveProjectsList category={category} year={year} projects={projects} />;
}
