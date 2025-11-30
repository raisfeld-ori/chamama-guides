"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Target, Sparkles, CheckCircle2, Code2, Lightbulb, Rocket, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const difficultyConfig: Record<string, { color: string; lightColor: string; label: string }> = {
    "Beginner": { color: "#10b981", lightColor: "#d1fae5", label: "מתחילים" },
    "Beginner_Intermediate": { color: "#14b8a6", lightColor: "#ccfbf1", label: "בינוני-קל" },
    "Intermediate": { color: "#06b6d4", lightColor: "#cffafe", label: "בינוני" },
    "Advanced": { color: "#84cc16", lightColor: "#ecfccb", label: "מתקדם" },
};

export function ProjectDetailClient({ project, category }: { project: any; category: string }) {
    const [activeTab, setActiveTab] = useState<"overview" | "skills" | "details">("overview");
    const difficulty = difficultyConfig[project.difficulty] || difficultyConfig["Beginner"];

    // Convert hours to Hebrew
    const convertHoursToHebrew = (text: string) => {
        if (!text) return text;
        return text
            .replace(/(\d+)-(\d+)\s*hours?/gi, '$1-$2 שעות')
            .replace(/(\d+)\s*hours?/gi, '$1 שעות')
            .replace(/(\d+)\s*hour/gi, '$1 שעה');
    };

    const estimatedTimeHebrew = convertHoursToHebrew(project.estimatedTime || '');

    return (
        <div className="min-h-screen bg-white">
            {/* Subtle background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-50 rounded-full filter blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-50 rounded-full filter blur-3xl" />
            </div>

            <div className="relative container mx-auto px-4 py-8 md:py-12 sm:px-6 lg:px-8">
                <BlurFade delay={0.1}>
                    <Button variant="ghost" className="mb-6 cursor-pointer hover:scale-105 transition-transform" asChild>
                        <Link href={`/projects/${category}`}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            חזרה לפרויקטים
                        </Link>
                    </Button>
                </BlurFade>

                {/* Hero Section */}
                <BlurFade delay={0.15}>
                    <div className="mb-8 md:mb-12">
                        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-6">
                            <div
                                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                                style={{ backgroundColor: difficulty.color }}
                            >
                                <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white" />
                            </div>

                            <div className="flex-1">
                                <h1 className="mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-black gradient-green-shimmer animate-shimmer leading-tight">
                                    {project.title}
                                </h1>
                                <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                                    {project.description || "פרויקט מעניין לתיק העבודות שלכם"}
                                </p>
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            <span
                                className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-bold border-2 bg-white shadow-sm"
                                style={{
                                    color: difficulty.color,
                                    borderColor: difficulty.color
                                }}
                            >
                                <Target className="w-3 h-3 md:w-4 md:h-4" />
                                {difficulty.label}
                            </span>

                            {estimatedTimeHebrew && (
                                <span
                                    className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-gray-200 px-3 md:px-4 py-2 text-xs md:text-sm text-gray-700 font-bold shadow-sm"
                                >
                                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                                    {estimatedTimeHebrew}
                                </span>
                            )}

                            {project.featured && (
                                <span
                                    className="inline-flex items-center gap-2 rounded-full bg-yellow-50 border-2 border-yellow-400 px-3 md:px-4 py-2 text-xs md:text-sm text-yellow-700 font-bold shadow-sm"
                                >
                                    <Trophy className="w-3 h-3 md:w-4 md:h-4" />
                                    מומלץ
                                </span>
                            )}
                        </div>
                    </div>
                </BlurFade>

                {/* Tab Navigation */}
                <BlurFade delay={0.2}>
                    <div className="mb-6 md:mb-8 flex gap-2 md:gap-4 border-b-2 border-emerald-100 overflow-x-auto">
                        {[
                            { id: "overview", label: "סקירה", icon: Lightbulb },
                            { id: "skills", label: "מיומנויות", icon: Sparkles },
                            { id: "details", label: "פרטים", icon: Code2 },
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
                                            style={{ backgroundColor: difficulty.color }}
                                        >
                                            <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900">מה תבנו?</h2>
                                    </div>

                                    {project.longDescription ? (
                                        <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-100">
                                            <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed whitespace-pre-wrap">
                                                {project.longDescription}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-100">
                                            <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                                                {project.description || "פרויקט מעניין שיעזור לכם לשפר את הכישורים שלכם ולבנות תיק עבודות מרשים."}
                                            </p>
                                        </div>
                                    )}
                                </motion.div>
                            </BlurFade>
                        )}

                        {/* Skills Tab */}
                        {activeTab === "skills" && (
                            <BlurFade delay={0.25} inView>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="rounded-2xl border-2 border-gray-200 bg-white p-4 md:p-6 lg:p-8 shadow-lg"
                                >
                                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                                        <div
                                            className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md"
                                            style={{ backgroundColor: difficulty.color }}
                                        >
                                            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900">מיומנויות שתרכשו</h2>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                        {project.skills.map((skill: string, index: number) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 md:p-4 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                                            >
                                                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" style={{ color: difficulty.color }} />
                                                <span className="text-sm md:text-base font-bold text-gray-900">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </BlurFade>
                        )}

                        {/* Details Tab */}
                        {activeTab === "details" && (
                            <BlurFade delay={0.25} inView>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-4 md:space-y-6"
                                >
                                    <div className="rounded-2xl border-2 border-gray-200 bg-white p-4 md:p-6 shadow-lg">
                                        <div className="flex items-center gap-3 mb-3 md:mb-4">
                                            <div
                                                className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md"
                                                style={{ backgroundColor: difficulty.color }}
                                            >
                                                <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                            </div>
                                            <h3 className="text-lg md:text-xl font-black text-gray-900">רמת קושי</h3>
                                        </div>
                                        <div className="bg-gray-50 rounded-xl p-3 md:p-4 border border-gray-100">
                                            <p className="text-sm md:text-base font-bold" style={{ color: difficulty.color }}>
                                                {difficulty.label}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border-2 border-gray-200 bg-white p-4 md:p-6 shadow-lg">
                                        <div className="flex items-center gap-3 mb-3 md:mb-4">
                                            <div
                                                className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md"
                                                style={{ backgroundColor: difficulty.color }}
                                            >
                                                <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                            </div>
                                            <h3 className="text-lg md:text-xl font-black text-gray-900">זמן משוער</h3>
                                        </div>
                                        <div className="bg-gray-50 rounded-xl p-3 md:p-4 border border-gray-100">
                                            <p className="text-sm md:text-base font-bold text-gray-700">
                                                {estimatedTimeHebrew || "משתנה"}
                                            </p>
                                        </div>
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
                                            style={{ backgroundColor: difficulty.color }}
                                        >
                                            <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2">מוכנים להתחיל?</h3>
                                        <p className="text-xs md:text-sm text-gray-600 font-medium">
                                            זה הזמן לבנות משהו מדהים! 🚀
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <Button
                                            className="w-full font-black transition-all shadow-md hover:shadow-lg cursor-pointer text-sm md:text-base"
                                            style={{
                                                backgroundColor: difficulty.color,
                                                color: 'white'
                                            }}
                                            size="lg"
                                        >
                                            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                                            התחל לבנות עכשיו!
                                        </Button>

                                        <Button
                                            variant="outline"
                                            className="w-full font-bold border-2 transition-all cursor-pointer text-sm md:text-base"
                                            style={{
                                                borderColor: difficulty.color,
                                                color: difficulty.color
                                            }}
                                            asChild
                                        >
                                            <Link href={`/projects/${category}`}>
                                                <ArrowLeft className="w-4 h-4 ml-2" />
                                                חזרה לרשימה
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="rounded-2xl bg-white border-2 border-gray-200 p-4 md:p-6 shadow-lg">
                                    <h4 className="text-base md:text-lg font-black text-gray-900 mb-3 md:mb-4">סטטיסטיקות מהירות</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs md:text-sm text-gray-600 font-medium">מיומנויות</span>
                                            <span className="text-sm md:text-base font-black text-emerald-600">{project.skills.length}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs md:text-sm text-gray-600 font-medium">רמה</span>
                                            <span className="text-sm md:text-base font-black" style={{ color: difficulty.color }}>
                                                {difficulty.label}
                                            </span>
                                        </div>
                                        {project.featured && (
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs md:text-sm text-gray-600 font-medium">סטטוס</span>
                                                <span className="text-sm md:text-base font-black text-yellow-600">⭐ מומלץ</span>
                                            </div>
                                        )}
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
