'use client';

import './globals.css';
import { CssBaseline, Container, Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import ContainerMui from '@mui/material/Container';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from "next/image";


const pages = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Contacto', path: '/contacto' },
  { label: 'Especialidades', path: '/especialidades' },
  { label: 'Staff Médico', path: '/staff' },
];

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
          sx={{ backgroundColor: "white", boxShadow: 2 }}
        >
          <ContainerMui maxWidth="xl">
            <Toolbar disableGutters>
              <Image
                src="/logo_horizontal.png" // o logo.png
                alt="Logo"
                width={160}
                height={80}
                style={{ marginRight: "8px", display: "inline-block" }}
              />

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
                  {pages.map((page) => (
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
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".2rem",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>

              {/* Desktop */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >
                {pages.map((page) => (
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
