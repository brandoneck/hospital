import { Link, MenuItem } from "@mui/material";
import { usePathname } from "next/navigation";
import { useNavigation } from "@/hooks/useNavigation";
import { BorderTop } from "@mui/icons-material";

const NavItem = ({
  page,
  isMobile = false,
}: {
  page: { label: string; path: string };
  isMobile?: boolean;
}) => {
  const pathname = usePathname();
  const { navigate } = useNavigation();

  const getMenuItemStyles = (path: string) => ({
    my: 2,
    color: pathname === path ? "primary.main" : "text.primary",
    fontWeight: pathname === path ? "bold" : "normal",
    borderBottom: pathname === path ? "2px solid" : "2px solid transparent",
    borderColor: pathname === path ? "primary.main" : "transparent",
    borderRadius: 0,
    transition: "border-color 0.2s ease, color 0.2s ease, transform 0.2s ease",

    "&:hover": {
      color: "primary.main",
      borderColor: "primary.main",
      transform: "translateY(-2px)",
      backgroundColor: "transparent",
    },
  });

  return (
    <Link
      href={page.path}
      style={{ textDecoration: "none" }}
      onClick={() => navigate(page.path)}
    >
      <MenuItem sx={!isMobile ? getMenuItemStyles(page.path) : {}}>
        {page.label}
      </MenuItem>
    </Link>
  );
};
export default NavItem;
