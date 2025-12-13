"use client";

import { Backdrop, CircularProgress, Box } from "@mui/material";
import { useLoading } from "@/context/LoadingContext";
import { LOCAL_URLS } from "@/constants/urls";

export default function GlobalLoader() {
  const { loading } = useLoading();

  return (
    <Backdrop
      open={loading}
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 9999,
        backdropFilter: "blur(3px)",
        backgroundColor: "rgba(0,0,0,0.45)",
      }}
    >
      <Box
        component="img"
        src={LOCAL_URLS.LOGO_ONLY}
        alt="Logo"
        height={30}
        sx={{
          display: "inline-block",
          position: { xs: "static", md: "absolute" },
        }}
      />
      <CircularProgress size={60} />
    </Backdrop>
  );
}
