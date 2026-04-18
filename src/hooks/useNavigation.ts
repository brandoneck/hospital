"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLoading } from "@/context/LoadingContext";

export const useNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { startLoading } = useLoading();

  const navigate = (path: string, closeMenu?: () => void) => {
    if (pathname === path) {
      closeMenu?.();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    startLoading(path);
    closeMenu?.();

    router.push(path);
  };

  return { navigate };
};