"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { VideoBlock } from "@/components/learning/video-block";
import { TextBlock } from "@/components/learning/text-block";
import { LinkBlock } from "@/components/learning/link-block";
import { ProjectLink } from "@/components/learning/project-link";
import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowLeft, Play, FileText, ExternalLink, Code } from "lucide-react";
import { useLoading } from "@/contexts/LoadingContext";
import { Loading } from "@/components/ui/loading";

// Import config files
const getLearningContent = async (category: string, year: string) => {
  try {
    const config = await import(`@/config/learning/${year}/${category}.ts`);
    return config.config;
  } catch (error) {
    console.error(`Failed to load config for ${category}/${year}:`, error);
    return null;
  }
};

export default function LearningYearPage() {
  const { isLoading } = useLoading();
  const params = useParams();
  const category = params.category as string;
  const year = params.year as string;
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      const config = await getLearningContent(category, year);
      setContent(config);
      setLoading(false);
    };
    loadContent();
  }, [category, year]);

  const normalizeYoutubeId = (value: string) => {
    if (!value) return "";
    if (!value.startsWith("http")) return value;
    try {
      const url = new URL(value);
      if (url.searchParams.get("v")) return url.searchParams.get("v") || "";
      const segments = url.pathname.split("/").filter(Boolean);
      return segments[segments.length - 1] || value;
    } catch {
      return value;
    }
  };

  if (isLoading) {
    return <Loading variant="default" text="טוען תוכן למידה..." />;
  }

  if (loading) {
    return <Loading variant="minimal" text="טוען..." />;
  }

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">תוכן לא נמצא</h1>
          <Link href="/learning">
            <Button>חזור לדף הלמידה</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Position patterns: left, center, right
  const positions = ['left', 'center', 'right'];
  
  // Get icon for block type
  const getBlockIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'text': return FileText;
      case 'link': return ExternalLink;
      case 'project': return Code;
      default: return FileText;
    }
  };

  // Get color for block type
  const getBlockColor = (type: string) => {
    switch (type) {
      case 'video': return { bg: 'bg-emerald-50', border: 'border-emerald-300', text: 'text-emerald-700', dot: 'bg-emerald-500' };
      case 'text': return { bg: 'bg-teal-50', border: 'border-teal-300', text: 'text-teal-700', dot: 'bg-teal-500' };
      case 'link': return { bg: 'bg-cyan-50', border: 'border-cyan-300', text: 'text-cyan-700', dot: 'bg-cyan-500' };
      case 'project': return { bg: 'bg-lime-50', border: 'border-lime-300', text: 'text-lime-700', dot: 'bg-lime-500' };
      default: return { bg: 'bg-emerald-50', border: 'border-emerald-300', text: 'text-emerald-700', dot: 'bg-emerald-500' };
    }
  };

  // Flatten all blocks with their section info
  const allBlocks = content.sections.flatMap((section: any, sectionIndex: number) =>
    section.blocks.map((block: any, blockIndex: number) => ({
      ...block,
      sectionTitle: section.title,
      sectionIndex,
      blockIndex,
      position: positions[(sectionIndex + blockIndex) % 3],
    }))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <BlurFade delay={0.1}>
          <Button variant="ghost" className="mb-6" asChild>
            <Link href={`/learning/${category}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              חזרה לבחירת שנה
            </Link>
          </Button>

          <div className="text-center mb-16">
            <h1 className="mb-4 text-4xl font-black sm:text-5xl gradient-green-shimmer animate-shimmer">{content.title}</h1>
            <p className="text-base text-gray-700 font-medium max-w-2xl mx-auto">
              {content.description}
            </p>
          </div>
        </BlurFade>

        {/* Roadmap */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical dotted line - desktop only */}
          <div className="hidden sm:block absolute right-1/2 top-0 bottom-0 w-0.5 border-r-2 border-dashed border-emerald-300" />

          {allBlocks.map((block: any, index: number) => {
            const Icon = getBlockIcon(block.type);
            const colors = getBlockColor(block.type);
            const isLeft = block.position === 'left';
            const isCenter = block.position === 'center';
            const isRight = block.position === 'right';

            return (
              <BlurFade key={index} delay={0.2 + index * 0.05} inView>
                <div className="relative mb-8 sm:mb-12">
                  {/* Connector dot on the center line - desktop only */}
                  <div className={`hidden sm:block absolute right-1/2 top-8 w-4 h-4 rounded-full ${colors.dot} border-4 border-white shadow-lg transform translate-x-1/2 z-10`} />
                  
                  {/* Horizontal dotted line to content - desktop only */}
                  {!isCenter && (
                    <div 
                      className={`hidden sm:block absolute top-9 h-0.5 border-t-2 border-dashed border-emerald-300 ${
                        isLeft ? 'right-1/2 left-[8%]' : 'left-1/2 right-[8%]'
                      }`}
                    />
                  )}

                  {/* Content card */}
                  <div className={`relative mx-2 sm:mx-0 ${
                    isLeft ? 'sm:mr-auto sm:ml-0 sm:pr-[52%]' : 
                    isRight ? 'sm:ml-auto sm:mr-0 sm:pl-[52%]' : 
                    'sm:mx-auto sm:max-w-md'
                  }`}>
                    <div className={`group rounded-xl border-2 ${colors.border} ${colors.bg} p-4 shadow-md hover:shadow-xl transition-all hover:scale-105 ${
                      isCenter ? 'text-center' : isLeft ? 'text-right' : 'text-left'
                    }`}>
                      {/* Icon badge */}
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${colors.dot} mb-3`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Section badge */}
                      {index === 0 || allBlocks[index - 1].sectionTitle !== block.sectionTitle ? (
                        <div className="mb-2">
                          <span className="inline-block px-3 py-1 text-xs font-black bg-white/80 rounded-full border border-emerald-200 text-emerald-700">
                            {block.sectionTitle}
                          </span>
                        </div>
                      ) : null}

                      {/* Type-specific content */}
                      {block.type === 'video' && block.youtubeId && (
                        <Sheet
                          open={openVideoId === normalizeYoutubeId(block.youtubeId)}
                          onOpenChange={(open) =>
                            setOpenVideoId(open ? normalizeYoutubeId(block.youtubeId) : null)
                          }
                        >
                          <h3 className={`mb-1 text-sm font-black ${colors.text}`}>
                            {block.title}
                          </h3>
                          {block.description && (
                            <p className="mb-3 text-xs text-gray-700 font-medium leading-relaxed">
                              {block.description}
                            </p>
                          )}
                          <SheetTrigger asChild>
                            <Button
                              size="sm"
                              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setOpenVideoId(normalizeYoutubeId(block.youtubeId));
                              }}
                            >
                              <Play className="w-3 h-3 ml-1" />
                              צפה בסרטון
                            </Button>
                          </SheetTrigger>
                          <SheetContent
                            side="bottom"
                            className="h-[90vh] w-[80svw] max-w-none left-1/2 right-auto -translate-x-1/2 p-0"
                          >
                            <div className="flex flex-col h-full">
                              <div className="p-4 border-b">
                                <h2 className="text-lg font-black text-emerald-700 text-right">
                                  {block.title}
                                </h2>
                              </div>
                              <div className="flex-1 bg-black">
                                <iframe
                                  className="w-full h-full"
                                  src={`https://www.youtube.com/embed/${normalizeYoutubeId(block.youtubeId)}?autoplay=1&rel=0`}
                                  title={block.title}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                            </div>
                          </SheetContent>
                        </Sheet>
                      )}


                      {block.type === 'link' && block.id && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-full border-2 border-cyan-500 text-cyan-700 hover:bg-cyan-50 font-bold text-xs"
                          asChild
                        >
                          <Link href={`/learning/detail/${category}/${year}/${block.id}`}>
                            <ExternalLink className="w-3 h-3 ml-1" />
                            פתח קישור
                          </Link>
                        </Button>
                      )}

                      {block.type === 'project' && block.projectId && (
                        <Button 
                          size="sm" 
                          className="w-full bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-white font-bold text-xs"
                          asChild
                        >
                          <Link href={`/projects/detail/${block.projectId}`}>
                            <Code className="w-3 h-3 ml-1" />
                            פרטי הפרויקט
                          </Link>
                        </Button>
                      )}

                      {block.type === 'text' && block.content && (
                        <div className="text-xs text-gray-700 font-medium bg-white/50 rounded-lg p-3 mt-2">
                          <p className="line-clamp-3">{block.content}</p>
                        </div>
                      )}

                      {/* Difficulty badge for projects */}
                      {block.difficulty && (
                        <div className="mt-2">
                          <span className="inline-block px-2 py-1 text-[10px] font-bold bg-white rounded-full border border-emerald-200 text-emerald-600">
                            {block.difficulty}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </BlurFade>
            );
          })}

          {/* End marker */}
          <BlurFade delay={0.2 + allBlocks.length * 0.05} inView>
            <div className="relative text-center pb-8">
              <div className="absolute right-1/2 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 border-4 border-white shadow-lg transform translate-x-1/2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <div className="pt-12">
                <p className="text-sm font-black text-emerald-700">🎉 סיימת את המסלול!</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
