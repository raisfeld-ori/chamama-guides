"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ExternalLink, Briefcase, BookOpen, FileText, Users, Lightbulb, Target, Code } from "lucide-react";
import { motion } from "framer-motion";

// Icon mapping
const iconMap: Record<string, any> = {
    BookOpen,
    FileText,
    Users,
    Lightbulb,
    Target,
    Code,
    Briefcase,
};

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
                    className="text-emerald-600 underline hover:text-emerald-700 font-bold inline-flex items-center gap-1"
                >
                    {part}
                    <ExternalLink className="w-3 h-3" />
                </a>
            );
        }
        return part;
    });
};

const sectionColors = [
    { color: "#10b981", lightColor: "#d1fae5" }, // Emerald
    { color: "#14b8a6", lightColor: "#ccfbf1" }, // Teal
    { color: "#06b6d4", lightColor: "#cffafe" }, // Cyan
    { color: "#84cc16", lightColor: "#ecfccb" }, // Lime
];

export function EmploymentGuideClient({ guide, year }: { guide: any; year: string }) {
    const yearNum = year.split("-")[1];

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
                        <Link href="/employment">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            חזרה לבחירת שנה
                        </Link>
                    </Button>
                </BlurFade>

                {/* Hero Section */}
                <BlurFade delay={0.15}>
                    <div className="mb-8 md:mb-12 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border-2 border-emerald-200 shadow-sm mb-6">
                            <Briefcase className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-bold text-emerald-700">
                                מדריך תעסוקה • שנה {yearNum}
                            </span>
                        </div>

                        <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-black gradient-green-shimmer animate-shimmer leading-tight">
                            {guide.title}
                        </h1>
                        <p className="text-base md:text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
                            {guide.description}
                        </p>
                    </div>
                </BlurFade>

                {/* Sections */}
                <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                    {guide.sections.map((section: any, index: number) => {
                        const Icon = iconMap[section.iconName] || BookOpen;
                        const colorScheme = sectionColors[index % sectionColors.length];

                        return (
                            <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="rounded-2xl border-2 border-gray-200 bg-white p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div
                                            className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
                                            style={{ backgroundColor: colorScheme.color }}
                                        >
                                            <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">
                                                {section.title}
                                            </h2>
                                            <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                                                {section.content}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions List */}
                                    <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-100">
                                        <h3 className="text-sm md:text-base font-black text-gray-900 mb-4">מה לעשות:</h3>
                                        <ul className="space-y-3 md:space-y-4">
                                            {section.actions.map((action: string, i: number) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div
                                                        className="mt-0.5 flex h-6 w-6 md:h-7 md:w-7 shrink-0 items-center justify-center rounded-full shadow-sm"
                                                        style={{ backgroundColor: colorScheme.color }}
                                                    >
                                                        <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-white" />
                                                    </div>
                                                    <span className="text-sm md:text-base text-gray-700 font-medium leading-relaxed flex-1">
                                                        {renderTextWithLinks(action)}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </BlurFade>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <BlurFade delay={0.5} inView>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 md:mt-16 rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 md:p-10 text-center shadow-lg"
                    >
                        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg">
                            <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>

                        <h2 className="mb-3 md:mb-4 text-2xl md:text-3xl font-black text-gray-900">
                            צריכים עזרה נוספת?
                        </h2>
                        <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-700 font-medium max-w-2xl mx-auto">
                            היועצים שלנו כאן כדי לעזור לכם להצליח בדרך שלכם
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-black shadow-lg hover:shadow-xl cursor-pointer"
                                asChild
                            >
                                <Link href="/contact">
                                    קבעו פגישה
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-bold cursor-pointer"
                                asChild
                            >
                                <Link href="/resources">
                                    צפו במשאבים
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </BlurFade>
            </div>
        </div>
    );
}
