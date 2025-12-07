"use client";

import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useLoading } from "@/contexts/LoadingContext";
import { Loading } from "@/components/ui/loading";

export default function EmploymentPage() {
  const { isLoading } = useLoading();

  if (isLoading) {
    return <Loading variant="default" text="טוען מדריכי תעסוקה..." />;
  }

const years = [
    { 
        id: "year-1", 
        title: "שנה 1", 
        subtitle: "התחלות ויסודות",
        description: "המסע מתחיל כאן - כל הבסיס שצריך",
        color: "#10b981", 
        lightColor: "#d1fae5"
    },
    { 
        id: "year-2", 
        title: "שנה 2", 
        subtitle: "התמחויות ופיתוח",
        description: "להתעמק ולהתמחות בתחום שבחרתם",
        color: "#14b8a6", 
        lightColor: "#ccfbf1"
    },
    { 
        id: "year-3", 
        title: "שנה 3", 
        subtitle: "פרויקטים ומעשיות",
        description: "לעבוד על פרויקטים אמיתיים ומשמעותיים",
        color: "#06b6d4", 
        lightColor: "#cffafe"
    },
    { 
        id: "year-4", 
        title: "שנה 4", 
        subtitle: "קריירה ותעסוקה",
        description: "להיכנס לשוק העבודה בביטחון מלא",
        color: "#84cc16", 
        lightColor: "#ecfccb"
    }
];

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 relative overflow-hidden">
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

            <div className="relative z-10 container mx-auto px-4 py-20 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full px-6 py-2 mb-6">
                        <Briefcase className="h-5 w-5 text-emerald-600" />
                        <span className="text-sm font-medium text-emerald-700">מדריכי תעסוקה</span>
                    </div>
                    
                    <h1 className="mb-6 text-5xl sm:text-6xl md:text-7xl font-black gradient-green-shimmer animate-shimmer">
                        המסע שלכם לקריירה
                    </h1>
                    <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                        בחרו את שנת הלימוד שלכם וקבלו מדריכים מותאמים, טיפים מעשיים ואסטרטגיות להצלחה בתחום שלכם 🚀
                    </p>
                </div>

                {/* Years Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {years.map((year, index) => (
                        <Link
                            key={year.id}
                            href={`/employment/${year.id}`}
                            className="group cursor-pointer transition-all hover:scale-105"
                        >
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

                            {/* Card description below SVG */}
                            <div className="mt-4 text-center">
                                <h4 className="text-lg font-black text-gray-900 mb-2">
                                    {year.subtitle}
                                </h4>
                                <p className="text-sm text-gray-600 font-medium mb-3 leading-relaxed">
                                    {year.description}
                                </p>
                                <div className="flex items-center justify-center gap-2 text-emerald-600 group-hover:text-emerald-700 transition-colors">
                                    <span className="text-sm font-bold">
                                        בואו נתחיל
                                    </span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <p className="text-lg text-gray-600 font-medium">
                        לא בטוחים איפה להתחיל? 🤔
                    </p>
                    <Link 
                        href="/about" 
                        className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                        <span>לחצו כאן לעזרה</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
