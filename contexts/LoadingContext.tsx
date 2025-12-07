"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Loading } from "@/components/ui/loading";

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  loadingText: string;
  setLoadingText: (text: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("טוען...");

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  if (isLoading) {
    return <Loading variant="default" text={loadingText} />;
  }

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading, loadingText, setLoadingText }}>
      {children}
    </LoadingContext.Provider>
  );
}
