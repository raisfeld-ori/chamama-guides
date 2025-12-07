"use client";

import { Loader2 } from "lucide-react";

interface LoadingProps {
  variant?: "default" | "minimal";
  text?: string;
}

export function Loading({ 
  variant = "default", 
  text = "טוען..." 
}: LoadingProps) {
  
  if (variant === "minimal") {
    return (
      <div className="flex items-center justify-center p-4">
        <Loader2 className="h-5 w-5 animate-spin text-emerald-500 ml-2" />
        <span className="text-gray-600 font-medium">{text}</span>
      </div>
    );
  }

  // Default variant - simple and clean
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-emerald-500 mx-auto mb-4" />
        <p className="text-gray-700 font-medium text-lg">{text}</p>
      </div>
    </div>
  );
}