"use client";

import { YearSelector } from "@/components/category-selector";
import { useParams } from "next/navigation";
import { useLoading } from "@/contexts/LoadingContext";
import { Loading } from "@/components/ui/loading";

export default function LearningCategoryPage() {
  const { isLoading } = useLoading();
  const params = useParams();
  const category = params.category as string;

  if (isLoading) {
    return <Loading variant="default" text={`טוען ${category === 'frontend' ? 'פרונטאנד' : category === 'backend' ? 'בקאנד' : category === 'data-science' ? 'מדעי נתונים' : 'פיתוח משחקים'}...`} />;
  }

  return <YearSelector category={category} basePath="learning" />;
}
