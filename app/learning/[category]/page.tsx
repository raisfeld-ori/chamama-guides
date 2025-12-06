import { YearSelector } from "@/components/category-selector";

export default async function LearningCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return <YearSelector category={category} basePath="learning" />;
}

export function generateStaticParams() {
  return [
    { category: "frontend" },
    { category: "backend" },
    { category: "gamedev" },
    { category: "data-science" },
  ];
}
