"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-green-200/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-emerald-200">
              <Sparkles className="h-4 w-4" />
              <span>תכנית לימודים מלאה ל-4 שנים</span>
              <Zap className="h-4 w-4" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            בואו נלמד לתכנת!{" "}
            <span className="gradient-green-shimmer animate-shimmer inline-block">
              תיכון חממה
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-12 max-w-3xl text-lg text-gray-700 sm:text-xl md:text-2xl font-medium leading-relaxed"
          >
            כל מה שצריך כדי להתחיל את המסע שלך בעולם התכנות -
            מהיסודות ועד לפרויקטים מתקדמים
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-lg px-8 py-6 shadow-xl shadow-emerald-200 hover:shadow-2xl hover:shadow-emerald-300 transition-all hover:scale-105"
              asChild
            >
              <Link href="/learning/frontend">
                <Sparkles className="ml-2 h-5 w-5" />
                התחל ללמוד עכשיו
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-black text-lg px-8 py-6 hover:scale-105 transition-all"
              asChild
            >
              <Link href="/projects/frontend">
                <Rocket className="mr-2 h-5 w-5" />
                צפה בפרויקטים
              </Link>
            </Button>
          </motion.div>


        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
