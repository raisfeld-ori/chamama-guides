import { YearSelector } from "@/components/category-selector";

export default async function ProjectsCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return <YearSelector category={category} basePath="projects" />;
}

export function generateStaticParams() {
  return [
    { category: "frontend" },
    { category: "backend" },
    { category: "devops" },
    { category: "data-science" },
  ];
}
