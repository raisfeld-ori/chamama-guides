import { LearningDetailClient } from "@/components/learning/learning-detail-client";
import { notFound } from "next/navigation";

// Import all learning configs
const getLearningContent = async (category: string, year: string) => {
  try {
    const config = await import(`@/config/learning/${year}/${category}.ts`);
    return config.config;
  } catch (error) {
    return null;
  }
};

const getLearningBlock = (content: any, blockId: string) => {
  if (!content) return null;
  
  for (const section of content.sections) {
    for (const block of section.blocks) {
      if (block.id === blockId) {
        return {
          ...block,
          sectionTitle: section.title
        };
      }
    }
  }
  return null;
};

export default async function LearningDetailPage({
  params,
}: {
  params: Promise<{ category: string; year: string; blockId: string }>;
}) {
  const { category, year, blockId } = await params;
  const content = await getLearningContent(category, year);
  const block = getLearningBlock(content, blockId);

  if (!block) {
    notFound();
  }

  return (
    <LearningDetailClient 
      block={block} 
      category={category} 
      year={year}
      contentTitle={content.title}
    />
  );
}

export function generateStaticParams() {
  // This would need to be expanded based on actual learning content
  const categories = ["frontend", "backend", "gamedev", "data-science"];
  const years = ["year-1", "year-2", "year-3", "year-4"];
  
  // For now, return empty array - pages will be generated on demand
  return [];
}
