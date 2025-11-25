import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

// Utility function to detect and render links
const renderTextWithLinks = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  
  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary/80"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

// Import employment configs
const getEmploymentGuide = async (year: string) => {
  try {
    const config = await import(`@/config/employment/${year}.ts`);
    return config.config;
  } catch (error) {
    // Fallback if config doesn't exist
    return {
      title: `Year ${year.split("-")[1]}: Career Guidance`,
      description: "Career guidance for this year",
      sections: [
        {
          icon: BookOpen,
          title: "Content Coming Soon",
          content: "Employment guidance for this year is being developed.",
          actions: ["Check back soon for updates"],
        },
      ],
    };
  }
};



export default async function EmploymentPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const guide = await getEmploymentGuide(year);

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <BlurFade delay={0.1}>
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">{guide.title}</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          {guide.description}
        </p>
      </BlurFade>

      <div className="space-y-8">
        {guide.sections.map((section: any, index: number) => {
          const Icon = section.icon;
          return (
            <BlurFade key={index} delay={0.2 + index * 0.1} inView>
              <div className="rounded-lg border bg-card p-8">
                <div className="mb-6 flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">{section.title}</h2>
                    <p className="text-muted-foreground">{section.content}</p>
                  </div>
                </div>

                <div className="ml-16">
                  <ul className="space-y-3">
                    {section.actions.map((action: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                          {i + 1}
                        </span>
                        <span>{renderTextWithLinks(action)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>

      <BlurFade delay={0.5} inView>
        <div className="mt-12 rounded-lg border bg-muted/50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Need Career Guidance?</h2>
          <p className="mb-6 text-muted-foreground">
            Our career counselors are here to help you succeed
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Meeting</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resources">View Resources</Link>
            </Button>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { year: "year-1" },
    { year: "year-2" },
    { year: "year-3" },
    { year: "year-4" },
  ];
}
