"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, Server, Cloud, Database, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
    const [step, setStep] = useState<1 | 2>(1);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = [
        {
            id: "frontend",
            title: "פרונטאנד",
            description: "פיתוח ממשק משתמש",
            icon: Code,
            color: "#10b981"
        },
        {
            id: "backend",
            title: "בקאנד",
            description: "פיתוח צד שרת",
            icon: Server,
            color: "#14b8a6"
        },
        {
            id: "gamedev",
            title: "GameDev",
            description: "ניהול שרתים",
            icon: Cloud,
            color: "#06b6d4"
        },
        {
            id: "data-science",
            title: "מדעי הנתונים",
            description: "ניתוח נתונים",
            icon: Database,
            color: "#84cc16"
        }
    ];

    const years = [
        { id: "year-1", title: "שנה 1", color: "#10b981" },
        { id: "year-2", title: "שנה 2", color: "#14b8a6" },
        { id: "year-3", title: "שנה 3", color: "#06b6d4" },
        { id: "year-4", title: "שנה 4", color: "#84cc16" }
    ];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                {/* Progress */}
                <div className="flex justify-center gap-2 mb-12">
                    <div
                        className={`w-3 h-3 rounded-full transition-all ${step === 1 ? 'w-8 bg-emerald-500' : 'bg-gray-300'
                            }`}
                    />
                    <div
                        className={`w-3 h-3 rounded-full transition-all ${step === 2 ? 'w-8 bg-emerald-500' : 'bg-gray-300'
                            }`}
                    />
                </div>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                                איזה תחום מעניין אתכם?
                            </h1>
                            <p className="text-lg text-gray-600 font-medium mb-12">
                                בחרו את התחום לפרויקטים
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                {categories.map((category) => {
                                    const Icon = category.icon;
                                    return (
                                        <button
                                            key={category.id}
                                            onClick={() => {
                                                setSelectedCategory(category.id);
                                                setStep(2);
                                            }}
                                            className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all hover:scale-105 cursor-pointer text-right"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
                                                    style={{ backgroundColor: category.color }}
                                                >
                                                    <Icon className="w-8 h-8 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-black text-gray-900 mb-1">
                                                        {category.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 font-medium">
                                                        {category.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && selectedCategory && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="text-center"
                        >
                            <button
                                onClick={() => setStep(1)}
                                className="text-gray-600 hover:text-gray-900 font-medium mb-8 inline-flex items-center gap-2"
                            >
                                ← חזרה
                            </button>

                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                                באיזו שנה אתם?
                            </h1>
                            <p className="text-lg text-gray-600 font-medium mb-12">
                                בחרו את שנת הלימוד שלכם
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                {years.map((year) => (
                                    <Link
                                        key={year.id}
                                        href={`/projects/${selectedCategory}/${year.id}`}
                                        className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="text-right flex-1">
                                                <h3 className="text-3xl font-black text-gray-900">
                                                    {year.title}
                                                </h3>
                                            </div>
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                                                style={{ backgroundColor: year.color }}
                                            >
                                                <ArrowRight className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
