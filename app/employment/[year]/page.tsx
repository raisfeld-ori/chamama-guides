import { EmploymentGuideClient } from "@/components/employment/employment-guide-client";

// Import employment configs
const getEmploymentGuide = async (year: string) => {
  try {
    const config = await import(`@/config/employment/${year}.ts`);
    // Serialize the config by removing icon components and keeping only icon names
    return {
      title: config.config.title,
      description: config.config.description,
      sections: config.config.sections.map((section: any) => ({
        iconName: section.icon.name || 'BookOpen', // Get icon name
        title: section.title,
        content: section.content,
        actions: section.actions,
      })),
    };
  } catch (error) {
    // Fallback if config doesn't exist
    return {
      title: `Year ${year.split("-")[1]}: Career Guidance`,
      description: "Career guidance for this year",
      sections: [
        {
          iconName: 'BookOpen',
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

  return <EmploymentGuideClient guide={guide} year={year} />;
}

export function generateStaticParams() {
  return [
    { year: "year-1" },
    { year: "year-2" },
    { year: "year-3" },
    { year: "year-4" },
  ];
}
