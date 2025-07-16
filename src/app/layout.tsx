"use client";

import "./globals.css";
import { CssBaseline, Container, Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import ContainerMui from "@mui/material/Container";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { LOCAL_URLS } from "../constants/urls";
import { ROUTES } from "../constants/routes";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleOpenNavMenu = (event: any) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <html lang="es">
      <body>
        <CssBaseline />

        {/* AppBar */}
        <AppBar
          position="fixed"
          sx={{ 
            backgroundColor: "white",             
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3))" 
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
                  {ROUTES.map((page) => (
                    <MenuItem
                      key={page.path}
                      onClick={() => {
                        router.push(page.path);
                        handleCloseNavMenu();
                      }}
                      selected={pathname === page.path}
                    >
                      {page.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Logo */}
              <Box
                component="img"
                src={LOCAL_URLS.LOGO_HORIZONTAL}
                alt="Logo"
                height={35}
                sx={{
                  marginRight: "8px",
                  display: "inline-block",
                  // position: { xs: "static", md: "absolute" },
                }}
              />

              {/* Desktop */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >
                {ROUTES.map((page) => (
                  <Button
                    key={page.path}
                    onClick={() => {
                      handleCloseNavMenu();
                      router.push(page.path);
                    }}
                    sx={{
                      my: 2,
                      color:
                        pathname === page.path
                          ? "primary.main"
                          : "text.primary",
                      fontWeight: pathname === page.path ? "bold" : "normal",
                      borderBottom:
                        pathname === page.path
                          ? "2px solid"
                          : "2px solid transparent",
                      borderColor:
                        pathname === page.path ? "primary.main" : "transparent",
                      borderRadius: 0,
                      transition: "border-color 0.3s ease, color 0.3s ease",
                    }}
                  >
                    {page.label}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </ContainerMui>
        </AppBar>

        {/* Espacio debajo del AppBar */}
        <Box sx={{ pt: 10 }}>
          <Container maxWidth="lg">{children}</Container>
        </Box>
      </body>
    </html>
  );
}
