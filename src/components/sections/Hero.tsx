import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/constants/routes";
import { LOCAL_URLS } from "@/constants/urls";
import { hospitalInfo } from "@/data/hospitalData";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "static",
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          color: "white",
          px: 4,
          maxWidth: 900,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          {hospitalInfo.hero.title}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 4,
            opacity: 0.9,
          }}
        >
          {hospitalInfo.hero.text}
        </Typography>

        <Link href={ROUTES.CONTACTO}>
          <Button variant="contained" size="large">
            {hospitalInfo.hero.actionLabel}
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
