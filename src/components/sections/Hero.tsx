"use client";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image"; // Si usas Next.js
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { useLoading } from "@/context/LoadingContext";
import { LOCAL_URLS } from "@/constants/urls";
import { hospitalInfo } from "@/data/hospitalData";

export default function Hero() {
  const router = useRouter();
  const { redirect } = useLoading();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f2f2f2",
          borderRadius: 2,
          p: 4,
          overflow: "hidden",
          mb: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: 400,
            position: "relative",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Image
            src={LOCAL_URLS.HOSPITAL_IMAGE}
            alt="Banner"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </Box>

        <Box
          sx={{ flex: 1, mt: 4, justifyItems: "center", textAlign: "center" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              msTextCombineHorizontal: 2,
              textAlign: "center",
              alignItems: "center",
            }}
          >
            {hospitalInfo.hero.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, textAlign: "center" }}>
            {hospitalInfo.hero.text}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => redirect(ROUTES.CONTACTO)}
          >
            {hospitalInfo.hero.actionLabel}
          </Button>
        </Box>
      </Box>
    </>
  );
}
