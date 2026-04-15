import { usePathname } from "next/navigation";
import { useLoading } from "@/context/LoadingContext";

export const useNavigation = () => {
  const pathname = usePathname();
  const { startLoading } = useLoading();

  const handleNavigation = (
  e: React.MouseEvent,
  path: string,
  closeMenu?: () => void
) => {
  if (pathname === path) {
    e.preventDefault();

    if (closeMenu) closeMenu();

    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  startLoading(path);

  if (closeMenu) closeMenu();
};

  return { handleNavigation };
};
