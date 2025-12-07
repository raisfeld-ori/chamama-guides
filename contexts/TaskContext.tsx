"use client";

import { createContext, useContext, useEffect, useState } from 'react';

interface CompletedTask {
  id: string;
  title: string;
  category: string;
  type: 'project' | 'learning' | 'employment';
  completedAt: Date;
  timeSpent?: string;
}

interface TaskContextType {
  completedTasks: CompletedTask[];
  markTaskComplete: (task: CompletedTask) => void;
  isTaskComplete: (id: string) => boolean;
  getLevel: () => number;
  getRank: () => string;
  getProgress: () => number;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const RANKS = [
  { name: "מתחיל", minTasks: 0, color: "#6b7280" },
  { name: "לומד", minTasks: 5, color: "#10b981" },
  { name: "בונה", minTasks: 10, color: "#14b8a6" },
  { name: "יוצר", minTasks: 20, color: "#06b6d4" },
  { name: "מומחה", minTasks: 35, color: "#8b5cf6" },
  { name: "מאסטר", minTasks: 50, color: "#f59e0b" },
  { name: "אגדה", minTasks: 75, color: "#dc2626" },
];

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [completedTasks, setCompletedTasks] = useState<CompletedTask[]>([]);

  useEffect(() => {
    // Load completed tasks from localStorage
    const saved = localStorage.getItem('chamama-completed-tasks');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCompletedTasks(parsed.map((task: any) => ({
          ...task,
          completedAt: new Date(task.completedAt)
        })));
      } catch (error) {
        console.error('Error loading completed tasks:', error);
      }
    }
  }, []);

  const markTaskComplete = (task: CompletedTask) => {
    const newTasks = [...completedTasks, task];
    setCompletedTasks(newTasks);
    localStorage.setItem('chamama-completed-tasks', JSON.stringify(newTasks));
  };

  const isTaskComplete = (id: string) => {
    return completedTasks.some(task => task.id === id);
  };

  const getLevel = () => {
    const tasksCount = completedTasks.length;
    return Math.floor(tasksCount / 5) + 1;
  };

  const getRank = () => {
    const tasksCount = completedTasks.length;
    // Find the highest rank the user qualifies for
    let currentRank = RANKS[0]; // Default to first rank
    for (let i = 0; i < RANKS.length; i++) {
      if (tasksCount >= RANKS[i].minTasks) {
        currentRank = RANKS[i];
      } else {
        break; // Stop when we find a rank we don't qualify for
      }
    }
    return currentRank.name;
  };

  const getProgress = () => {
    const tasksCount = completedTasks.length;
    // Find current rank
    let currentRank = RANKS[0];
    let currentRankIndex = 0;
    
    for (let i = 0; i < RANKS.length; i++) {
      if (tasksCount >= RANKS[i].minTasks) {
        currentRank = RANKS[i];
        currentRankIndex = i;
      } else {
        break;
      }
    }
    
    const nextRank = RANKS[currentRankIndex + 1];
    
    if (!nextRank) return 100; // Max rank reached
    
    const tasksInCurrentLevel = tasksCount - currentRank.minTasks;
    const tasksNeededForNextLevel = nextRank.minTasks - currentRank.minTasks;
    const progress = (tasksInCurrentLevel / tasksNeededForNextLevel) * 100;
    
    return Math.min(Math.max(progress, 0), 100);
  };

  return (
    <TaskContext.Provider value={{
      completedTasks,
      markTaskComplete,
      isTaskComplete,
      getLevel,
      getRank,
      getProgress
    }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
}

export { RANKS };
