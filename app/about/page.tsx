"use client"

import { BookOpen, Code, Briefcase, GraduationCap, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLoading } from "@/contexts/LoadingContext";
import { Loading } from "@/components/ui/loading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { isLoading } = useLoading();
  const [activeItem, setActiveItem] = useState("learning");
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number>(Date.now());
  const pausedTimeRef = useRef<number>(0);

  const accordionItems = ["learning", "projects", "employment"];

  useEffect(() => {
    // Reset times when active item changes
    startTimeRef.current = Date.now();
    pausedTimeRef.current = 0;
    setProgress(0);
  }, [activeItem]);

  useEffect(() => {
    if (isPaused) {
      // Clear timers when paused
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      // Store how much time has elapsed
      pausedTimeRef.current = Date.now() - startTimeRef.current;
      return;
    }

    // Resume from where we left off
    startTimeRef.current = Date.now() - pausedTimeRef.current;

    // Set up progress animation
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / 6000) * 100, 100);
      setProgress(newProgress);
    }, 16); // ~60fps

    // Calculate remaining time
    const remainingTime = Math.max(0, 6000 - pausedTimeRef.current);

    // Set up timer for next item
    timerRef.current = setTimeout(() => {
      const currentIndex = accordionItems.indexOf(activeItem);
      const nextIndex = (currentIndex + 1) % accordionItems.length;
      setActiveItem(accordionItems[nextIndex]);
    }, remainingTime);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeItem, isPaused]);

  if (isLoading) {
    return <Loading variant="default" text="טוען מידע על המערכת..." />;
  }

  const contentMap = {
    learning: {
      icon: BookOpen,
      title: "מדריכי למידה",
      description: "צפו בסרטונים, קראו חומרים ועקבו אחרי מסלול למידה מובנה",
      color: "emerald",
      bgGradient: "from-emerald-500 to-teal-500",
      items: [
        { title: "סרטוני הדרכה", description: "למידה ויזואלית עם הסברים מפורטים" },
        { title: "חומרי קריאה", description: "מדריכים מפורטים וקלים להבנה" },
        { title: "תרגילים מעשיים", description: "בדקו את הידע שרכשתם" }
      ],
      link: "/learning",
      linkText: "התחילו ללמוד"
    },
    projects: {
      icon: Code,
      title: "פרויקטים",
      description: "בנו פרויקטים אמיתיים ותיק עבודות מרשים",
      color: "teal",
      bgGradient: "from-teal-500 to-cyan-500",
      items: [
        { title: "פרויקטים מודרכים", description: "בנו פרויקטים מורכבים צעד אחר צעד" },
        { title: "קוד לדוגמה", description: "קוד עם הסברים מפורטים" },
        { title: "תיק עבודות", description: "הציגו את הפרויקטים שלכם למעסיקים" }
      ],
      link: "/projects",
      linkText: "צפו בפרויקטים"
    },
    employment: {
      icon: Briefcase,
      title: "מדריכי תעסוקה",
      description: "קבלו טיפים איך למצוא עבודה ולהצליח בתעשייה",
      color: "cyan",
      bgGradient: "from-cyan-500 to-blue-500",
      items: [
        { title: "כתיבת קורות חיים", description: "טיפים ליצירת קורות חיים מושכים" },
        { title: "הכנה לראיונות", description: "תרגלו שאלות נפוצות בראיונות" },
        { title: "תהליך גיוס", description: "הבינו את השלבים בתהליך הגיוס" }
      ],
      link: "/employment/year-1",
      linkText: "קראו את המדריכים"
    }
  };

  const currentContent = contentMap[activeItem as keyof typeof contentMap];
  const Icon = currentContent.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-200 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-200 rounded-full filter blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <GraduationCap className="w-12 h-12 text-emerald-600" />
            <h1 className="text-5xl md:text-6xl font-black gradient-green-shimmer animate-shimmer">
              מדריכי חממה
            </h1>
          </div>
          <p className="text-xl text-gray-600 font-medium">
            המדריך המקיף שלכם לעולם הפיתוח והתעסוקה בהייטק
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Side - Accordion */}
          <div 
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-7 h-7 text-emerald-600" />
              מה תמצאו באתר?
            </h2>
            
            <Accordion 
              type="single" 
              collapsible 
              value={activeItem}
              onValueChange={(value) => {
                if (value) {
                  setActiveItem(value);
                  setProgress(0);
                }
              }}
              className="space-y-2"
            >
              <AccordionItem value="learning" className="border-b-0 relative">
                <AccordionTrigger className="hover:no-underline rounded-lg px-4 hover:bg-emerald-50 data-[state=open]:bg-emerald-50 hover:text-emerald-600 data-[state=open]:text-emerald-600">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-md transition-all group-hover:shadow-lg">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <span>מדריכי למידה</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <p className="text-gray-600 leading-relaxed">
                    צפו בסרטונים, קראו חומרים ועקבו אחרי מסלול למידה מובנה בתחומים שונים.
                  </p>
                </AccordionContent>
                {activeItem === "learning" && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  />
                )}
              </AccordionItem>

              <AccordionItem value="projects" className="border-b-0 relative">
                <AccordionTrigger className="hover:no-underline rounded-lg px-4 hover:bg-teal-50 data-[state=open]:bg-teal-50 hover:text-teal-600 data-[state=open]:text-teal-600">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center shadow-md transition-all group-hover:shadow-lg">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <span>פרויקטים</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <p className="text-gray-600 leading-relaxed">
                    בנו פרויקטים אמיתיים, פתחו תיק עבודות מרשים והציגו את היכולות שלכם.
                  </p>
                </AccordionContent>
                {activeItem === "projects" && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  />
                )}
              </AccordionItem>

              <AccordionItem value="employment" className="border-b-0 relative">
                <AccordionTrigger className="hover:no-underline rounded-lg px-4 hover:bg-cyan-50 data-[state=open]:bg-cyan-50 hover:text-cyan-600 data-[state=open]:text-cyan-600">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center shadow-md transition-all group-hover:shadow-lg">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <span>מדריכי תעסוקה</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <p className="text-gray-600 leading-relaxed">
                    קבלו טיפים ומדריכים איך למצוא עבודה, לעבור ראיונות ולהצליח בתעשייה.
                  </p>
                </AccordionContent>
                {activeItem === "employment" && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  />
                )}
              </AccordionItem>
            </Accordion>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 text-center">
                כל התוכן מסודר לפי שנים (1-4) ותחומים שונים
              </p>
            </div>
          </div>

          {/* Right Side - Dynamic Content Preview */}
          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            key={activeItem}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="h-full flex flex-col">
              <motion.div 
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentContent.bgGradient} flex items-center justify-center mb-6 shadow-lg`}
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h3 
                className="text-3xl font-black text-gray-900 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {currentContent.title}
              </motion.h3>

              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {currentContent.description}
              </motion.p>

              <div className="space-y-4 mb-8 flex-grow">
                {currentContent.items.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                  >
                    <motion.div 
                      className={`w-2 h-2 rounded-full bg-${currentContent.color}-500 mt-2 flex-shrink-0`}
                      animate={{ 
                        scale: [1, 1.3, 1],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.2 
                      }}
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <Button
                  size="lg"
                  className={`w-full bg-gradient-to-r ${currentContent.bgGradient} text-white hover:opacity-90 font-black shadow-lg text-lg hover:scale-105 transition-all`}
                  asChild
                >
                  <Link href={currentContent.link}>
                    {currentContent.linkText}
                    <Rocket className="w-5 h-5 mr-2" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* How to use Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">איך מתחילים?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl font-black text-white">1</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">בחרו שנה</h3>
              <p className="text-gray-600 leading-relaxed">
                בחרו את השנה שלכם (1-4) מהדף הראשי
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl font-black text-white">2</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">בחרו תחום</h3>
              <p className="text-gray-600 leading-relaxed">
                בחרו תחום (פרונטאנד, בקאנד, GameDev, מדעי נתונים)
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl font-black text-white">3</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">התחילו ללמוד</h3>
              <p className="text-gray-600 leading-relaxed">
                עקבו אחרי המדריכים ובנו פרויקטים מדהימים
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-white text-3xl font-black mb-4">מוכנים להתחיל? 🚀</h2>
            <p className="text-emerald-50 text-lg mb-6">הצטרפו לאלפי תלמידים שכבר מתקדמים בדרך להייטק</p>
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 font-black shadow-xl text-lg px-10"
              asChild
            >
              <Link href="/">
                חזרה לדף הבית
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
