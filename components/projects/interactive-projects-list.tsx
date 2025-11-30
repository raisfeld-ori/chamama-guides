"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Clock, Star, Sparkles, Zap, Target, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const categoryTitles: Record<string, string> = {
    frontend: "פיתוח ממשק משתמש",
    backend: "פיתוח צד שרת",
    devops: "DevOps",
    "data-science": "מדעי הנתונים",
};

const difficultyConfig: Record<string, { color: string; lightColor: string; label: string; icon: any }> = {
    "Beginner": {
        color: "#10b981",
        lightColor: "#d1fae5",
        label: "מתחילים",
        icon: Target
    },
    "Beginner_Intermediate": {
        color: "#14b8a6",
        lightColor: "#ccfbf1",
        label: "בינוני-קל",
        icon: Zap
    },
    "Intermediate": {
        color: "#06b6d4",
        lightColor: "#cffafe",
        label: "בינוני",
        icon: Sparkles
    },
    "Advanced": {
        color: "#84cc16",
        lightColor: "#ecfccb",
        label: "מתקדם",
        icon: Star
    },
};

export function InteractiveProjectsList({
    category,
    year,
    projects
}: {
    category: string;
    year: string;
    projects: any[]
}) {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const yearNum = year.split("-")[1];
    const categoryTitle = categoryTitles[category] || category;

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 right-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            <div className="relative container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <BlurFade delay={0.1}>
                    <Button variant="ghost" className="mb-6 cursor-pointer hover:scale-105 transition-transform" asChild>
                        <Link href={`/projects/${category}`}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            חזרה לבחירת שנה
                        </Link>
                    </Button>

                    <div className="text-center mb-12">
                        <h1 className="mb-4 text-5xl font-black sm:text-6xl gradient-green-shimmer animate-shimmer">
                            פרויקטי {categoryTitle}
                        </h1>
                        <p className="text-xl text-gray-600 font-bold mb-2">
                            שנה {yearNum}
                        </p>
                        <p className="text-base text-gray-600 font-medium max-w-2xl mx-auto">
                            בחרו פרויקט ובואו נתחיל לבנות משהו מדהים 🚀
                        </p>
                    </div>
                </BlurFade>

                {/* Interactive project timeline */}
                <div className="max-w-4xl mx-auto">
                    {projects.map((project: any, index: number) => {
                        const difficulty = difficultyConfig[project.difficulty] || difficultyConfig["Beginner"];
                        const DifficultyIcon = difficulty.icon;
                        const isSelected = selectedProject === index;
                        const isEven = index % 2 === 0;

                        return (
                            <BlurFade key={project.id} delay={0.2 + index * 0.1} inView>
                                <motion.div
                                    className="relative mb-8"
                                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {/* Timeline connector - hidden on mobile */}
                                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-300 to-teal-300 transform -translate-x-1/2" />

                                    {/* Project number badge */}
                                    <div
                                        className="absolute md:left-1/2 left-4 top-6 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-black shadow-xl md:transform md:-translate-x-1/2 z-10 cursor-pointer hover:scale-110 transition-transform"
                                        style={{ backgroundColor: difficulty.color }}
                                        onClick={() => setSelectedProject(isSelected ? null : index)}
                                    >
                                        {index + 1}
                                    </div>

                                    {/* Featured star */}
                                    {project.featured && (
                                        <motion.div
                                            className="absolute md:left-1/2 left-4 top-0 md:top-2 md:transform md:-translate-x-1/2 z-20"
                                            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <Star className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-500" />
                                        </motion.div>
                                    )}

                                    {/* Project card - full width on mobile, split on desktop */}
                                    <div className={`pl-16 md:pl-0 ${isEven ? 'md:pr-[52%]' : 'md:pl-[52%]'}`}>
                                        <motion.div
                                            className="group rounded-2xl border-2 p-4 md:p-6 cursor-pointer transition-all"
                                            style={{
                                                backgroundColor: difficulty.lightColor,
                                                borderColor: difficulty.color + '40'
                                            }}
                                            whileHover={{ scale: 1.02, y: -4 }}
                                            onClick={() => setSelectedProject(isSelected ? null : index)}
                                        >
                                            {/* Header */}
                                            <div className="flex flex-col sm:flex-row items-start gap-3 mb-4">
                                                <div className="flex items-start gap-2 md:gap-3 flex-1 w-full">
                                                    <div
                                                        className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                                                        style={{ backgroundColor: difficulty.color }}
                                                    >
                                                        <DifficultyIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-base md:text-xl font-black text-gray-900 group-hover:text-emerald-700 transition-colors break-words leading-tight">
                                                            {project.title}
                                                        </h3>
                                                        <span
                                                            className="text-[10px] md:text-xs font-bold px-2 py-1 rounded-full inline-block mt-1"
                                                            style={{
                                                                backgroundColor: difficulty.color + '30',
                                                                color: difficulty.color
                                                            }}
                                                        >
                                                            {difficulty.label}
                                                        </span>
                                                    </div>
                                                </div>

                                                {project.estimatedTime && (
                                                    <div className="flex items-center gap-1 text-xs md:text-sm text-gray-600 bg-white/70 px-2 md:px-3 py-1 rounded-full whitespace-nowrap self-start">
                                                        <Clock className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                                                        <span className="font-medium">{project.estimatedTime}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Description */}
                                            <p className="text-xs md:text-sm text-gray-700 font-medium mb-3 md:mb-4 leading-relaxed">
                                                {project.description || "פרויקט מעניין לתיק העבודות שלכם"}
                                            </p>

                                            {/* Skills */}
                                            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                                                {project.skills.map((skill: string, i: number) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 md:px-3 py-1 text-[10px] md:text-xs font-bold bg-white/80 rounded-full border-2"
                                                        style={{ borderColor: difficulty.color + '30' }}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Expanded content */}
                                            <motion.div
                                                initial={false}
                                                animate={{ height: isSelected ? 'auto' : 0, opacity: isSelected ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                {project.longDescription && (
                                                    <div className="bg-white/70 rounded-xl p-3 md:p-4 mb-3 md:mb-4">
                                                        <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                                                            {project.longDescription}
                                                        </p>
                                                    </div>
                                                )}
                                            </motion.div>

                                            {/* Action button */}
                                            <Button
                                                className="w-full font-black transition-all hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer text-xs md:text-sm"
                                                style={{
                                                    backgroundColor: difficulty.color,
                                                    color: 'white'
                                                }}
                                                asChild
                                            >
                                                <Link href={`/projects/detail/${project.id}`}>
                                                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                                                    בואו נתחיל לבנות!
                                                </Link>
                                            </Button>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </BlurFade>
                        );
                    })}

                    {/* End marker */}
                    <BlurFade delay={0.2 + projects.length * 0.1} inView>
                        <div className="relative text-center pt-8">
                            <div className="absolute left-1/2 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 border-4 border-white shadow-xl transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-white" />
                            </div>
                            <div className="pt-16">
                                <p className="text-lg font-black text-emerald-700">🎉 סיימתם את כל הפרויקטים? מדהים!</p>
                                <p className="text-sm text-gray-600 font-medium mt-2">עכשיו זה הזמן להראות את מה שבניתם לעולם</p>
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </div>
    );
}
