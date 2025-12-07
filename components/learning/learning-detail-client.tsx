"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, FileText, ExternalLink, Code, Clock, Target, Trophy, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTask } from "@/contexts/TaskContext";

// Function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

// Function to detect if URL contains video content
const isVideoUrl = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com');
};

const blockTypeConfig: Record<string, { color: string; lightColor: string; label: string; icon: any }> = {
    "video": { color: "#10b981", lightColor: "#d1fae5", label: "סרטון", icon: Play },
    "text": { color: "#14b8a6", lightColor: "#ccfbf1", label: "טקסט", icon: FileText },
    "link": { color: "#06b6d4", lightColor: "#cffafe", label: "קישור", icon: ExternalLink },
    "project": { color: "#84cc16", lightColor: "#ecfccb", label: "פרויקט", icon: Code },
};

export function LearningDetailClient({ 
    block, 
    category, 
    year, 
    contentTitle 
}: { 
    block: any; 
    category: string; 
    year: string; 
    contentTitle: string; 
}) {
    const [activeTab, setActiveTab] = useState<"overview" | "content" | "embed">("embed");
    const { markTaskComplete, isTaskComplete } = useTask();
    const blockConfig = blockTypeConfig[block.type] || blockTypeConfig["text"];
    const isCompleted = isTaskComplete(block.id);

    const handleMarkComplete = () => {
        markTaskComplete({
            id: block.id,
            title: block.title,
            category: `${category} - ${year}`,
            type: 'learning',
            completedAt: new Date(),
        });
    };

    // Check if block has embedded content
    const hasEmbeddedContent = block.youtubeId || block.url || block.videoUrl;

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
            {/* Animated background blur circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-40 left-40 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 sm:px-6 lg:px-8">
                <BlurFade delay={0.1}>
                    <Button variant="ghost" className="mb-6 cursor-pointer hover:scale-105 transition-transform" asChild>
                        <Link href={`/learning/${category}/${year}`}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            חזרה למסלול הלמידה
                        </Link>
                    </Button>
                </BlurFade>

                {/* Hero Section */}
                <BlurFade delay={0.15}>
                    <div className="mb-8 md:mb-12">
                        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-6">
                            <div
                                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg shrink-0"
                                style={{ backgroundColor: blockConfig.color }}
                            >
                                <blockConfig.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                            </div>

                            <div className="flex-1">
                                <div className="mb-3">
                                    <span className="inline-block px-3 py-1 text-xs font-black bg-white/80 rounded-full border border-emerald-200 text-emerald-700">
                                        {block.sectionTitle}
                                    </span>
                                </div>
                                <h1 className="mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-black gradient-green-shimmer animate-shimmer leading-tight">
                                    {block.title}
                                </h1>
                                <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                                    {block.description || "תוכן לימוד חשוב למסלול שלכם"}
                                </p>
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            <span
                                className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-bold border-2 bg-white shadow-sm"
                                style={{
                                    color: blockConfig.color,
                                    borderColor: blockConfig.color
                                }}
                            >
                                <blockConfig.icon className="w-3 h-3 md:w-4 md:h-4" />
                                {blockConfig.label}
                            </span>

                            <span className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-gray-200 px-3 md:px-4 py-2 text-xs md:text-sm text-gray-700 font-bold shadow-sm">
                                <Target className="w-3 h-3 md:w-4 md:h-4" />
                                {contentTitle}
                            </span>

                            {block.difficulty && (
                                <span className="inline-flex items-center gap-2 rounded-full bg-yellow-50 border-2 border-yellow-400 px-3 md:px-4 py-2 text-xs md:text-sm text-yellow-700 font-bold shadow-sm">
                                    <Trophy className="w-3 h-3 md:w-4 md:h-4" />
                                    {block.difficulty}
                                </span>
                            )}
                        </div>
                    </div>
                </BlurFade>

                {/* Tab Navigation */}
                <BlurFade delay={0.2}>
                    <div className="mb-6 md:mb-8 flex gap-2 md:gap-4 border-b-2 border-emerald-100 overflow-x-auto">
                        {[
                            ...(hasEmbeddedContent ? [{ id: "embed", label: "מדיה", icon: Play }] : []),
                            { id: "overview", label: "סקירה", icon: FileText },
                            { id: "content", label: "תוכן", icon: blockConfig.icon },
                        ].map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`flex items-center gap-2 px-4 md:px-6 py-3 font-bold text-sm md:text-base transition-all whitespace-nowrap ${activeTab === tab.id
                                        ? "text-emerald-700 border-b-4 border-emerald-500"
                                        : "text-gray-500 hover:text-emerald-600"
                                        }`}
                                >
                                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </BlurFade>

                <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Overview Tab */}
                        {activeTab === "overview" && (
                            <BlurFade delay={0.25} inView>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="rounded-2xl border-2 border-gray-200 bg-white p-4 md:p-6 lg:p-8 shadow-lg"
                                >
                                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                                        <div
                                            className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md"
                                            style={{ backgroundColor: blockConfig.color }}
                                        >
                                            <FileText className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900">על התוכן הזה</h2>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-100 space-y-4">
                                        <div>
                                            <h4 className="text-lg font-black text-gray-800 mb-2">תיאור התוכן</h4>
                                            <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                                                {block.description || block.content || "תוכן לימוד חשוב שיעזור לכם לשפר את הכישורים שלכם."}
                                            </p>
                                        </div>

                                        {block.youtubeId && (
                                            <div>
                                                <h4 className="text-lg font-black text-gray-800 mb-2">מה תלמדו</h4>
                                                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                                                    סרטון הדרכה מפורט הכולל הסברים ברורים, דוגמאות מעשיות ועצות מקצועיות שיעזרו לכם לשלוט בנושא.
                                                </p>
                                            </div>
                                        )}

                                        {block.url && (
                                            <div>
                                                <h4 className="text-lg font-black text-gray-800 mb-2">משאב חיצוני</h4>
                                                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                                                    מדריך מקיף ומעודכן הכולל מידע רחב, דוגמאות קוד ותרגילים למעמיק הידע.
                                                </p>
                                            </div>
                                        )}

                                        <div>
                                            <h4 className="text-lg font-black text-gray-800 mb-2">טיפים ללימוד יעיל</h4>
                                            <ul className="text-sm md:text-base text-gray-700 font-medium leading-relaxed space-y-1">
                                                <li>• קחו הפסקות כל 25-30 דקות</li>
                                                <li>• תרגלו את מה שלמדתם מיד אחרי הצפייה</li>
                                                <li>• רשמו שאלות ונושאים שלא הבנתם</li>
                                                <li>• חזרו על התוכן אחרי מספר ימים</li>
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </BlurFade>
                        )}

                        {/* Content Tab */}
                        {activeTab === "content" && (
                            <BlurFade delay={0.25} inView>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="rounded-2xl border-2 border-gray-200 bg-white p-4 md:p-6 lg:p-8 shadow-lg"
                                >
                                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                                        <div
                                            className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md"
                                            style={{ backgroundColor: blockConfig.color }}
                                        >
                                            <blockConfig.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900">תוכן הלימוד</h2>
                                    </div>

                                    <div className="space-y-6">
                                        {block.content && (
                                            <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-100">
                                                <h4 className="text-lg font-black text-gray-800 mb-3">פירוט התוכן</h4>
                                                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed whitespace-pre-wrap">
                                                    {block.content}
                                                </p>
                                            </div>
                                        )}

                                        <div className="bg-emerald-50 rounded-xl p-4 md:p-6 border border-emerald-200">
                                            <h4 className="text-lg font-black text-emerald-800 mb-3">מטרות הלימוד</h4>
                                            <ul className="text-sm md:text-base text-emerald-700 font-medium leading-relaxed space-y-2">
                                                {block.type === 'video' && (
                                                    <>
                                                        <li>• הבנה עמוקה של הנושא דרך הדגמות ויזואליות</li>
                                                        <li>• למידה בקצב אישי עם אפשרות עצירה וחזרה</li>
                                                        <li>• דוגמאות מעשיות ושימושיות מהעולם האמיתי</li>
                                                    </>
                                                )}
                                                {block.type === 'link' && (
                                                    <>
                                                        <li>• קבלת מידע מקיף ומעודכן מהמקור</li>
                                                        <li>• הכרת טכנולוגיות ושיטות עבודה מתקדמות</li>
                                                        <li>• הרחבת הידע דרך קריאה ותרגול עצמאי</li>
                                                    </>
                                                )}
                                                {block.type === 'text' && (
                                                    <>
                                                        <li>• הבנת המושגים הבסיסיים והעקרונות</li>
                                                        <li>• קבלת בסיס תיאורטי חזק לנושא</li>
                                                        <li>• הכנה לתרגול מעשי ופיתוח פרויקטים</li>
                                                    </>
                                                )}
                                            </ul>
                                        </div>

                                        <div className="bg-blue-50 rounded-xl p-4 md:p-6 border border-blue-200">
                                            <h4 className="text-lg font-black text-blue-800 mb-3">המלצות נוספות</h4>
                                            <div className="space-y-3 text-sm md:text-base text-blue-700 font-medium leading-relaxed">
                                                <p>• בדקו ששלטתם בנושא על ידי תרגול מעשי</p>
                                                <p>• חפשו דוגמאות נוספות באינטרנט להעמקה</p>
                                                <p>• שתפו עם חברים או קהילות מקצועיות</p>
                                                <p>• תכננו פרויקט קטן לאימון הכישורים החדשים</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </BlurFade>
                        )}

                        {/* Embed Tab */}
                        {activeTab === "embed" && hasEmbeddedContent && (
                            <BlurFade delay={0.25} inView>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="rounded-2xl border-2 border-gray-200 bg-white p-4 md:p-6 lg:p-8 shadow-lg"
                                >
                                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                                        <div
                                            className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md"
                                            style={{ backgroundColor: blockConfig.color }}
                                        >
                                            <Play className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900">תוכן מדיה</h2>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Video Embed */}
                                        {(block.youtubeId || (block.videoUrl && isVideoUrl(block.videoUrl))) && (
                                            <div>
                                                <h3 className="text-lg font-black text-gray-800 mb-3">סרטון הסבר</h3>
                                                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                                                    <iframe
                                                        src={`https://www.youtube.com/embed/${block.youtubeId || getYouTubeVideoId(block.videoUrl)}`}
                                                        title="Learning video"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        className="w-full h-full"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* External Link */}
                                        {block.url && (
                                            <div>
                                                <h3 className="text-lg font-black text-gray-800 mb-3">קישור חיצוני</h3>
                                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                                    <Button asChild className="w-full bg-blue-500 hover:bg-blue-600 text-white font-black">
                                                        <a href={block.url} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="w-4 h-4 ml-2" />
                                                            פתח קישור
                                                        </a>
                                                    </Button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </BlurFade>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <BlurFade delay={0.3} inView>
                            <div className="sticky top-20 space-y-4 md:space-y-6">
                                <div className="rounded-2xl border-2 border-gray-200 bg-white p-4 md:p-6 shadow-lg">
                                    <div className="text-center mb-4 md:mb-6">
                                        <div
                                            className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-2xl flex items-center justify-center shadow-md"
                                            style={{ backgroundColor: blockConfig.color }}
                                        >
                                            <blockConfig.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2">
                                            {isCompleted ? "הושלם!" : "בואו נלמד!"}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-600 font-medium">
                                            {isCompleted ? "יפה! הוספת עוד תוכן לרשימת ההישגים! 🎉" : "זה הזמן ללמוד משהו חדש! 📚"}
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        {!isCompleted ? (
                                            <Button
                                                onClick={handleMarkComplete}
                                                className="w-full font-black transition-all shadow-md hover:shadow-lg cursor-pointer text-sm md:text-base hover:scale-105"
                                                style={{
                                                    backgroundColor: blockConfig.color,
                                                    color: 'white'
                                                }}
                                                size="lg"
                                            >
                                                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                                                סיימתי ללמוד!
                                            </Button>
                                        ) : (
                                            <div className="space-y-3">
                                                <div className="w-full bg-green-50 border-2 border-green-300 rounded-xl p-4 text-center">
                                                    <div className="flex items-center justify-center gap-2 mb-2">
                                                        <Trophy className="w-5 h-5 text-green-600" />
                                                        <span className="font-black text-green-700">הושלם בהצלחה!</span>
                                                    </div>
                                                    <p className="text-sm text-green-600 font-medium">כל הכבוד! הוספת עוד לימוד לרשימת ההישגים שלך 🎉</p>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    className="w-full font-black border-2 transition-all cursor-pointer text-sm md:text-base hover:scale-105"
                                                    style={{
                                                        borderColor: blockConfig.color,
                                                        color: blockConfig.color
                                                    }}
                                                    asChild
                                                >
                                                    <Link href="/finished-tasks">
                                                        <Trophy className="w-4 h-4 ml-2" />
                                                        ראה את כל ההישגים
                                                    </Link>
                                                </Button>
                                            </div>
                                        )}

                                        <Button
                                            variant="outline"
                                            className="w-full font-bold border-2 transition-all cursor-pointer text-sm md:text-base"
                                            style={{
                                                borderColor: blockConfig.color,
                                                color: blockConfig.color
                                            }}
                                            asChild
                                        >
                                            <Link href={`/learning/${category}/${year}`}>
                                                <ArrowLeft className="w-4 h-4 ml-2" />
                                                חזרה למסלול
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </div>
    );
}
