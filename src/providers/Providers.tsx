"use client";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, Box } from "@mui/material";
import theme from "@/theme/theme";
import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalLoader from "@/components/layout/GlobalLoader";
import { LoadingProvider } from "@/context/LoadingContext";
type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <LoadingProvider>
        <GlobalLoader />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />

          <Box sx={{ flex: 1, pt: 10 }}>
            <Container maxWidth="lg">{children}</Container>
          </Box>

          <Footer />
        </Box>
      </LoadingProvider>
    </ThemeProvider>
  );
}