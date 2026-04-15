import { Link, MenuItem } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useNavigation } from "@/hooks/useNavigation";
const NavItem = ({
  page,
  isMobile = false,
}: {
  page: { label: string; path: string };
  isMobile?: boolean;
}) => {
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const { handleNavigation } = useNavigation();

  const getMenuItemStyles = (path: string) => ({
    my: 2,
    color: pathname === path ? "primary.main" : "text.primary",
    fontWeight: pathname === path ? "bold" : "normal",
    borderBottom: pathname === path ? "2px solid" : "2px solid transparent",
    borderColor: pathname === path ? "primary.main" : "transparent",
    borderRadius: 0,
    transition: "border-color 0.3s ease, color 0.3s ease",
  });

  return (
    <Link
      href={page.path}
      style={{ textDecoration: "none" }}
      onClick={(e) => handleNavigation(e, page.path, handleCloseNavMenu)}
    >
      <MenuItem sx={!isMobile ? getMenuItemStyles(page.path) : {}}>
        {page.label}
      </MenuItem>
    </Link>
  );
};
export default NavItem;
