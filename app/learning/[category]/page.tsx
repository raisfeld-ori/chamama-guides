"use client";

import { YearSelector } from "@/components/category-selector";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useLoading } from "@/contexts/LoadingContext";
import { Loading } from "@/components/ui/loading";

export default function LearningCategoryPage() {
  const { isLoading } = useLoading();
  const params = useParams();
  const category = params.category as string;

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, []);

  if (isLoading) {
    return <Loading variant="default" text={`טוען ${category === 'frontend' ? 'פרונטאנד' : category === 'backend' ? 'בקאנד' : category === 'data-science' ? 'מדעי נתונים' : 'פיתוח משחקים'}...`} />;
  }

  return <YearSelector category={category} basePath="learning" />;
}
