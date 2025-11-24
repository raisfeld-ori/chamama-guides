import { VideoBlock } from "@/components/learning/video-block";
import { TextBlock } from "@/components/learning/text-block";
import { LinkBlock } from "@/components/learning/link-block";
import { ProjectLink } from "@/components/learning/project-link";
import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Import config files
const getLearningContent = async (category: string, year: string) => {
  try {
    const config = await import(`@/config/learning/${year}/${category}.ts`);
    return config.config;
  } catch (error) {
    // Fallback content if config doesn't exist
    return {
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} - שנה ${year.split("-")[1]}`,
      description: `מסלול למידה מלא לפיתוח ${category} בשנה ${year.split("-")[1]}`,
      sections: [
        {
          title: "בקרוב",
          blocks: [
            {
              type: "text" as const,
              title: "תוכן בפיתוח",
              content:
                "תוכן זה נמצא כעת בפיתוח. אנא בדוק שוב בקרוב!\n\nבינתיים, חקור שנים וקטגוריות אחרות.",
            },
          ],
        },
      ],
    };
  }
};

export default async function LearningContentPage({
  params,
}: {
  params: Promise<{ category: string; year: string }>;
}) {
  const { category, year } = await params;
  const content = await getLearningContent(category, year);

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <BlurFade delay={0.1}>
        <Button variant="ghost" className="mb-6" asChild>
          <Link href={`/learning/${category}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            חזרה לבחירת שנה
          </Link>
        </Button>

        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">{content.title}</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          {content.description}
        </p>
      </BlurFade>

      <div className="space-y-12">
        {content.sections.map((section: any, sectionIndex: number) => (
          <BlurFade key={sectionIndex} delay={0.2 + sectionIndex * 0.1} inView>
            <div>
              <h2 className="mb-6 text-2xl font-bold">{section.title}</h2>
              <div className="grid gap-6">
                {section.blocks.map((block: any, blockIndex: number) => {
                  if (block.type === "video") {
                    return (
                      <VideoBlock
                        key={blockIndex}
                        title={block.title}
                        youtubeId={block.youtubeId}
                        description={block.description}
                      />
                    );
                  }
                  if (block.type === "text") {
                    return (
                      <TextBlock
                        key={blockIndex}
                        title={block.title}
                        content={block.content}
                      />
                    );
                  }
                  if (block.type === "link") {
                    return (
                      <LinkBlock
                        key={blockIndex}
                        title={block.title}
                        url={block.url}
                        description={block.description}
                      />
                    );
                  }
                  if (block.type === "project") {
                    return (
                      <ProjectLink
                        key={blockIndex}
                        title={block.title}
                        projectId={block.projectId}
                        description={block.description}
                        difficulty={block.difficulty}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
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
