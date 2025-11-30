"use client";

import { useState } from "react";
import { Code, Server, Cloud, Database } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function LearningPage() {
    const [step, setStep] = useState<1 | 2>(1);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = [
        {
            id: "frontend",
            title: "פרונטאנד",
            description: "פיתוח ממשק משתמש",
            icon: Code,
            color: "#10b981",
            lightColor: "#d1fae5"
        },
        {
            id: "backend",
            title: "בקאנד",
            description: "פיתוח צד שרת",
            icon: Server,
            color: "#14b8a6",
            lightColor: "#ccfbf1"
        },
        {
            id: "devops",
            title: "DevOps",
            description: "ניהול שרתים",
            icon: Cloud,
            color: "#06b6d4",
            lightColor: "#cffafe"
        },
        {
            id: "data-science",
            title: "מדעי הנתונים",
            description: "ניתוח נתונים",
            icon: Database,
            color: "#84cc16",
            lightColor: "#ecfccb"
        }
    ];

    const years = [
        { id: "year-1", title: "שנה 1", color: "#10b981", lightColor: "#d1fae5" },
        { id: "year-2", title: "שנה 2", color: "#14b8a6", lightColor: "#ccfbf1" },
        { id: "year-3", title: "שנה 3", color: "#06b6d4", lightColor: "#cffafe" },
        { id: "year-4", title: "שנה 4", color: "#84cc16", lightColor: "#ecfccb" }
    ];

    return (
        <div className="h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 flex flex-col relative overflow-hidden">
            {/* Animated background blur circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-40 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
                <motion.div
                    className="absolute bottom-40 right-40 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{
                        x: [0, 40, 0],
                        y: [0, -40, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </div>

            <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-5xl relative z-10">
                    {/* Progress */}
                    <div className="flex justify-center gap-2 mb-8">
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
                                <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                                    איזה תחום מעניין אתכם?
                                </h1>
                                <p className="text-base text-gray-600 font-medium mb-8">
                                    בחרו את התחום שאתם רוצים ללמוד
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                                    {categories.map((category, index) => {
                                        const Icon = category.icon;
                                        return (
                                            <button
                                                key={category.id}
                                                onClick={() => {
                                                    setSelectedCategory(category.id);
                                                    setStep(2);
                                                }}
                                                className="group cursor-pointer transition-all hover:scale-105"
                                            >
                                                {/* SVG with text overlay */}
                                                <svg
                                                    viewBox="0 0 180 220"
                                                    className="w-full h-auto"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    {/* Background blob */}
                                                    <path
                                                        d="M90,15 Q155,28 155,90 Q155,152 90,165 Q25,152 25,90 Q25,28 90,15 Z"
                                                        fill={category.lightColor}
                                                    />

                                                    {/* Decorative circles */}
                                                    <motion.circle
                                                        cx="50"
                                                        cy="60"
                                                        r="8"
                                                        fill={category.color}
                                                        opacity="0.3"
                                                        animate={{ x: [-2, 2, -2] }}
                                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                                    />
                                                    <motion.circle
                                                        cx="130"
                                                        cy="75"
                                                        r="10"
                                                        fill={category.color}
                                                        opacity="0.2"
                                                        animate={{ x: [2, -2, 2] }}
                                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                                                    />

                                                    {/* Main icon circle */}
                                                    <circle
                                                        cx="90"
                                                        cy="90"
                                                        r="42"
                                                        fill={category.color}
                                                    />

                                                    {/* Icon */}
                                                    <foreignObject x="62" y="62" width="56" height="56">
                                                        <div className="flex items-center justify-center w-full h-full">
                                                            <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                                                        </div>
                                                    </foreignObject>

                                                    {/* Decorative lines */}
                                                    <motion.line
                                                        x1="90"
                                                        y1="25"
                                                        x2="90"
                                                        y2="58"
                                                        stroke={category.color}
                                                        strokeWidth="2"
                                                        opacity="0.4"
                                                        animate={{ x1: [88, 92, 88], x2: [88, 92, 88] }}
                                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                                    />

                                                    {/* Text overlay */}
                                                    <foreignObject x="10" y="170" width="160" height="50">
                                                        <div className="flex flex-col items-center justify-start h-full">
                                                            <h3
                                                                className="text-lg font-black mb-0.5"
                                                                style={{
                                                                    background: `linear-gradient(90deg, ${category.color} 0%, ${category.color}dd 25%, ${category.color}99 50%, ${category.color}dd 75%, ${category.color} 100%)`,
                                                                    backgroundSize: '200% auto',
                                                                    WebkitBackgroundClip: 'text',
                                                                    backgroundClip: 'text',
                                                                    WebkitTextFillColor: 'transparent',
                                                                }}
                                                            >
                                                                {category.title}
                                                            </h3>
                                                            <p className="text-xs text-gray-500 font-medium text-center">
                                                                {category.description}
                                                            </p>
                                                        </div>
                                                    </foreignObject>
                                                </svg>
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
                                    className="text-gray-600 cursor-pointer hover:text-gray-900 font-medium mb-6 inline-flex items-center gap-2"
                                >
                                    ← חזרה
                                </button>

                                {/* Category title with separator */}
                                <div className="flex flex-col items-center mb-6">
                                    <h2 className="text-2xl md:text-3xl font-black text-emerald-700 mb-3">
                                        {categories.find(c => c.id === selectedCategory)?.title}
                                    </h2>
                                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                                </div>

                                <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                                    באיזו שנה אתם?
                                </h1>
                                <p className="text-base text-gray-600 font-medium mb-8">
                                    בחרו את שנת הלימוד שלכם
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                                    {years.map((year, index) => (
                                        <Link
                                            key={year.id}
                                            href={`/learning/${selectedCategory}/${year.id}`}
                                            className="group cursor-pointer transition-all hover:scale-105"
                                        >
                                            {/* SVG with text overlay */}
                                            <svg
                                                viewBox="0 0 200 200"
                                                className="w-full h-auto"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                {/* Background */}
                                                <rect width="200" height="200" fill={year.lightColor} rx="20" />

                                                {/* Decorative circles */}
                                                <motion.circle
                                                    cx="50"
                                                    cy="50"
                                                    r="8"
                                                    fill={year.color}
                                                    opacity="0.3"
                                                    animate={{ x: [-2, 2, -2] }}
                                                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                                />
                                                <motion.circle
                                                    cx="150"
                                                    cy="60"
                                                    r="10"
                                                    fill={year.color}
                                                    opacity="0.2"
                                                    animate={{ x: [2, -2, 2] }}
                                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                                                />

                                                {/* Year number circle */}
                                                <circle cx="100" cy="100" r="35" fill={year.color} />
                                                <foreignObject x="75" y="75" width="50" height="50">
                                                    <div className="flex items-center justify-center w-full h-full text-white text-3xl font-black">
                                                        {index + 1}
                                                    </div>
                                                </foreignObject>

                                                {/* Decorative lines */}
                                                <motion.line
                                                    x1="30"
                                                    y1="100"
                                                    x2="65"
                                                    y2="100"
                                                    stroke={year.color}
                                                    strokeWidth="2"
                                                    opacity="0.4"
                                                    animate={{ x1: [28, 32, 28], x2: [63, 67, 63] }}
                                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                                />
                                                <motion.line
                                                    x1="135"
                                                    y1="100"
                                                    x2="170"
                                                    y2="100"
                                                    stroke={year.color}
                                                    strokeWidth="2"
                                                    opacity="0.4"
                                                    animate={{ x1: [133, 137, 133], x2: [168, 172, 168] }}
                                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                                />

                                                {/* Text overlay */}
                                                <foreignObject x="30" y="150" width="140" height="40">
                                                    <div className="flex items-center justify-center h-full">
                                                        <h3
                                                            className="text-xl font-black"
                                                            style={{
                                                                background: `linear-gradient(90deg, ${year.color} 0%, ${year.color}dd 25%, ${year.color}99 50%, ${year.color}dd 75%, ${year.color} 100%)`,
                                                                backgroundSize: '200% auto',
                                                                WebkitBackgroundClip: 'text',
                                                                backgroundClip: 'text',
                                                                WebkitTextFillColor: 'transparent',
                                                            }}
                                                        >
                                                            {year.title}
                                                        </h3>
                                                    </div>
                                                </foreignObject>
                                            </svg>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom decorative SVG */}
            <div className="w-full relative z-10">
                <svg viewBox="0 0 1200 150" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    {/* Background wave */}
                    <path
                        d="M0,75 Q300,25 600,75 T1200,75 L1200,150 L0,150 Z"
                        fill="#d1fae5"
                        opacity="0.6"
                    />

                    {/* Decorative lines */}
                    <motion.line
                        x1="300"
                        y1="90"
                        x2="360"
                        y2="90"
                        stroke="#10b981"
                        strokeWidth="3"
                        opacity="0.5"
                        strokeLinecap="round"
                        animate={{ x1: [298, 302, 298], x2: [358, 362, 358] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.line
                        x1="700"
                        y1="95"
                        x2="760"
                        y2="95"
                        stroke="#14b8a6"
                        strokeWidth="3"
                        opacity="0.5"
                        strokeLinecap="round"
                        animate={{ x1: [698, 702, 698], x2: [758, 762, 758] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />

                    {/* Text */}
                    <foreignObject x="450" y="105" width="300" height="40">
                        <div className="flex items-center justify-center h-full">

                        </div>
                    </foreignObject>
                </svg>
            </div>
        </div>
    );
}
