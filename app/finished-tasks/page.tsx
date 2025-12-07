"use client";

import { useTask, RANKS } from "@/contexts/TaskContext";
import { BlurFade } from "@/components/magicui/blur-fade";
import { motion } from "framer-motion";
import { Trophy, Star, Zap, Gamepad2, Code, Database, PaintBucket, Crown, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLoading } from "@/contexts/LoadingContext";
import { Loading } from "@/components/ui/loading";

export default function FinishedTasksPage() {
  const { isLoading } = useLoading();
  const { completedTasks, getLevel, getRank, getProgress } = useTask();

  if (isLoading) {
    return <Loading variant="game" text="טוען הישגים..." />;
  }

  const currentRank = (() => {
    let rank = RANKS[0];
    for (let i = 0; i < RANKS.length; i++) {
      if (completedTasks.length >= RANKS[i].minTasks) {
        rank = RANKS[i];
      } else {
        break;
      }
    }
    return rank;
  })();
  
  const currentRankIndex = RANKS.indexOf(currentRank);
  const nextRank = RANKS[currentRankIndex + 1];

  // Analyze user's strengths based on completed tasks
  const categoryStats = completedTasks.reduce((acc, task) => {
    const category = task.category.toLowerCase();
    if (category.includes('frontend') || category.includes('עיצוב')) {
      acc.frontend = (acc.frontend || 0) + 1;
    } else if (category.includes('backend') || category.includes('שרת')) {
      acc.backend = (acc.backend || 0) + 1;
    } else if (category.includes('game') || category.includes('משחק')) {
      acc.gamedev = (acc.gamedev || 0) + 1;
    } else if (category.includes('data') || category.includes('נתונים')) {
      acc.datascience = (acc.datascience || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const getStrongestCategory = () => {
    const categories = Object.entries(categoryStats);
    if (categories.length === 0) return null;
    
    const strongest = categories.reduce((max, curr) => curr[1] > max[1] ? curr : max);
    const categoryNames = {
      frontend: 'פיתוח Frontend',
      backend: 'פיתוח Backend',  
      gamedev: 'פיתוח משחקים',
      datascience: 'מדעי הנתונים'
    };
    
    return {
      name: categoryNames[strongest[0] as keyof typeof categoryNames],
      count: strongest[1],
      icon: strongest[0] === 'frontend' ? PaintBucket : 
            strongest[0] === 'backend' ? Database :
            strongest[0] === 'gamedev' ? Gamepad2 : TrendingUp
    };
  };

  const strongestCategory = getStrongestCategory();
  const progressPercentage = getProgress();
  const tasksToNext = nextRank ? nextRank.minTasks - completedTasks.length : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 relative">
      {/* Elegant background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-100 rounded-full filter blur-3xl" />
      </div>

      {/* Subtle floating achievement icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Trophy, Star, Target, Code].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute opacity-5"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + index * 20}%`,
              top: `${10 + index * 15}%`,
            }}
          >
            <Icon className="w-8 h-8 text-emerald-600" />
          </motion.div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-16 max-w-6xl">
        {/* Modern Header Section */}
        <BlurFade delay={0.1}>
          <div className="text-center pt-16 pb-8 px-4">
            {/* Achievement Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full px-8 py-4 mb-8 shadow-xl"
            >
              <div className="p-2 bg-white/20 rounded-full">
                <Trophy className="h-6 w-6" />
              </div>
              <div className="text-right">
                <p className="text-white/80 text-sm font-medium">הדירוג הנוכחי</p>
                <p className="text-white font-black text-lg">{currentRank.name}</p>
              </div>
              <div className="w-px h-8 bg-white/30 mx-2" />
              <div className="text-left">
                <p className="text-white/80 text-sm font-medium">רמה</p>
                <p className="text-white font-black text-lg">{getLevel()}</p>
              </div>
            </motion.div>
            
            {/* Main Title */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-7xl font-black gradient-green-shimmer animate-shimmer mb-4">
                הישגים
              </h1>
              <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                עקוב אחר ההתקדמות שלך, גלה את הישגיך והתקדם בדרגות הלמידה
              </p>
            </motion.div>

            {/* Quick Stats */}
            {strongestCategory && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 inline-flex items-center gap-3 bg-white/90 backdrop-blur-md border border-emerald-200 rounded-2xl px-6 py-3 shadow-lg"
              >
                <div className="p-2 bg-emerald-100 rounded-xl">
                  <strongestCategory.icon className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="text-right">
                  <p className="text-emerald-700 font-bold text-sm">התחום החזק ביותר</p>
                  <p className="text-gray-800 font-black">{strongestCategory.name}</p>
                </div>
                <div className="bg-emerald-100 text-emerald-700 font-black text-sm px-3 py-1 rounded-full">
                  {strongestCategory.count} משימות
                </div>
              </motion.div>
            )}
          </div>
        </BlurFade>

        {/* Enhanced Progress Bar */}
        <BlurFade delay={0.2}>
          <div className="px-4 mb-8">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-emerald-200 shadow-xl">
              {/* Progress Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-100 rounded-2xl">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-black text-xl">התקדמות לדירוג הבא</h3>
                    <p className="text-gray-600 font-medium">המשך ללמוד כדי להגיע לרמה הבאה</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-emerald-600 font-black text-2xl">{completedTasks.length}</p>
                  <p className="text-gray-500 font-medium text-sm">משימות הושלמו</p>
                </div>
              </div>

              {/* Advanced Progress Bar */}
              <div className="relative mb-6">
                {/* Background track with subtle shadow */}
                <div className="h-6 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full overflow-hidden shadow-inner border border-gray-200/50">
                  {/* Main progress fill */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="h-full relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(90deg, #10b981, #14b8a6, #06b6d4)',
                    }}
                  >
                    {/* Multiple shimmer layers for enhanced effect */}
                    <div 
                      className="absolute inset-0 -skew-x-12"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), rgba(255,255,255,0.6), rgba(255,255,255,0.3), transparent)',
                        animation: 'shimmer 2.5s infinite',
                      }}
                    />
                    {/* Subtle gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-white/20" />
                  </motion.div>
                </div>
                
                {/* Progress labels */}
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-gray-600 font-semibold text-sm">
                      רמה {getLevel()}
                    </span>
                  </div>
                  <div className="bg-emerald-100 px-3 py-1 rounded-full">
                    <span className="text-emerald-700 font-black text-lg">
                      {Math.round(progressPercentage)}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 font-semibold text-sm">
                      {nextRank ? nextRank.name : 'מקסימום'}
                    </span>
                    <div className="w-3 h-3 rounded-full bg-teal-500" />
                  </div>
                </div>
              </div>

              {/* Next milestone info */}
              {nextRank && (
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-md">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-emerald-800 font-bold text-sm mb-1">המטרה הבאה</p>
                        <p className="text-emerald-700 font-black text-lg">{nextRank.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-800 font-black text-3xl">{tasksToNext}</p>
                      <p className="text-emerald-600 text-sm font-semibold">משימות נותרו</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Enhanced Rank Milestones */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-gray-700 font-bold text-sm mb-4 text-center">מסלול הדירוגים</h4>
                <div className="flex justify-between items-center relative">
                  {/* Connection line */}
                  <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-200 -z-10" />
                  <motion.div 
                    className="absolute top-4 left-4 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, (completedTasks.length / RANKS[4].minTasks) * 100)}%` }}
                    transition={{ duration: 3, ease: "easeOut" }}
                  />
                  
                  {RANKS.slice(0, 5).map((rank, index) => {
                    const isUnlocked = completedTasks.length >= rank.minTasks;
                    const isCurrent = rank.name === getRank();
                    
                    return (
                      <motion.div
                        key={rank.name}
                        initial={{ scale: 0, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ delay: 1.5 + index * 0.15, type: "spring", stiffness: 200 }}
                        className={`flex flex-col items-center relative ${isUnlocked ? '' : 'opacity-50'}`}
                      >
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center border-3 transition-all duration-300 ${
                            isCurrent 
                              ? 'border-emerald-500 bg-emerald-100 shadow-xl scale-110 animate-pulse' 
                              : isUnlocked 
                                ? 'border-emerald-400 bg-white shadow-md hover:scale-105' 
                                : 'border-gray-300 bg-gray-50'
                          }`}
                        >
                          {isCurrent ? (
                            <Trophy className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Star 
                              className={`w-4 h-4 ${isUnlocked ? 'text-emerald-500' : 'text-gray-400'}`} 
                              fill={isUnlocked ? 'currentColor' : 'none'}
                            />
                          )}
                        </div>
                        {/* Rank name tooltip */}
                        <div className={`mt-2 px-2 py-1 rounded-lg text-xs font-semibold ${
                          isCurrent ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600'
                        }`}>
                          {rank.minTasks}
                        </div>
                        {isCurrent && (
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                            כאן
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Stats Cards Row */}
        <BlurFade delay={0.3}>
          <div className="px-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Strongest Category */}
              {strongestCategory && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-emerald-200 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <strongestCategory.icon className="h-8 w-8 text-emerald-600" />
                    <div>
                      <h3 className="text-emerald-700 font-black text-lg">התמחות</h3>
                      <p className="text-gray-800 font-bold">{strongestCategory.name}</p>
                    </div>
                  </div>
                  <div className="text-emerald-600 font-black text-2xl">
                    {strongestCategory.count} משימות
                  </div>
                </motion.div>
              )}

              {/* Level Display */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-teal-200 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Target className="h-8 w-8 text-teal-600" />
                  <div>
                    <h3 className="text-teal-700 font-black text-lg">רמה נוכחית</h3>
                    <p className="text-gray-800 font-bold">רמה {getLevel()}</p>
                  </div>
                </div>
                <div className="text-teal-600 font-black text-2xl">
                  {Math.floor(completedTasks.length / 2)} נקודות
                </div>
              </motion.div>

              {/* Total Progress */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-cyan-200 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="h-8 w-8 text-cyan-600" />
                  <div>
                    <h3 className="text-cyan-700 font-black text-lg">ביצועים</h3>
                    <p className="text-gray-800 font-bold">{Math.round(progressPercentage)}% הושלם</p>
                  </div>
                </div>
                <div className="text-cyan-600 font-black text-2xl">
                  {completedTasks.length} / {nextRank?.minTasks || 'MAX'}
                </div>
              </motion.div>
            </div>
          </div>
        </BlurFade>

        {/* Recent Achievements */}
        {completedTasks.length > 0 && (
          <BlurFade delay={0.4}>
            <div className="px-4 mb-8">
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-emerald-200 shadow-lg">
                <h2 className="text-gray-800 font-black text-xl mb-4 flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-emerald-600" />
                  הישגים אחרונים
                </h2>
                
                <div className="space-y-3">
                  {completedTasks
                    .sort((a, b) => b.completedAt.getTime() - a.completedAt.getTime())
                    .slice(0, 5)
                    .map((task, index) => (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-center gap-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100 hover:bg-emerald-100 transition-all"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shrink-0">
                          <Trophy className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-gray-800 font-bold">{task.title}</h4>
                          <p className="text-gray-600 text-sm font-medium">{task.category}</p>
                        </div>
                        <div className="text-gray-500 text-sm font-bold">
                          לפני {Math.floor((Date.now() - task.completedAt.getTime()) / (1000 * 60 * 60 * 24))} ימים
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          </BlurFade>
        )}

        {/* Call to Action */}
        {completedTasks.length === 0 ? (
          <BlurFade delay={0.5}>
            <div className="text-center py-12 px-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-emerald-200 shadow-lg max-w-md mx-auto"
              >
                <Trophy className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-gray-800 font-black text-xl mb-3">התחל את המסע!</h3>
                <p className="text-gray-600 font-medium mb-6">
                  השלם משימות כדי לפתוח דירוגים ולהתקדם ברמות
                </p>
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black px-8 py-3 rounded-xl"
                >
                  <Link href="/learning">
                    <Star className="w-5 h-5 mr-2" />
                    התחל ללמוד
                  </Link>
                </Button>
              </motion.div>
            </div>
          </BlurFade>
        ) : (
          <BlurFade delay={0.5}>
            <div className="text-center py-8 px-4">
              <Button 
                asChild 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black px-8 py-3 rounded-xl"
              >
                <Link href="/learning">
                  <Zap className="w-5 h-5 mr-2" />
                  המשך ללמוד
                </Link>
              </Button>
            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
