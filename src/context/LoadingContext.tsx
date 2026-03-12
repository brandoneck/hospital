"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

interface LoadingContextType {
  loading: boolean;
  redirect: (path: string) => void;
}

const LoadingContext = createContext<LoadingContextType | null>(null);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const redirect = (path: string) => {
    setLoading(true);

    setTimeout(() => {
      router.push(path);
    }, 50);
  };

  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ loading, redirect }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const ctx = useContext(LoadingContext);
  if (!ctx) throw new Error("useLoading must be used inside LoadingProvider");
  return ctx;
};
