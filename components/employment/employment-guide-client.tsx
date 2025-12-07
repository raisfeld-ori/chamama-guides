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
                <div key={index} className="mt-2 mb-2">
                    <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all hover:scale-105"
                        asChild
                    >
                        <a
                            href={part}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLink className="w-3 h-3 ml-1" />
                            פתח קישור
                        </a>
                    </Button>
                </div>
            );
        }
        return part;
    });
};

const sectionColors = [
    { color: "#10b981", lightColor: "#d1fae5", text: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-300" }, // Emerald
    { color: "#14b8a6", lightColor: "#ccfbf1", text: "text-teal-700", bg: "bg-teal-50", border: "border-teal-300" }, // Teal
    { color: "#06b6d4", lightColor: "#cffafe", text: "text-cyan-700", bg: "bg-cyan-50", border: "border-cyan-300" }, // Cyan
    { color: "#84cc16", lightColor: "#ecfccb", text: "text-lime-700", bg: "bg-lime-50", border: "border-lime-300" }, // Lime
];

export function EmploymentGuideClient({ guide, year }: { guide: any; year: string }) {
    const yearNum = year.split("-")[1];

    // Position patterns: left, center, right (like learning pages)
    const positions = ['left', 'center', 'right'];

    // Flatten all sections with positioning
    const allSections = guide.sections.map((section: any, index: number) => ({
        ...section,
        position: positions[index % 3],
        colorScheme: sectionColors[index % sectionColors.length]
    }));

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
                    className="absolute top-40 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-40 right-40 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12 sm:px-6 lg:px-8">
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
                    <div className="mb-16 text-center" dir="rtl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border-2 border-emerald-200 shadow-sm mb-6">
                            <Briefcase className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-bold text-emerald-700">
                                מדריך תעסוקה • שנה {yearNum}
                            </span>
                        </div>

                        <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-black gradient-green-shimmer animate-shimmer leading-tight">
                            {guide.title}
                        </h1>
                        <p className="text-base md:text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed text-center">
                            {guide.description}
                        </p>
                    </div>
                </BlurFade>

                {/* Roadmap */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical dotted line */}
                    <div className="absolute right-1/2 top-0 bottom-0 w-0.5 border-r-2 border-dashed border-emerald-300" />

                    {allSections.map((section: any, index: number) => {
                        const Icon = iconMap[section.iconName] || BookOpen;
                        const colors = section.colorScheme;
                        const isLeft = section.position === 'left';
                        const isCenter = section.position === 'center';
                        const isRight = section.position === 'right';

                        return (
                            <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                                <div className="relative mb-16">
                                    {/* Connector dot on the center line */}
                                    <div 
                                        className="absolute right-1/2 top-8 w-4 h-4 rounded-full border-4 border-white shadow-lg transform translate-x-1/2 z-10"
                                        style={{ backgroundColor: colors.color }}
                                    />
                                    
                                    {/* Horizontal dotted line to content */}
                                    {!isCenter && (
                                        <div 
                                            className={`absolute top-9 h-0.5 border-t-2 border-dashed border-emerald-300 ${
                                                isLeft ? 'right-1/2 left-[8%]' : 'left-1/2 right-[8%]'
                                            }`}
                                        />
                                    )}

                                    {/* Content card */}
                                    <div className={`relative ${
                                        isLeft ? 'mr-auto ml-0 pr-[52%]' : 
                                        isRight ? 'ml-auto mr-0 pl-[52%]' : 
                                        'mx-auto max-w-2xl'
                                    }`}>
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                            className={`group rounded-xl border-2 ${colors.border} ${colors.bg} p-6 shadow-md hover:shadow-xl transition-all hover:scale-105 ${
                                                isCenter ? 'text-center' : 'text-right'
                                            }`}
                                            dir="rtl"
                                        >
                                            {/* Icon badge */}
                                            <div 
                                                className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4`}
                                                style={{ backgroundColor: colors.color }}
                                            >
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>

                                            {/* Title */}
                                            <h3 className={`text-xl font-black mb-3 ${colors.text} text-right leading-tight`}>
                                                {section.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm text-gray-600 font-medium mb-6 leading-relaxed text-right">
                                                {section.content}
                                            </p>

                                            {/* Actions */}
                                            <div className="space-y-3">
                                                <h4 className={`text-sm font-black mb-3 ${colors.text} text-right`}>
                                                    מה לעשות:
                                                </h4>
                                                <ul className="space-y-3" dir="rtl">
                                                    {section.actions.map((action: string, i: number) => (
                                                        <li key={i} className="flex items-start gap-3 text-right">
                                                            <div
                                                                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full order-first"
                                                                style={{ backgroundColor: colors.color }}
                                                            >
                                                                <CheckCircle2 className="h-3 w-3 text-white" />
                                                            </div>
                                                            <span className="text-sm text-gray-700 font-medium leading-relaxed flex-1 text-right">
                                                                {renderTextWithLinks(action)}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </BlurFade>
                        );
                    })}

                    {/* End marker */}
                    <BlurFade delay={0.2 + allSections.length * 0.1} inView>
                        <div className="relative text-center pb-8">
                            <div className="absolute right-1/2 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 border-4 border-white shadow-lg transform translate-x-1/2 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-white" />
                            </div>
                            <div className="pt-12">
                                <p className="text-sm font-black text-emerald-700">🎯 המסע שלכם בשנה {yearNum} מתחיל כאן!</p>
                            </div>
                        </div>
                    </BlurFade>
                </div>

                {/* Call to Action */}
                <BlurFade delay={0.5} inView>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-12 text-center shadow-lg"
                        dir="rtl"
                    >
                        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg">
                            <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>

                        <h2 className="mb-4 text-2xl md:text-3xl font-black text-gray-900 text-center">
                            צריכים עזרה נוספת?
                        </h2>
                        <p className="mb-8 text-base text-gray-700 font-medium max-w-2xl mx-auto text-center leading-relaxed">
                            היועצים שלנו כאן כדי לעזור לכם להצליח בדרך שלכם
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-black shadow-lg hover:shadow-xl cursor-pointer transition-all hover:scale-105"
                                asChild
                            >
                                <Link href="/contact">
                                    קבעו פגישה
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-bold cursor-pointer transition-all hover:scale-105"
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
