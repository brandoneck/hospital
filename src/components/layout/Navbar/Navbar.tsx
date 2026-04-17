"use client";

import { Box } from "@mui/material";
import { useLoading } from "@/context/LoadingContext";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import ContainerMui from "@mui/material/Container";
import { useState } from "react";
import NavItem from "@/components/layout/Navbar/NavItem";
import { useNavigation } from "@/hooks/useNavigation";

import { LOCAL_URLS } from "@/constants/urls";
import { ROUTES_MENU, ROUTES } from "@/constants/routes";

export default function Navbar() {
  const { startLoading } = useLoading();
  const { handleNavigation } = useNavigation();
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event: any) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleLogoClick = (e: React.MouseEvent) => {
    handleNavigation(e, ROUTES.INICIO, handleCloseNavMenu);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "common.white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3))",
      }}
    >
      <ContainerMui maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpenNavMenu} color="secondary">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              {ROUTES_MENU.map((page) => (
                <NavItem key={page.path} page={page} isMobile />
              ))}
            </Menu>
          </Box>

          {/* Logo */}
          <Link
            href={ROUTES.INICIO}
            onClick={(e) =>
              handleNavigation(e, ROUTES.INICIO, handleCloseNavMenu)
            }
          >
            <Box
              component="img"
              src={LOCAL_URLS.LOGO_GENERIC}
              alt="Logo"
              height={35}
              sx={{ cursor: "pointer" }}
            />
          </Link>

          {/* Desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {ROUTES_MENU.map((page) => (
              <NavItem key={page.path} page={page} />
            ))}
          </Box>
        </Toolbar>
      </ContainerMui>
    </AppBar>
  );
}
