"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Code, Briefcase, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function InteractiveAbout() {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            id: 0,
            icon: BookOpen,
            color: "#10b981",
            title: "מדריכי למידה",
            description: "צפו בסרטונים, קראו חומרים ועקבו אחרי מסלול למידה מובנה",
            link: "/learning/frontend",
            linkText: "התחילו ללמוד"
        },
        {
            id: 1,
            icon: Code,
            color: "#14b8a6",
            title: "פרויקטים",
            description: "בנו פרויקטים אמיתיים ותיק עבודות מרשים",
            link: "/projects/backend",
            linkText: "צפו בפרויקטים"
        },
        {
            id: 2,
            icon: Briefcase,
            color: "#06b6d4",
            title: "מדריכי תעסוקה",
            description: "קבלו טיפים איך למצוא עבודה ולהצליח בתעשייה",
            link: "/employment/year-1",
            linkText: "קראו את המדריכים"
        }
    ];

    const currentStepData = steps[currentStep];
    const Icon = currentStepData.icon;

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                <div className="flex justify-center gap-2 mb-12">
                    {steps.map((step, index) => (
                        <button
                            key={step.id}
                            onClick={() => setCurrentStep(index)}
                            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${index === currentStep ? 'w-8' : 'hover:scale-125'
                                }`}
                            style={{
                                backgroundColor: index === currentStep ? currentStepData.color : '#e5e7eb'
                            }}
                        />
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="mb-8"
                        >
                            <div
                                className="w-24 h-24 mx-auto rounded-3xl flex items-center justify-center shadow-xl"
                                style={{ backgroundColor: currentStepData.color }}
                            >
                                <Icon className="w-12 h-12 text-white" />
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
                        >
                            {currentStepData.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-600 font-medium mb-12 max-w-lg mx-auto leading-relaxed"
                        >
                            {currentStepData.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mb-8"
                        >
                            <Button
                                size="lg"
                                className="font-black shadow-lg hover:shadow-xl cursor-pointer text-lg px-8"
                                style={{
                                    backgroundColor: currentStepData.color,
                                    color: 'white'
                                }}
                                asChild
                            >
                                <Link href={currentStepData.link}>
                                    {currentStepData.linkText}
                                    <ArrowRight className="w-5 h-5 mr-2" />
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                <div className="flex justify-between items-center mt-16">
                    <Button
                        variant="ghost"
                        onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                        disabled={currentStep === 0}
                        className="cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ArrowLeft className="w-4 h-4 ml-2" />
                        הקודם
                    </Button>

                    {currentStep < steps.length - 1 ? (
                        <Button
                            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                            className="cursor-pointer"
                            style={{
                                backgroundColor: currentStepData.color,
                                color: 'white'
                            }}
                        >
                            הבא
                            <ArrowRight className="w-4 h-4 mr-2" />
                        </Button>
                    ) : (
                        <Button
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white cursor-pointer"
                            asChild
                        >
                            <Link href="/">
                                חזרה לדף הבית
                                <ArrowRight className="w-4 h-4 mr-2" />
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
