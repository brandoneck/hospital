"use client";

import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import { CssBaseline, Container, Box } from "@mui/material";
import Footer from "@/components/layout/Footer";
import { LoadingProvider } from "@/context/LoadingContext";
import Navbar from "@/components/layout/Navbar";
import GlobalLoader from "@/components/layout/GlobalLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="es">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <LoadingProvider>
            <GlobalLoader />

            <Navbar />
            <Box sx={{ pt: 10 }}>
              <Container maxWidth="lg">{children}</Container>
            </Box>

            {/* Footer */}
            <Footer />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
