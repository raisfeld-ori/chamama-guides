"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, BookOpen, Code, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 relative">
      {/* Elegant background elements - same as homepage */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-100 rounded-full filter blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-16 max-w-4xl min-h-screen flex items-center justify-center">
        <div className="text-center">
          {/* 404 Header */}
          <BlurFade delay={0.1}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-8xl sm:text-9xl font-black gradient-green-shimmer animate-shimmer mb-4">
                404
              </h1>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                העמוד לא נמצא
              </h2>
              <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                מצטערים, אבל העמוד שחיפשת לא קיים. ניתן להמשיך למידה דרך הקישורים הבאים
              </p>
            </motion.div>
          </BlurFade>

          {/* Quick Navigation Cards */}
          <BlurFade delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                {
                  icon: BookOpen,
                  title: "למידה",
                  description: "מדריכי לימוד מקיפים",
                  href: "/learning",
                  color: "#10b981"
                },
                {
                  icon: Code,
                  title: "פרויקטים", 
                  description: "פרויקטים מעשיים",
                  href: "/projects",
                  color: "#14b8a6"
                },
                {
                  icon: Briefcase,
                  title: "תעסוקה",
                  description: "הכנה לעולם העבודה",
                  href: "/employment",
                  color: "#06b6d4"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Link href={item.href}>
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto"
                        style={{ backgroundColor: `${item.color}20`, color: item.color }}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-gray-800 font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </BlurFade>

          {/* Back to Home Button */}
          <BlurFade delay={0.6}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold px-8 py-3">
                <Link href="/" className="inline-flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  חזרה לעמוד הבית
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
